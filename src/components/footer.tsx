import React from 'react';
import Box from "./box";

const Footer = () => {
    return (
        <Box className="footer" borderTop="solid thick #F0CB31" paddingBottom="3mm" paddingTop="3mm">
            <Box display="flex" justifyContent="space-around" width="100%">
                <Box display="flex" alignItems="center">
                    <img alt="" height={20} src={process.env.PUBLIC_URL + "/website.png"}/>&nbsp;&nbsp;&nbsp;<a href="https://stakater.com">https://stakater.com</a>
                </Box>
                <Box display="flex" alignItems="center">
                    <img alt="" height={20} src={process.env.PUBLIC_URL + "/linkedin.png"}/>&nbsp;&nbsp;&nbsp;<a href="https://linkedin.com/company/stakater">linkedin.com/company/stakater</a>
                </Box>
                <Box display="flex" alignItems="center">
                    <img alt="" height={20} src={process.env.PUBLIC_URL + "/github.png"}/>&nbsp;&nbsp;&nbsp;<a href="https://github.com/stakater">github.com/stakater</a>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;