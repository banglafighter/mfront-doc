import ComponentViewer, {PropsDetails} from "../../component/component-viewer";
import {Button} from "mfront-ui";
import {CircleFadingArrowUpIcon} from "lucide-react";

function getButtonCodes() {
    return (
        `
        <>
            <div className={"mt-5 mb-1 font-medium"}>Variant</div>
            <div className={"flex gap-2"}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="link">Link</Button>
                <Button variant="info">Info</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="warning">Warning</Button>
            </div>

            <div className={"mt-5 mb-1 font-medium"}>Size</div>
            <div className={"flex gap-2 items-center"}>
                <Button variant="primary" size={"lg"}>lg</Button>
                <Button variant="primary" size={"default"}>default</Button>
                <Button variant="primary" size={"sm"}>sm</Button>
                <Button variant="primary" size={"xs"}>xs</Button>
            </div>

            <div className={"mt-5 mb-1 font-medium"}>Size for Icon</div>
            <div className={"flex gap-2 items-center"}>
                <Button variant="outline" size="iconXs"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="iconSm"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="icon"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="iconLg"> <CircleFadingArrowUpIcon/> </Button>
            </div>
        </>
        `
    )
}

function getButtonUI() {
    return (
        <>
            <div className={"mt-5 mb-1 font-medium"}>Variant</div>
            <div className={"flex gap-2"}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="success">Success</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="link">Link</Button>
                <Button variant="info">Info</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="warning">Warning</Button>
            </div>

            <div className={"mt-5 mb-1 font-medium"}>Size</div>
            <div className={"flex gap-2 items-center"}>
                <Button variant="primary" size={"lg"}>lg</Button>
                <Button variant="primary" size={"default"}>default</Button>
                <Button variant="primary" size={"sm"}>sm</Button>
                <Button variant="primary" size={"xs"}>xs</Button>
            </div>

            <div className={"mt-5 mb-1 font-medium"}>Size for Icon</div>
            <div className={"flex gap-2 items-center"}>
                <Button variant="outline" size="iconXs"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="iconSm"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="icon"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="iconLg"> <CircleFadingArrowUpIcon/> </Button>
            </div>
        </>
    )
}
function getButtonProps() {
    const props: PropsDetails[] = [
        {propsName: "variant", propsType: ""}
    ]
    return props
}


export default function ComButtonPage() {
    return (
        <div className={"flex flex-col gap-3"}>
            <ComponentViewer
                title='Button'
                subtitle='Button demo and codes'
                ui={getButtonUI()}
                codes={getButtonCodes()}
            />
        </div>
    )
}