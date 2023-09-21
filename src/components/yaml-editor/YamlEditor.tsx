import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-yaml";
import "ace-builds/src-noconflict/theme-github";
import yaml from "js-yaml";



const YAMLEditor: React.FC<any> = ({ initialJSON, yamlChange }: any) => {
  const [yamlText, setYamlText] = useState<string>(yaml.dump(initialJSON));
  const [originalKeys, ] = useState<string[]>(Object.keys(initialJSON));
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

  const handleEditorChange = (newYamlText: string) => {
    setYamlText(newYamlText);
    try {
      const newJsonData = yaml.load(newYamlText);
      if (newJsonData && typeof newJsonData === 'object') {
        const newKeys = Object.keys(newJsonData);

        if (!newKeys.every((key) => originalKeys.includes(key))) {
          throw new Error("Keys cannot be edited!");
        }
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
          marginBlock: 20
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
