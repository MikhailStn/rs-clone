import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";

const sectionOrder = createHtmlElement('section', 'section-orders');

async function renderOrdersPage(){
    sectionOrder.innerHTML = '';
    const sectionOrdersBlock = createHtmlElement('div', 'section-orders-block');
    sectionOrder.append(sectionOrdersBlock);
    const sectionOrdersTitle = createHtmlElement('h1', 'title-section-order','','My orders');
    sectionOrdersBlock.append(sectionOrdersTitle);
    const ordersItemsWrapper = createHtmlElement('div', 'orders-items-wrapper');
    sectionOrdersBlock.append(ordersItemsWrapper);
}

export async function createOrdersPage(){
    document.body.innerHTML = "";
    await headerPetsitter(document.body);
    document.querySelector('.section-menu-field')?.classList.add('active');
    await renderOrdersPage();
    document.body.append(sectionOrder);
    footerFun(document.body);
    return document.body;
}