import { createHtmlElement } from "../../utils";

export default function mainShowPage() {
  const main = document.querySelector(".main");
  if (main) {
    main.innerHTML = "";
    const div = createHtmlElement("div", "", "", "MAIN");
    return main?.append(div);
  }
}
