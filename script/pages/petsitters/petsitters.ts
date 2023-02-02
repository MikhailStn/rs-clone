import { createHtmlElement } from "../../utils";

export default function petsitters() {
  const main = document.querySelector(".main");
  if (main) {
    main.innerHTML = "";
    const div = createHtmlElement("div", "", "", "PETSITTERS");
    return main?.append(div);
  }
}
