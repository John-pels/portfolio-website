import { writings } from "@src/content/writings"
import { cloudinaryImage } from "@src/utils"
import { SlideChild, SlideInWrapper } from "../Animation"
import { GridHeading, GridSubHeading, GridTitle, ProjectGrid as Grid, ProjectItemContent as BlogContent, Wrapper } from "../Header/style"
import { LaunchButton } from "../Launch"
import { Blog, BlogDescription, BlogTitle, WritingContainer } from "./style"



const TechnicalWritingContent = () => {

    return (
        <WritingContainer>
            <SlideInWrapper>
                <Wrapper>
                    <Grid>
                        <SlideChild y={50} stiffness={80}>
                            <GridTitle>
                                <GridHeading>Recent Writings</GridHeading>
                                <GridSubHeading>
                                    Documenting the process is just as important as building the project.
                                    Occasionally, <br /> I share some valuable lessons I’ve learnt so far in my career. Here are some <br /> of my most recent publications.
                                </GridSubHeading>
                            </GridTitle>
                        </SlideChild>

                        {
                            writings.map(({ index, title, description, image, liveUrl }) => (
                                <Blog key={index}>
                                    <SlideChild y={-50} stiffness={80}>
                                        <BlogContent>
                                            <img src={cloudinaryImage(image)} alt={title} />
                                            <LaunchButton text1="Read" text2="article" url={liveUrl} />
                                        </BlogContent>

                                        <a href={liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Article">
                                            <BlogTitle>{title}</BlogTitle>
                                            <BlogDescription >{description}</BlogDescription>
                                        </a>
                                    </SlideChild>
                                </Blog>
                            ))
                        }

                    </Grid>
                </Wrapper>
            </SlideInWrapper>
        </WritingContainer>
    )
}

export { TechnicalWritingContent }
