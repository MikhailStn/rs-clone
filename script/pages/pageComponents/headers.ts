import { createHtmlElement } from "../../utils";

export function headerOwner(tagParent: HTMLElement): void {
  const header = createHtmlElement("header", "header");
  const head = createHtmlElement("div", "head");
  const headerMenu = createHtmlElement("button", "btn menu first", "menu");
  const menuImg = new Image();/**/
  menuImg.src = "/assets/line.svg";
  const headerLink = createHtmlElement("a", "first", "pets", "pets");
  const headerNotification = createHtmlElement("div", "notification first", "", "");
  const btnNotification = createHtmlElement("button", "btn ", "notification");
  const notificationImg = new Image();
  notificationImg.src = "/assets/notification.svg";/**/
  const flagNotification = createHtmlElement("span", "", "", "1");
  const promo = createHtmlElement("div", "");
  const promoText = createHtmlElement("span", "promo", "", "PROMOTION -10% FOR THE FIRST SERVICE");

  tagParent.append(header);
  header.append(promo);
  promo.append(promoText);
  header.append(head);
  head.append(headerMenu);
  head.append(headerLink);
  head.append(headerNotification);
  headerMenu.append(menuImg);
  headerNotification.append(btnNotification);
  btnNotification.append(notificationImg);
  headerNotification.append(flagNotification);
}
