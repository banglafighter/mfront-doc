import {loadPage, MRoute} from "mfront";

const buttonPage = loadPage(() => import("./com-button-page"))


const API_BASE_URL = "/api/v1/something"
const UI_BASE_URL = "/components"

export default class ComponentsUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
        button: `${UI_BASE_URL}/button`,
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.button, component: buttonPage})
    }

}