import { createHtmlElement } from "../../utils";
import { createDivInputs } from "../../commonFunction/inputsCreate";


const sectionEditAccomodation = createHtmlElement('section', 'section-edit-services');

async function renderPetsitProfileServiceEdit(service: string) {
    sectionEditAccomodation.innerHTML = '';
    const sectionComeBack = createHtmlElement('div', 'come-back-wrapper-service');
    sectionEditAccomodation.append(sectionComeBack);
    const comeBackText = createHtmlElement('div', 'come-back-div-service', '', '← Back to edit profile');
    sectionComeBack.append(comeBackText);
    comeBackText.addEventListener('click', () => {
        history.pushState("", "", "/petsitter/profile/basics");
        window.dispatchEvent(new Event("popstate"));
    })
    const sectionTitleTetxtService = createHtmlElement('div', "section-service-text-title-wrapper");
    sectionEditAccomodation.append(sectionTitleTetxtService);
    const serviceTextTitleWrapper = createHtmlElement('div', 'service-text-title-wrapper');
    sectionTitleTetxtService.append(serviceTextTitleWrapper);
    const titleServiceEdit = createHtmlElement('h1', 'title-service-edit');
    const textAfterTitleService = createHtmlElement('div', 'text-after-title-service');
    serviceTextTitleWrapper.append(titleServiceEdit, textAfterTitleService);
    switch (service) {
        case 'accommodation':
            titleServiceEdit.innerHTML = "Accommodation: service settings",
                textAfterTitleService.innerHTML = "A service in which you take a pet under your roof for a specified period of time."
            break;
        case 'walk':
            titleServiceEdit.innerHTML = "Walk: Service Settings",
                textAfterTitleService.innerHTML = "A service in which you go to the customer and walk his dog in the area where he lives."
            break;
        case 'drop-in':
            titleServiceEdit.innerHTML = "Home visits: Service settings",
                textAfterTitleService.innerHTML = "30-minute visits to the owner's home to play with the animals, serve food, take a quick walk or clean the litter box."
            break;
    }

    if(service === 'drop-in' || service === 'walk'){
    const areaOfServiceWrapper = createHtmlElement('div', 'area-of-service-wrapper');
    sectionEditAccomodation.append(areaOfServiceWrapper);
    const areaOfServiceTitle = createHtmlElement('h3', 'area-of-service-title','','Where do you want to provide the service?');
    areaOfServiceWrapper.append(areaOfServiceTitle);
    const areaOfServiceCommonText = createHtmlElement('div', 'area-of-service-common-text','','Specify below which streets or neighborhoods you are willing to provide service within. Keep in mind that for this service you need to reach the client. The most efficient way to make money on the platform is to find pets a maximum of 2 - 3 kilometers away. This will save you time and maximize the number of pets you can service in a day.');
    areaOfServiceWrapper.append(areaOfServiceCommonText);
    const inputAreaService = createHtmlElement('textarea', 'input-area-service', 'service-area') as HTMLTextAreaElement;
    inputAreaService.placeholder = 'Service area';
    inputAreaService.maxLength = 300;
    inputAreaService.wrap = 'soft';
    areaOfServiceWrapper.append(inputAreaService);
    inputAreaService.addEventListener('keyup', function(){
        if(this.scrollTop > 0){
          this.style.height = this.scrollHeight + "px";
        }
      });
    }
    if(service === 'walk'){
        createBlockDogView();
    }
    if(service === 'drop-in' || service === 'accommodation'){
        let text: string;
        service === 'drop-in'? text = 'What animals will I visit?': text = 'What kind of animals will you accommodate?';
        createBlockKindsOfPet(text, service);
    }

    const sectionPriceService = createHtmlElement('div', 'price-section-service');
    sectionEditAccomodation.append(sectionPriceService);
    const priceTitle = createHtmlElement('h3', 'area-of-service-title','','Pricing of your services');
    sectionPriceService.append(priceTitle);
    const commonPriceText = createHtmlElement('div', 'common-price-text');
    sectionPriceService.append(commonPriceText);
    switch (service) {
        case 'accommodation':
            commonPriceText.innerHTML = "The amount you get per night per week"
            break;
        case 'walk':
            commonPriceText.innerHTML = "The amount you will receive for a standard walk (30 min)"
            break;
        case 'drop-in':
            commonPriceText.innerHTML = "The amount you will receive per visit (30 min)"
            break;
    }
    const inputTextWrapper = createHtmlElement('div', 'input-text-service-wrapper-price');
    sectionPriceService.append(inputTextWrapper);
    const inputNumberPrice = createHtmlElement('input', 'input-number-price',`price-${service}`) as HTMLInputElement;
    inputNumberPrice.type = 'number';
    inputNumberPrice.min = '0';
    inputTextWrapper.append(inputNumberPrice);
    const textСurrency = createHtmlElement('div', 'currency-text-price','','byn / ');
    inputTextWrapper.append(textСurrency);
    const spanCurrency = createHtmlElement('span', 'span-currency-price');
    textСurrency.append(spanCurrency);
    switch (service) {
        case 'accommodation':
            spanCurrency.innerHTML = "overnight stay during the week"
            break;
        case 'walk':
            spanCurrency.innerHTML = "walk"
            break;
        case 'drop-in':
            spanCurrency.innerHTML = "visit"
            break;
    }
    const btnSaveWrapper = createHtmlElement('div', 'btn-save-price-wrapper');
    sectionEditAccomodation.append(btnSaveWrapper);
    const btnSaveServiceEdit = createHtmlElement('button', 'btn-save-service-edit', `btn-save-edit-${service}`, 'Save');
    btnSaveWrapper.append(btnSaveServiceEdit);

}


