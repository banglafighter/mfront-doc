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


export default function ComDropdownPage() {
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