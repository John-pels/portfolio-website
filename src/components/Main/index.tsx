import { useState } from "react";
import { Tab } from "../Tab";
import { Courses } from "./courses";
import { WorkExperience } from "./experience";
import { Skills } from "./skills";
import { MainContainer, MainHeading, MainWrapper } from "./style"


const tabs = [
    { tabTitle: 'Work experience', component: WorkExperience },
    { tabTitle: 'Courses', component: Courses },
    { tabTitle: 'Skills & Languages', component: Skills },
];

const MainContents = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <MainContainer>
            <MainWrapper>
                <MainHeading>My journey so far...</MainHeading>
                <Tab
                    tabList={tabs}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
            </MainWrapper>

        </MainContainer>
    )
}

export { MainContents }
