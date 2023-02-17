import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUserFromId } from "../../commonFunction/getUser";


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
    commonInfoPersonBlock.append(textAboutMeTitle, textAboutMe)
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