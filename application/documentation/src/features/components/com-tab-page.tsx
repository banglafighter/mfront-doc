import ComponentViewer from "../../component/component-viewer";

function getUI() {
    return (
        <></>
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
                title='Button'
                subtitle='Button demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </>
    )
}