import {PageSlot} from "mfront";
import {Separator, Sidebar, SidebarContent, SidebarProvider, SidebarToggler} from "mfront-ui";
import {AppNavigation} from "../common/app-navigation";

export default function PublicLayout() {
    return (
        <SidebarProvider>
            <Sidebar menu={AppNavigation.menuItems()} collapsible="icon" variant={"sidebar"}/>
            <SidebarContent>
                <header className="flex h-12 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarToggler className="-ml-1"/>
                        <Separator
                            orientation="vertical"
                            className="mr-2 data-[orientation=vertical]:h-4"
                        />
                        mFront Documentation
                    </div>
                </header>
                <Separator/>
                <div className="p-3">
                    <PageSlot/>
                </div>
            </SidebarContent>
        </SidebarProvider>
    )
}