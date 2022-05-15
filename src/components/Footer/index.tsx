import { FooterBrand, FooterContainer, FooterContent, FooterCopyright, FooterItem, FooterText, Wrap } from "./style"
import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import social from "@src/content/social"

export const socials = [
    { icon: <FaEnvelope />, link: social.email, label: 'Email', href: 'mailto:ajeigbejohnolu@gmail.com' },
    { icon: <FaPhoneAlt />, link: social.phone, label: 'FaPhoneAlt', href: 'tel:+2348188974303' },

]


const Footer = () => {

    return (
        <FooterContainer>
            <FooterContent>
                <FooterItem>
                    <FooterBrand>John Ajeigbe</FooterBrand>
                    <FooterCopyright>&copy;{new Date().getFullYear()}
                        {'  '}Design by
                        <a href="https://dribbble.com/Kachieibejih"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Kachi Ibejih">
                            {'  '}   Kachie Ibejih
                        </a>
                    </FooterCopyright>
                </FooterItem>
                <FooterItem>

                    {
                        socials.map(({ icon, link, label, href }, index) => (
                            <FooterText key={index}>
                                {icon}
                                <a href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}>
                                    {link}
                                </a>
                            </FooterText>
                        ))
                    }

                    <Wrap>
                        <a

                            href={social.twitter}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >

                            <FaTwitter />
                        </a>

                        <a

                            href={social.github}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github"
                        >


                            <FaGithub />
                        </a>

                        <a
                            href={social.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >

                            <FaLinkedinIn />
                        </a>
                    </Wrap>
                </FooterItem>
            </FooterContent>
        </FooterContainer>
    )
}


export { Footer }
