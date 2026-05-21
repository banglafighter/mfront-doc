import ComponentViewer from "../../component/component-viewer";
import {Card, CardBody, CardHeader, CardSubTitle, CardTitle, Tab} from "mfront-ui";
import {WebTabProps} from "mmcore-ui";

function getUI() {

    function Component({name}: {name: string}) {
        return (
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardSubTitle>
                        View your key metrics and recent project activity. Track progress
                        across all your active projects.
                    </CardSubTitle>
                </CardHeader>
                <CardBody className="text-sm text-muted-foreground">
                    You have 12 active projects and 3 pending tasks.
                </CardBody>
            </Card>
        )
    }

    const tabData: WebTabProps = {
        items: [
            {labelContent: "Overview", tabId: "overview", component: <Component name={"Overview"}/>},
            {labelContent: "Analytics", tabId: "analytics", component: <Component name={"Analytics"}/>},
            {labelContent: "Reports", tabId: "reports", component: <Component name={"Reports"}/>},
        ]
    }

    return (
        <>
            <Tab {...tabData} defaultTabId={"reports"} orientation={"horizontal"} selectType={"line"} className={"mb-12"}/>
            <Tab {...tabData} defaultTabId={"reports"} orientation={"horizontal"} selectType={"default"} className={"mb-12"}/>
            <Tab {...tabData} defaultTabId={"overview"} orientation={"vertical"} selectType={"line"} className={"mb-12"}/>
            <Tab {...tabData} defaultTabId={"overview"} orientation={"vertical"} selectType={"default"} className={"mb-12"}/>
        </>
    )
}

function getCodes() {
    return (
       ``
    )
}


export default function ComTabPage() {
    return (
        <>
            <ComponentViewer
                title='Tab'
                subtitle='Tab demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </>
    )
}