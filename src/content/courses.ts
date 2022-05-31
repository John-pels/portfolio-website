import Pluralsight from "@src/components/icons/pluralsight";

export interface Courses {
  icon: any;
  platform: string;
  title: string;
  date: string;
  borderBottom?: boolean;
}

export const courses: Array<Courses> = [
  {
    icon: Pluralsight,
    platform: "Pluralsight",
    title: "Advance SVG Animation",
    date: "April 2021",
  },

  {
    icon: Pluralsight,
    platform: "Udemy",
    title: "Complete React Course",
    date: "April 2020",
  },
  {
    icon: Pluralsight,
    platform: "Udemy",
    title: "Complete  Developer's  Guide  (Golang)",
    date: "November 2021",
  },
  {
    icon: Pluralsight,
    platform: "Frontend Master",
    title: "Advance React Native",
    date: "December 2021",
  },
  {
    icon: Pluralsight,
    platform: "Frontend Master",
    title: "Advance React For Senior Engineers",
    date: "March 2022",
    borderBottom: false,
  },
];
