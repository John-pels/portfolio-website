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
    location: " Lagos, Nigeria",
    role: "Frontend Engineer",
    description: `AltSchool Africa is a tech school for individuals looking to gain technical skills and kickstart a career in Software Engineering. AltSchool Africa takes a non-traditional approach to learning by teaching courses directly connected with the selected track..
`,
    duration: "October 2021 - Present",
    works: [
      "Developed and launched a comprehensive student and admin dashboard system, which streamlined the learning experience for over 10,000 students and improved administrative efficiency by 40%.",
      "Authored an HTML and CSS course, directly contributing to the skill development of 500+ engineering students.",
      "Engineered a robust payment processing platform, handling over 50,000 transactions, which increased payment success rates by 35% and enhanced the financial operations of the institution.",
      "Technologies: React, Next.js, TypeScript, GraphQL/Apollo-client, React-Query, styled-components, Ant-Design, Jest, React Testing Library, Storybook.",
    ],
  },

  {
    company: "TalentQL",
    location: "Texas, United State",
    role: "Software Frontend Engineer",
    description: `TalentQL helps companies build top-tier teams by hiring, developing and managing tech talent remotely.`,
    duration: "April 2021 - Present",
    works: [
      "Spearheaded the development of TalentQL's product suite, enhancing user experience and system reliability by implementing agile methodologies and software engineering best practices, resulting in a 30% increase in deployment efficiency.",
      "Orchestrated the creation and management of client-side applications, achieving a 25% improvement in application performance through optimized code and database interactions.",
      "Pioneered the integration of continuous deployment and rigorous code reviews, ensuring 100% adherence to the user story specifications and architectural standards.",
      "Technologies: React, Next.js, TypeScript, Redux/Redux-Saga, REST API, Styled-components, Axios, Ant-Design, Jest, React Testing Library.",
    ],
  },

  {
    company: "F&K Savings",
    location: "Ibadan, Nigeria",
    role: "Software Frontend Engineer",
    description: `F&K Savings is a fintech company that facilitates saving, investment, and wealth-building opportunities for every individual`,
    duration: "June 2020 - April 2021",
    works: [
      "Collaborated in a team of 5 to revamp the client side of F&K Savings' web and mobile applications, leading to a 20% increase in user engagement and a 15% reduction in load time",
      "Implemented performance optimizations that resulted in a 10% improvement in application responsiveness and user satisfaction.",
      "Technologies: React, React Native, Next.js, TypeScript, Redux/Redux-saga, REST API, Axios, Styled-components.",
    ],
  },

  {
    company: "DevCareer",
    location: "Africa",
    role: "Frontend Engineering Instructor",
    description: `DevCareer is a non-profit Tech organisation supporting Africa's rising Tech Ecosystem.`,
    duration: "September 2023 - Present",
    works: [
      "Mentored 300+ junior developers, elevating their coding proficiency and project execution skills through structured programming sessions and real-world project experience.",
      "Curated a comprehensive curriculum that led to a 90% success rate of students in securing frontend development roles.",
      "Technologies: JavaScript, React, HTML, CSS, Technical Writing, Version Control.",
    ],
  },

  {
    company: "Rasmed Publications",
    location: "Ibadan, Nigeria",
    role: "Web Developer",
    description: `Rasmed Publications is an award-winning publisher of progressive books in Nigeria. Publishing textbooks and special titles for schools and various sectors nationwide`,
    duration: "January 2019 - August 2019",
    borderBottom: false,
    works: [
      "Enhanced the web application's performance and SEO, achieving a 50% increase in organic traffic and a 20% improvement in page load times.",
      "Successfully launched an e-library system, which expanded the publication's reach by 100% and increased user accessibility to educational materials.",
      "Technologies: HTML, CSS, jQuery, Ajax, PHP & MySQL.",
    ],
  },
];
