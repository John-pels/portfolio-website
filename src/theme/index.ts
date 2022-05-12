const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

interface Media {
  custom: (maxNumber: number) => string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
}

const media: Media = {
  custom: customMediaQuery,
  xs: customMediaQuery(330),
  sm: customMediaQuery(592),
  md: customMediaQuery(768),
  lg: customMediaQuery(992),
  xl: customMediaQuery(1024),
  xxl: customMediaQuery(1200),
};

const colors = {
  gradients: {
    primary: {
      1: "#EFEAF0",
      2: "#E6F5F3",
      3: "#E6EDF2",
    },
    secondary: {
      1: "#E9D7E4",
      2: "#EADCE1",
      3: "#D6DEEA",
      4: "#CFE4F5",
      5: "#E7E8F6",
      6: "#D0ECF7",
    },
  },
  lightPink: "#F8F1EA",
  black: "#000",
  white: "#fff",
};

const fontSizes = {
  s: "12px",
  m: "16px",
  h: "22px",
};

const fontFamilies = {
  clash: {
    bold: "ClashDisplayBold, sans-serif",
    extraLight: "ClashDisplayXtraLight, sans-serif",
    light: "ClashDisplayLight, sans-serif",
    medium: "ClashDisplayMedium, sans-serif",
    regular: "ClashDisplayRegular, sans-serif",
    semiBold: "ClashDisplaySemiBold, sans-serif",
  },
  manhope: {
    bold: "ManropeBold, sans-serif",
    extraBold: "ManropeExtraBold,sans-serif",
    extraLight: "ManropeExtraLight, sans-serif",
    light: "ManropeLight, sans-serif",
    medium: "ManropeMedium, sans-serif",
    regular: "ManropeRegular, sans-serif",
    semiBold: "ManropeSemiBold, sans-serif",
  },
};

export const defaultTheme = {
  colors,
  fontSizes,
  fontFamilies,
  media,
};

type iTheme = typeof defaultTheme;

declare module "styled-components" {
  export interface DefaultTheme extends iTheme {}
}
