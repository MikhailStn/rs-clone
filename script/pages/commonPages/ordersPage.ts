import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUser } from "../../commonFunction/getUser";

const sectionOrder = createHtmlElement("section", "section-orders");

export interface OrderPreview {
  numberOfOrder: string;
  petsitterId: string;
  ownerId: string;
  pet: string;
  nameOfOwner: string;
  nameOfPetsitter: string;
  avatarOwner: string;
  avatarPetsitter: string;
  dates: string[];
  service: string;
  pricePerDay: string;
  status: string;
  messages: [
    {
      avatarPath: string;
      name: string;
      message: string;
    }
  ];
  city: string;
}
let orders: OrderPreview[] = [];

export let numberOfOrder1 = "";

async function renderOrdersPage() {
  sectionOrder.innerHTML = "";
  const user = await getUser();
  const currentUserInfo = user.item;
  const sectionOrdersBlock = createHtmlElement("div", "section-orders-block");
  sectionOrder.append(sectionOrdersBlock);
  const sectionOrdersTitle = createHtmlElement(
    "h1",
    "title-section-order",
    "",
    "My orders"
  );
  sectionOrdersBlock.append(sectionOrdersTitle);
  const ordersItemsWrapper = createHtmlElement("div", "orders-items-wrapper");
  sectionOrdersBlock.append(ordersItemsWrapper);
  fetch(`https://rs-clone-api-production-3ab8.up.railway.app/auth/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      _id: localStorage.getItem("curr-user-id"),
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      orders = data.orders;
      const block = document.querySelector(".section-orders");
      const container = createHtmlElement("div", "orders-container");
      block?.append(container);
      for (let i = 0; i < orders.length; i++) {
        const itemOrderBlock = createHtmlElement("div", "item-order-block");
        const commonInfoOrderWrapper = createHtmlElement(
          "div",
          "common-info-order-item-wrapper"
        );
        itemOrderBlock.append(commonInfoOrderWrapper);
        const statusText = createHtmlElement(
          "div",
          "status-order-text",
          "",
          `${orders[i].status}`
        );
        const serviceText = createHtmlElement(
          "div",
          "service-order-text",
          "",
          `${orders[i].service}`
        );
        const dateOrder = createHtmlElement("div", "date-order-text");
        if (orders[i].dates.length === 1) {
          dateOrder.textContent = orders[i].dates[0];
        } else {
          dateOrder.textContent = `${orders[i].dates[0]} - ${orders[i].dates[1]}`;
        }

        const petInfoOrderBlock = createHtmlElement(
          "div",
          "pet-info-order-block"
        );
        const ownerOrPetsitterBlock = createHtmlElement(
          "div",
          "owner-or-petsitter-block"
        );
        const ratePetsitter = createHtmlElement("div", "rate-petsitter-order");
        commonInfoOrderWrapper.append(
          statusText,
          serviceText,
          dateOrder,
          petInfoOrderBlock,
          ownerOrPetsitterBlock
        );
        let name = "";
        const userPhoto = createHtmlElement(
          "img",
          "user-order-photo"
        ) as HTMLImageElement;
        if (data.role == "PETSITTER") {
          commonInfoOrderWrapper.append(ratePetsitter);
          name = orders[i].nameOfOwner;
          if (data.avatarOwner === "" || data.avatarOwner === undefined) {
            userPhoto.src = "img/personLogo.svg";
          } else {
            userPhoto.src = orders[i].avatarOwner;
          }
        } else if (data.role == "OWNER") {
          name = orders[i].nameOfPetsitter;
          if (
            orders[i].avatarPetsitter === "" ||
            orders[i].avatarPetsitter === undefined
          ) {
            userPhoto.src = "img/personLogo.svg";
          } else {
            userPhoto.src = orders[i].avatarPetsitter;
          }
        }
        const userName = createHtmlElement(
          "div",
          "user-name-order",
          "",
          `${name}`
        );
        ownerOrPetsitterBlock.append(userPhoto, userName);
        const imgPet = new Image();
        imgPet.className = "svg-pet-order";
        const namePet = createHtmlElement(
          "div",
          "pet-name-order",
          "",
          `${orders[i].pet}`
        );
        petInfoOrderBlock.append(imgPet, namePet);
        imgPet.src = "img/paw.svg";
        const linkViewProfile = createHtmlElement(
          "div",
          "link-view-profile-order",
          "",
          "View profile"
        );

        linkViewProfile.addEventListener("click", () => {
          if (currentUserInfo.role === "OWNER") {
            history.pushState("", "", `/petsitter/n/${orders[i].petsitterId}`);
            window.dispatchEvent(new Event("popstate"));
          } else {
            history.pushState("", "", `/owner/n/${orders[i].ownerId}`);
            window.dispatchEvent(new Event("popstate"));
          }
        });
        commonInfoOrderWrapper.append(linkViewProfile);
        const btnOrderInfoAndChat = createHtmlElement(
          "div",
          "btn-order-info-chat",
          "btn-order-info",
          "Order info and chat"
        );
        itemOrderBlock.append(btnOrderInfoAndChat);
        btnOrderInfoAndChat.addEventListener("click", () => {
          if (data.role === "PETSITTER") {
            numberOfOrder1 = orders[i].numberOfOrder;
            history.pushState(
              "",
              "",
              `/petsitter/orders/n/${orders[i].numberOfOrder}`
            );
            window.dispatchEvent(new Event("popstate"));
          } else {
            history.pushState(
              "",
              "",
              `/owner/orders/n/${orders[i].numberOfOrder}`
            );
            window.dispatchEvent(new Event("popstate"));
          }
        });
        container?.append(itemOrderBlock);
      }
    });
}

export async function createOrdersPage() {
  document.body.innerHTML = "";
  await headerPetsitter(document.body);
  await renderOrdersPage();
  document.body.append(sectionOrder);
  footerFun(document.body);
  return document.body;
}
