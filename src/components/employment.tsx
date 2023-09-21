import Box from "./box";
import { IEmployment} from "../interfaces/resume.interface";

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