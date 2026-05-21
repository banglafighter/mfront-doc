import ComponentViewer from "../../component/component-viewer";
import {Image} from "mfront-ui";

function getUI() {
    return (
        <>
            <div className={"mt-5 mb-1 font-medium"}>Avatar</div>
            <div className={"m-4 flex gap-3"}>
                <Image avatar={"small"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
                <Image avatar={"default"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
                <Image avatar={"medium"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
                <Image avatar={"large"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
                <Image avatar={"large"} fallback={"TM"} alt={"Profile"} src={"https://invalid-url"} />
            </div>

            <div className={"mt-12 mb-1 font-medium"}>Thumbnail</div>
            <div className={"m-4 flex gap-3"}>
                <Image thumb={"card"} fallback={"card"} alt={"Thumbnail"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
                <Image thumb={"blog"} fallback={"blog"} alt={"Thumbnail"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
                <Image thumb={"gallery"} fallback={"gallery"} alt={"Thumbnail"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
                <Image thumb={"product"} fallback={"product"} alt={"Thumbnail"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
            </div>

            <div className={"mt-12 mb-1 font-medium"}>Shape</div>
            <div className={"m-4 flex gap-3"}>
                <Image shape={"square"} thumb={"card"} fallback={"card"} alt={"Shape"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
                <Image shape={"circle"} thumb={"card"} fallback={"card"} alt={"Shape"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
                <Image shape={"rounded"} thumb={"card"} fallback={"card"} alt={"Shape"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
            </div>

            <div className={"mt-12 mb-1 font-medium"}>Flexible</div>
            <div className={"m-4 flex gap-3"}>
                <Image className={"size-99"} fallback={"card"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
                <Image width={"95"} fallback={"card"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
                <Image ratio={"9/16"} fallback={"card"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
            </div>
        </>
    )
}

function getCodes() {
    return (
       `
<>
    <div className={"mt-5 mb-1 font-medium"}>Avatar</div>
    <div className={"m-4 flex gap-3"}>
        <Image avatar={"small"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
        <Image avatar={"default"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
        <Image avatar={"medium"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
        <Image avatar={"large"} fallback={"TM"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/1875791?v=4"} />
        <Image avatar={"large"} fallback={"TM"} alt={"Profile"} src={"https://invalid-url"} />
    </div>

    <div className={"mt-12 mb-1 font-medium"}>Thumbnail</div>
    <div className={"m-4 flex gap-3"}>
        <Image thumb={"card"} fallback={"card"} alt={"Thumbnail"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
        <Image thumb={"blog"} fallback={"blog"} alt={"Thumbnail"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
        <Image thumb={"gallery"} fallback={"gallery"} alt={"Thumbnail"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
        <Image thumb={"product"} fallback={"product"} alt={"Thumbnail"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
    </div>

    <div className={"mt-12 mb-1 font-medium"}>Shape</div>
    <div className={"m-4 flex gap-3"}>
        <Image shape={"square"} thumb={"card"} fallback={"card"} alt={"Shape"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
        <Image shape={"circle"} thumb={"card"} fallback={"card"} alt={"Shape"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
        <Image shape={"rounded"} thumb={"card"} fallback={"card"} alt={"Shape"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
    </div>

    <div className={"mt-12 mb-1 font-medium"}>Flexible</div>
    <div className={"m-4 flex gap-3"}>
        <Image className={"size-99"} fallback={"card"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
        <Image width={"95"} fallback={"card"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
        <Image ratio={"9/16"} fallback={"card"} alt={"Profile"} src={"https://avatars.githubusercontent.com/u/110406088?v=4"} />
    </div>
</>
       `
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