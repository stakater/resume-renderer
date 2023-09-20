import React, {useEffect, useState} from 'react';
import './App.css';
import Page from "./components/page";
import Divider from "./components/divider";
import Summary from "./components/summary";
import Skills from "./components/skills";
import Project from "./components/project";
import Employment from "./components/employment";
import {marked} from 'marked';
import example from "./Example.md";
import { testData } from './sample';
import { IResume } from './interfaces/resume.interface';
import YAMLEditor from './components/yaml-editor/YamlEditor';
import InfoEditor from './components/info-editor/InfoEditor';

function App() {
    const [md, setMD] = useState<string>("");
    const [data, setData] = useState<IResume>(testData);
    const [showYaml, setShowYaml] = useState<boolean>(false);

    useEffect(() => {
        fetch(example)
            .then((response) => response.text())
            .then((text) => {
                setMD(text);
            });
    }, []);


    marked.use({
        pedantic: false,
        gfm: true,
        breaks: true,
        sanitize: true,
        smartypants: false,
        xhtml: false
    });
    const yamlChange = (newData: any)=> {
        setData({...newData});
    }

    return (
        <div style={{
            display: 'flex',
            gap: 20
        }}>
            {/* <DocumentContainer documentPath={example}/>
            <div dangerouslySetInnerHTML={{__html: marked.parse(md)}}/> */}
            <div style={{
                background: '#fff',
                padding: 20,
                flexGrow: 1
            }}>
                <button onClick={() => setShowYaml(pre => !pre)}>Show {showYaml? 'Editor view': 'Yaml View'}</button>
                {!showYaml && <InfoEditor data={data} setData={setData}></InfoEditor>}
                {showYaml && <YAMLEditor initialJSON={data} yamlChange={yamlChange}></YAMLEditor>}
            </div>
            <div style={{
                height: '100vh',
                overflowX: 'auto'
            }}>
                <div id="printableDiv">
                <Page>
                    <Summary summary={data.summary}/>
                    <Divider title="skills"/>
                    <Skills skillSet={data.skillSet}/>
                </Page>

                <Page>
                    <Divider title="Projects"/>
                    {data.projects.map(project => <Project project={project}/>)}
                </Page>
                <Page>
                    <Divider title="Employments"/>
                    {data.employments.map(employment => <Employment employment={employment}/>)}
                </Page>
                </div>
            </div>
        </div>
    );
}

export default App;
