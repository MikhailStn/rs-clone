import { createHtmlElement } from "../../utils";

export default function petsAddShowPage() {
  const main = document.querySelector(".main");
  if (main) {
    main.innerHTML = "";
    const div = createHtmlElement("div", "", "", "PETS/ADD");
    return main?.append(div);
  }
}
