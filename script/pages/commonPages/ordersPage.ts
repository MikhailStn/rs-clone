import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUser } from "../../commonFunction/getUser";
import { getUserFromId } from "../../commonFunction/getUser";
import { Review } from "../petsitters/petsitReview";

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
  const sectionOrdersBlock = createHtmlElement("div", "section-orders-block forMediaPad");/*forMediaPad*/
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
    .then(async(data) => {
      orders = data.orders;
      const block = document.querySelector(".section-orders");
      const container = createHtmlElement("div", "orders-container forMediaPad");/*forMediaPad*/
      block?.append(container);
      if(orders.length === 0){
        container.style.flexDirection = 'column';
        const noOrderText = createHtmlElement('div', 'no-order-text', '', 'You don\'t have any orders yet');
        container.append(noOrderText);
        if(currentUserInfo.role === 'OWNER'){
          if(currentUserInfo.pets.length === 0){
            const addPetText = createHtmlElement('div', 'add-pet-text-order','', 'You can add your pet and place an order');
            container.append(addPetText);
            addPetText.addEventListener('click', ()=>{
              history.pushState("", "", "/pets/add");
              window.dispatchEvent(new Event("popstate"));
            })
          }else{
            const createOrderText = createHtmlElement('div', 'add-pet-text-order', '', 'You can place a new order');
            container.append(createOrderText);
            createOrderText.addEventListener('click',()=>{
              history.pushState("", "", "/search");
              window.dispatchEvent(new Event("popstate"));
            })
          }
        }
      }else{
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
          `${orders[i].numberOfOrder}`
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
          const user = await getUserFromId(orders[i].ownerId);
          const UserInfo = user.item;
          name = orders[i].nameOfOwner;
          if (UserInfo.avatarPath === "" || UserInfo.avatarPath === undefined) {
            userPhoto.src = "img/personLogo.svg";
          } else {
            userPhoto.src = UserInfo.avatarPath;
          }
        } else if (data.role == "OWNER") {
          const user = await getUserFromId(orders[i].petsitterId);
            const UserInfo = user.item;
            commonInfoOrderWrapper.append(ratePetsitter);
            let rateSum = 0;
            const rateCount = UserInfo.petsitterData.reviews.length;
            UserInfo.petsitterData.reviews.forEach((elem: Review)=>{
                rateSum += elem[2];
            })
            const rate = Math.round(rateSum / rateCount);
            if (rate !== 0) {
              ratePetsitter.innerHTML = "★".repeat(rate);
            } else {
              ratePetsitter.innerHTML = "no ratings";
            }
            userPhoto.src = UserInfo.avatarPath;
          name = orders[i].nameOfPetsitter;
          if (
            UserInfo.avatarPath === "" ||
            UserInfo.avatarPath === undefined
          ) {
            userPhoto.src = "img/personLogo.svg";
          } else {
            userPhoto.src = UserInfo.avatarPath;
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
