import Box from "./box";
import { ISummary } from "../interfaces/resume.interface";

const Summary = ({summary}: {summary: ISummary}) => {
    return (
        <Box display="flex" width="100%" paddingTop="10mm">
            {/* First Box */}
            <Box display="inline-block" width="25%" paddingLeft="10mm" paddingRight="5mm">
                <img alt="" width="100%" src={process.env.PUBLIC_URL + "/persona-icon.png"}/>
            </Box>

            {/* Second Box */}
            <Box width="75%" paddingLeft="10mm" paddingRight="10mm">
                <Box textAlign="right">
                    <h2 className="clear-y">{summary.name}</h2>
                    <h6 className="clear-y">{summary.title}</h6>
                </Box>

                <Box paddingTop="5mm">
                    <i>
                    {summary.description}
                    </i>
                </Box>
                <Box paddingTop="5mm">
                    <Box><b>Education:</b></Box>
                    <Box>{summary.education.map(edu => <div>{edu}</div>)}</Box>
                </Box>
            </Box>
        </Box>
  );
};

export default Summary;