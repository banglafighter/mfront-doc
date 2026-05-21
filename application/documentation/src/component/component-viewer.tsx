import {type WebTabProps} from "mmcore-ui";
import {
    Card,
    CardBody,
    CardHeader,
    CardSubTitle,
    CardTitle,
    Separator,
    Tab, Table, TBody, TD, TH, THead, TR,
} from "mfront-ui";
import {UINode} from "mmcore";
import {CodeEditor} from "@react-code-view/react";

export interface PropsDetails {
    propsName: string
    propsType?: string
    hints?: string
}

interface ComponentViewerProps {
    title: string;
    subtitle?: string
    codes: string
    ui?: UINode
    language?: string
    props?: PropsDetails[]
}


export default function ComponentViewer({title, subtitle, codes, ui, props, language = "jsx"} : ComponentViewerProps) {
    const tabData: WebTabProps = {
        items: [
            {
                labelContent: "UI",
                tabId: "ui",
                isHidden: !ui,
                component: (
                    <div className={"rounded-sm"}>
                        <Separator className={"mb-3"}/>
                        {ui}
                    </div>
                )
            },
            {
                labelContent: "Codes",
                tabId: "codes",
                component: (
                    <div className={"rounded-sm"}>
                        <Separator className={"mb-3"}/>
                        <CodeEditor
                            language={language}
                            code={codes}
                            className={"text-[18px]"}
                        />
                    </div>
                )
            },
            {
                labelContent: "Props",
                tabId: "props",
                isHidden: true,
                component: (
                    <div className={"rounded-sm"}>
                        <Separator className={"mb-3"}/>
                        <Table>
                            <THead>
                                <TR>
                                    <TH>Prop</TH><TH>Type</TH><TH>Hints</TH>
                                </TR>
                            </THead>
                            <TBody>
                                {props?.map((row: PropsDetails, index: number) =>(
                                    <TR key={index}>
                                        <TD>{row.propsName}</TD><TD>{row.propsType}</TD><TD>{row.hints}</TD>
                                    </TR>
                                ))}
                            </TBody>
                        </Table>
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