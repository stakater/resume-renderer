import React, {useEffect, useMemo, useState} from 'react';
import './App.css';
import Page from "./components/page";
import Divider from "./components/divider";
import Summary from "./components/summary";
import Skills from "./components/skills";
import ProjectSummary from "./components/project-summary";
import ProjectResponsibilities from "./components/project-responsibilities";
import Employment from "./components/employment";
import {marked} from 'marked';
import example from "./Example.md";
import { testData } from './sample';
import { IResume, IProject } from './interfaces/resume.interface';
import YAMLEditor from './components/yaml-editor/YamlEditor';
import InfoEditor from './components/info-editor/InfoEditor';

const ProjectPart = {
	Summary: 0,
	Responsibilities: 1,
}

interface IProjectPart extends IProject {
  part: number;
}

function App() {
    const [, setMD] = useState<string>("");
    const [data, setData] = useState<IResume>(testData);
    const [showYaml, setShowYaml] = useState<boolean>(false);
    const projects = useMemo(() => {
        const formattedProjects: (IProjectPart[])[] = [];
        let currentBatch: IProjectPart[] = [];

        const pushBatchToOutput = () => {
            if (currentBatch.length > 0) {
                formattedProjects.push(currentBatch);
                currentBatch = [];
            }
        };

        if(data.projects) {
            data.projects.forEach(project => {
                const projectSum = {...project, part: ProjectPart.Summary}
                const projectResp = {...project, part: ProjectPart.Responsibilities}
                if(project.startPageBreak) {
                    pushBatchToOutput()
                }
                currentBatch.push(projectSum);

                if(project.middlePageBreak) {
                    pushBatchToOutput()
                }
                currentBatch.push(projectResp);
            });
        }
        pushBatchToOutput()
        return formattedProjects;
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
                        {pages.map((project)=>
                            <>
                            {project.part === ProjectPart.Summary ?
                                <ProjectSummary project={project}/> :
                                <ProjectResponsibilities project={project}/>
                            }
                            </>
                        )}
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
