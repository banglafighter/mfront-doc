import ComponentViewer from "../../component/component-viewer";


function getCodes() {
    return (
       `
 function getUI() {
    const getDropdownItems = () => {
        const navigation: WebDropdownProps = {
            trigger: <MoreHorizontal/>,
            items: [
                {nameContent: (<><Globe/>Website</>)},
                {nameContent: (<><Mail/>Email</>)},
            ]
        }
        return <Dropdown {...navigation}/>
    }

    const menuItems: SidebarMenuItemProps[] = [
        {
            single: [
                {menuContent: (<><LayoutDashboard/> Dashboard</>)},
                {
                    menuContent: (<><ChartNoAxesCombined/> Reports</>),
                    collapsible: true,
                    nested: [
                        {menuContent: "Student"},
                        {menuContent: "Teacher"},
                        {menuContent: "Billing"},
                    ]
                },
                {
                    menuContent: (<><FileUser/> Contact</>),
                    menuNext: getDropdownItems(),
                    menuNextShowOnHover: true
                }
            ]
        },
        {
            grouped: {
                labelContent: "Platform",
                items: [
                    {
                        menuContent: (<><SquareTerminal/> Playground</>),
                        collapsible: true,
                        nested: [
                            {menuContent: "History", navUrl: "/example"},
                            {menuContent: "Starred"},
                            {menuContent: "Settings"},
                        ]
                    },
                    {
                        menuContent: (<><Bot/> Models</>),
                        collapsible: true,
                        nested: [
                            {menuContent: "Genesis"},
                            {menuContent: "Explorer"},
                            {menuContent: "Quantum"},
                        ]
                    },
                    {
                        menuContent: (<><BookOpen/> Documentation</>),
                        collapsible: true,
                        nested: [
                            {menuContent: "Introduction"},
                            {menuContent: "Get Started"},
                            {menuContent: "Tutorials"},
                            {menuContent: "Changelog"},
                        ]
                    },
                    {
                        menuContent: (<><Settings2/> Settings</>),
                        collapsible: true,
                        nested: [
                            {menuContent: "General"},
                            {menuContent: "Team"},
                            {menuContent: "Billing"},
                            {menuContent: "Limits"},
                        ]
                    }
                ]
            }
        },
        {
            grouped: {
                labelContent: "Projects",
                items: [
                    {menuContent: (<><Frame/> Design Engineering</>)},
                    {menuContent: (<><PieChart/> Sales & Marketing</>)},
                    {menuContent: (<><Map/> Travel</>)},
                    {menuContent: (<><MoreHorizontal/> More</>)},
                ]
            },
        }
    ]


    return (
        <>
            <SidebarProvider>
                <Sidebar menu={menuItems} collapsible="icon" variant={"inset"}/>
                <SidebarContent>
                    Site Content Listed Here
                </SidebarContent>
            </SidebarProvider>
        </>
    )
}
       `
    )
}


export default function ComCommonPage() {
    return (
        <>
            <ComponentViewer
                title='Sidebar'
                subtitle='Sidebar demo and codes'
                codes={getCodes()}
            />
        </>
    )
}