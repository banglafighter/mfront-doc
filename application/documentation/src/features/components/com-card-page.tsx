import ComponentViewer from "../../component/component-viewer";
import {Card, CardAction, CardBody, CardFooter, CardHeader, CardSubTitle, CardTitle} from "mfront-ui";

function getUI() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardSubTitle>Card Sub Title</CardSubTitle>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardBody>
                Card Body
            </CardBody>
            <CardFooter>
                Card Footer
            </CardFooter>
        </Card>
    )
}

function getCodes() {
    return (
       `
<Card>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardSubTitle>Card Sub Title</CardSubTitle>
        <CardAction>Card Action</CardAction>
    </CardHeader>
    <CardBody>
        Card Body
    </CardBody>
    <CardFooter>
        Card Footer
    </CardFooter>
</Card>
       `
    )
}


export default function ComCardPage() {
    return (
        <>
            <ComponentViewer
                title='Card'
                subtitle='Card demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </>
    )
}