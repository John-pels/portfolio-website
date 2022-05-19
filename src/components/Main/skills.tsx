import { skills } from "@src/content/skills"
import { SlideChild, SlideInWrapper } from "../Animation"
import { FlexBox, FlexBoxItem, FlexTitle } from "./style"


const Skills = () => {
    return (
        <>
            <SlideInWrapper scrollTriggered stagger={0.3}>

                {
                    skills.map(({ one, two, three, borderBottom }, index) => (
                        <SlideChild y={50} stiffness={80} key={index}>
                            <FlexBox gap={0} border={borderBottom}>
                                <FlexBoxItem >
                                    <FlexTitle>{one}</FlexTitle>
                                </FlexBoxItem>
                                <FlexBoxItem >
                                    <FlexTitle>{two}</FlexTitle>
                                </FlexBoxItem>
                                <FlexBoxItem >
                                    <FlexTitle>{three}</FlexTitle>
                                </FlexBoxItem>
                            </FlexBox>
                        </SlideChild>
                    ))
                }
            </SlideInWrapper>
        </>
    )
}

export { Skills }
