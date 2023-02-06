import { createHtmlElement } from "../../utils";

export function headerOwner(tagParent: HTMLElement): void {
  const header = createHtmlElement("header", "header");
  const head = createHtmlElement("div", "head");
  const headerMenu = createHtmlElement("button", "btn menu first", "menu");
  const menuImg = new Image();
  menuImg.src = "img/line.svg";
  const headerLink = createHtmlElement("a", "first", "pets", "petsi");
  headerLink.addEventListener('click', ()=>{
    history.pushState("", "", '');
    window.dispatchEvent(new Event("popstate"));
  })
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
  const headerLink = createHtmlElement("a", "first", "pets", "petsi");
  headerLink.addEventListener('click', ()=>{
    history.pushState("", "", '');
    window.dispatchEvent(new Event("popstate"));
  })
  const btnFind = createHtmlElement("button", "btn rectangle", "btnFind", "Find a pet sitter");
  btnFind.addEventListener('click', ()=>{
    history.pushState("", "", '');
    window.dispatchEvent(new Event("popstate"));
  })
  const btnBecome = createHtmlElement("button", "btn rectangle", "btnBecome", "Become a pet sitter");
  btnBecome.addEventListener('click', ()=>{
    history.pushState("", "", '/petsitter');
    window.dispatchEvent(new Event("popstate"));
  })
  const btnRight = createHtmlElement("div", "btnRight");
  const btnLogin = createHtmlElement("button", "btn rectangle", "Login", "LOG IN");
  btnLogin.addEventListener('click', ()=>{
    history.pushState("", "", '/auth/login');
    window.dispatchEvent(new Event("popstate"));
  })
  const btnCreateAccount = createHtmlElement("button", "btn rectangle btn-create-acc", "CreateAccount", "Create Account");
  const path = window.location.pathname;
  const rolePath1 = path.split('/')[1];
  const rolePath2 = path.split('/')[3];
  console.log('role1', rolePath1);
  btnCreateAccount.addEventListener('click', ()=>{
    if(rolePath1 === 'petsitter' || rolePath2 === 'petsitter'){
      history.pushState("", "", '/auth/register/petsitter');
      window.dispatchEvent(new Event("popstate"));
    }else{
      history.pushState("", "", '/auth/register/owner');
      window.dispatchEvent(new Event("popstate"));
    }
  })

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
  const headerLink = createHtmlElement("a", "first", "pets", "petsi");
  headerLink.addEventListener('click', ()=>{
    history.pushState("", "", '');
    window.dispatchEvent(new Event("popstate"));
  })
  const headerNotification = createHtmlElement("div", "notification first", "", "");
  const btnNotification = createHtmlElement("button", "btn ", "notification");
  const notificationImg = new Image();
  notificationImg.src = "img/notification.svg";
  const flagNotification = createHtmlElement("span", "", "", "1");
  flagNotification.style.display = "none";
  const promo = createHtmlElement("div", "");
  const promoText = createHtmlElement("span", "promo", "", "SEND A FRIEND PLN 20 TO USE ON PETSI!");

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