import React from 'react';
import Box from "./box";
import SkillItem from "./skill-item";
import SkillIcon from "./skill-icon";

const Skills = () => {
    return (
        <Box>
            <Box display="flex" alignItems="center" width="100%" padding="5mm" justifyContent="space-around">
                <SkillIcon title="Kubernetes"/>
                <SkillIcon title="Redis"/>
                <SkillIcon title="Spring"/>
            </Box>
            <Box display="flex" alignItems="stretch" justifyItems="space-evenly" padding="10mm" gridGap="5mm">
                <Box display="flex" flexDirection="column" width="50%" gridGap="1mm">
                    <SkillItem title="Language"
                               items={["Java", "JavaScript", "Typescript", "HTML & CSS", "Python"]}/>
                    <SkillItem title="DevOps"
                               items={["Jenkins", "Docker", "Kubernetes", "SonarQube", "Maven", "Tomcat", "Git"]}/>
                    <SkillItem title="Databases"
                               items={["Oracle", "MySQL", "Hbase", "Reddis", "Cassandra", "Amazon QLDB", "PostgreSql"]}/>
                </Box>

                <Box display="flex" width="50%">
                    <SkillItem title="Frameworks"
                               items={["Spring Boot", "Spring JPA", "Spring Security", "Spring LDAP", "Spring Quartz Scheduler", "Spring OpenFeign", "Hibernate", "Angular", "Hadoop",
                                   "Solr", "Clarabridge", "RabbitMQ", "Site-Minder SSO"]}/>
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;