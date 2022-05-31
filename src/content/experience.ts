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
    company: "AltSchool Africa - Lagos,",
    location: " Nigeria",
    role: "Frontend Engineer",
    description: `An educational program designed to arm you with the skills and knowledge required to launch your tech career. As a Frontend Engineer, I`,
    duration: "October 2021 - Present",
    works: [
      "Build the Altschool Africa web applications with payment and coupon system.",
      "Build the student portal and data processing system",
    ],
  },

  {
    company: "TalentQL - Texas,",
    location: " United State",
    role: "Software Frontend Engineer",
    description: `TalentQL helps companies hire top vetted technical talent across Africa quickly and seamlessly. At TalentQL, I`,
    duration: "May 2021 - Present",
    works: ["Build the TalentQL web applications."],
  },

  {
    company: "F&K Savings - Ibadan,",
    location: "Nigeria",
    role: "Software Frontend Engineer",
    description: `F&K Savings is Nigeria's Fin-Tech platform dedicated to helping you Save, Invest, and Raise funds. As a Mobile and Web Engineer, I`,
    duration: "June 2020 - April 2021",
    works: [
      "Collaborated with an effective and vibrant engineering team to build effective user interfaces with great user experience",
      "Collaborated with the team to build new version of web platforms from the scratch with a better SEO and great performance",
      "Collaborated with the team to build new version of Mobile application from the scratch",
    ],
  },

  {
    company: "DevCareer - Nigeria,",
    location: "Africa",
    role: "Software Frontend Engineer",
    description: `DevCareer is a Non-Profit organization that's focused on supporting upcoming developers with resources to excel into World Class. As a Frontend Engineer, I`,
    duration: "August 2019 - June 2020",
    works: [
      "Collaborated with a set of amaing developers to build web applications",
      "Teamed with a team of engineers to build an e-commerce web application from the scratch",
    ],
  },

  {
    company: "Rasmed Publications - Ibadan,",
    location: "Nigeria",
    role: "Web Developer",
    description: `Rasmed Publications is an award-winning publisher of progressive books in Nigeria. Publishing textbooks and special titles for schools and various sectors nationwide. As a Web Developer, I`,
    duration: "August 2019 - June 2020",
    borderBottom: false,
    works: [
      "Imporved the performance and SEO of the web application",
      "Built an e-library system for the PDF and EPUB books",
    ],
  },
];
