import { SlideChild, SlideInWrapper } from "../Animation"
import { Navbar } from "../Navbar"
import { SelectedProjects } from "./projects"
import { HeaderAboutParagraph, HeaderAboutTitle, HeaderContainer, HeaderContent, HeaderContentItem, HeaderHeroText, Wrapper } from "./style"



const Header = () => {
    return (
        <HeaderContainer>
            <Navbar />
            <SlideInWrapper scrollTriggered stagger={0.3}>
                <Wrapper>
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
                                <HeaderAboutParagraph>Hello! 👋 I’m John O. Ajeigbe,
                                    a seasoned Software Engineer and Technical Writer, John brings a wealth of experience in developing robust software solutions and articulating complex technical concepts. With a strong foundation in multiple programming languages and a flair for leading cross-functional teams, John excels in architecting front-end and back-end systems that enhance user experience and operational efficiency. <br /> <br /> His strategic approach to software engineering, coupled with his commitment to innovation and excellence, positions him as a valuable asset to any organization seeking senior-level expertise. </HeaderAboutParagraph>
                                <HeaderAboutParagraph>The internet is my fun place and my oyster. You’ll always
                                    find me contributing my knowledge, skills and experience to developing
                                    projects that make our lives easier and better. </HeaderAboutParagraph>
                            </SlideChild>

                            <SlideChild y={50} stiffness={80}>
                                <HeaderAboutParagraph>Perhaps my favorite pastime is teaching, as I dedicate time
                                    to mentoring and imparting knowledge to the next generation of promising
                                    tech talent on the continent. </HeaderAboutParagraph>
                            </SlideChild>
                        </HeaderContentItem>
                    </HeaderContent>
                </Wrapper>
            </SlideInWrapper>
            <SelectedProjects />
        </HeaderContainer>
    )
}


export { Header }
