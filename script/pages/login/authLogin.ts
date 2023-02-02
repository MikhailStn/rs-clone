import { createHtmlElement } from "../../utils";

export default function authLogin() {
  const main = document.querySelector(".main");
  if (main) {
    main.innerHTML = "";
    const div = createHtmlElement("div", "", "", "AUTH/LOGIN");
    return main?.append(div);
  }
}
