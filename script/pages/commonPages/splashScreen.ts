import { createHtmlElement } from "../../utils"

export const createSplashScreen = () => {
    const checkDiv = document.querySelector(".splash-screen-container");
    if (checkDiv) {
        return
    }
    const div = createHtmlElement("div", "splash-screen-container");
    const loader = createHtmlElement("div", "loader");
    div.append(loader)
    document.body.append(div)
}

export const removeSplashScreen = () => {
    const splash = document.querySelector(".splash-screen-container") as HTMLDivElement;
    document.body.removeChild(splash);
}