import { useEffect, useState } from "react";
import { NavbarBrand, NavbarContainer, NavbarFlexItem, NavbarLink, NavbarMobileFlex, NavbarToggle, NavbarToggleContent, SocialMedias } from "./style";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import social from "@src/content/social";
import { MobileNavMenu } from "./mobileNavMenu";
import Link from "next/link";


export const socials = [
    { icon: <FaTwitter />, link: social.twitter, label: 'Twiiter' },
    { icon: <FaGithub />, link: social.github, label: 'Github' },
    { icon: <FaLinkedinIn />, link: social.linkedIn, label: 'LinkedIn' }
]


const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
            setMobileNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener("keyup", handleEsc);
        return () => {
            window.removeEventListener("keyup", handleEsc);
        };
    }, []);

    const onWorkClick = () => {
        document.querySelector("#works")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <NavbarContainer mobileNav={mobileNav}>
                <NavbarFlexItem>
                    <NavbarBrand>
                        <Link href="/">
                            <a>
                                John O. Ajeigbe
                            </a>
                        </Link>
                    </NavbarBrand>
                    <NavbarLink>Senior Frontend Engineer</NavbarLink>
                    <SocialMedias>
                        {
                            socials.map(({ icon, link, label }, index) => (
                                <NavbarLink key={index}>
                                    <a

                                        href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={label}
                                    >
                                        {icon}
                                    </a>
                                </NavbarLink>

                            ))
                        }


                    </SocialMedias>
                </NavbarFlexItem>
                <NavbarMobileFlex>
                    <NavbarBrand dark={mobileNav} hide={!mobileNav}>
                        <Link href="/">
                            <a>
                                John Ajeigbe
                            </a>
                        </Link>
                    </NavbarBrand>
                    <NavbarFlexItem showOnMobile>
                        <NavbarToggle
                            aria-label="menu"
                            open={mobileNav}
                            onClick={toggleMobileNav}
                        >
                            <NavbarToggleContent open={mobileNav}>
                                <div />
                                <div />
                                <div />
                            </NavbarToggleContent>
                        </NavbarToggle>
                    </NavbarFlexItem>
                </NavbarMobileFlex>
                <NavbarFlexItem flexEnd>
                    <NavbarLink onClick={onWorkClick}>
                        <a href='#works' rel="noreferrer">
                            Works
                        </a>
                    </NavbarLink>
                    <NavbarLink>
                        <a href={social.resume} target="_blank" rel="noreferrer">
                            Download Résumé
                        </a>
                    </NavbarLink>
                </NavbarFlexItem>
            </NavbarContainer>
            <MobileNavMenu open={mobileNav} toggle={toggleMobileNav} />
        </>
    )
}

export { Navbar }
