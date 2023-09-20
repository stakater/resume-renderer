import React, {useEffect, useState} from 'react';
import './App.css';
import Page from "./components/page";
import Divider from "./components/divider";
import Summary from "./components/summary";
import Skills from "./components/skills";
import Project from "./components/project";
import Employment from "./components/employment";
import {marked} from 'marked';
import example from "./Example.md"
import DocumentContainer from "./mdx-generator/document-container";
import InfoEditor from './components/info-editor/InfoEditor';
import { testData } from './sample';
import { IResume } from './interfaces/resume.interface';

function App() {
    const [md, setMD] = useState<string>("");
    const [data, setData] = useState<IResume>(testData);

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

    return (
        <>
            {/* <DocumentContainer documentPath={example}/>
            <div dangerouslySetInnerHTML={{__html: marked.parse(md)}}/> */}
            <div style={{
                background: '#fff',
                padding: 20
            }}>
                <InfoEditor data={data} setData={setData}></InfoEditor>
            </div>
            <div>
                <Page>
                    {/* basicInfo={data.basics} */}
                    <Summary summary={data.summary}/>
                    <Divider title="skills"/>
                    <Skills skillSet={data.skillSet}/>
                </Page>

                <Page>
                    <Divider title="Projects"/>
                    <Project/>
                </Page>
                <Page>
                    <Divider title="Employments"/>
                    <Employment/>
                    <Employment/>
                    <Employment/>
                </Page>
            </div>
        </>
    );
}

export default App;
