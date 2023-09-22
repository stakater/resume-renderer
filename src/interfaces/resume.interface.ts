export interface IResume {
    certificationsHeading?: string;
    skillSetHeading?: string;
    educationHeading?: string;
    employmentsHeading?: string;
    projectsHeading?: string;
    summary:     ISummary;
    employments: IEmployment[];
    education:   IEducation[];
    skillSet:    ISkillSet;
    references:  IReference[];
    projects:    IProject[];
    certifications: ICertificate[];
}

export interface ISummary {
    name: string;
    title: string;
    description: string;
    education: string[];
}

export interface ICertificate {
    name: string;
      link?: string;
      organizationName?: string;
      linkDisplayText?: string;
      certificateId?:string;
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
    startPageBreak?:  boolean;
    middlePageBreak?: boolean;
    name:             string;
    company:          string;
    companyLogoUrl?:  string;
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

export interface ISkillSet {
    highlights: IHighlights[];
    skills:     ISkill[];
}

export interface IHighlights {
    name: string,
    iconUrl: string,
}

export interface ISkill {
    name:     string;
    keywords: string[];
}
