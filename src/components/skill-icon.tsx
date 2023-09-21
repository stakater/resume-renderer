import Box from "./box";
import { TValidHighlight } from '../interfaces/resume.interface';

const iconPath = process.env.PUBLIC_URL + "skillset/"
const SkillIcon = ({highlight}: {highlight: TValidHighlight}) => {
    return (
         <Box display="column" alignItems="flex-end" width="16%" textAlign="center">
            <Box>
                <img alt="" height={56}
                    src={iconPath + highlight.toLowerCase().replace(/\s/g, '') + ".png" }
                />
            </Box>
            <Box><b>{highlight}</b></Box>
        </Box>
    );
};

export default SkillIcon;