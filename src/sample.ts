import { IResume } from "./interfaces/resume.interface";

export const testData: IResume = {
  "summary": {
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
},
  "employments": [
    {
      "name": "Company",
      "position": "President",
      "startDate": "2013-01-01",
      "endDate": "2014-01-01",
      "summary": "Description…",
      "highlights": [
        "Started the company"
      ]
    }
  ],
  "education": [
    {
      "institution": "University",
      "url": "https://institution.com/",
      "area": "Software Development",
      "studyType": "Bachelor",
      "startDate": "2011-01-01",
      "endDate": "2013-01-01",
      "score": "4.0",
      "courses": [
        "DB1101 - Basic SQL"
      ]
    }
  ],
  "skillSet": {
    "highlights": [
      {
        "iconUrl": "",
        "name": ""
      }
    ],
    "skills": [
      {
        "name": "Web Development",
        "level": "Master",
        "keywords": [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      }
    ],
    "frameworks": ["test1"],
  },
  "references": [
    {
      "name": "Jane Doe",
      "reference": "Reference…"
    }
  ],
  "projects": [
    {
      "name": "Project",
      "startDate": "2019-01-01",
      "endDate": "2021-01-01",
      "description": "Description...",
      "responsibilities": [
        "Won award at AIHacks 2016"
      ],
      "technologies": [
        "c#"
      ]
    }
  ]
};