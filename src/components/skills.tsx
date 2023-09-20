import React from 'react';
import Box from "./box";
import SkillItem from "./skill-item";
import SkillIcon from "./skill-icon";
import { Skill, SkillSet } from '../interfaces/resume.interface';

const Skills = ({skillSet}: {
    skillSet: SkillSet
}) => {
    return (
        <Box>
            <Box display="flex" alignItems="center" width="100%" padding="5mm" justifyContent="space-around">
                <SkillIcon title="Kubernetes"/>
                <SkillIcon title="Redis"/>
                <SkillIcon title="Spring"/>
            </Box>
            <Box display="flex" alignItems="stretch" justifyItems="space-evenly" padding="10mm" gridGap="5mm">
                <Box display="flex" flexDirection="column" width="50%" gridGap="1mm">
                    {
                        skillSet.skills.filter(skill => skill.name.toLowerCase() !== 'frameworks').map(skill => (
                            <SkillItem key={skill.name} title={skill.name}
                               items={skill.keywords}/>
                        ))
                    }
                </Box>

                <Box display="flex" width="50%">
                    {skillSet.frameworks &&
                    <SkillItem title="Frameworks"
                               items={skillSet.frameworks}/>}
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;