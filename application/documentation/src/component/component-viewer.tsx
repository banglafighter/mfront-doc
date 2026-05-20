import {type WebTabProps} from "mmcore-ui";
import {
    Card,
    CardBody,
    CardHeader,
    CardSubTitle,
    CardTitle,
    Separator,
    Tab,
} from "mfront-ui";
import {UINode} from "mmcore";
import CodeView, {CodeEditor} from "@react-code-view/react";

interface ComponentViewerProps {
    title: string;
    subtitle?: string
    codes: string
    ui: UINode
    language?: string
}


export default function ComponentViewer({title, subtitle, codes, ui, language = "jsx"} : ComponentViewerProps) {
    const tabData: WebTabProps = {
        items: [
            {
                labelContent: "UI",
                tabId: "ui",
                component: (
                    <div className={"rounded-sm"}>
                        <Separator/>
                        {ui}
                    </div>
                )
            },
            {
                labelContent: "Codes",
                tabId: "codes",
                component: (
                    <div className={"rounded-sm"}>
                        <Separator/>
                        <CodeEditor
                            language={language}
                            code={codes}
                        />
                    </div>
                )
            },
        ]
    }
    return (
       <Card>
           <CardHeader>
               <CardTitle>{title}</CardTitle>
               {subtitle ? <CardSubTitle>{subtitle}</CardSubTitle> : null}
           </CardHeader>
           <CardBody>
                <Tab {...tabData} defaultTabId={"ui"} orientation={"horizontal"} selectType={"line"} />
           </CardBody>
       </Card>
    )
}