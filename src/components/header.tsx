import React, {useContext} from 'react';
import Box from "./box";
import {ResumeContext} from "../resume-context";

const Header = () => {
    const {editorData} = useContext(ResumeContext)
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center" className="header">
            {/* Logo aligned to the far left */}
            <Box display="inline-flex">
                <img height={30} src={process.env.PUBLIC_URL + "/logo.svg"} alt="Logo"/>
            </Box>

            {/* Group for address and phone number aligned to the far right */}
            <Box display="flex" alignItems="start" fontSize="0.7em" lineHeight="1.5">
                <Box flexDirection="column" marginRight={20}>
                    <Box><b>Address</b></Box>
                    <pre style={{margin: 0}}>{editorData.companyAddress}</pre>
                </Box>

                <Box flexDirection="column">
                    <Box><b>Contact</b></Box>
                    <Box>{editorData.contactPhoneNumber}</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
