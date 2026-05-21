import ComponentViewer from "../../component/component-viewer";
import {Button, toast} from "mfront-ui";

function getUI() {
    return (
        <div className={"flex gap-2"}>
            <Button variant={"danger"} onClick={() => {
                toast({
                    message: "Something went wrong!",
                    type: "error",
                    transition: "flip"
                })
            }}>
                Error
            </Button>

            <Button variant={"success"} onClick={() => {
                toast({
                    message: "Your request has been submitted successfully!",
                    type: "success",
                    transition: "zoom"
                })
            }}>
                Success
            </Button>

            <Button variant={"info"} onClick={() => {
                toast({
                    message: "For your kind information!",
                    type: "info",
                    transition: "slide"
                })
            }}>
                Info
            </Button>

            <Button variant={"warning"} onClick={() => {
                toast({
                    message: "This is a warning!",
                    type: "warning",
                    transition: "bounce",
                    position: "bottom"
                })
            }}>
                Warning
            </Button>

            <Button variant={"primary"} onClick={() => {
                toast({
                    message: "This is a Top Right positioned warning!",
                    type: "warning",
                    transition: "bounce",
                    position: "topRight"
                })
            }}>
                Top Right
            </Button>

            <Button variant={"primary"} onClick={() => {
                toast({
                    message: "This is a Bottom Right positioned!",
                    type: "success",
                    transition: "bounce",
                    position: "bottomRight"
                })
            }}>
                Bottom Right
            </Button>

            <Button variant={"primary"} onClick={() => {
                toast({
                    message: "This is a Top Left positioned warning!",
                    type: "warning",
                    transition: "bounce",
                    position: "topLeft"
                })
            }}>
                Top Left
            </Button>

            <Button variant={"primary"} onClick={() => {
                toast({
                    message: "This is a Bottom Left positioned!",
                    type: "success",
                    transition: "bounce",
                    position: "bottomLeft"
                })
            }}>
                Bottom Left
            </Button>

        </div>
    )
}

function getCodes() {
    return (
        `
function getUI() {
    return (
        <div className={"flex gap-2"}>
            <Button variant={"danger"} onClick={() => {
                toast({
                    message: "Something went wrong!",
                    type: "error",
                    transition: "flip"
                })
            }}>
                Error
            </Button>

            <Button variant={"success"} onClick={() => {
                toast({
                    message: "Your request has been submitted successfully!",
                    type: "success",
                    transition: "zoom"
                })
            }}>
                Success
            </Button>

            <Button variant={"info"} onClick={() => {
                toast({
                    message: "For your kind information!",
                    type: "info",
                    transition: "slide"
                })
            }}>
                Info
            </Button>

            <Button variant={"warning"} onClick={() => {
                toast({
                    message: "This is a warning!",
                    type: "warning",
                    transition: "bounce",
                    position: "bottom"
                })
            }}>
                Warning
            </Button>

            <Button variant={"primary"} onClick={() => {
                toast({
                    message: "This is a Top Right positioned warning!",
                    type: "warning",
                    transition: "bounce",
                    position: "topRight"
                })
            }}>
                Top Right
            </Button>

            <Button variant={"primary"} onClick={() => {
                toast({
                    message: "This is a Bottom Right positioned!",
                    type: "success",
                    transition: "bounce",
                    position: "bottomRight"
                })
            }}>
                Bottom Right
            </Button>

            <Button variant={"primary"} onClick={() => {
                toast({
                    message: "This is a Top Left positioned warning!",
                    type: "warning",
                    transition: "bounce",
                    position: "topLeft"
                })
            }}>
                Top Left
            </Button>

            <Button variant={"primary"} onClick={() => {
                toast({
                    message: "This is a Bottom Left positioned!",
                    type: "success",
                    transition: "bounce",
                    position: "bottomLeft"
                })
            }}>
                Bottom Left
            </Button>

        </div>
    )
}
       `
    )
}


export default function ComToastPage() {
    return (
        <>
            <ComponentViewer
                title='Toast'
                subtitle='Toast demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </>
    )
}