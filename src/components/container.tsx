import styled, { css } from "styled-components";

export const Container = css`
width:1300px;
max-width:100%;
margin:0 auto;
`


export const PagetWrapper = styled.div<{ active?: boolean }>`
  width: ${({ active }) => (active ? "100%" : 0)};
  height: ${({ active }) => (active ? "100%" : 0)};
  overflow: ${({ active }) => (active ? "visible" : "hidden")};
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

export const PageWrapperWithOpacity = styled(PagetWrapper)`
  transition: opacity 0.5s;
`;

export const HideOnMobile = css`
  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`;


export const PaddedWrapper = css`
  padding: 2rem 0;

  ${({ theme }) => theme.media.xxl} {
    padding: 3rem 0;
  }

  ${({ theme }) => theme.media.xxl} {
    padding: 3rem 1.5rem;
  }

  ${({ theme }) => theme.media.lg} {
    padding: 1.5rem 1.5rem;
    flex-direction: column;
  }

  ${({ theme }) => theme.media.sm} {
    padding: 1.5rem 1.5rem;
  }
`;
