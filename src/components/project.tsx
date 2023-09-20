import React from 'react';
import Box from "./box";
import { IProject } from "../interfaces/resume.interface";

const Project = ({project}: {project: IProject}) => {
    return (
        <Box margin = "5mm" marginLeft="15mm" marginRight="15mm">
            <Box padding='0mm' textAlign='left'>
                <h2>{project.company}</h2>
            </Box>
            <Box>
                <h4>{project.name}<br/>{project.startDate} → {project.endDate}</h4>
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