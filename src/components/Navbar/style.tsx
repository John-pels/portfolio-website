import styled from "styled-components";
import { Container, HideOnMobile, PaddedWrapper } from "../container";

export const NavbarContainer = styled.nav<{ mobileNav?: boolean }>`
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
  top: 0;
  left: 0;
  right: 0;


  ${PaddedWrapper};
  ${Container}

  ${({ theme }) => theme.media.lg} {
    position: ${({ mobileNav }) => (mobileNav ? "sticky" : "static")};
  }
`;

export const NavbarFlexItem = styled.div<{ flexEnd?: boolean, showOnMobile?: boolean }>`
  display: flex;
  align-self:baseline;
  flex-direction:column;
  align-items:${({ flexEnd }) => flexEnd ? 'flex-end' : 'flex-start'};

  ${({ showOnMobile }) => !showOnMobile && HideOnMobile}
`;

export const NavbarMobileFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;

  


  ${({ theme }) => theme.media.lg} {
    width: 100%;
    order: 1;
    justify-content: space-between;
  }
`;

export const NavbarBrand = styled.div<{ dark?: boolean, hide?: boolean }>`
font-size:${({ theme }) => theme.fontSizes.h};
font-family:${({ theme }) => theme.fontFamilies.manhope.semiBold};
line-height: 35px;
letter-spacing: -0.03em;
display:${({ hide }) => hide && 'none'};

${({ theme }) => theme.media.lg} {
display:${({ hide }) => hide && 'unset'};
 font-family:${({ theme }) => theme.fontFamilies.clash.bold};
 color:${({ theme, dark }) => dark ? theme.colors.white : theme.colors.black};
  }
`

export const NavbarLink = styled.div`
cursor: pointer;
line-height: 35px;
font-size:1rem;

 svg {
    width: 13px;
    height: 13px;
  }

  path {
    transition: 0.3s ease-in-out;
  }

  :hover {
    path {
      fill: ${({ theme }) => theme.colors.gradients.secondary[4]};
    }
  }

  a {
    transition:0.3s;
    :hover{
     color:${({ theme }) => theme.colors.gradients.secondary[1]} ;
    }
  }
`

export const SocialMedias = styled.div`
    display: flex;
    gap:15px;
    justify-content: center;
    align-items: center;
`


export const NavbarToggle = styled.button<{ open?: boolean }>`
  border: none;
  padding: 0;
  display: none;
  transition: 1s;

  ${({ theme }) => theme.media.lg} {
    width: 36px;
    height: 36px;
    border-radius:5px;
    background-color: ${({ open }) => (open ? "transparent" : "#000")};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const NavbarToggleContent = styled.div<{ open: boolean }>`
  height: 20px;
  width: 20px;

  div {
    align-self: center;
    background-color: #fff;
    height: 2px;
    margin: 4px 0;
    transition: 0.3s;

    &:nth-of-type(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      transform-origin: 5% 10%;
    }

    &:nth-of-type(2) {
      opacity: ${({ open }) => (open ? 0 : 1)};
      width: 15px;

    }

    &:nth-of-type(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      transform-origin: 5% 90%;
       width: ${({ open }) => (open ? '20px' : '12px')};


    }
  }
`;


export const MobileMenuContainer = styled.div<{ open: Boolean }>`
  display: none;
  z-index: 4;
  font-family: ${({ theme }) => theme.fontFamilies.manhope.regular};

  ${({ theme }) => theme.media.lg} {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    height: 100%;
    width: 100%;

    transform: ${({ open }) => (!open ? "translateX(-100%)" : "translateX(0)")};
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 4rem;

    transition: 0.8s all ease-in-out;
    transition-delay: ${({ open }) => (open ? 0 : "1.5s")};

    ${({ theme }) => theme.media.sm} {
      padding: 1.5rem 1.5rem;
      flex-direction: column;
    }
  }
`;

export const MobileMenuItem = styled.div`
  color: #fff;
  margin: 2rem 0;
  font-weight: 200;
  font-size: 30px;
  line-height: 28.35px;
`;

export const MobileMenuItemUnderline = styled(MobileMenuItem)`
  text-decoration: underline;
`;

export const MobileMenuIconContainer = styled(MobileMenuItem)`
  display: flex;
  justify-content: space-between;
`;

export const MobileMenuIcon = styled.div`
  cursor: pointer;

  svg {
    width: 15px;
    height: 15px;
  }

  path {
    fill: #fff;
  }
`;
