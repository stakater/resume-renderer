import React from 'react';
import Box from "./box";
import SkillItem from "./skill-item";
import SkillIcon from "./skill-icon";
import { ISkillSet } from '../interfaces/resume.interface';

const Skills = ({skillSet}: {
    skillSet: ISkillSet
}) => {
    return (
        <Box>
            <Box display="flex" alignItems="center" width="100%" padding="5mm" justifyContent="space-around">
                {
                    skillSet.highlights.map(highlight => <SkillIcon highlight={highlight}/> )
                }
            </Box>
            <Box display="flex" alignItems="stretch" justifyItems="space-evenly" padding="10mm" gridGap="5mm">
                <Box display="flex" flexDirection="column" width="50%" gridGap="1mm">
                    {
                        skillSet.skills.filter((_,i) => i % 2 === 0).map(skill => (
                            <SkillItem key={skill.name} title={skill.name}
                               items={skill.keywords}/>
                        ))
                    }
                </Box>

                <Box display="flex" flexDirection="column" width="50%" gridGap="1mm">
                    {
                        skillSet.skills.filter((_,i) => i % 2 === 1).map(skill => (
                            <SkillItem key={skill.name} title={skill.name}
                               items={skill.keywords}/>
                        ))
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;