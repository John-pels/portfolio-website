import styled from "styled-components";
import { Container, PaddedWrapper } from "../container";

export const HeaderContainer = styled.header`
width:100%;
background: rgb(239,234,240);
background: linear-gradient(90deg, rgba(239,234,240,1) 36%, rgba(230,245,243,1) 47%, rgba(230,237,242,1) 88%);
position: relative;
`
export const HeaderContent = styled.section`
display:flex;
align-items:flex-start;
column-gap:90px;

${({ theme }) => theme.media.md} {
   flex-direction:column;
  }
  ${PaddedWrapper};
  ${Container}
`

export const HeaderContentItem = styled.div`
:first-child{
    width:60%;
}

:last-child{
    width:40%;
}

${({ theme }) => theme.media.lg} {

  :last-child{
    width:100%;
}
:first-child{
    width:100%;
}
}
`
export const HeaderHeroText = styled.h1`
font-size:4.5em;
font-family:${({ theme }) => theme.fontFamilies.clash.medium};
font-weight:500;
line-height: 84px;
letter-spacing: -0.02em;
margin-top:0;

${({ theme }) => theme.media.xl} {
br {
    display:none;
}
  }

   ${({ theme }) => theme.media.lg} {
   font-size:3.5em;
   line-height: 74px;
   }

     ${({ theme }) => theme.media.md} {
   font-size:2.5em;
   line-height: 40px;
   }


   ${({ theme }) => theme.media.md} {
   font-size:1.8em;
   }
`

export const HeaderAboutTitle = styled.h4`
font-weight:600;
margin: 0;
`
export const HeaderAboutParagraph = styled.p`
line-height: 25px;
font-family:${({ theme }) => theme.fontFamilies.manhope.extraLight};

 ${({ theme }) => theme.media.md} {
   font-size:0.9em;

   }

`
