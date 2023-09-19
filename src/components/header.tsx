import React from 'react';
import Box from "./box";

const Header = () => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" className="header">
            {/* Logo aligned to the far left */}
            <Box display="inline-flex">
                <img height={56} src={process.env.PUBLIC_URL + "/logo.svg"} alt="Logo"/>
            </Box>

            {/* Group for address and phone number aligned to the far right */}
            <Box display="flex" alignItems="start" fontSize="0.7em" lineHeight="1.5">
                <Box flexDirection="column" marginRight={20}>
                    <Box><b>Address</b></Box>
                    <Box>Mäster Samuelsgatan 36,</Box>
                    <Box>111 57 Stockholm, Sweden</Box>
                </Box>

                <Box flexDirection="column">
                    <Box><b>Contact</b></Box>
                    <Box>+46(0)739-458753</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;