import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
//import { numberOfOrder } from "../petsitters/petsitPersonPage";

const sectionOrder = createHtmlElement("section", "section-orders");

interface OrderPreview {
  numberOfOrder: string;
  petsitterId: string;
  ownerId: string;
  pet: {
    name: string;
  };
  nameOfOwner: string;
  nameOfPetsitter: string;
  avatarOwner: string;
  avatarPetsitter: string;
  dates: string;
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
}
let orders: OrderPreview[] = [];

export let numberOfOrder1 = ''

async function renderOrdersPage() {
  sectionOrder.innerHTML = "";
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
  fetch(`http://localhost:5000/auth/user`, {
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
      /* orders.forEach(async(elem: OrderPreview) =>{
            const orderBlock = await createItemOrderBlock(elem);
            sectionOrdersBlock.append(orderBlock);
        }) */
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
        const dateOrder = createHtmlElement(
          "div",
          "date-order-text",
          "",
          orders[i].dates
        );
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
        //let avatar = ''
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
        imgPet.src = "img/cat.svg";
        const linkViewProfile = createHtmlElement(
          "div",
          "link-view-profile-order",
          "",
          "View profile"
        );
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
            numberOfOrder1 = orders[i].numberOfOrder
            history.pushState("", "", `/petsitter/orders/${orders[i].numberOfOrder}`); //тут нужно задавать правильный id заказа!!!
            window.dispatchEvent(new Event("popstate"));
          } else {
            history.pushState("", "", `/owner/orders/${orders[i].numberOfOrder}`); //тут нужно задавать правильный id заказа!!!
            window.dispatchEvent(new Event("popstate"));
          }
        });
        container?.append(itemOrderBlock);
      }
    });
}


/* async function createItemOrderBlock(object: OrderPreview) {
    const itemOrderBlock = createHtmlElement('div', 'item-order-block');
    const commonInfoOrderWrapper = createHtmlElement('div', 'common-info-order-item-wrapper');
    itemOrderBlock.append(commonInfoOrderWrapper);
    const statusText = createHtmlElement('div', 'status-order-text','', object.status);
    const serviceText = createHtmlElement('div', 'service-order-text', '',`${object.service} ${object.service}`);
    const dateOrder = createHtmlElement('div', 'date-order-text', '', object.dates);
    const petInfoOrderBlock = createHtmlElement('div', 'pet-info-order-block');
    const imgPet = new Image();
    imgPet.className = 'svg-pet-order';
    const namePet = createHtmlElement('div', 'pet-name-order','', object.pet.name);
    petInfoOrderBlock.append(imgPet, namePet);
    if(object.pet[0] === 'cat'){
        imgPet.src = 'img/cat.svg';
    }else{
        imgPet.src = 'img/dog.svg';
    }
    const ownerOrPetsitterBlock = createHtmlElement('div', 'owner-or-petsitter-block');
    const getUser = async()=>{
        const fecthData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                _id: object.ownerId,
            }),
        };
        const response = await fetch(`http://localhost:5000/auth/user`, fecthData);
        return {
                   item: await response.json()
               }
        }

    const user = await getUser();
    const userInfo = (user).item;
    const userPhoto = createHtmlElement('img', 'user-order-photo') as HTMLImageElement;
    if(userInfo.avatarPath === '' || userInfo.avatarPath === undefined){
        userPhoto.src = 'img/personLogo.svg';
    }else{
        userPhoto.src= userInfo.avatarPath;
    }
    const userName = createHtmlElement('div','user-name-order', '', `${userInfo.firstName} ${userInfo.lastName}`);
    ownerOrPetsitterBlock.append(userPhoto, userName);
    commonInfoOrderWrapper.append(statusText, serviceText, dateOrder, petInfoOrderBlock, ownerOrPetsitterBlock);
    const ratePetsitter = createHtmlElement('div', 'rate-petsitter-order');
    if(userInfo.role === 'PETSITTER'){
        commonInfoOrderWrapper.append(ratePetsitter);
    }
    const linkViewProfile = createHtmlElement('div', 'link-view-profile-order','', 'View profile');
    commonInfoOrderWrapper.append(linkViewProfile);
    const btnOrderInfoAndChat = createHtmlElement('div', 'btn-order-info-chat', 'btn-order-info', 'Order info and chat');
    itemOrderBlock.append(btnOrderInfoAndChat);
    btnOrderInfoAndChat.addEventListener('click', ()=>{
        if(userInfo.role === 'PETSITTER'){
            history.pushState('','','/owner/orders/n');  //тут нужно задавать правильный id заказа!!!
            window.dispatchEvent(new Event("popstate"));
        }else{
            history.pushState('','','/petsitter/orders/n');  //тут нужно задавать правильный id заказа!!!
            window.dispatchEvent(new Event("popstate"));
        }
    })
    return itemOrderBlock;
} */

export async function createOrdersPage() {
  document.body.innerHTML = "";
  console.log(numberOfOrder1)
  await headerPetsitter(document.body);
  await renderOrdersPage();
  document.body.append(sectionOrder);
  footerFun(document.body);
  return document.body;
}