function createBlockDogView(){
    const viewOfDogSectionWrapper = createHtmlElement('div', 'view-of-dog-section-wrapper');
    sectionEditAccomodation.append(viewOfDogSectionWrapper);
    const viewOfDogTitle = createHtmlElement('h3', 'area-of-service-title','','What kind of dogs do you want to walk?');
    viewOfDogSectionWrapper.append(viewOfDogTitle);
    const dogSizeTitle = createHtmlElement('div', 'dog-size-title', '', 'Size of the dog');
    viewOfDogSectionWrapper.append(dogSizeTitle);
    const areaBtnDogSize = createHtmlElement('div', 'area-btn-dog-size');
    viewOfDogSectionWrapper.append(areaBtnDogSize);
    const btnSize1 = createDogSizeBtn('Micro', '< 5 kg');
    const btnSize2 = createDogSizeBtn('Small', '6 - 15 kg');
    const btnSize3 = createDogSizeBtn('Medium', '16 - 25 kg');
    const btnSize4 = createDogSizeBtn('Large', '26 - 35 kg');
    const btnSize5 = createDogSizeBtn('Giant', '> 36 kg');
    areaBtnDogSize.append(btnSize1, btnSize2, btnSize3,btnSize4,btnSize5);
    areaBtnDogSize.addEventListener('click', (event)=>{
        const target = event.target;
        console.log('click')
        if(target instanceof HTMLElement && target.classList.contains('btn-dog-size')){
            console.log('click2')
            if(target.classList.contains('active')){
               target.classList.remove('active');
            }else{
                target.classList.add('active');
            }
        }
    })
    const textAfterViewBlock = createHtmlElement('div', 'little-service-text','','Mark all sizes of dogs you can take for a walk');
    viewOfDogSectionWrapper.append(textAfterViewBlock);

    const dogAgeTitle = createHtmlElement('div', 'dog-age-title', '', 'Age of the dog');
    viewOfDogSectionWrapper.append(dogAgeTitle);
    const areaBtnDogAge = createHtmlElement('div', 'area-btn-dog-age');
    viewOfDogSectionWrapper.append(areaBtnDogAge);
    const btnAge1 = createDogSizeBtn('Puppy','< 1 year','age-btn');
    const btnAge2 = createDogSizeBtn('Youngster','2 - 3 years','age-btn');
    const btnAge3 = createDogSizeBtn('Adult','4 - 10 years','age-btn');
    const btnAge4 = createDogSizeBtn('Senior','> 11 years','age-btn');
    areaBtnDogAge.append(btnAge1, btnAge2, btnAge3, btnAge4);
    areaBtnDogAge.addEventListener('click', (event)=>{
        const target = event.target;
        console.log('click')
        if(target instanceof HTMLElement && target.classList.contains('age-btn')){
            console.log('click2')
            if(target.classList.contains('active')){
               target.classList.remove('active');
            }else{
                target.classList.add('active');
            }
        }
    })
    const textAfterViewBlock2 = createHtmlElement('div', 'little-service-text','','Mark all the age ranges of dogs you can take for a walk');
    viewOfDogSectionWrapper.append(textAfterViewBlock2);

    const genderDogTitle = createHtmlElement('div', 'dog-gender-title', '', 'Gender of the dog');
    viewOfDogSectionWrapper.append(genderDogTitle);
    const genderInputsBlock = createHtmlElement('div', 'gender-inputs-block');
    viewOfDogSectionWrapper.append(genderInputsBlock);
    const inputDiv1 = createDivInputs('checkbox', 'male', 'Male', 'Male', 'div-gender-inputs');
    const inputDiv2 = createDivInputs('checkbox', 'female', 'Female', 'Female', 'div-gender-inputs');
    genderInputsBlock.append(inputDiv1, inputDiv2);

}

