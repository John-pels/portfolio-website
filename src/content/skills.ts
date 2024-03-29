export interface Skills {
  one: string;
  two: string;
  three: string;
  borderBottom?: false;
}

export const skills: Array<Skills> = [
  {
    one: "JavaScript",
    two: "TypeScript",
    three: "React",
  },
  {
    one: "NextJs",
    two: "Vue/NuxtJs",
    three: "React Native",
  },

  {
    one: "GraphQL/Apollo Client",
    two: "Redux/Redux-Saga",
    three: "SASS",
  },
  {
    one: "React Testing Library",
    two: "Jest",
    three: "CI/CD",
  },
  {
    one: "Styled-components",
    two: "NodeJs/ExpressJs",
    three: "Golang",
    borderBottom: false,
  },
];
