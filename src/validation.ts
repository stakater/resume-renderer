import { IResume } from "./interfaces/resume.interface";

export const validationData: IResume = {
  certificationsHeading: '',
  educationHeading: '',
  employmentsHeading: '',
  projectsHeading: '',
  skillSetHeading: '',
  "summary": {
    paddingTop: "10mm",
    name: "Moatter",
    title: "Digial designer",
    description:`Moatter is a passionate digital designer with more than 4 years of experience in the design
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
      "startPageBreak": false,
      "company": "Nortical",
      "position": "Cloud Engineer",
      "location": "Gothenborg",
      "startDate": "May 2019",
      "endDate": "Jun 2022",
      "summary": "Description… Yes did some stuff!",
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
        name: 'Kubernatics',
        iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1rfXhgf5qLtuZacQ8H5Gk1TfR7l21TQpUtwm5LXXGjw&s'
      }
    ],
    "skills": [
      {
        "name": "DevOps",
        "keywords": [
          "Jenkins", "Docker", "Kubernetes","SonarQube", "Maven", "Tomcat", "Git"
        ]
      },
      {
        "name": "Web",
        "keywords": [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      },
      {
        "name": "Databases",
        "keywords": [
          "Oracle", "MySQL", "Hbase", "Reddis", "Cassandra", "Amazon QLDB", "PostgreSql"
        ]
      },
      {
        "name": "Frameworks",
        "keywords": [
          "Spring Boot", "Spring JPA", "Spring Security", "Spring LDAP",
          "Spring Quartz Scheduler", "Hibernate", "Angular", "Hadoop", "Solr",
          "Clarabridge", "RabbitMQ", "SiteMinder SSO"
        ],
      }
    ],
  },
  "references": [
    {
      "name": "Jane Doe",
      "reference": "Reference…"
    }
  ],
  "projects": [
    {
      "startPageBreak": false,
      "middlePageBreak": false,
      "companyLogoUrl": "https://chargebase.co.uk/wp-content/uploads/2020/04/volvo.png",
      "name": "Headlight Engineer Project",
      "company": "Volvo",
      "startDate": "Jan 2019",
      "endDate": "Feb 2020",
      "description": "Description...",
      "responsibilities": [
        "Won award at AIHacks 2016"
      ],
      "technologies": [
        "c#"
      ]
    },
    {
      "startPageBreak": false,
      "middlePageBreak": false,
      "name": "Wheel Engineer Project",
      "companyLogoUrl": "https://swedspot.com/wp-content/uploads/2021/12/scania-5-logo-png-transparent.png",
      "company": "Scania",
      "startDate": "Mar 2020",
      "endDate": "Nov 2022",
      "description": `As a founding engineer, designed and implemented the majority of infrastructure
and services, focusing on efficient data pipelines, deterministic builds, and CI/CD
workflows. Collaborated closely with analytics and technical teams, ensuring smooth
operation and integrations
      `,
      "responsibilities": ["Designing a robust CI/CD workflow with GitHub Actions, Terraform, and Nix, utilizing Git for version control.",
        "Building a routing layer using the Cloudflare serverless stack",
        "Architecting efficient data pipelines on Google Cloud using TypeScript, Go, Elixir, and Python."
      ],
      "technologies": [
        "TypeScript", "Go", "Elixir", "Python", "Shell scripting",
        "Nix", "CI/CD", "Terraform", "Git", "Google Cloud",
      ],
    }
  ],
  certifications: [
    {
      name: 'Test',
      link: '',
      linkDisplayText: '',
      organizationName: '',
      certificateId: ''
    }
  ]
};