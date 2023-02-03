import { createHtmlElement } from "../../utils";

export default function searchShowPage() {
  const main = document.querySelector(".main");
  if (main) {
    main.innerHTML = "";
    const div = createHtmlElement("div", "", "", "SEARCH");
    return main?.append(div);
  }
}
