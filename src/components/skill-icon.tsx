import { IHighlights } from "../interfaces/resume.interface";
import Box from "./box";

const SkillIcon = ({highlight}: {highlight: IHighlights}) => {
    return (
         <Box display="column" alignItems="flex-end" width="16%" textAlign="center">
            <Box>
                <img alt="" height={56}
                    src={highlight.iconUrl }
                />
            </Box>
            <Box><b>{highlight.name}</b></Box>
        </Box>
    );
};

export default SkillIcon;