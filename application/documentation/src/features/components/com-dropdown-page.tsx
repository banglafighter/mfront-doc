import ComponentViewer from "../../component/component-viewer";
import {WebDropdownProps} from "mmcore-ui";
import {Button, Dropdown} from "mfront-ui";
import {CreditCardIcon, SettingsIcon, SquarePen, UserIcon} from "lucide-react";

function getUI() {
    const dropdownProps: WebDropdownProps = {
        trigger: <Button variant="outline">Dropdown</Button>,
        items: [
            {nameContent: "Home", action: (data: any) => console.log("Home")},
            {nameContent: "About", separator: true},
            {
                nameContent: "Team",
                group: [
                    {nameContent: "Members", action: (data: any) => console.log("Members")},
                    {nameContent: "New Members", action: (data: any) => console.log("Members")},
                    {nameContent: "Old Members", action: (data: any) => console.log("Members")},
                ],
                separator: true
            },
            {
                nameContent: "Settings",
                action: (data: any) => console.log("Settings"),
                nested: [
                    {nameContent: "Profile", action: (data: any) => console.log("Profile"), shortcut: "⇧⌘P"},
                    {nameContent: "Billing", action: (data: any) => console.log("Billing"), shortcut: "⌘B"},
                    {nameContent: "Team", action: (data: any) => console.log("Team")},
                    {nameContent: "Subscription", action: (data: any) => console.log("Subscription")},
                    {nameContent: "Keyboard shortcuts", action: (data: any) => console.log("Keyboard shortcuts")},
                    {nameContent: "Theme", action: (data: any) => console.log("Theme")},
                    {nameContent: "Language", action: (data: any) => console.log("Language")},
                    {nameContent: "Notifications", action: (data: any) => console.log("Notifications")},
                    {nameContent: "Advanced", action: (data: any) => console.log("Advanced")},
                ],
                separator: true
            },
            {nameContent: (<><UserIcon/> Profile</>)},
            {nameContent: (<><CreditCardIcon/> Billing</>)},
            {nameContent: (<><SettingsIcon/> Settings</>)},
        ]
    }
    return (
        <div className={"flex gap-4"}>
            <Dropdown {...dropdownProps}/>
            <Dropdown {...dropdownProps} position={"center"} trigger={<Button>Center Position</Button>}/>
            <Dropdown {...dropdownProps} position={"start"} size={"small"} trigger={<Button variant={"warning"}>Start Position</Button>}/>
        </div>
    )
}

function getCodes() {
    return (
       `
function getUI() {
    const dropdownProps: WebDropdownProps = {
        trigger: <Button variant="outline">Dropdown</Button>,
        items: [
            {nameContent: "Home", action: (data: any) => console.log("Home")},
            {nameContent: "About", separator: true},
            {
                nameContent: "Team",
                group: [
                    {nameContent: "Members", action: (data: any) => console.log("Members")},
                    {nameContent: "New Members", action: (data: any) => console.log("Members")},
                    {nameContent: "Old Members", action: (data: any) => console.log("Members")},
                ],
                separator: true
            },
            {
                nameContent: "Settings",
                action: (data: any) => console.log("Settings"),
                nested: [
                    {nameContent: "Profile", action: (data: any) => console.log("Profile"), shortcut: "⇧⌘P"},
                    {nameContent: "Billing", action: (data: any) => console.log("Billing"), shortcut: "⌘B"},
                    {nameContent: "Team", action: (data: any) => console.log("Team")},
                    {nameContent: "Subscription", action: (data: any) => console.log("Subscription")},
                    {nameContent: "Keyboard shortcuts", action: (data: any) => console.log("Keyboard shortcuts")},
                    {nameContent: "Theme", action: (data: any) => console.log("Theme")},
                    {nameContent: "Language", action: (data: any) => console.log("Language")},
                    {nameContent: "Notifications", action: (data: any) => console.log("Notifications")},
                    {nameContent: "Advanced", action: (data: any) => console.log("Advanced")},
                ],
                separator: true
            },
            {nameContent: (<><UserIcon/> Profile</>)},
            {nameContent: (<><CreditCardIcon/> Billing</>)},
            {nameContent: (<><SettingsIcon/> Settings</>)},
        ]
    }
    return (
        <div className={"flex gap-4"}>
            <Dropdown {...dropdownProps}/>
            <Dropdown {...dropdownProps} position={"center"} trigger={<Button>Center Position</Button>}/>
            <Dropdown {...dropdownProps} position={"start"} size={"small"} trigger={<Button variant={"warning"}>Start Position</Button>}/>
        </div>
    )
}

       `
    )
}


export default function ComDropdownPage() {
    return (
        <>
            <ComponentViewer
                title='Dropdown'
                subtitle='Dropdown demo and codes'
                ui={getUI()}
                codes={getCodes()}
            />
        </>
    )
}