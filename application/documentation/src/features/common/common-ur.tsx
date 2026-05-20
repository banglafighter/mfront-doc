import {loadPage, MRoute} from "mfront";

const landingPage = loadPage(() => import("./landing-page"))

const UI_BASE_URL = "/"
export default class CommonUr {

    static readonly api = {}

    static readonly ui = {
        index: UI_BASE_URL,
    }

    static registerRoute(route: MRoute): void {
        route.addPublicRoute({url: this.ui.index, component: landingPage})
    }

}