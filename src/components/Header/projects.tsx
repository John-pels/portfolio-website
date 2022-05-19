import { projects } from "@src/content/projects"
import { cloudinaryImage } from "@src/utils"
import { SlideChild, SlideInWrapper } from "../Animation"
import { LaunchButton } from "../Launch"
import { GridHeading, GridSubHeading, GridTitle, ProjectGrid, ProjectItemContainer, ProjectItemContent, ProjectItemTitle, Wrapper } from "./style"



const SelectedProjects = () => {
    return (
        <SlideInWrapper>
            <Wrapper>
                <SlideChild y={50}>
                    <ProjectGrid>
                        <GridTitle>
                            <GridHeading> Selected Projects</GridHeading>
                            <GridSubHeading>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> commodo
                                varius nunc sit amet sollicitudin. Phasellus varius efficitur <br /> scelerisque.
                            </GridSubHeading>
                        </GridTitle>

                        {
                            projects.map(({ index, title, liveUrl, image }) => (
                                <ProjectItemContainer key={index}>
                                    <ProjectItemTitle>{title}</ProjectItemTitle>
                                    <ProjectItemContent>
                                        <img src={cloudinaryImage(image)} alt={title} />
                                        <LaunchButton text1="launch" text2="app" url={liveUrl} />
                                    </ProjectItemContent>
                                </ProjectItemContainer>
                            ))
                        }

                    </ProjectGrid>
                </SlideChild>
            </Wrapper>
        </SlideInWrapper>

    )
}


export { SelectedProjects }
