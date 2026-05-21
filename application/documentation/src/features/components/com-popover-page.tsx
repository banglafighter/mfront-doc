import ComponentViewer from "../../component/component-viewer";
import {Button, Popover} from "mfront-ui";

function getUI() {
    return (
        <>
            <Popover
                trigger={<Button variant="primary">Open</Button>}
                title={"Popover Title"}
                subTitle={"Popover Sub Title here will be specified"}
                position={"center"}
                body={<>Body</>}
            />
        </>
    )
}

function getCodes() {
    return (
       `
<>
    <Popover
        trigger={<Button variant="primary">Open</Button>}
        title={"Popover Title"}
        subTitle={"Popover Sub Title here will be specified"}
        position={"center"}
        body={<>Body</>}
    />
</>
       `
    )
}


export default function ComPopoverPage() {
    return (
        <>
            <ComponentViewer
                title='Popover'
                subtitle='Popover demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </>
    )
}