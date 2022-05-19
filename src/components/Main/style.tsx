import styled from "styled-components";
import { Container, PaddedWrapper } from "../container";

export const MainContainer = styled.main`
padding-top:30px;
`


export const MainWrapper = styled.section`
  ${Container};
  ${PaddedWrapper};
`

export const MainHeading = styled.h1`
font-size:3em;
font-family:${({ theme }) => theme.fontFamilies.clash.medium};
letter-spacing: -0.02em;
line-height: 59px;
padding-bottom:15px;

${({ theme }) => theme.media.md} {
font-size:2em;
line-height: 30px;
  }

  ${({ theme }) => theme.media.xs} {
font-size:1.5em;
line-height: 25px;
  }
`

export const Wrap = styled.div`
display:flex;
gap:15px;
align-items:center;
`

export const FlexBox = styled.section<{ wrap?: boolean, gap?: number }>`
display:flex;
justify-content:space-between;
gap:${({ gap }) => gap || 70}px;
flex-wrap: ${({ wrap }) => wrap && 'wrap'};
align-items:flex-start;
border-bottom: 1px solid #363636;
padding:30px 0 ;

:last-child{
  border-bottom:none;
}
`

export const FlexBoxItem = styled.div`
flex:1;
`
export const FlexTitle = styled.h4`
font-size:1.25em;
font-family:${({ theme }) => theme.fontFamilies.clash.regular};
letter-spacing: -0.02em;
line-height: 25px;
margin:0 ;

 ${({ theme }) => theme.media.lg} {
font-size:1.15em;

  }
`
export const FlexParagraph = styled.span`
font-size:1em;
font-family:${({ theme }) => theme.fontFamilies.manhope.extraLight};
letter-spacing: -0.02em;
line-height: 25px;
font-size:0.8;

`
