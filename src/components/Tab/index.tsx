import { FC } from "react";
import { TabContainer, TabContent, TabHeader, TabPane } from "./style";


type eachTabType = {
    tabTitle: string;
    component: any;
}

interface ITab {
    tabList: Array<eachTabType>;
    activeTab: number;
    setActiveTab: (val: number) => void;
}


const Tab: FC<ITab> = ({ tabList, activeTab, setActiveTab }) => {
    return (
        <TabContainer>
            <TabHeader>
                {tabList.map((tab: any, index: number) => (
                    <TabPane
                        key={index}
                        onClick={() => setActiveTab(index)}
                        active={index === activeTab}
                    >
                        {tab.tabTitle}
                    </TabPane>
                ))}
            </TabHeader>
            <TabContent>
                {tabList.map(
                    (tab, index) =>
                        activeTab === index && (
                            <tab.component setActiveTab={setActiveTab} key={index} />

                        )
                )}
            </TabContent>
        </TabContainer>
    )
}

export { Tab }
