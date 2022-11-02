export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  description: string;
  duration: string;
  borderBottom?: false;
  works: Array<string>;
}

export const workExperience: Array<WorkExperience> = [
  {
    company: "AltSchool Africa",
    location: " Kigali, Rwanda",
    role: "Frontend Engineer",
    description: `AltSchool Africa is an EdTech startup democratizing access to education for Africans
     (Raised over $1m pre-seed funding)`,
    duration: "October 2021 - Present",
    works: [
      "Developed and implemented front-end solutions for web applications using modern JavaScript frameworks (React, TypeScript & GraphQL).",
      "Defined technical direction: I maintained the standard of engineering excellence at AltSchool Africa and shape the technical vision for our front-end engineering stack (React, Next.js, TypeScript, GraphQL).",
      "Collaborated with the team to design new features and enhancements of existing systems.",
      "Created reusable components that can be used across multiple projects as well as optimized code for performance in large-scale applications.",
      "Used Git version control system to manage source code changes and collaborated with other developers on tasks when needed.",
      "Participated in team ceremonies including planning,product demonstrations, and team retrospectives",
      "Participated in architectural review meetings regarding application development practices and participated in technical discussions about implementation details of various features or fixes.",
      "Developed and launched a new we app, student dashboard and admin dashboard.",
    ],
  },

  {
    company: "TalentQL",
    location: "Texas, United State",
    role: "Software Frontend Engineer",
    description: `TalentQL is a global startup that enables start-ups, businesses,  and organizations to hire software engineers.
    (Techstars ‘21, raised over $400k pre-seed funding)`,
    duration: "April 2021 - Present",
    works: [
      "Created reusable React components that were easily testable and could be shared across projects ",
      "Collaborated with designer and other front-end developers on UI/UX best practices, resulting in improved user experience.",
      "Participated in code reviews with peers and manager to ensure that each increment adheres to original vision as described in the user story and all standard resource libraries and architecture patterns as appropriate.",
      "Led the frontend development of product features.",
      "Developed and Launched a new web app, as well as events websites.",
    ],
  },

  {
    company: "F&K Savings",
    location: "Ibadan, Nigeria",
    role: "Software Frontend Engineer",
    description: `F&K Savings is a fintech company that facilitates saving, investment, and wealth-building opportunities for every individual`,
    duration: "June 2020 - April 2021",
    works: [
      "Developed and maintained well responsive customer web dashboard using React, NextJs, and TypeScript",
      "Utilized Redux and Redux-Saga for state management across the components.",
      "Developed and launched new version of website using React, TypeScript, NextJs, styled-components, REST API and antd design",
      "Developed and launched new version of mobile app using React Native, TypeScript, NextJs, styled-components, REST API, and Redux-Saga",
    ],
  },

  {
    company: "DevCareer",
    location: "Africa",
    role: "Software Frontend Engineer",
    description: `Solve problems in Africa with Education & Tech” https://devcareer.io/ (DevCareer raised $100,000 / Grant from Deimos and 2 other investors)`,
    duration: "Contract (In-View)",
    works: [
      "Developed and built responsive user interfaces using React.js, HTML, and CSS.",
      "Utilized Redux for state management across React components.",
      "Worked with a team of developers to create an end-to-end e-commerce solution.",
    ],
  },

  {
    company: "Rasmed Publications",
    location: "Ibadan, Nigeria",
    role: "Web Developer",
    description: `Rasmed Publications is an award-winning publisher of progressive books in Nigeria. Publishing textbooks and special titles for schools and various sectors nationwide.`,
    duration: "January 2019 - August 2019",
    borderBottom: false,
    works: [
      "Improved the overall performance and SEO of the web app",
      "Built and launched an e-library system for the publication’s PDF and EPUB materials. ",
    ],
  },
];
