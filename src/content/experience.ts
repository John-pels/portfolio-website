export interface WorkExperience {
  company: string;
  location: string;
  role: string;
  description: string;
  duration: string;
  borderBottom?: false;
}

export const workExperience: Array<WorkExperience> = [
  {
    company: "XYZ Company - Lagos,",
    location: " Nigeria",
    role: "Frontend Engineer",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque. \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque. \n  I do User interface design, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque.`,
    duration: "Apr 2021 - Present",
  },

  {
    company: "XYZ Company - Lagos,",
    location: " Nigeria",
    role: "Frontend Engineer",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque. \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque. \n  I do User interface design, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque.`,
    duration: "Apr 2021 - Present",
  },

  {
    company: "XYZ Company - Lagos,",
    location: " Nigeria",
    role: "Frontend Engineer",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque. \n  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque. \n  I do User interface design, consectetur adipiscing elit. Suspendisse commodo varius nunc sit amet sollicitudin. Phasellus varius efficitur scelerisque.`,
    duration: "Apr 2021 - Present",
    borderBottom: false,
  },
];
