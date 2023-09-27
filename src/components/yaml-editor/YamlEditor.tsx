import React, { useState } from "react";
import AceEditor from "react-ace";
import { validationData } from '../../validation';
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";
import yaml from "js-yaml";

const YAMLEditor: React.FC<any> = ({ initialJSON, yamlChange }: any) => {
  const [yamlText, setYamlText] = useState<string>(yaml.dump(initialJSON));
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        const fileContent = e.target?.result;
        handleEditorChange(fileContent as string);
      };
      reader.readAsText(file);
    }
  };

  const checkContainsKeys = (input: any, validationInput: any, searchKey: string) => {
    // If input type is a string, number, etc (not a object), skip it
    if (typeof(validationInput) !== "object")
      return
    Object.keys(validationInput)
        // Each of these keys should exist in the input
        .map(key => {
          // If property in input is a list, each element must be checked
          if (Array.isArray(input[key])) {
            input[key].forEach( (subInput: any, index: number) =>
              checkContainsKeys(subInput, validationInput[key][0], `${searchKey}/${key}-${index}`)
            )
          // Recursively check properties in property(object) of key
          } else if (typeof(input[key]) === "object") {
            checkContainsKeys(input[key], validationInput[key], key)
          }
          return key
        })
        .filter(key => typeof(input[key]) === "undefined")
        .forEach(key => {
          const typing = Array.isArray(validationInput[key]) ?
              "array" : typeof(validationInput[key])
          throw new Error(`Property "${searchKey}" is missing: "${key}"(${typing}). If not wanted, please add empty field.`)
        });
  }

  const handleEditorChange = (newYamlText: string) => {
    setYamlText(newYamlText);
    try {
      const newJsonData = yaml.load(newYamlText);
      if (newJsonData && typeof newJsonData === 'object') {
        checkContainsKeys(newJsonData, validationData, "")
        setError(null);
        yamlChange(newJsonData);
      } else {
        throw new Error("Invalid YAML format");
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const downloadYAML = () => {
    if (!error) {
      const element = document.createElement("a");
      const file = new Blob([yamlText], { type: "text/yaml" });
      element.href = URL.createObjectURL(file);
      element.download = "data.yaml";
      document.body.appendChild(element);
      element.click();
    }
  };

  return (
    <>
      <AceEditor
      style={
        {
          width: '100%',
          marginBlock: 20,
          height: 'calc(100vh - 120px)',
        }
      }
      setOptions={{ useWorker: false }}
        mode="yaml"
        theme="github"
        value={yamlText}
        onChange={handleEditorChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <input type="file" onChange={handleFileUpload} accept=".yaml, .yml" />
      <button onClick={downloadYAML} disabled={!!error}>Download YAML</button>
    </>
  );
};

export default YAMLEditor;
