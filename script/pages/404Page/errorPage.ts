import { createHtmlElement } from "../../utils";

export default function errorShowPage() {
  const main = document.querySelector(".main");
  if (main) {
    main.innerHTML = "";
    const div = createHtmlElement("div", "", "", "AUTH/REG/PETSIT");
    return main?.append(div);
  }
}
