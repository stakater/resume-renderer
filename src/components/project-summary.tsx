import React from 'react';
import Box from "./box";
import '../App.css';
import { IProject } from "../interfaces/resume.interface";

const ProjectSummary = ({project}: {project: IProject}) => {
    return (
        <Box marginInline="10mm">
            <Box display="flex" alignItems="center">
                <Box display="flex" textAlign="center" justifyContent="center"
                    width="20mm" padding="0.7mm"  height="10mm" borderRadius="5px"
                    background="linear-gradient(90deg, rgba(90,90,90,1) 0%, rgba(70,70,70,1) 35%, rgba(60,60,60,1) 100%)">

                    {project.companyLogoUrl && <img style={{ maxWidth: "16mm", objectFit: "contain", maxHeight: "32mm", width: "auto", height: "auto"  }}
                        src={ project.companyLogoUrl } alt={ project.companyLogoUrl }/>
                    }
                </Box>
                <Box paddingLeft="2mm">
                    <h3>{`${project.name} - ${project.company}`} <br/>{project.startDate} { project.endDate ? `→ ${project.endDate}` : ""} </h3>
                </Box>
            </Box>
            <Box>
                {project.description}
            </Box>
        </Box>
    );
};

export default ProjectSummary;