import styled from "styled-components";
import { horizontalScroll } from "../scroll";

export const TabContainer = styled.div`
width:100%;
`;

export const TabHeader = styled.div`
    display: flex;
    gap:30px;
  ${horizontalScroll};
    padding: 20px 0;
    border-top:1px solid #000;
    border-bottom:1px solid #000;
`;


export const TabPane = styled.div<{ active?: boolean }>`
  font-weight: ${({ active }) => (active ? "500" : "300")} !important;
  text-transform: capitalize;
  font-size: 1em;
  line-height: 22px;
  cursor: pointer;
  transition: 0.3s;
  letter-spacing: -0.02em;
  font-family: ${({ theme, active }) => active ? theme.fontFamilies.manhope.medium : theme.fontFamilies.manhope.light};

  ${({ theme }) => theme.media.lg} {

  }
`;

export const TabContent = styled.div`
    width: 100%;
`;
