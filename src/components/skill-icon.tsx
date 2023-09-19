import Box from "./box";

const iconPath = process.env.PUBLIC_URL + "skillset/"
interface ISkillIconProps {
    title: string;
}
const SkillIcon = ({title}: ISkillIconProps) => {
    return (
         <Box display="column" alignItems="flex-end" textAlign="center">
            <Box>
                <img height={56}
                    src={iconPath + title.toLowerCase().replace(/\s/g, '') + ".png" }
                />
            </Box>
            <Box><b>{title}</b></Box>
        </Box>
    );
};

export default SkillIcon;