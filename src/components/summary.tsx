import { CastForEducation } from "@material-ui/icons";
import Box from "./box";

interface ISummaryProps {
    name: string;
    title: string;
    description: string;
    education: string[];
}

const exampleSummary: ISummaryProps = {
    name: "Moatter",
    title: "Digial designer",
    description:`
Moatter is a passionate digital designer with more than 4 years of experience in the design
industry and a deep understanding of branding, social media marketing design, user
experience,
and user interface design. She has been taking on different design roles for the last four
years. Her technical background has always been a plus point in proving her to be a
versatile
team player and enhancing her work efficiency. Moatter is well-versed in multiple design
software with an in-depth understanding of user
research.
    `,
    education: ["Bachelor degree in Software Design at Chalmers University","Master degree in AI design at Chalmers University"]
}

const Summary = () => {
    const summary = exampleSummary
    return (
        <Box display="flex" width="100%" paddingTop="10mm">
            {/* First Box */}
            <Box display="inline-block" width="25%" paddingLeft="10mm" paddingRight="5mm">
                <img width="100%" src={process.env.PUBLIC_URL + "/persona-icon.png"}/>
            </Box>

            {/* Second Box */}
            <Box width="75%" paddingLeft="10mm" paddingRight="10mm">
                <Box textAlign="right">
                    <h3 className="clear-y">{summary.name}</h3>
                    <h6 className="clear-y">{summary.title}</h6>
                </Box>

                <Box paddingTop="5mm">
                    <i>
                    {summary.description}
                    </i>
                </Box>
                <Box paddingTop="5mm">
                    <Box><b>Education:</b></Box>
                    <Box>{summary.education.map(edu => <div>{edu}</div>)}</Box>
                </Box>
            </Box>
        </Box>
  );
};

export default Summary;