import {type SidebarMenuItemProps} from "mmcore-ui";
import {BookOpen, MonitorDown, SquareTerminal} from "lucide-react";
import {ComponentsUr} from "documentation";


export const AppNavigation = {
    menuItems: () => {
        const menuItems: SidebarMenuItemProps[] = [
            // {
            //     single: [
            //         {menuContent: (<><BookOpen/> Introduction</>)},
            //         {menuContent: (<><MonitorDown/> Installation</>)},
            //     ]
            // },
            {
                grouped: {
                    labelContent: "Components",
                    items: [{
                        menuContent: (<><SquareTerminal/> Essentials</>),
                        collapsible: true,
                        nested: [
                            {menuContent: "Button", navUrl: ComponentsUr.ui.button},
                        ]
                    },
                    ]
                }
            }
        ]
        return menuItems
    }
}