import {type SidebarMenuItemProps} from "mmcore-ui";
import {Form, Gem, SquareTerminal} from "lucide-react";
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
                    items: [
                        {
                            menuContent: (<><SquareTerminal/> Essentials</>),
                            nested: [
                                {menuContent: "Button", navUrl: ComponentsUr.ui.button},
                                {menuContent: "Card", navUrl: ComponentsUr.ui.cardPage},
                                {menuContent: "Image", navUrl: ComponentsUr.ui.imagePage},
                                {menuContent: "Common", navUrl: ComponentsUr.ui.commonPage},
                                {menuContent: "Grid", navUrl: ComponentsUr.ui.gridPage},
                            ]
                        },
                        {
                            menuContent: (<><Form/> Inputs</>),
                            nested: [
                                {menuContent: "Button", navUrl: ComponentsUr.ui.button},
                            ]
                        },
                        {
                            menuContent: (<><Gem/> Advanced</>),
                            nested: [
                                {menuContent: "Tab", navUrl: ComponentsUr.ui.tabPage},
                                {menuContent: "Dialog", navUrl: ComponentsUr.ui.dialogPage},
                                {menuContent: "Toast", navUrl: ComponentsUr.ui.toastPage},
                                {menuContent: "Dropdown", navUrl: ComponentsUr.ui.dropdownPage},
                                {menuContent: "Popover", navUrl: ComponentsUr.ui.popoverPage},
                                {menuContent: "Sidebar", navUrl: ComponentsUr.ui.sidebarPage},
                            ]
                        },
                    ]
                }
            }
        ]
        return menuItems
    }
}