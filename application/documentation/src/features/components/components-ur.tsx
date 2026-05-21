import {loadPage, MRoute} from "mfront";

const buttonPage = loadPage(() => import("./com-button-page"))
const cardPage = loadPage(() => import("./com-card-page"))
const calendarPage = loadPage(() => import("./com-calendar-page"))
const commonPage = loadPage(() => import("./com-common-page"))
const dialogPage = loadPage(() => import("./com-dialog-page"))
const dropdownPage = loadPage(() => import("./com-dropdown-page"))
const gridPage = loadPage(() => import("./com-grid-page"))
const imagePage = loadPage(() => import("./com-image-page"))
const inputGenPage = loadPage(() => import("./com-input-gen-page"))
const inputPage = loadPage(() => import("./com-input-page"))

const popoverPage = loadPage(() => import("./com-popover-page"))
const selectPage = loadPage(() => import("./com-select-page"))
const sidebarPage = loadPage(() => import("./com-sidebar-page"))
const tabPage = loadPage(() => import("./com-tab-page"))

const tablePage = loadPage(() => import("./com-table-page"))
const toastPage = loadPage(() => import("./com-toast-page"))


const API_BASE_URL = "/api/v1/something"
const UI_BASE_URL = "/components"

export default class ComponentsUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
        button: `${UI_BASE_URL}/button`,
        cardPage: `${UI_BASE_URL}/card`,
        calendarPage: `${UI_BASE_URL}/calendar`,
        commonPage: `${UI_BASE_URL}/common`,
        dialogPage: `${UI_BASE_URL}/dialog`,
        dropdownPage: `${UI_BASE_URL}/dropdown`,
        gridPage: `${UI_BASE_URL}/grid`,
        imagePage: `${UI_BASE_URL}/image`,
        popoverPage: `${UI_BASE_URL}/popover`,
        selectPage: `${UI_BASE_URL}/select`,
        inputGenPage: `${UI_BASE_URL}/input-gen`,
        inputPage: `${UI_BASE_URL}/input`,

        sidebarPage: `${UI_BASE_URL}/sidebar`,
        tabPage: `${UI_BASE_URL}/tab`,
        tablePage: `${UI_BASE_URL}/table`,
        toastPage: `${UI_BASE_URL}/toast`,
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.cardPage, component: cardPage})
        route.addPublicRoute({url: this.ui.button, component: buttonPage})
        route.addPublicRoute({url: this.ui.calendarPage, component: calendarPage})
        route.addPublicRoute({url: this.ui.commonPage, component: commonPage})
        route.addPublicRoute({url: this.ui.dialogPage, component: dialogPage})

        route.addPublicRoute({url: this.ui.popoverPage, component: popoverPage})
        route.addPublicRoute({url: this.ui.inputPage, component: inputPage})
        route.addPublicRoute({url: this.ui.inputGenPage, component: inputGenPage})
        route.addPublicRoute({url: this.ui.imagePage, component: imagePage})
        route.addPublicRoute({url: this.ui.gridPage, component: gridPage})
        route.addPublicRoute({url: this.ui.dropdownPage, component: dropdownPage})
        route.addPublicRoute({url: this.ui.selectPage, component: selectPage})

        route.addPublicRoute({url: this.ui.sidebarPage, component: sidebarPage})
        route.addPublicRoute({url: this.ui.tabPage, component: tabPage})
        route.addPublicRoute({url: this.ui.tablePage, component: tablePage})
        route.addPublicRoute({url: this.ui.toastPage, component: toastPage})
    }

}