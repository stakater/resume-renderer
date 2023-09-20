import Box from "./box";
import { Z_VERSION_ERROR } from 'zlib';

interface IEmploymentProps {
    title: string;
    company: string;
    location: string;
    period: string; // Format Jun 2020 → May 2023
    description: string;
}

const exampleEmployment: IEmploymentProps = {
    title: "Cloud Engineer",
    company: "Nortical",
    location: "Mölndal",
    period: "Jun 2020 → May 2023",
    description: `
Cloud engineering with development
with transmission and storage
optimization; designing infrastructures
and data pipelines.
    `
}

const Employment = () => {
    const employment = exampleEmployment
    return (
        <Box margin = "5mm" marginLeft="15mm" marginRight="15mm">
            <Box>
                <h4>{employment.title} - {employment.company}<br/>{employment.location}<br/>{employment.period}</h4>
            </Box>
            <Box>
                {employment.description}
            </Box>
            <Box>
                <h4>Responsibilities</h4>
                <ul>
                <li> {employment.description} </li>
                </ul>
            </Box>
        </Box>
    );
};


export default Employment;