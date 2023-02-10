import { createHtmlElement } from "../../utils";

export async function createServicesBlock(){
    const basicServiceBlock = createHtmlElement('div', 'basic-info-block');
    const serviceBlockTitle = createHtmlElement('h3', 'title-photo-profile-block', '','Manage the services you provide');
    basicServiceBlock.append(serviceBlockTitle);
    const text1Service = createHtmlElement('div','text-service','','Here you can manage the services you provide. You can enable, disable or edit them at any time. We encourage you to manage your offerings accordingly.')
    const text2Service = createHtmlElement('div','text-service','','Remember that payment for all services provided should be accepted only through the platform. Billing caregivers outside of the platform is against the terms and conditions and will result in account deactivation.')
    basicServiceBlock.append(text1Service, text2Service);
    const blockService1 = await createBlockService('https://petsy.pl/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FACCOMMODATION.829018b2.jpg&w=640&q=75', 'Accommodation', 'A service in which you take your pet under your roof for a specified period of time. You can also add an additional paid transportation option as part of the settings.', 'accommodation');
    basicServiceBlock.append(blockService1);
    const blockService2 =await createBlockService('https://petsy.pl/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FWALK.b64f0e8b.jpg&w=640&q=75', 'Walking', 'Dog walking service at the owner\'s place of residence','walking');
    basicServiceBlock.append(blockService2);
    const blockService3 =await createBlockService('https://petsy.pl/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FDROP_IN.79191e46.jpg&w=640&q=75', 'Home visits', '30-minute visits to the owner\'s home to play with the animals, serve food, take a quick walk or clean the litter box.', 'home-visits');
    basicServiceBlock.append(blockService3);
    return basicServiceBlock;
}

async function createBlockService(src: string, text1: string, text2: string, className:string) {
    const serviceItemBlock = createHtmlElement('div', `service-item-block-profile ${className}-service`);
    const imgServiceBlock = createHtmlElement('div', 'img-service-block');
    serviceItemBlock.append(imgServiceBlock);
    const imgItemService = createHtmlElement('img', 'img-service-item') as HTMLImageElement;
    imgServiceBlock.append(imgItemService);
    imgItemService.src = src;
    imgItemService.alt = 'Pets';
    const textItemServiceBlock = createHtmlElement('div', `text-item-service-block ${className}-service`);
    serviceItemBlock.append(textItemServiceBlock);
    const text1Div = createHtmlElement('h3', 'title-photo-profile-block','', text1);
    textItemServiceBlock.append(text1Div);
    const text2Div = createHtmlElement('div','text-service','', text2);
    textItemServiceBlock.append(text2Div);
    const btnServiceBlock = createHtmlElement('div', 'btn-service-block');
    serviceItemBlock.append(btnServiceBlock);
    const labelInputCheckboxService = createHtmlElement('label','switch-service');
    const inputCheckboxService =createHtmlElement('input') as HTMLInputElement;
    inputCheckboxService.type = 'checkbox';
    inputCheckboxService.name = className;
    const inputSpanService = createHtmlElement('span', 'slider-service round-slider');
    btnServiceBlock.append(labelInputCheckboxService);
    labelInputCheckboxService.append(inputCheckboxService, inputSpanService);
    const btnEditService = createHtmlElement('button', 'btn-edit-service','', 'Edit');
    btnServiceBlock.append(btnEditService);

    return serviceItemBlock;
}