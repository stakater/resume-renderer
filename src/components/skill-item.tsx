import React from 'react';
import Box from "./box";
import {STAKATER_COLORS} from "./colors.";

interface ISkillItemProps {
    title: string;
    items: string[]
}
const SkillItem = ({title, items}: ISkillItemProps) => {
    return (
        <Box display="flex" alignItems="stretch" border={`solid thin ${STAKATER_COLORS.yellow["0"]}`}>
            <Box display="flex" alignItems="center" padding="2.5mm 5mm" minWidth="30%" backgroundColor={STAKATER_COLORS.yellow["0"]}>
                <small>
                    <b>{title}</b>
                </small>
            </Box>

            <Box display="flex" alignItems="center" padding="3mm 5mm" textAlign="center">
                <small>{items.join(", ")}</small>
            </Box>
        </Box>
    );
};

export default SkillItem;
