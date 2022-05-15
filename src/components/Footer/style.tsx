import styled from "styled-components";
import { Container, PaddedWrapper } from "../container";

export const FooterContainer = styled.footer`
background:${({ theme }) => theme?.colors?.lightPink};
`

export const FooterContent = styled.section`
display:flex;
justify-content:space-between;
align-items:flex-start;
${Container}
${PaddedWrapper}

 ${({ theme }) => theme.media.lg} {
     row-gap:20px;
    flex-direction:column-reverse;


  }
 ${({ theme }) => theme.media.md} {
    row-gap:20px;
    width:100%;

  }
`
export const FooterItem = styled.div`
flex:1;
display:flex;

:first-child{
    flex-direction:column;
}


:last-child{

justify-content:space-between;

  ${({ theme }) => theme.media.md} {
    flex-direction: column;
    row-gap:20px;
  }

}

${({ theme }) => theme.media.md} {
  width:100%;
  }

  ${({ theme }) => theme.media.lg} {
  width:100%;
  }
`

export const Wrap = styled.div`
display:flex;
gap: 20px;

svg {
  cursor: pointer;
   path {
    transition: 0.3s ease-in-out;
  }

  :hover {
    path {
      fill: ${({ theme }) => theme.colors.gradients.secondary[4]};
    }
  }
}
`

export const FooterBrand = styled.span`
font-size:1.125em;
font-family:${({ theme }) => theme.fontFamilies.manhope.semiBold};
line-height: 25px;
`
export const FooterCopyright = styled.span`
font-size:0.875em;
font-family:${({ theme }) => theme.fontFamilies.manhope.extraLight};
line-height: 30px;

a {
font-family:${({ theme }) => theme.fontFamilies.manhope.semiBold};
text-decoration:underline;
}

 ${({ theme }) => theme.media.lg} {
     line-height: 50px;
  }
`

export const FooterText = styled.div`
display:flex;
align-items:center;
gap:20px;
font-size:1em;
font-family:${({ theme }) => theme.fontFamilies.manhope.extraLight};

svg {
    vertical-align:middle;

    
}
`
