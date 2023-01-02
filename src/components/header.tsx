import React from 'react';
import Box from "./box";

const Header = () => {
    return (
        <Box display="inline-flex" className="header">
            <Box display="inline-flex">
                <img height={42} src={process.env.PUBLIC_URL + "/logo.svg"}/>
            </Box>
        </Box>
    );
};

export default Header;