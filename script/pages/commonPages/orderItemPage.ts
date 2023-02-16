import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";

const orders = [{numberOrders: 123456, city:'Minsk', status: 'rejected', service: 'accomodation', period: '1 day', dates: '20 febr - 21 febr', pet: ['cat', 'Masia'], ownerOrPetsitterId: '63eb4b2a8759fea28d255766'}];

const sectionOrderItem = createHtmlElement('section', 'section-order-item');

async function renderOrderItemPage(/*id: number*/) { 
    sectionOrderItem.innerHTML = '';
    const sectionItemOrdersBlock = createHtmlElement('div', 'section-item-orders-block');
    sectionOrderItem.append(sectionItemOrdersBlock);
    //написать функцию получения данных заказа по id
    const comeBackDiv = createHtmlElement('div', 'come-back-order-div');
    comeBackDiv.innerHTML = '<span>←</span> Return to orders';
    sectionItemOrdersBlock.append(comeBackDiv);
    comeBackDiv.addEventListener('click', ()=>{
        history.pushState('','','/owner/orders'); // поменять ссылку в зависимости от роли
        window.dispatchEvent(new Event("popstate"));
    });

    const orderItemInfoBlock = createHtmlElement('div', 'order-item-info-block');
    sectionItemOrdersBlock.append(orderItemInfoBlock);

    const blockCommonInfo = await createBlockCommoninfo();
    const blockPriceOrder = createHtmlElement('div', 'block-price-order');
    const userBlock = createHtmlElement('div', 'user-info-block-order');
    const chatBlock = createHtmlElement('div', 'chat-block-order');
    orderItemInfoBlock.append(blockCommonInfo, blockPriceOrder, userBlock, chatBlock);


}

async function createBlockCommoninfo() {
    const blockCommonInfo = createHtmlElement('div','block-common-info-order');
    const block1 = await createBlockItemInfoOrder('img/iCharacterGrey.svg', `Service type: ${orders[0].service}`);//данные с сервера
    const block2 = await createBlockItemInfoOrder('img/calendar2Grey.svg', `Deadline: ${orders[0].dates}`);  //данные с сервера
    const block3 = await createBlockItemInfoOrder('img/geoloc.svg', `${orders[0].city}`); //данные с сервера
    const blockImgPet = createHtmlElement('div', 'block-img-svg-pet-order-item');
    const imgPetSvg = new Image();
    imgPetSvg.className = 'svg-pet-order-info';
    if(orders[0].pet[0] === 'cat'){ //данные с сервера
        imgPetSvg.src = 'img/cat.svg';
    }else{
        imgPetSvg.src = 'img/dog.svg';
    }
    const petText = createHtmlElement('div', 'pet-text-order','','Pet');
    blockImgPet.append(imgPetSvg, petText);

    const moreInfoPetBlock = createHtmlElement('div', 'more-info-pet-block');
    const nameBtnPetBlock = createHtmlElement('div', 'name-btn-pet-block');
    const namePet = createHtmlElement('div', "name-pet-more-info",'', orders[0].pet[1]); //данные с сервера
    const btnToggleInfo = createHtmlElement('div','btn-toggle-info', '', '⌄');
    nameBtnPetBlock.append(namePet, btnToggleInfo);
    const commonInfoPetBlock = createHtmlElement('div', 'common-info-Pet-block');
    moreInfoPetBlock.append(nameBtnPetBlock, commonInfoPetBlock);
    blockCommonInfo.append(block1, block2,block3,blockImgPet,moreInfoPetBlock)
    return blockCommonInfo;
}

async function createBlockItemInfoOrder(src: string, text: string, className?: string) {
    const blockInfoWrapper = createHtmlElement('div', 'block-info-order-wrapper');
    const blockSvg = new Image();
    blockSvg.src = src;
    blockSvg.className = `block-info-order-svg ${className}`;
    blockInfoWrapper.append(blockSvg);
    const textBlockMenu = createHtmlElement('div', 'text-block-info-order', '', `${text}`);
    blockInfoWrapper.append(textBlockMenu);
    return blockInfoWrapper;
}


export async function createOrderItemPage(){ //добавить формулу разбора и получения id заказа!!!!!!!!!
    document.body.innerHTML = "";
    await headerPetsitter(document.body);
    await renderOrderItemPage(/*id*/); //сюда мы должны добавлять айди заказа
    document.body.append(sectionOrderItem);
    footerFun(document.body);
    return document.body;
}