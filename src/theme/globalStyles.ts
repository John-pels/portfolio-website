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
        font-family: ${({ theme }) => theme.fontFamilies.manhope.regular};
        font-size: ${({ theme }) => theme.fontSizes.m};
        overflow-x: hidden;
    }

     ::-webkit-scrollbar {
    width: 3px;
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
