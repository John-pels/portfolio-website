import styled from "styled-components";
import { Container, PaddedWrapper } from "../container";

export const HeaderContainer = styled.header`
width:100%;
background: rgb(239,234,240);
background: linear-gradient(90deg, rgba(239,234,240,1) 36%, rgba(230,245,243,1) 47%, rgba(230,237,242,1) 88%);
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

     ${({ theme }) => theme.media.sm} {
   font-size:1.5em;
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

export const ProjectGrid = styled.section`
display:grid;
grid-template-columns:repeat(2, 1fr);
gap:60px 40px;
  ${PaddedWrapper};
  ${Container}

  ${({ theme }) => theme.media.md} {
   grid-template-columns: 1fr;
   gap:40px 0px;
  }

`
export const GridTitle = styled.div`
`

export const GridHeading = styled.h3`
font-family:${({ theme }) => theme.fontFamilies.clash.medium};
font-size:3em;
letter-spacing: -0.02em;
line-height: 59px;
margin:0;

 ${({ theme }) => theme.media.md} {
font-size:1.8em;
line-height: 30px;
  }

   ${({ theme }) => theme.media.sm} {
 font-size:1.5em;
 line-height: 20px;
  }
`
export const GridSubHeading = styled.p`
font-family:${({ theme }) => theme.fontFamilies.manhope.light};
font-size:1em;
line-height: 25px;
 ${({ theme }) => theme.media.md} {
  font-size:0.8em;
 line-height: 20px;
  }

  ${({ theme }) => theme.media.xl} {
br {
    display:none;
}
  }
`

export const ProjectItemContainer = styled.section`
display:flex;
gap:8px;
align-items:flex-end;
grid-row:span 3;
`
export const ProjectItemTitle = styled.h4`
font-family:${({ theme }) => theme.fontFamilies.manhope.regular};
font-size:1em;
line-height: 22px;
margin:0;
writing-mode:vertical-rl;
transform:rotate(180deg);
`

export const ProjectItemContent = styled.div`
width: 100%;
height:662px;
position: relative; overflow: hidden;


  ${({ theme }) => theme.media.md} {
  height:400px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
    transition: 1s ease-in-out;
  }

  &:hover,
  &:focus,
  &:focus-within {
    .ls {
      transform: scale(1) translateY(0);
      opacity: 1;
    }
    img {
      opacity: 0.5;
      transform: scale(1.2);
    }
  }
`


export const Wrapper = styled.div`
  position: relative;
  padding-top: 5rem;
  padding-bottom: 1rem;
  overflow: hidden;

    ${({ theme }) => theme.media.md} {
  padding-top: 1.5rem;
  }
`;
