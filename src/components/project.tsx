import React from 'react';
import Box from "./box";
import { IProject } from "../interfaces/resume.interface";

const Project = ({project}: {project: IProject}) => {
    return (
        <Box margin = "5mm" marginLeft="15mm" marginRight="15mm">
            <Box>
                <h3>{project.name} - {project.company} <br/>{project.startDate} → {project.endDate}</h3>
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