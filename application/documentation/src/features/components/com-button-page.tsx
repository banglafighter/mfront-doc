import ComponentViewer from "../../component/component-viewer";
import {Button, ButtonGroup, Loader, Separator} from "mfront-ui";
import {ArrowUpIcon, CircleFadingArrowUpIcon, Move} from "lucide-react";


export default function ComButtonPage() {
    const getCodes = () => {
        return (
           `
           <Button variant="primary">Primary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Success</Button>
                <Button variant="link">Link</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="info">Info</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="secondary">Secondary</Button>

                <Button variant="outline" size="icon"> <ArrowUpIcon/> </Button>

                <Button variant="primary" size="icon"> <ArrowUpIcon/> </Button>
                <Button variant="danger" size="icon"> <ArrowUpIcon/> </Button>

                <Button variant="primary">Size primary</Button>
                <Button variant="primary" size={"lg"}>Size lg</Button>
                <Button variant="primary" size={"sm"}>Size sm</Button>
                <Button variant="primary" size={"xs"}>Size xs</Button>
           `
        )
    }

    const getUI = () => {
        return (
            <div className="flex flex-wrap items-center gap-2 md:flex-row">

                <Button variant="primary">Primary</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="success">Success</Button>
                <Button variant="link">Link</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="info">Info</Button>
                <Button variant="warning">Warning</Button>
                <Button variant="secondary">Secondary</Button>

                <Button variant="outline" size="icon"> <ArrowUpIcon/> </Button>

                <Button variant="primary" size="icon"> <ArrowUpIcon/> </Button>
                <Button variant="danger" size="icon"> <ArrowUpIcon/> </Button>

                <Button variant="primary">Size primary</Button>
                <Button variant="primary" size={"lg"}>Size lg</Button>
                <Button variant="primary" size={"sm"}>Size sm</Button>
                <Button variant="primary" size={"xs"}>Size xs</Button>

                <Button variant="outline" size="iconXs"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="iconSm"> <CircleFadingArrowUpIcon/> </Button>
                <Button variant="outline" size="iconLg"> <CircleFadingArrowUpIcon/> </Button>

                <Button variant="outline" size="sm">
                    <CircleFadingArrowUpIcon/> New Branch
                </Button>

                <Button variant="danger" size="icon" className="rounded-full">
                    <ArrowUpIcon/>
                </Button>

                <Separator/>

                <ButtonGroup>
                    <Button variant="outline">Archive</Button>
                    <Button variant="outline">Report</Button>
                </ButtonGroup>

                <ButtonGroup orientation={"vertical"}>
                    <Button variant="outline">Archive</Button>
                    <Button variant="outline">Report</Button>
                </ButtonGroup>

                <ButtonGroup orientation={"vertical"}>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                </ButtonGroup>

                <ButtonGroup orientation={"horizontal"}>
                    <Button variant="danger">Danger</Button>
                    <Button variant="success">Success</Button>
                </ButtonGroup>

                <Button variant="outline">
                    <Loader size={"default"} />
                    Generating
                </Button>

            </div>
        )
    }
    return (
        <div className={"flex flex-col gap-3"}>
            <ComponentViewer
                title='Button'
                subtitle='Button demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
            <ComponentViewer
                title='Button'
                subtitle='Button demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </div>
    )
}