import ComponentViewer from "../../component/component-viewer";
import {Loader, Separator} from "mfront-ui";
import {LoaderPinwheel, Move, RefreshCcw} from "lucide-react";

function getUI() {
    return (
        <>
            <div className={"mt-5 mb-2 font-medium"}>Separator</div>
            <Separator className={"mb-2"}/>
              Horizontal Separator
            <Separator className={"mt-2"}/>

            <div className={"h-10 mt-10"}>
                <Separator className={"mb-2"} orientation={"vertical"}/>
            </div>
             Vertical Separator
        </>
    )
}

function getCodes() {
    return (
       `
<>
    <div className={"mt-5 mb-2 font-medium"}>Separator</div>
    <Separator className={"mb-2"}/>
      Horizontal Separator
    <Separator className={"mt-2"}/>

    <div className={"h-10 mt-10"}>
        <Separator className={"mb-2"} orientation={"vertical"}/>
    </div>
     Vertical Separator
</>
       `
    )
}


function getLoaderUI() {
    return (
        <>
            <div className={"mt-5 mb-1 font-medium"}>Size</div>
            <div className={"m-4 flex gap-3"}>
                <Loader size={"xs"} icon={Move}/>
                <Loader size={"sm"} icon={Move}/>
                <Loader size={"default"} icon={Move}/>
                <Loader size={"md"} icon={Move}/>
                <Loader size={"lg"} icon={Move}/>
                <Loader size={"xl"} icon={Move}/>
                <Loader size={"xxl"} icon={Move}/>
            </div>

            <div className={"mt-5 mb-1 font-medium"}>Speed</div>
            <div className={"m-4 flex gap-3"}>
                <Loader size={"xl"} speed={.5} icon={LoaderPinwheel}/>
                <Loader size={"xl"} speed={1} icon={LoaderPinwheel}/>
                <Loader size={"xl"} speed={2} icon={LoaderPinwheel}/>
                <Loader size={"xl"} speed={3} icon={LoaderPinwheel}/>
                <Loader size={"xl"} speed={4} icon={LoaderPinwheel}/>
                <Loader size={"xl"} speed={5} icon={LoaderPinwheel}/>
            </div>

            <div className={"mt-5 mb-1 font-medium"}>Direction</div>
            <div className={"m-4 flex gap-3"}>
                <Loader size={"lg"} speed={5} icon={LoaderPinwheel} direction={"normal"}/>
                <Loader size={"lg"} speed={5} icon={RefreshCcw} direction={"alternate"}/>
                <Loader size={"lg"} speed={5} icon={LoaderPinwheel} direction={"reverse"}/>
            </div>
        </>
    )
}

function getLoaderCodes() {
    return (
       `
<>
    <div className={"mt-5 mb-1 font-medium"}>Size</div>
    <div className={"m-4 flex gap-3"}>
        <Loader size={"xs"} icon={Move}/>
        <Loader size={"sm"} icon={Move}/>
        <Loader size={"default"} icon={Move}/>
        <Loader size={"md"} icon={Move}/>
        <Loader size={"lg"} icon={Move}/>
        <Loader size={"xl"} icon={Move}/>
        <Loader size={"xxl"} icon={Move}/>
    </div>

    <div className={"mt-5 mb-1 font-medium"}>Speed</div>
    <div className={"m-4 flex gap-3"}>
        <Loader size={"xl"} speed={.5} icon={LoaderPinwheel}/>
        <Loader size={"xl"} speed={1} icon={LoaderPinwheel}/>
        <Loader size={"xl"} speed={2} icon={LoaderPinwheel}/>
        <Loader size={"xl"} speed={3} icon={LoaderPinwheel}/>
        <Loader size={"xl"} speed={4} icon={LoaderPinwheel}/>
        <Loader size={"xl"} speed={5} icon={LoaderPinwheel}/>
    </div>

    <div className={"mt-5 mb-1 font-medium"}>Direction</div>
    <div className={"m-4 flex gap-3"}>
        <Loader size={"lg"} speed={5} icon={LoaderPinwheel} direction={"normal"}/>
        <Loader size={"lg"} speed={5} icon={RefreshCcw} direction={"alternate"}/>
        <Loader size={"lg"} speed={5} icon={LoaderPinwheel} direction={"reverse"}/>
    </div>
</>
       `
    )
}


export default function ComCommonPage() {
    return (
        <div className={"flex flex-col gap-5"}>
            <ComponentViewer
                title='Separator'
                subtitle='Separator demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
            <ComponentViewer
                title='Loader'
                subtitle='Loader demo and codes'
                ui={getLoaderUI()}
                codes={getLoaderCodes()}
            />
        </div>
    )
}