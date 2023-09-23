import Box from "./box";
import { IEmployment} from "../interfaces/resume.interface";

const Employment = ({employment}: {employment: IEmployment}) => {
    return (
        <Box marginInline="10mm">
            <Box>
                <h3>{employment.position} - {employment.company}<br/>{employment.location}<br/>{employment.startDate} → {employment.endDate}</h3>
            </Box>
            <Box>
                {employment.summary} 
                <ul>
                {employment.highlights.map(highlight => <li> {highlight} </li>)}
                </ul>
            </Box>
        </Box>
    );
};


export default Employment;