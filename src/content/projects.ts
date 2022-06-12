export interface Project {
  image: string;
  title: string;
  liveUrl: string;
  index: number;
}

const projects: Project[] = [
  {
    index: 1,
    image: "v1652805242/portfolio/project_1.png",
    title: "Mojec Customer Web Portal",
    liveUrl: "https://dev-customers.meterservicehub.com",
  },
  {
    index: 2,
    image: "v1652805242/portfolio/project_2.png",
    title: "AltSchool Learning Management System",
    liveUrl: "https://altschoolafrica.com",
  },
  {
    index: 3,
    image: "v1652805242/portfolio/project_4.png",
    title: "AltSchool Learning Management System",
    liveUrl: "https://altschoolafrica.com",
  },
  {
    index: 4,
    image: "v1652805243/portfolio/project_3.png",
    title: "AltSchool Learning Management System",
    liveUrl: "https://altschoolafrica.com",
  },
];

export { projects };
