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
    liveUrl: "https://customers.meterservicehub.com",
  },
  {
    index: 2,
    image: "v1655806288/portfolio/wishme.png",
    title: "Wishme",
    liveUrl: "https://curious-creponne-7c16ea.netlify.app/",
  },
  {
    index: 3,
    image: "v1655780151/portfolio/unsplash.png",
    title: "Unsplash Mini",
    liveUrl: "https://unsplashklone.netlify.app",
  },
  {
    index: 4,
    image: "v1655741585/portfolio/mojec_admin.png",
    title: "Mojec Admin Web Portal",
    liveUrl: "https://admin.meterservicehub.com",
  },
];

export { projects };
