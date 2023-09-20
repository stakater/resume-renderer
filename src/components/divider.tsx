import React from 'react';
import Box from "./box";

interface IDividerProps {
    title: string
}
const Divider = ({title}: IDividerProps) => {
    return (
        <Box position="relative" overflow="hidden" marginTop="10mm">
            <Box>
                <svg className="vL6BBg" viewBox="0 0 213.33333333333331 9.472489553669618">
                    <path className="SQ2ADw _682gpw"
                          d="M0,0L213.33333333333331,0L213.33333333333331,9.472489553669618L0,9.472489553669618L0,0"
                          fill="#f0cb31"></path>
                </svg>
            </Box>

            <Box display="flex" height="10mm" width="10mm" position="absolute" top={0} gridGap="1mm" alignItems="center">
                <Box className="divider-text" paddingLeft="10mm" paddingRight="10mm" minWidth="50mm" textTransform="capitalize">
                    {title}
                </Box>
                <Box height="13mm" borderLeft="solid 1.5mm white" transform="rotate(20deg) translateY(-1mm)"/>
                <Box height="13mm" borderLeft="solid 1.5mm white" transform="rotate(20deg) translateY(-1mm)"/>
                <Box height="13mm" borderLeft="solid 1.5mm white" transform="rotate(20deg) translateY(-1mm)"/>
            </Box>
        </Box>
    );
};

export default Divider;