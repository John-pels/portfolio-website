import { projects } from "@src/content/projects"
import { cloudinaryImage } from "@src/utils"
import { SlideChild, SlideInWrapper } from "../Animation"
import { LaunchButton } from "../Launch"
import { GridHeading, GridSubHeading, GridTitle, ProjectGrid, ProjectItemContainer, ProjectItemContent, ProjectItemTitle, Wrapper } from "./style"



const SelectedProjects = () => {
    return (
        <SlideInWrapper>
            <Wrapper>
                <ProjectGrid id="works">
                    <GridTitle>
                        <SlideChild y={50} stiffness={80}>
                            <GridHeading> Selected Projects</GridHeading>
                            <GridSubHeading>
                                As a meticulous developer, everything matters. I firmly believe the whole is greater <br /> than the sum of its parts. This is why I ensure my work is fast, responsive, intuitive and <br /> creative. Check out some of my projects here:
                            </GridSubHeading>
                        </SlideChild>
                    </GridTitle>


                    {
                        projects.map(({ index, title, liveUrl, image }) => (
                            <ProjectItemContainer key={index}>
                                <ProjectItemTitle>{title}</ProjectItemTitle>
                                <SlideChild y={-50} stiffness={80}>
                                    <ProjectItemContent>
                                        <img src={cloudinaryImage(image)} alt={title} />
                                        <LaunchButton text1="launch" text2="app" url={liveUrl} />
                                    </ProjectItemContent>
                                </SlideChild>
                            </ProjectItemContainer>
                        ))
                    }

                </ProjectGrid>
            </Wrapper>
        </SlideInWrapper >

    )
}


export { SelectedProjects }