function createBlockKindsOfPet(text: string, service:string){
    const sectionKindOfPet = createHtmlElement('div', 'section-kind-of-pet-service');
    sectionEditAccomodation.append(sectionKindOfPet);
    if(service === "accommodation"){
        sectionKindOfPet.style.marginTop = '-110px';
    }
    const kindOfPetTitle = createHtmlElement('h3', 'area-of-service-title','', text);
    sectionKindOfPet.append(kindOfPetTitle);
    const checkPetsBox = createHtmlElement('div', 'check-pet-box');
    sectionKindOfPet.append(checkPetsBox);
    const blockPet1 = createPetsItem('https://petsy.pl/_next/image/?url=%2Fimages%2Fpets%2FDOG.jpg&w=1920&q=75', 'dog');
    const blockPet2 =createPetsItem('https://petsy.pl/_next/image/?url=%2Fimages%2Fpets%2FCAT.jpg&w=1920&q=75','cat');
    checkPetsBox.append(blockPet1,blockPet2);
}

function createDogSizeBtn(dogSizeOrAge: string, weightOrYearsDog:string, className?:string){
    const btnSize = createHtmlElement('div', `btn-dog-size ${className}`, dogSizeOrAge);
    btnSize.innerHTML = `<div class="div-btn-size ${className}">${dogSizeOrAge}<span class = "span-btn-size">${weightOrYearsDog}</span></div>`;
    return btnSize;
}

function createPetsItem(src: string, pet: string){
    const petsItemWrapper = createHtmlElement('div', 'pets-item-wrapper-service');
    const petsItemImgWrapper = createHtmlElement('div', 'pets-img-wrapper-service');
    petsItemWrapper.append(petsItemImgWrapper);
    const imgPetsItem = createHtmlElement('img', 'img-pets-item-service') as HTMLImageElement;
    imgPetsItem.src = src;
    imgPetsItem.alt = pet;
    petsItemImgWrapper.append(imgPetsItem);
    const divInputPet = createDivInputs('checkbox', pet, pet, pet, 'div-input-pets-service');
    petsItemWrapper.append(divInputPet);
    return petsItemWrapper;
}


export default async function petsitProfileServiceEdit() {
    document.body.innerHTML = "";
    const path = window.location.pathname;
    const service = path.split("/")[5];
    console.log(service);
    renderPetsitProfileServiceEdit(service);
    document.body.append(sectionEditAccomodation);
    return document.body;
}