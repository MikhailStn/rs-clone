import { createHtmlElement } from "../../utils";

export default function authRegOwner() {
  const main = document.querySelector(".main");
  if (main) {
    main.innerHTML = "";
    const div = createHtmlElement("div", "", "", "AUTH/REG/OWNER");
    return main?.append(div);
  }
}
