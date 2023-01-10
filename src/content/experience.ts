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
    description: `AltSchool is a tech school for individuals looking to gain technical skills and kickstart a career in Software Engineering. AltSchool Africa takes a non-traditional approach to learning by teaching courses directly connected with the selected track.
`,
    duration: "October 2021 - Present",
    works: [
      "Developed and launched client sides of new web application, student dashboard and admin dashboard.",
      "Created a platform to onboard students and instructors and handle tuition payments effectively that processed over 50k local and international payments.",
      "Led the architectural review meetings regarding application development practices and technical discussions about implementation details of various features or fixes.",
    ],
  },

  {
    company: "TalentQL",
    location: "Texas, United State",
    role: "Software Frontend Engineer",
    description: `TalentQL helps companies build top-tier teams by hiring, developing and managing tech talent remotely`,
    duration: "April 2021 - Present",
    works: [
      "Led the frontend development of all products using agile methodologies and software engineering best practices.",
      "Solely created and managed the client, client-side applications, and databases that makeup TalentQL web applications.",
      "Handled continuous integration, deployment of web applications, and code reviews with peers to ensure that each increment adheres to original vision as described in the user story and all standard resource libraries and architecture patterns as appropriate.",
    ],
  },

  {
    company: "F&K Savings",
    location: "Ibadan, Nigeria",
    role: "Software Frontend Engineer",
    description: `F&K Savings is a fintech company that facilitates saving, investment, and wealth-building opportunities for every individual.`,
    duration: "June 2020 - April 2021",
    works: [
      "Developed and maintained the client side of new version of Web and Mobile application with implementation of the core business logic and features.",
      "Optimized the web and mobile applications for better performance and user experience.",
      "Worked as a web and mobile developer, creating responsive and reactive front-end applications using Next.js and core React Native",
    ],
  },

  {
    company: "DevCareer",
    location: "Africa",
    role: "Software Frontend Engineer",
    description: `DevCareer is a non-profit Tech organisation supporting Africa's rising Tech Ecosystem.`,
    duration: "Contract (In-View)",
    works: [
      "Mentoring a group of Entry-level frontend developers across Africa.",
      "Worked with people from different locations in the country to create functional applications while honing my skills as a software developer and adapting to work in a remote team",
      "Worked on a food delivery service catering to thousands of users in Northern Nigeria.",
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
      "Optimized and improved the web application for better performance and SEO. ",
      "Built and launched an e-library system for the publication’s PDF and EPUB materials..",
    ],
  },
];
