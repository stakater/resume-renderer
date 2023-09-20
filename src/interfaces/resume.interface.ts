export interface IResume {
    summary:     ISummary;
    employments: Employment[];
    education:   Education[];
    skillSet:    SkillSet;
    references:  Reference[];
    projects:    Project[];
}

export interface ISummary {
    name: string;
    title: string;
    description: string;
    education: string[];
}

export interface Location {
    address:     string;
    postalCode:  string;
    city:        string;
    countryCode: string;
    region:      string;
}

export interface Profile {
    network:  string;
    username: string;
    url:      string;
}

export interface Education {
    institution: string;
    url:         string;
    area:        string;
    studyType:   string;
    startDate:   string;
    endDate:     string;
    score:       string;
    courses:     string[];
}

export interface Employment {
    name:       string;
    position:   string;
    startDate:  string;
    endDate:    string;
    summary:    string;
    highlights: string[];
}

export interface Project {
    name:             string;
    startDate:        string;
    endDate:          string;
    description:      string;
    responsibilities: string[];
    technologies:     string[];
}

export interface Reference {
    name:      string;
    reference: string;
}

export interface SkillSet {
    highlights: Highlight[];
    skills:     Skill[];
    frameworks: string[];
}

export interface Highlight {
    iconUrl: string;
    name:    string;
}

export interface Skill {
    name:     string;
    level:    string;
    keywords: string[];
}
