export interface Project {
  image: string;
  title: string;
  liveUrl: string;
  index: number;
}

const projects: Project[] = [
  {
    index: 1,
    image: "v1655741586/portfolio/mojec_customer.png",
    title: "Mojec Customer Web Portal",
    liveUrl: "https://dev-customers.meterservicehub.com",
  },
  {
    index: 2,
    image: "v1652805242/portfolio/project_2.png",
    title: "Wishme",
    liveUrl: "https://curious-creponne-7c16ea.netlify.app/",
  },
  {
    index: 3,
    image: "v1652805242/portfolio/project_4.png",
    title: "Unsplash Mini",
    liveUrl: "https://unsplashklone.netlify.app",
  },
  {
    index: 4,
    image: "v1655741585/portfolio/mojec_admin.png",
    title: "Mojec Admin Web Portal",
    liveUrl: "https://dev-admin.meterservicehub.com",
  },
];

export { projects };
