import {type SidebarMenuItemProps} from "mmcore-ui";
import {BookOpen, MonitorDown, SquareTerminal} from "lucide-react";


export const AppNavigation = {
    menuItems: () => {
        const menuItems: SidebarMenuItemProps[] = [
            {
                single: [
                    {menuContent: (<><BookOpen/> Introduction</>)},
                    {menuContent: (<><MonitorDown/> Installation</>)},
                ]
            },
            {
                grouped: {
                    labelContent: "Components",
                    items: [{
                        menuContent: (<><SquareTerminal/> Essentials</>),
                        collapsible: true,
                        nested: [
                            {menuContent: "History"},
                            {menuContent: "Starred"},
                            {menuContent: "Settings"},
                        ]
                    },
                    ]
                }
            }
        ]
        return menuItems
    }
}