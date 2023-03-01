import { createHtmlElement } from "../../utils";

export default function mainShowPage() {
  document.body.innerHTML = "";

  const div = createHtmlElement("div", "", "", "MAIN");
  return document.body.append(div);
}
