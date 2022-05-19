import { css } from "styled-components";

export const hideScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const horizontalScroll = css`
  white-space: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;

  ${hideScrollbar};
`;
