import Box from "./box";
import { TValidHighlight } from '../interfaces/resume.interface';

const iconPath = process.env.PUBLIC_URL + "skillset/"
interface ISkillIconProps {
    title: string;
}
const SkillIcon = ({highlight}: {highlight: TValidHighlight}) => {
    return (
         <Box display="column" alignItems="flex-end" textAlign="center">
            <Box>
                <img height={56}
                    src={iconPath + highlight.toLowerCase().replace(/\s/g, '') + ".png" }
                />
            </Box>
            <Box><b>{highlight}</b></Box>
        </Box>
    );
};

export default SkillIcon;