import ComponentViewer from "../../../component/component-viewer";
import {Button, Card, CardBody, DialogGenerator, useDialogEngine} from "mfront-ui";
import {DialogEngineOpenProps} from "mmcore-ui";
import {OctagonAlert} from "lucide-react";


function getUI() {
    const dialogEngine = useDialogEngine()

    const dialogContent = () => {
        return (
            <Card>
                <CardBody className={"rounded-none"}>
                    Content of the dialog, you can put anything here
                </CardBody>
            </Card>
        )
    }

    const openDialogConditionally = (inputProps?: DialogEngineOpenProps) => {
        const props: Record<string, string> = {
            title: "Dialog Title Number " + Math.floor(Math.random() * 1000),
            subTitle: "This is dialog sub title",
        }

        if (inputProps) {
            Object.assign(props, inputProps)
        }
        dialogEngine.open(props)
    }

    return (
        <>
            <DialogGenerator engine={dialogEngine} body={dialogContent()}/>

            <div className={"flex justify-center gap-2"}>
                <Button variant={"primary"} onClick={() =>openDialogConditionally()}>Open Dialog</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({dialogSize: "medium"})}>Medium</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({dialogSize: "large"})}>Large</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({dialogSize: "full"})}>Full Screen</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({disableBlockClose: true})}>Disable Click Close</Button>
            </div>

            <div className={"mt-8 mb-1 font-medium"}>Drawer</div>
            <div className={"flex gap-2"}>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({type: "drawer"})}>Right</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({type: "drawer", slideFrom: "left"})}>Left</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({type: "drawer", slideFrom: "top"})}>Top</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({type: "drawer", slideFrom: "bottom"})}>Bottom</Button>
            </div>

            <div className={"mt-8 mb-1 font-medium"}>Alert</div>
            <div className={"flex gap-2"}>
                <Button variant={"danger"} onClick={() =>
                    dialogEngine.confirm({
                        body: "Are you sure want to delete this?",
                        confirmButtonLabel: "Yes",
                        confirmButtonAction: (data: unknown) => {
                            alert("Confirmed")
                        }
                    })
                }>
                    Open Confirm
                </Button>

                <Button variant={"secondary"} onClick={() =>
                    dialogEngine.confirm({
                        dialogSize: "small",
                        body: (
                            <div className={"mt-3 mb-3 flex"}>
                                <OctagonAlert className={"mr-3"}/>
                                Are you sure want to delete this?
                            </div>),
                        confirmButtonLabel: "Yes",
                        confirmButtonAction: (data: unknown) => {
                            alert("Confirmed")
                        },
                        footerActionButtons: [
                            {
                                label: "Delete all",
                                variant: "danger",
                                onClick: (data: unknown) => {
                                    alert("Delete All")
                                    dialogEngine.close()
                                }
                            }
                        ]
                    })
                }>
                    Open Advanced Confirm
                </Button>

            </div>

        </>
    )
}

function getCodes() {
    return (
        `
function getUI() {
    const dialogEngine = useDialogEngine()

    const dialogContent = () => {
        return (
            <Card>
                <CardBody className={"rounded-none"}>
                    Content of the dialog, you can put anything here
                </CardBody>
            </Card>
        )
    }

    const openDialogConditionally = (inputProps?: DialogEngineOpenProps) => {
        const props: Record<string, string> = {
            title: "Dialog Title Number " + Math.floor(Math.random() * 1000),
            subTitle: "This is dialog sub title",
        }

        if (inputProps) {
            Object.assign(props, inputProps)
        }
        dialogEngine.open(props)
    }

    return (
        <>
            <DialogGenerator engine={dialogEngine} body={dialogContent()}/>

            <div className={"flex justify-center gap-2"}>
                <Button variant={"primary"} onClick={() =>openDialogConditionally()}>Open Dialog</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({dialogSize: "medium"})}>Medium</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({dialogSize: "large"})}>Large</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({dialogSize: "full"})}>Full Screen</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({disableBlockClose: true})}>Disable Click Close</Button>
            </div>

            <div className={"mt-8 mb-1 font-medium"}>Drawer</div>
            <div className={"flex gap-2"}>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({type: "drawer"})}>Right</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({type: "drawer", slideFrom: "left"})}>Left</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({type: "drawer", slideFrom: "top"})}>Top</Button>
                <Button variant={"primary"} onClick={() =>openDialogConditionally({type: "drawer", slideFrom: "bottom"})}>Bottom</Button>
            </div>

            <div className={"mt-8 mb-1 font-medium"}>Alert</div>
            <div className={"flex gap-2"}>
                <Button variant={"danger"} onClick={() =>
                    dialogEngine.confirm({
                        body: "Are you sure want to delete this?",
                        confirmButtonLabel: "Yes",
                        confirmButtonAction: (data: unknown) => {
                            alert("Confirmed")
                        }
                    })
                }>
                    Open Confirm
                </Button>

                <Button variant={"secondary"} onClick={() =>
                    dialogEngine.confirm({
                        dialogSize: "small",
                        body: (
                            <div className={"mt-3 mb-3 flex"}>
                                <OctagonAlert className={"mr-3"}/>
                                Are you sure want to delete this?
                            </div>),
                        confirmButtonLabel: "Yes",
                        confirmButtonAction: (data: unknown) => {
                            alert("Confirmed")
                        },
                        footerActionButtons: [
                            {
                                label: "Delete all",
                                variant: "danger",
                                onClick: (data: unknown) => {
                                    alert("Delete All")
                                    dialogEngine.close()
                                }
                            }
                        ]
                    })
                }>
                    Open Advanced Confirm
                </Button>

            </div>

        </>
    )
}
        `
    )
}


export default function ComDialogView() {
    return (
        <>
            <ComponentViewer
                title='Dialog'
                subtitle='Dialog demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </>
    )
}