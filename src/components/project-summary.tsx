import React from 'react';
import Box from "./box";
import { IProject } from "../interfaces/resume.interface";

const ProjectSummary = ({project}: {project: IProject}) => {
    return (
        <Box marginLeft="10mm" marginRight="10mm" display='flex' justifyContent='space-between'>
            <Box display="flex" flexDirection='column'>
                 {/*
                <Box width="20mm" textAlign="center" height="10mm" border-radius="5px" background="linear-gradient(90deg, rgba(90,90,90,1) 0%, rgba(70,70,70,1) 35%, rgba(60,60,60,1) 100%)">
                    <img height="38mm"
                        src={ process.env.PUBLIC_URL + "logo192.png" }
                    />
                </Box>
                */}
                <Box display='flex' justifyContent='space-between' width="100%">
                    <h3>{project.name} {!project.companyLogoUrl && `- ${project.company}`} <br/>{project.startDate} → {project.endDate}</h3>
                </Box>
                <Box>
                {project.description}
            </Box>
            
            </Box>
            {project.companyLogoUrl && <Box marginBlock="1em" display='flex' alignItems='center' flexDirection='column'>
                        <img height="100px" src={project.companyLogoUrl} alt={project.company}/>
                        <h4>{project.company} </h4>
                    </Box>
}
            
        </Box>
    );
};

export default ProjectSummary;