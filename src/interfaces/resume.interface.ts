export interface IResume {
    summary:     ISummary;
    employments: IEmployment[];
    education:   IEducation[];
    skillSet:    ISkillSet;
    references:  IReference[];
    projects:    IProject[];
}

export interface ISummary {
    name: string;
    title: string;
    description: string;
    education: string[];
}

export interface ILocation {
    address:     string;
    postalCode:  string;
    city:        string;
    countryCode: string;
    region:      string;
}

export interface IProfile {
    network:  string;
    username: string;
    url:      string;
}

export interface IEducation {
    institution: string;
    url:         string;
    area:        string;
    studyType:   string;
    startDate:   string;
    endDate:     string;
    score:       string;
    courses:     string[];
}

export interface IEmployment {
    company:    string;
    position:   string;
    location:   string;
    startDate:  string;
    endDate:    string;
    summary:    string;
    highlights: string[];
}

export interface IProject {
    pageBreak?:       boolean;
    name:             string;
    company:          string;
    startDate:        string;
    endDate:          string;
    description:      string;
    responsibilities: string[];
    technologies:     string[];
}

export interface IReference {
    name:      string;
    reference: string;
}

export type TValidHighlight = "Kubernetes" | "Redis" | "Spring"
export interface ISkillSet {
    highlights: TValidHighlight[];
    skills:     ISkill[];
}

export interface ISkill {
    name:     string;
    keywords: string[];
}
