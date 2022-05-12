import social from "@src/content/social";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect } from "react";
import { socials } from ".";
import { MobileMenuContainer, MobileMenuIcon, MobileMenuIconContainer, MobileMenuItem, NavbarBrand, NavbarLink, SocialMedias } from "./style";

interface IMobileMenu {
    open: boolean;
    toggle: () => void;
}
const MobileNavMenu = ({ open, toggle }: IMobileMenu) => {
    const animation = useAnimation();

    const variants: Variants = {
        hidden: {
            transition: {
                staggerChildren: 0.3,
            },
        },
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const v: Variants = {
        hidden: {
            opacity: 0,
            x: -50,
            transition: {
                type: "spring",
                stiffness: 70,
            },
        },
        visible: {
            opacity: 1,
            x: -0,
            transition: {
                type: "spring",
                stiffness: 70,
            },
        },
    };

    useEffect(() => {
        if (open) {
            setTimeout(() => {
                animation.start("visible");
            }, 1000);
        } else {
            animation.start("hidden");
        }
    }, [open]);

    const onWorkClick = () => {
        document.querySelector("#works")?.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <motion.div variants={variants} animate={animation} initial="hidden">
            <MobileMenuContainer open={open}>

                <motion.div variants={v}>
                    <MobileMenuItem onClick={onWorkClick}>
                        <a href='#works' rel="noreferrer">
                            My Works
                        </a>
                    </MobileMenuItem>
                </motion.div>
                <motion.div variants={v}>
                    <MobileMenuItem>
                        <a href={social.resume} target="_blank" rel="noreferrer">
                            Download Résumé
                        </a>
                    </MobileMenuItem>
                </motion.div>
                <motion.div variants={v}>
                    <MobileMenuItem onClick={onWorkClick}>
                        <a href='mailto:ajeigbejohnolu@gmail.com' rel="noreferrer">
                            Schedule a Call
                        </a>
                    </MobileMenuItem>
                </motion.div>
                <motion.div variants={v}>
                    <MobileMenuIconContainer>
                        {
                            socials.map(({ icon, link }, index) => (
                                <MobileMenuIcon onClick={toggle} key={index}>
                                    <a

                                        href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Twitter"
                                    >
                                        {icon}
                                    </a>
                                </MobileMenuIcon>

                            ))
                        }


                    </MobileMenuIconContainer>
                </motion.div>
            </MobileMenuContainer>
        </motion.div>
    )
}


export { MobileNavMenu }
