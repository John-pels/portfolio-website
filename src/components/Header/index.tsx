import { SlideChild, SlideInWrapper } from "../Animation"
import { Navbar } from "../Navbar"
import { SelectedProjects } from "./projects"
import { HeaderAboutParagraph, HeaderAboutTitle, HeaderContainer, HeaderContent, HeaderContentItem, HeaderHeroText } from "./style"



const Header = () => {
    return (
        <HeaderContainer>
            <Navbar />
            <SlideInWrapper scrollTriggered stagger={0.3}>
                <HeaderContent>
                    <HeaderContentItem>
                        <HeaderHeroText>
                            <SlideChild x={100} alt stiffness={80}>
                                I develop <br />
                                innovative and <br />
                            </SlideChild>

                            <SlideChild x={-100} alt stiffness={80}>
                                intuitive softwares.
                            </SlideChild>
                        </HeaderHeroText>
                    </HeaderContentItem>
                    <HeaderContentItem>
                        <HeaderAboutTitle>About Me</HeaderAboutTitle>
                        <SlideChild y={-50} stiffness={80}>
                            <HeaderAboutParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse commodo varius nunc sit amet sollicitudin.
                                Phasellus varius efficitur scelerisque.</HeaderAboutParagraph>
                            <HeaderAboutParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse commodo varius nunc sit amet sollicitudin.
                                Phasellus varius efficitur scelerisque.</HeaderAboutParagraph>
                        </SlideChild>

                        <SlideChild y={50} stiffness={80}>
                            <HeaderAboutParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse commodo varius nunc sit amet sollicitudin.
                                Phasellus varius efficitur scelerisque.</HeaderAboutParagraph>
                        </SlideChild>
                    </HeaderContentItem>
                </HeaderContent>
            </SlideInWrapper>
            <SelectedProjects />
        </HeaderContainer>
    )
}


export { Header }
