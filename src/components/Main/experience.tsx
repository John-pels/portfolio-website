import { workExperience } from "@src/content/experience"
import { SlideChild, SlideInWrapper } from "../Animation"
import { FlexBox, FlexBoxItem, FlexParagraph, FlexTitle } from "./style"


const WorkExperience = () => {
    return (
        <>
            <SlideInWrapper scrollTriggered stagger={0.3}>

                {
                    workExperience.map(({ company, location, role, description, duration }, index) => (
                        <SlideChild y={50} stiffness={80} key={index}>
                            <FlexBox>
                                <FlexBoxItem>
                                    <FlexTitle>{company}</FlexTitle>
                                    <FlexTitle>{location}</FlexTitle>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <FlexTitle>{role}</FlexTitle>
                                    <FlexParagraph>{description}</FlexParagraph>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <FlexTitle>{duration}</FlexTitle>
                                </FlexBoxItem>
                            </FlexBox>
                        </SlideChild>
                    ))
                }
            </SlideInWrapper>
        </>
    )
}

export { WorkExperience }
