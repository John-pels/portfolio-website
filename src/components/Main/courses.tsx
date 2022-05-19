import { courses } from "@src/content/courses"
import { SlideChild, SlideInWrapper } from "../Animation"
import { FlexBox, FlexBoxItem, FlexTitle, Wrap } from "./style"


const Courses = () => {
    return (
        <>
            <SlideInWrapper scrollTriggered stagger={0.3}>
                {
                    courses.map(({ icon, platform, title, date }, index) => (
                        <SlideChild y={50} stiffness={80} key={index}>
                            <FlexBox >
                                <FlexBoxItem>
                                    <Wrap>
                                        {icon()}
                                        <FlexTitle>{platform}</FlexTitle>
                                    </Wrap>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <FlexTitle>{title}</FlexTitle>
                                </FlexBoxItem>
                                <FlexBoxItem>
                                    <FlexTitle>{date}</FlexTitle>
                                </FlexBoxItem>
                            </FlexBox>
                        </SlideChild>
                    ))
                }
            </SlideInWrapper>
        </>
    )
}

export { Courses }
