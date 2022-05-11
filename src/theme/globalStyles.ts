import { createGlobalStyle } from "styled-components";
import { Fonts } from "./fonts";

export const GlobalStyles = createGlobalStyle`
    ${Fonts};

    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.fontFamilies.clash.medium};
        font-weight: 400;
        font-size: ${({ theme }) => theme.fontSizes.m};
        line-height: 140.5%;
        overflow-x: hidden;
    }

    * {
        &:focus{
            outline-color: ${({ theme }) => theme.colors.gradients.primary[1]};
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    .disable-scroll {
        ${({ theme }) => theme.media.lg}{
            overflow: hidden;
        }
    }
    
`;
