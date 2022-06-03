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
    description: `AltSchool Africa is an EdTech startup helping young Africans launch profitable careers in tech by teaching them in-demand skills.
     In my role as a Frontend Engineer,I: `,
    duration: "October 2021 - Present",
    works: [
      "Built the AltSchool Africa web apps, integrating payment and coupon systems.",
      "Built the Student Portal and Data Processing System",
    ],
  },

  {
    company: "TalentQL",
    location: "Texas, United State",
    role: "Software Frontend Engineer",
    description: `TalentQL helps companies hire top, vetted technical talent across Africa quickly and seamlessly. At TalentQL, I: `,
    duration: "May 2021 - Present",
    works: [
      "Built the startup’s web apps(talentql.com, events.talentql.com, pipeline.talentql.com)",
    ],
  },

  {
    company: "F&K Savings",
    location: "Ibadan, Nigeria",
    role: "Software Frontend Engineer",
    description: `F&K Savings is a Nigerian fintech startup that helps users Save, Invest, and Raise funds. As a Mobile and Web Engineer, I, alongside my teammates built: `,
    duration: "June 2020 - April 2021",
    works: [
      "More responsive user interfaces and deliver seamless user experiences",
      "New, improved versions of existing web platforms from the scratch while ensuring a better SEO structure and improved performance",
      "A new version of the mobile app from the scratch",
    ],
  },

  {
    company: "DevCareer",
    location: "Africa",
    role: "Software Frontend Engineer",
    description: `DevCareer is a non-profit that supports upcoming developers with the tools and resources they need to upskill and upscale their careers. At DevCareer, I`,
    duration: "August 2019 - June 2020",
    works: [
      "Joined a team of developers to build web applications",
      "Teamed up with a number of few engineers and built an e-commerce web application from the scratch",
    ],
  },

  {
    company: "Rasmed Publications",
    location: "Ibadan, Nigeria",
    role: "Web Developer",
    description: `Rasmed Publications is an award-winning publisher of progressive books in Nigeria. Publishing textbooks and special titles for schools and various sectors nationwide. As a Web Developer, I`,
    duration: "August 2019 - June 2020",
    borderBottom: false,
    works: [
      "Improved the overall performance and SEO of the web app",
      "Built an e-library system for the publication’s PDF and EPUB materials. ",
    ],
  },
];
