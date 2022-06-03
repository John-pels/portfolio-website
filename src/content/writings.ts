export interface Writing {
  image: string;
  title: string;
  description: string;
  liveUrl: string;
  index: number;
}

export const writings: Writing[] = [
  {
    index: 1,
    image: "v1654227072/portfolio/bigO_notation.png",
    title: "Understanding the Almighty Big-O Notation",
    description:
      "Big-O Notation is an important concept in data structure and algorithm as it's the metric used to describe the efficiency of an algorithm. It also measures the complexity, whether time or space of an algorithm",
    liveUrl:
      "https://johnpels.hashnode.dev/understanding-the-almighty-big-o-notation-cl2k8soxz04c924nvfu320te7",
  },
  {
    index: 2,
    image: "v1654227072/portfolio/css.png",
    title: "CSS: The heart of web design",
    description:
      "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML",
    liveUrl:
      "https://johnpels.hashnode.dev/css-the-heart-of-web-design-30bf6e84f16d",
  },
  {
    index: 2,
    image: "v1654227072/portfolio/docker.webp",
    title: "Getting started with Docker, Dockerize a React App.",
    description:
      "Docker is a platform where developers build, run, and deploy applications with containers.",
    liveUrl:
      "https://johnpels.hashnode.dev/css-the-heart-of-web-design-30bf6e84f16d",
  },
];
