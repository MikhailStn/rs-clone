import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";

const sectionOrder = createHtmlElement('section', 'section-orders');

interface OrderPreview{
    numberOrders: number;
    status: string;
    service: string;
    period: string;
    dates: string;
    pet: string[];
    ownerOrPetsitterId: string;
}
const orders = [{numberOrders: 123456, status: 'rejected', service: 'accomodation', period: '1 day', dates: '20 febr - 21 febr', pet: ['cat', 'Masia'], ownerOrPetsitterId: '63eb4b2a8759fea28d255766'}];

async function renderOrdersPage(){
    sectionOrder.innerHTML = '';
    const sectionOrdersBlock = createHtmlElement('div', 'section-orders-block');
    sectionOrder.append(sectionOrdersBlock);
    const sectionOrdersTitle = createHtmlElement('h1', 'title-section-order','','My orders');
    sectionOrdersBlock.append(sectionOrdersTitle);
    const ordersItemsWrapper = createHtmlElement('div', 'orders-items-wrapper');
    sectionOrdersBlock.append(ordersItemsWrapper);
    orders.forEach(async(elem) =>{
        const orderBlock = await createItemOrderBlock(elem);
        sectionOrdersBlock.append(orderBlock);
    })
}

async function createItemOrderBlock(object: OrderPreview) {
    const itemOrderBlock = createHtmlElement('div', 'item-order-block');
    const commonInfoOrderWrapper = createHtmlElement('div', 'common-info-order-item-wrapper');
    itemOrderBlock.append(commonInfoOrderWrapper);
    const statusText = createHtmlElement('div', 'status-order-text','', object.status);
    const serviceText = createHtmlElement('div', 'service-order-text', '',`${object.service} ${object.period}`);
    const dateOrder = createHtmlElement('div', 'date-order-text', '', object.dates);
    const petInfoOrderBlock = createHtmlElement('div', 'pet-info-order-block');
    const imgPet = new Image();
    imgPet.className = 'svg-pet-order';
    const namePet = createHtmlElement('div', 'pet-name-order','', object.pet[1]);
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
                _id: object.ownerOrPetsitterId,
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
    return itemOrderBlock;
}

export async function createOrdersPage(){
    document.body.innerHTML = "";
    await headerPetsitter(document.body);
    const menu: HTMLElement|null = document.querySelector('.section-menu-field');
    if(menu) menu.style.left = "0px";
    await renderOrdersPage();
    document.body.append(sectionOrder);
    footerFun(document.body);
    return document.body;
}