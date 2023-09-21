import React, {useEffect, useMemo, useState} from 'react';
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
    const projects = useMemo(() => {
        const output = [];
        let temp: any[] = [];
        if(data.projects)
        data.projects.forEach(item => {
            if(item.pageBreak) {
                if(temp.length > 0) {
                    output.push(temp);
                    temp = [];
                }
                output.push([item]);
            } else {
                temp.push(item);
            }
        });

    if(temp.length > 0) {
        output.push(temp);
    }
    console.log(output)
    return output;
    }, [data.projects])

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
            <div style={{
                background: '#fff',
                padding: 20,
                flexGrow: 1,
                height: '100vh',
                overflowX: 'auto',
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
                    <Divider title="Skillset"/>
                    <Skills skillSet={data.skillSet}/>
                </Page>
                {projects.map(pages =>
                    <Page>
                        <Divider title="Projects"/>
                        {pages.map((project)=><Project project={project}/>)}
                    </Page>
                )}
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
