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
    platform: "Pluralsight",
    title: "Advance SVG Animation",
    date: "April 2021",
  },
  {
    icon: Pluralsight,
    platform: "Pluralsight",
    title: "Advance SVG Animation",
    date: "April 2021",
    borderBottom: false,
  },
];
