import React, {ReactElement, useEffect, useMemo, useState} from 'react';
import { ErrorBoundary, useErrorBoundary } from "react-error-boundary";
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
import Certifications from './components/certifications';

const ProjectPart = {
	Summary: 0,
	Responsibilities: 1,
}

interface IProjectPart extends IProject {
  part: number;
}

const App = () => {
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
                {createPage(data, projects)}
            </div>
        </div>
    );
}
const ErrorFallback = () => {
  const { resetBoundary } = useErrorBoundary();

  return (
    <div role="alert" id="printableDiv" style={{padding: "10mm"}}>
      <p>Something went wrong! Check console for errors.</p>
      <button onClick={resetBoundary}>Try again</button>
    </div>
  );
}

const createPage = (data: IResume, projects: (IProjectPart[])[]) => {
    return (
        <div id="printableDiv">
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Page>
                    <Summary summary={data.summary} educationHeading={data.educationHeading}/>
                    {data.skillSet && <><Divider title={data.skillSetHeading || 'Skillset'}/>
                    <Skills skillSet={data.skillSet}/> </>}
                    {data.certifications?.length > 0  && 
                    <><Divider title={data.certificationsHeading || 'Certifications'}/>
                    <Certifications certifications={data.certifications}></Certifications></>
                    }
                    
                </Page>
                {projects.map(pages =>
                    <Page>
                        <Divider title={data.projectsHeading || 'Projects'} marginTop='0mm'/>
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
                {
                    data.employments?.length > 0 && (
                        <>
                            <Page>
                                <Divider title={data.employmentsHeading || 'Employments'} marginTop='0mm'/>
                                {data.employments.map(employment => <Employment employment={employment}/>)}
                            </Page>
                        </>
                    )
                };
            </ErrorBoundary>
        </div>
    )
}
export default App;
