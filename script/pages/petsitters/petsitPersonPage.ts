import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUserFromId } from "../../commonFunction/getUser";
import { createDogSizeBtn } from "./petsitProfileServiceEdit";
import { createDivInputs } from "../../commonFunction/inputsCreate";
import { createBlockMenu } from "../pageComponents/menu";


const sectionPetsitPerson = createHtmlElement(
  "section",
  "section-petsit-person"
);

async function renderPetsitPerson(id: string) {
    sectionPetsitPerson.innerHTML = '';
    const user = await getUserFromId(id);
    const userInfo = (user).item;
    console.log('userInfo', userInfo);
    const petsitPersonBlock = createHtmlElement('div', 'petsit-person-block');
    const imgWallWrapper = createHtmlElement('div', 'img-wall-wrapper');
    const imgWalpaper = createHtmlElement('img', 'img-walpaper-person') as HTMLImageElement;
    imgWalpaper.src = 'https://petsy.pl/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpetsitter_default_bg.b05b4509.webp&w=1920&q=75';
    imgWalpaper.alt = 'Pets';
    imgWallWrapper.append(imgWalpaper);
    sectionPetsitPerson.append(imgWallWrapper);
    const imgNamePetsitPersonBlock = createHtmlElement('div', 'img-name-petsit-person-block');
    const imgPersonWrapper = createHtmlElement('div', 'img-person-wrapper');
    const imgPersonPetsit = createHtmlElement('img', 'img-person-petsit') as HTMLImageElement;
    if(userInfo.avatarPath === '' || userInfo.avatarPath === undefined){
        if(userInfo.petsitterData.gender === "Male"){
            imgPersonPetsit.src = 'img/images/manDog.jpg';
            imgPersonPetsit.style.background = "#ffffff";
        }else{
            imgPersonPetsit.src = 'img/images/dogHaveFive.jpg';
        }
        }else{
            imgPersonPetsit.src = userInfo.avatarPath;
        } 
    imgPersonWrapper.append(imgPersonPetsit);
    const petsitPersonNameQwalifBlock = createHtmlElement('div', 'petsit-name-qwalific-block'); 
    const namePetsitPerson = createHtmlElement('h1', 'name-petsit-person', '', `${userInfo.firstName}`);
    const qwalificCityText = createHtmlElement('h3', 'qualific-city-person-text', '', `Professional petsitter, ${userInfo.city}`);
    petsitPersonNameQwalifBlock.append(namePetsitPerson, qwalificCityText);
    imgNamePetsitPersonBlock.append(imgPersonWrapper, petsitPersonNameQwalifBlock);

    const commonInfoPersonBlock = createHtmlElement('div', 'common-info-person-block');
    const textAboutMeTitle = createHtmlElement('h4', 'text-about-me-title title-person','', 'Let\'s get to know each other better');
    const textAboutMe = createHtmlElement('div', 'text-about-me-person person-text-common');
    if(userInfo.petsitterData.carers === undefined || userInfo.petsitterData.carers === ''){
         textAboutMe.textContent = 'No information';
    }else{
        textAboutMe.textContent = userInfo.petsitterData.carers;
    }
    const textSkillTitle = createHtmlElement('h4', 'title-person','', 'What sets me apart?');
    const textSkill = createHtmlElement('div', 'person-text-common');
    if(userInfo.petsitterData.skills === undefined || userInfo.petsitterData.skills === ''){
        textSkill.textContent = 'No information';
    }else{
        textSkill.textContent = userInfo.petsitterData.skills;
    }
    const qualificationPersonTitle = createHtmlElement('h4', 'title-person','', 'Additional qualifications');
    const qualificationPersonBlock = createHtmlElement('div', 'qualific-person-block');
    if(userInfo.petsitterData.qualifications === undefined || userInfo.petsitterData.qualifications.length === 0){
        qualificationPersonBlock.textContent = 'No information';
    }else{
        userInfo.petsitterData.qualifications.forEach((elem: string) =>{
            const str = elem.split('-').join(' ');
            const qualificationItem = createHtmlElement('div', 'qualification-item', '', str);
            qualificationPersonBlock.append(qualificationItem);
        })
    }

    // Price and service
    const myServiceTitle = createHtmlElement('h2', 'my-service-title', '', 'My price list and range of services');
      //accomodation
    const accommodationPersonBlock = createHtmlElement('div', 'service-common-block-item-person');
    const titleAccomodationPriceBlock = createHtmlElement('div', 'title-price-service-block', '', '');
    const titleAccomodation= createHtmlElement('h3', 'titlle-services-person', '', 'Overnight stay with a petsitter');
    const priceAccomodation = createHtmlElement('h3','titlle-services-person', '', `${userInfo.petsitterData.services.hotel.price} byn`);
    titleAccomodationPriceBlock.append(titleAccomodation, priceAccomodation);

    const titlBtnAccomBlock = createHtmlElement('div', 'title-btn-walk-block-person');
    const titleAccomBlock = createHtmlElement('div', 'title-accom-kind-of-pet-person what-dog-walk-text','', 'Which pets will stay with me overnight');
    const arrowDownSvg6 = createHtmlElement('img','arrow-down-person') as HTMLImageElement;
    arrowDownSvg6.src = 'img/svg/arrowDown.svg';
    titlBtnAccomBlock.append(titleAccomBlock, arrowDownSvg6);
    const serviceAccomBlockWrapper = createHtmlElement('div', 'view-of-pet-block-wrapper');
    const serviceAccomText = createHtmlElement('div', 'service-area-text');
    if(userInfo.petsitterData.services.hotel.animals === undefined || userInfo.petsitterData.services.hotel.animals.length === 0){
        serviceAccomText.textContent = 'No information';
    }else{
        userInfo.petsitterData.services.hotel.animals.forEach((elem: string)=>{
            const petItem = createHtmlElement('div', 'pet-item-hotel-person', '', elem);
            serviceAccomText.append(petItem);
        })
    }
    titlBtnAccomBlock.addEventListener('click', ()=>{
        serviceAccomBlockWrapper.classList.toggle('active');
    })
    serviceAccomBlockWrapper.append(serviceAccomText);
    if(userInfo.petsitterData.services.hotel.active === 'true'){
        accommodationPersonBlock.style.display = 'block';
    }else{
        accommodationPersonBlock.style.display = 'none';
    }
    accommodationPersonBlock.append(titleAccomodationPriceBlock, titlBtnAccomBlock, serviceAccomBlockWrapper);
    ///Walk
    const walkPersonBlock = createHtmlElement('div', 'service-common-block-item-person');
    const titleWalkPriceBlock = createHtmlElement('div', 'title-price-service-block', '', '');
    const titleWalk= createHtmlElement('h3', 'titlle-services-person', '', 'A walk in your neighborhood');
    const priceWalk = createHtmlElement('h3','titlle-services-person', '', `${userInfo.petsitterData.services.walking.price} byn`);
    titleWalkPriceBlock.append(titleWalk, priceWalk);
    const titlBtnWalkBlock = createHtmlElement('div', 'title-btn-walk-block-person');
    const titleWhatDog = createHtmlElement('div', 'title-accom-kind-of-pet-person what-dog-walk-text','', 'See what dogs I walk');
    const arrowDownSvg = createHtmlElement('img','arrow-down-person') as HTMLImageElement;
    arrowDownSvg.src = 'img/svg/arrowDown.svg';
    titlBtnWalkBlock.append(titleWhatDog, arrowDownSvg);
    const viewOfPetBlockWrapper = createHtmlElement('div', 'view-of-pet-block-wrapper');
    titlBtnWalkBlock.addEventListener('click', ()=>{
        viewOfPetBlockWrapper.classList.toggle('active');
    })
    const dogAgeTitle = createHtmlElement(
        "div",
        "dog-age-title dog-age-person",
        "",
        "Age of the dog"
      );
      const areaBtnDogAge = createHtmlElement("div", "area-btn-dog-age");
      const btnAge1 = createDogSizeBtn("Puppy", "< 1 year", "age-btn age-btn-petsit-person");
      const btnAge2 = createDogSizeBtn("Youngster", "2 - 3 years", "age-btn age-btn-petsit-person");
      const btnAge3 = createDogSizeBtn("Adult", "4 - 10 years", "age-btn age-btn-petsit-person");
      const btnAge4 = createDogSizeBtn("Senior", "> 11 years", "age-btn age-btn-petsit-person");
      areaBtnDogAge.append(btnAge1, btnAge2, btnAge3, btnAge4);
      const btnAgeArr = areaBtnDogAge.querySelectorAll('.btn-dog-size');
      if(userInfo.petsitterData.services.walking.ageOfDogs.length !== 0){
        const dogAgeArr = userInfo.petsitterData.services.walking.ageOfDogs;
        btnAgeArr.forEach(elem =>{
            const id = elem.id;
            if(dogAgeArr.includes(id.toLowerCase())){
                elem.classList.add('active');
            }
        })
      }
      const dogSizeTitle = createHtmlElement(
        "div",
        "dog-size-title",
        "",
        "Size of the dog"
      );
      const areaBtnDogSize = createHtmlElement("div", "area-btn-dog-size");
      const btnSize1 = createDogSizeBtn("Micro", "< 5 kg", 'person-dog-size');
      const btnSize2 = createDogSizeBtn("Small", "6 - 15 kg", 'person-dog-size');
      const btnSize3 = createDogSizeBtn("Medium", "16 - 25 kg", 'person-dog-size');
      const btnSize4 = createDogSizeBtn("Large", "26 - 35 kg", 'person-dog-size');
      const btnSize5 = createDogSizeBtn("Giant", "> 36 kg", 'person-dog-size');
      areaBtnDogSize.append(btnSize1, btnSize2, btnSize3, btnSize4, btnSize5);
      const btnSizeArr = areaBtnDogSize.querySelectorAll('.person-dog-size');
      if(userInfo.petsitterData.services.walking.kindOfDogs.length !== 0){
        const dogSizeArr = userInfo.petsitterData.services.walking.kindOfDogs;
        btnSizeArr.forEach(elem =>{
            const id = elem.id;
            if(dogSizeArr.includes(id.toLowerCase())){
                elem.classList.add('active');
            }
        })
      }
      const genderDogTitle = createHtmlElement(
        "div",
        "dog-gender-title",
        "",
        "Gender of the dog"
      );
      const genderInputsBlock = createHtmlElement("div", "gender-inputs-block person-pet-gender");
      const inputDiv1 = createDivInputs(
        "checkbox",
        "male",
        "Male",
        "Male",
        "div-gender-inputs"
      );
      const input1 = inputDiv1.querySelector('#male');
      if(input1) input1.setAttribute('disabled','');
      const inputDiv2 = createDivInputs(
        "checkbox",
        "female",
        "Female",
        "Female",
        "div-gender-inputs"
      );
      const input2 = inputDiv2.querySelector('#female');
      if(input2) input2.setAttribute('disabled','');
      genderInputsBlock.append(inputDiv1, inputDiv2);
      if(userInfo.petsitterData.services.walking.genderOfDogs !== 0){
        userInfo.petsitterData.services.walking.genderOfDogs.forEach((elem: string) =>{
            const checkElem = genderInputsBlock.querySelector(`#${elem}`);
            checkElem?.setAttribute('checked','');
        })
      }

    viewOfPetBlockWrapper.append(dogAgeTitle, areaBtnDogAge, dogSizeTitle,areaBtnDogSize, genderDogTitle, genderInputsBlock);
    
    const titlBtnWalkBlock2 = createHtmlElement('div', 'title-btn-walk-block-person');
    const titleAreaWalk = createHtmlElement('div', 'title-accom-kind-of-pet-person what-dog-walk-text','', 'Service area');
    const arrowDownSvg2 = createHtmlElement('img','arrow-down-person') as HTMLImageElement;
    arrowDownSvg2.src = 'img/svg/arrowDown.svg';
    titlBtnWalkBlock2.append(titleAreaWalk, arrowDownSvg2);
    const serviceAreaBlockWrapper = createHtmlElement('div', 'view-of-pet-block-wrapper');
    const serviceAreaText = createHtmlElement('div', 'service-area-text');
    if(userInfo.petsitterData.services.walking.serviceArea === '' || userInfo.petsitterData.services.walking.serviceArea === undefined){
        serviceAreaText.textContent = 'No information';
    }else{
        serviceAreaText.textContent = userInfo.petsitterData.services.walking.serviceArea;
    }
    serviceAreaBlockWrapper.append(serviceAreaText);
    titlBtnWalkBlock2.addEventListener('click', ()=>{
        serviceAreaBlockWrapper.classList.toggle('active');
    })
    if(userInfo.petsitterData.services.walking.active === 'true'){
        walkPersonBlock.style.display = 'block';
    }else{
        walkPersonBlock.style.display = 'none';
    }

    walkPersonBlock.append(titleWalkPriceBlock, titlBtnWalkBlock, viewOfPetBlockWrapper, titlBtnWalkBlock2, serviceAreaBlockWrapper);
    //Home visit
    const visitPersonBlock = createHtmlElement('div', 'service-common-block-item-person');
    const titleVisitPriceBlock = createHtmlElement('div', 'title-price-service-block', '', '');
    const titleVisit= createHtmlElement('h3', 'titlle-services-person', '', 'Home visits');
    const priceVisit = createHtmlElement('h3','titlle-services-person', '', `${userInfo.petsitterData.services.homevisits.price} byn`);
    titleVisitPriceBlock.append(titleVisit, priceVisit);
    const titlBtnVisitBlock = createHtmlElement('div', 'title-btn-walk-block-person');
    const titleVisitBlock = createHtmlElement('div', 'title-accom-kind-of-pet-person what-dog-walk-text','', 'Which pets I will be able to visit');
    const arrowDownSvg3 = createHtmlElement('img','arrow-down-person') as HTMLImageElement;
    arrowDownSvg3.src = 'img/svg/arrowDown.svg';
    titlBtnVisitBlock.append(titleVisitBlock, arrowDownSvg3);
    const serviceVisitBlockWrapper = createHtmlElement('div', 'view-of-pet-block-wrapper');
    const serviceVisitText = createHtmlElement('div', 'service-area-text');
    if(userInfo.petsitterData.services.homevisits.animals === undefined || userInfo.petsitterData.services.homevisits.animals.length === 0){
        serviceVisitText.textContent = 'No information';
    }else{
        userInfo.petsitterData.services.homevisits.animals.forEach((elem: string)=>{
            const petItem = createHtmlElement('div', 'pet-item-hotel-person', '', elem);
            serviceVisitText.append(petItem);
        })
    }
    titlBtnVisitBlock.addEventListener('click', ()=>{
        serviceVisitBlockWrapper.classList.toggle('active');
    })
    serviceVisitBlockWrapper.append(serviceVisitText);

    const titlBtnVisitBlock2 = createHtmlElement('div', 'title-btn-walk-block-person');
    const titleAreaVisit = createHtmlElement('div', 'title-accom-kind-of-pet-person what-dog-walk-text','', 'Service area');
    const arrowDownSvg4 = createHtmlElement('img','arrow-down-person') as HTMLImageElement;
    arrowDownSvg4.src = 'img/svg/arrowDown.svg';
    titlBtnVisitBlock2.append(titleAreaVisit, arrowDownSvg4);
    const serviceAreaBlockWrapper2 = createHtmlElement('div', 'view-of-pet-block-wrapper');
    const serviceAreaText2 = createHtmlElement('div', 'service-area-text');
    if(userInfo.petsitterData.services.homevisits.serviceArea === '' || userInfo.petsitterData.services.homevisits.serviceArea === undefined){
        serviceAreaText2.textContent = 'No information';
    }else{
        serviceAreaText2.textContent = userInfo.petsitterData.services.homevisits.serviceArea;
    }
    serviceAreaBlockWrapper2.append(serviceAreaText2);
    titlBtnVisitBlock2.addEventListener('click', ()=>{
        serviceAreaBlockWrapper2.classList.toggle('active');
    })
    if(userInfo.petsitterData.services.homevisits.active === 'true'){
        visitPersonBlock.style.display = 'block';
    }else{
        visitPersonBlock.style.display = 'none';
    }
    visitPersonBlock.append(titleVisitPriceBlock,titlBtnVisitBlock,serviceVisitBlockWrapper, titlBtnVisitBlock2, serviceAreaBlockWrapper2);
//home condition
    const homeBlockTitle = createHtmlElement('div', 'my-service-title home-condition-block', '', 'What conditions are in my house?');
    const homeCondItemBlock = createHtmlElement('div', 'home-condition-item-block');
    const typeOfHome = createBlockMenu('img/home.svg', userInfo.petsitterData.typeOfHome.toLowerCase(), 'home-item-condition');
    homeCondItemBlock.append(typeOfHome);
    const otherCondition = userInfo.petsitterData.homeConditions;
    otherCondition.forEach((elem: string)=>{
        const str = elem.split('-').join(' ');
        const homeCondItem = createBlockMenu('img/home.svg', str, 'home-item-condition');
        homeCondItemBlock.append(homeCondItem);
    })
//lives in my house
    const whoLiveTitle = createHtmlElement('div', 'my-service-title home-condition-block', '', 'Who lives in my house?');
    const whoLiveItemBlock = createHtmlElement('div', 'home-condition-item-block');
    const liveInMyHome = userInfo.petsitterData.tenatsAtHome;
    const otherAnimals = userInfo.petsitterData.otherAnimals;
    if(liveInMyHome && liveInMyHome.length !== 0){
        liveInMyHome.forEach((elem: string)=>{
            const str = elem.split('-').join(' ');
            const liveItem = createBlockMenu('img/profileLogo.svg', str, 'who-live-in-house-item');
            whoLiveItemBlock.append(liveItem);
        })
    }
    if(otherAnimals && otherAnimals.length !== 0){
        otherAnimals.forEach((elem: string)=>{
            const str = elem.split('-').join(' ');
            const liveItem = createBlockMenu('img/paw.svg', str, 'who-live-in-house-item');
            whoLiveItemBlock.append(liveItem);
        })
    }
//Добавить еще сюда моих животных и календарь!!!!

     commonInfoPersonBlock.append(textAboutMeTitle, textAboutMe, textSkillTitle, textSkill, qualificationPersonTitle, qualificationPersonBlock, myServiceTitle,accommodationPersonBlock,
        walkPersonBlock, visitPersonBlock, homeBlockTitle, homeCondItemBlock, whoLiveTitle, whoLiveItemBlock);
        
        //поле оформления заказа
    const rezervOrderBlock = createHtmlElement('div', 'rezerve-order-block');
    petsitPersonBlock.append(commonInfoPersonBlock, rezervOrderBlock);

    sectionPetsitPerson.append(imgNamePetsitPersonBlock, petsitPersonBlock);
}

export default async function petsitterPerson() {
    document.body.innerHTML = "";
    await headerPetsitter(document.body);
    const path = window.location.pathname;
    const id = path.split("/")[3];
    renderPetsitPerson(id);
    document.body.append(sectionPetsitPerson);
    footerFun(document.body);
    return document.body;
  }