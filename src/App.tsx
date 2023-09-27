import { useEffect, useMemo, useState} from 'react';
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
import { validationData } from './validation';
import { IResume, IProject, IEmployment } from './interfaces/resume.interface';
import YAMLEditor from './components/yaml-editor/YamlEditor';
import InfoEditor from './components/info-editor/InfoEditor';
import Certifications from './components/certifications';

const ProjectPart = {
	Summary: 0,
	Responsibilities: 1,
}

interface IPagePart {
  divider?: string;
  project?: IProjectPart;
  employment?: IEmployment;
}

interface IProjectPart extends IProject {
  part: number;
}

const App = () => {
    const [, setMD] = useState<string>("");
    const [data, setData] = useState<IResume>(validationData);
    const [showYaml, setShowYaml] = useState<boolean>(false);

    const pushBatchToList = (batch: IPagePart[], batchList: (IPagePart[])[]): (IPagePart[])[] => {
        if (batch.length > 0) {
            return [...batchList, batch]
        } else {
            return batchList
        }
    };

    // Logic to build pages containing projects, employments, and dividers
    const pages = useMemo(() => {
        let formattedPages: (IPagePart[])[] = [];
        let currentBatch: IPagePart[] = [];
        const projectsHeading = data.projectsHeading || 'Projects'
        const employmentsHeading = data.employmentsHeading || 'Employments'

        if(data.projects) {
            currentBatch.push({ divider: projectsHeading });
            data.projects.forEach(project => {
                // There can be page breaks in the middle of a project,
                // so the two parts are handles separetly.
                const projectSum = {...project, part: ProjectPart.Summary}
                const projectResp = {...project, part: ProjectPart.Responsibilities}
                if(project.startPageBreak) {
                    formattedPages = pushBatchToList(currentBatch, formattedPages)
                    currentBatch = [{ divider: projectsHeading }]
                }
                currentBatch.push({ project: projectSum });

                if(project.middlePageBreak) {
                    formattedPages = pushBatchToList(currentBatch, formattedPages)
                    currentBatch = [{ divider: projectsHeading }]
                }
                currentBatch.push({ project: projectResp });
            });
        }
        // If the first employment is on same page, insert divider mid page
        if (data.employments.length > 0 && !data.employments[0].startPageBreak) {
            currentBatch.push({ divider: employmentsHeading });
        }
        if(data.employments) {
            data.employments.forEach(employment => {
                if(employment.startPageBreak) {
                    formattedPages = pushBatchToList(currentBatch, formattedPages)
                    currentBatch = [{ divider: employmentsHeading }]
                }
                currentBatch.push({ employment: employment });
            });
        }
        return pushBatchToList(currentBatch, formattedPages);
    }, [data.projects, data.employments, data.projectsHeading, data.employmentsHeading])

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
                {createPage(data, pages)}
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

const createPage = (data: IResume, pages: (IPagePart[])[]) => {
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
                {pages.map(page =>
                    <Page>
                        {page.map((part)=>
                            <>
                            { part.divider ? <Divider title={part.divider} marginTop='0mm'/> : "" }
                            { part.project ?  (part.project.part === ProjectPart.Summary ?
                                <ProjectSummary project={part.project}/> :
                                <ProjectResponsibilities project={part.project}/> ): ""}
                            { part.employment ? <Employment employment={part.employment}/> : "" }
                            </>
                        )}
                    </Page>
                )}
            </ErrorBoundary>
        </div>
    )
}
export default App;
