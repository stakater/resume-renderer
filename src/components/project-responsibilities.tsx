import React from 'react';
import Box from "./box";
import { IProject } from "../interfaces/resume.interface";

const ProjectResponsibilities = ({project}: {project: IProject}) => {
    return (
        <Box margin = "5mm" marginLeft="15mm" marginRight="15mm">
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

export default ProjectResponsibilities;