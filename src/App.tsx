import React from 'react';
import './App.css';
import Page from "./components/page";
import Divider from "./components/divider";
import Summary from "./components/summary";
import Skills from "./components/skills";

function App() {
    return (
        <>
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
