import Box from "./box";

const Summary = () => {
    return (
        <Box display="flex" width="100%">
            {/* First Box */}
            <Box display="inline-block" width="25%" paddingLeft="10mm" paddingRight="5mm">
                <img width="100%" src={process.env.PUBLIC_URL + "/persona-icon.png"}/>
            </Box>

            {/* Second Box */}
            <Box width="75%" paddingLeft="10mm">
                <Box textAlign="right" paddingRight="10mm" paddingTop="10mm">
                    <h3 className="clear-y">Moatter</h3>
                    <h6 className="clear-y">Digial designer</h6>
                </Box>

                <Box paddingRight="10mm">
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
        </Box>
  );
};

export default Summary;