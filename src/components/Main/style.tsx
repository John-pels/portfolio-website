import styled from "styled-components";
import { Container, PaddedWrapper } from "../container";

export const MainContainer = styled.main`
padding-top:30px;
background: rgb(233,215,228);
background: linear-gradient(90deg, rgba(233,215,228,1) 8%, rgba(234,220,225,1) 23%, rgba(214,222,234,1) 44%, rgba(207,228,245,1) 70%, rgba(231,232,246,1) 91%, rgba(208,236,247,1) 100%);
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

export const FlexBox = styled.section<{ wrap?: boolean, gap?: number, border?: boolean, row?: boolean }>`
display:flex;
justify-content:space-between;
gap:${({ gap }) => gap || 70}px;
flex-wrap: ${({ wrap }) => wrap && 'wrap'};
align-items:flex-start;
border-bottom: ${({ border }) => typeof border === 'undefined' && '1px solid #bdbcbc'} ;
padding:30px 0;



${({ theme }) => theme.media.md} {
 gap:25px;
 flex-direction: ${({ row }) => row ? 'row' : 'column'};
}


  ${({ theme }) => theme.media.xs} {
  gap:25px;
  flex-direction: column;
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
export const FlexParagraph = styled.p`
font-size:1em;
font-family:${({ theme }) => theme.fontFamilies.manhope.extraLight};
letter-spacing: -0.02em;
line-height: 25px;
`
export const List = styled.ul`
font-size:1em;
font-family:${({ theme }) => theme.fontFamilies.manhope.extraLight};
`
export const ListItem = styled.li`
padding-bottom:0.5em;
line-height: 20px;
`
