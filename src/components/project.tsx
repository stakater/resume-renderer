import React from 'react';
import Box from "./box";

interface IProjectProps {
    company: string;
    title: string;
    period: string; // Format Jun 2020 → May 2023
    description: string;
    responsibilities: string[];
    technologies: string[];
}

const exampleProject: IProjectProps = {
    company: "Nortical",
    title: "Founding Engineer Project",
    period: "Jun 2020 → May 2023",
    description: `
As a founding engineer, designed and
implemented the majority of infrastructure and
services, focusing on efficient data pipelines,
deterministic builds, and CI/CD workflows.
Collaborated closely with analytics and
technical teams, ensuring smooth operation
and integrations
    `,
    responsibilities: [
        "Designing a robust CI/CD workflow with GitHub Actions, Terraform, and Nix, utilizing Git for version control.",
        "Building a routing layer using the Cloudflare serverless stack",
        "Architecting efficient data pipelines on Google Cloud using TypeScript, Go, Elixir, and Python."
    ],
    technologies: [
        "TypeScript", "Go", "Elixir", "Python", "Shell scripting",
        "Nix", "CI/CD", "Terraform", "Git", "Google Cloud",
    ],
}

const Project = () => {
    const project = exampleProject
    return (
        <Box margin = "5mm" marginLeft="15mm" marginRight="15mm">
            <Box padding='5mm' textAlign='center' borderWidth='1' borderRadius='25px' borderStyle='solid' borderColor='#f0cb31'>
                <h2>{project.company}</h2>
            </Box>
            <Box>
                <h4>{project.title}<br/>{project.period}</h4>
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