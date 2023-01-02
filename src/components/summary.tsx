import React from 'react';
import Box from "./box";

const Summary = () => {
    return (
        <>
            <Box textAlign="right" paddingRight="10mm" paddingTop="10mm">
                <h1 className="clear-y">Employee Name</h1>
                <h6 className="clear-y">Employee Designation</h6>
            </Box>

            <Box paddingTop="10mm">
                <Box display="inline-block" backgroundColor="beige" width="15%" height="100%">

                </Box>

                <Box display="inline-block" paddingRight="10mm" width="85%">
                    <i>
                        Moatter is a passionate digital designer with more than 4 years of experience in the design
                        industry and a deep understanding of branding, social media marketing design, user
                        experience,
                        and user interface design. She has been taking on different design roles for the last four
                        years. Her technical background has always been a plus point in proving her to be a
                        versatile
                        team player and enhancing her work efficiency. Moatter is well-versed in multiple design
                        software with an in-depth understanding of user
                        research. She is a great problem solver with a strong work ethic and a humble attitude
                        toward
                        herself. Moatter keeps pushing her boundaries to achieve organizational goals while building
                        and
                        improving her own skillset.
                    </i>
                </Box>
            </Box>

        </>
    );
};

export default Summary;