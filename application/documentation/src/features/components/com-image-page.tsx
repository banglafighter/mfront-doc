import ComponentViewer from "../../component/component-viewer";
import {Image} from "mfront-ui";

function getUI() {
    return (
        <>
            <div className={"mt-5 mb-1 font-medium"}>Size</div>
            <div className={"m-4 flex gap-3"}>
                <Image avatar={"default"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
            </div>

            <div className={"mt-5 mb-1 font-medium"}>Size</div>
            <div className={"m-4 flex gap-3"}></div>

            <div className={"mt-5 mb-1 font-medium"}>Size</div>
            <div className={"m-4 flex gap-3"}></div>

            <div className={"mt-5 mb-1 font-medium"}>Size</div>
            <div className={"m-4 flex gap-3"}></div>
        </>
    )
}

function getCodes() {
    return (
       ``
    )
}


export default function ComImagePage() {
    return (
        <>
            <ComponentViewer
                title='Image'
                subtitle='Image demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </>
    )
}