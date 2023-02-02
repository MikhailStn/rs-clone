import { createHtmlElement } from "../../utils";

export function headerOwner(tagParent: HTMLElement): void {
  const header = createHtmlElement("header", "header");
  const head = createHtmlElement("div", "head");
  const headerMenu = createHtmlElement("button", "menu", "");
  const headerLink = createHtmlElement("a", "", "", "pets");
  const headerNotification = createHtmlElement("div", "", "", "0");
  const promo = createHtmlElement("div", "");
  const promoText = createHtmlElement("span", "promo", "", "PROMOTION"); // PROMOTION -10% FOR THE FIRST SERVICE
  promoText.innerHTML = "PROMOTION -10% FOR THE FIRST SERVICE";

  tagParent.append(header);
  header.append(promo);
  promo.append(promoText);
  header.append(head);
  head.append(headerMenu);
  head.append(headerLink);
  head.append(headerNotification);
}
