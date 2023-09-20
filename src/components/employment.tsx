import Box from "./box";
import { Z_VERSION_ERROR } from 'zlib';
import { IEmployment} from "../interfaces/resume.interface";

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

const Employment = ({employment}: {employment: IEmployment}) => {
    return (
        <Box margin = "5mm" marginLeft="15mm" marginRight="15mm">
            <Box>
                <h4>{employment.position} - {employment.company}<br/>{employment.location}<br/>{employment.startDate} → {employment.endDate}</h4>
            </Box>
            <Box>
                <ul>
                <li> {employment.summary} </li>
                </ul>
            </Box>
        </Box>
    );
};


export default Employment;