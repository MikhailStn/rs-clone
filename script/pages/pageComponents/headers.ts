import { createHtmlElement } from "../../utils";

export function headerOwner(tagParent: HTMLElement): void {
  const header = createHtmlElement("header", "header");
  const head = createHtmlElement("div", "head");
  const headerMenu = createHtmlElement("button", "btn menu first", "menu");
  const menuImg = new Image();
  menuImg.src = "img/line.svg";
  const headerLink = createHtmlElement("a", "first", "pets", "Petsi");
  const headerNotification = createHtmlElement("div", "notification first", "", "");
  const btnNotification = createHtmlElement("button", "btn", "notification");
  const notificationImg = new Image();
  notificationImg.src = "img/notification.svg";
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

export function header(tagParent: HTMLElement): void {
  const header = createHtmlElement("header", "header header2");
  const head = createHtmlElement("div", "head");
  const headerMenu = createHtmlElement("button", "btn menu first", "menu");
  const menuImg = new Image();
  menuImg.src = "img/line.svg";
  const headerLink = createHtmlElement("a", "first", "pets", "Petsi");
  const btnFind = createHtmlElement("button", "btn rectangle", "btnFind", "Find a pet sitter");
  const btnBecome = createHtmlElement("button", "btn rectangle", "btnBecome", "Become a pet sitter");

  const btnRight = createHtmlElement("div", "btnRight");
  const btnLogin = createHtmlElement("button", "btn rectangle", "Login", "LOG IN");
  const btnCreateAccount = createHtmlElement("button", "btn rectangle", "CreateAccount", "Create Account");

  tagParent.append(header);
  header.append(head);
  headerMenu.append(menuImg);
  head.append(headerMenu);
  head.append(headerLink);
  head.append(btnFind);
  head.append(btnBecome);
  head.append(btnRight);
  btnRight.append(btnLogin);
  btnRight.append(btnCreateAccount);
}

export function headerPetsitter(tagParent: HTMLElement): void {
  const header = createHtmlElement("header", "header");
  const head = createHtmlElement("div", "head");
  const headerMenu = createHtmlElement("button", "btn menu first", "menu");
  const menuImg = new Image();
  menuImg.src = "img/line.svg";
  const headerLink = createHtmlElement("a", "first", "pets", "Petsi");
  const headerNotification = createHtmlElement("div", "notification first", "", "");
  const btnNotification = createHtmlElement("button", "btn ", "notification");
  const notificationImg = new Image();
  notificationImg.src = "img/notification.svg";
  const flagNotification = createHtmlElement("span", "", "", "1");
  flagNotification.style.display = "none";
  const promo = createHtmlElement("div", "");
  const promoText = createHtmlElement("span", "promo", "", "SEND A FRIEND PLN 20 TO USE ON PETSY!");

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