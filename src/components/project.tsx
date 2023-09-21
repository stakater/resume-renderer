import React from 'react';
import Box from "./box";
import { IProject } from "../interfaces/resume.interface";

const Project = ({project}: {project: IProject}) => {
    return (
        <Box margin = "5mm" marginLeft="15mm" marginRight="15mm">
            <Box display="flex" alignItems="center">
                 {/*
                <Box width="20mm" textAlign="center" height="10mm" border-radius="5px" background="linear-gradient(90deg, rgba(90,90,90,1) 0%, rgba(70,70,70,1) 35%, rgba(60,60,60,1) 100%)">
                    <img height="38mm"
                        src={ process.env.PUBLIC_URL + "logo192.png" }
                    />
                </Box>
                */}
                <Box paddingLeft="2mm">
                    <h3>{project.name} - {project.company} <br/>{project.startDate} → {project.endDate}</h3>
                </Box>
            </Box>
            <Box>
                {project.description}
            </Box>
            <Box>
                <h4>Responsibilities</h4>
                <ul>
                {project.responsibilities.map(resp => <li> {resp} </li>)}
                </ul>
            </Box>
            <Box>
                <h4>Technologies</h4>
                {project.technologies.join(", ")}
            </Box>
        </Box>
    );
};

export default Project;