import React from 'react';
import Box from "./box";
import {STAKATER_COLORS} from "./colors";

interface ISkillItemProps {
    title: string;
    items: string[]
}
const SkillItem = ({title, items}: ISkillItemProps) => {
    return (
        <Box display="flex" alignItems="stretch" border={`solid thin ${STAKATER_COLORS.yellow["0"]}`}>
            <Box display="flex" fontSize="8pt" alignItems="center"
                padding="2.5mm 5mm" width="33%" backgroundColor={STAKATER_COLORS.yellow["0"]}>
                <b>{title}</b>
            </Box>

            <Box display="flex" fontSize="8pt"  alignItems="center" width="66%"
                padding="3mm 5mm" textAlign="left">
                {items.join(", ")}
            </Box>
        </Box>
    );
};

export default SkillItem;
