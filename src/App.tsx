import React, {useEffect, useState} from 'react';
import './App.css';
import Page from "./components/page";
import Divider from "./components/divider";
import Summary from "./components/summary";
import Skills from "./components/skills";
import {marked} from 'marked';
import example from "./Example.md"

function App() {
    const [md, setMD] = useState<string>("");

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
            <div dangerouslySetInnerHTML={{__html: marked.parse(md)}}/>
            <Page>
                <Summary/>
                <Divider title="skills"/>
                <Skills/>
            </Page>

            <Page>
                <h1>2</h1>
            </Page>
        </>
    );
}

export default App;
