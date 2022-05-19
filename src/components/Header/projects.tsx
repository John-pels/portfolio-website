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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br /> commodo
                                varius nunc sit amet sollicitudin. Phasellus varius efficitur <br /> scelerisque.
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
