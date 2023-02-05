import { createHtmlElement } from "../../utils";
import { petsitArrForReview } from "../../utils/petsitArrayFor";
import { header } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";

const sectionPetsitters = createHtmlElement('section', 'section-common-petsitters');

function renderPetsitMainPage(){
  sectionPetsitters.innerHTML = '';
  const topBlockWrap = createHtmlElement('div', 'top-block-wrapper');
  const topBlockPetsit = createHtmlElement('section', 'top-block-petsitter');
  sectionPetsitters.append(topBlockWrap);
  topBlockWrap.append(topBlockPetsit);
  const topTexPetsitContainer = createHtmlElement('div', 'top-text-petsit-container');
  topBlockPetsit.append(topTexPetsitContainer);
  const tittleTopPetsitBlock = createHtmlElement('h2', 'title-top-petsit-block', '', 'Become a petsitter and earn money doing what you love!');
  topTexPetsitContainer.append(tittleTopPetsitBlock);
  const topTextPetsit = createHtmlElement('div', 'top-text-petsit', '', 'Petsi is a platform for people who love animals. We support You and help you develop Your business. Become a professional petsitter together with us!');
  tittleTopPetsitBlock.after(topTextPetsit);
  const btnCreateAcc = createBtnCreatAcc();
  topTextPetsit.after(btnCreateAcc);
  const topImageBox = createHtmlElement('div', 'top-image-petsit-box');
  topBlockPetsit.append(topImageBox);
  const imgTopPetsit = createHtmlElement('img', 'img-top-petsit');
  topImageBox.append(imgTopPetsit);
  if(imgTopPetsit instanceof HTMLImageElement){
    imgTopPetsit.src = 'https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_hero.jpg&w=1920&q=75';
    imgTopPetsit.alt = "girl and dog";
  }
  const petsitBlock1 = createPetsitBlock('Your business card', 'Petsi\'s pet sitter profile is your public business card and will help you establish credibility as a pet sitter in the eyes of pet owners.', 'https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_profile.jpg&w=1920&q=75', 'block-revert');
  sectionPetsitters.append(petsitBlock1);
  const petsitBlock2 = createPetsitBlock('Transparent billing rules', 'Petsi is completely free for owners and for caregivers. We only make a living from commission on orders, which we then use to develop the portal and promote the petsitter profession, which will translate into the number of orders you acquire.', 'https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_accounting.jpg&w=1920&q=75');
  sectionPetsitters.append(petsitBlock2);
  const petsitBlock3 = createPetsitBlock('Business support', 'We do everything to help you grow your business. Extensive panel, training, simple registration and verification. Take care of your pets and we\'ll take care of everything around you!', 'https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_support.jpg&w=1920&q=75', 'block-revert');
  sectionPetsitters.append(petsitBlock3);
  const sliderBlock = createSliderReview();
  sectionPetsitters.append(sliderBlock);
  const contactSection = createContactPetsitSection();
  sectionPetsitters.append(contactSection);
return sectionPetsitters;
}

function createPetsitBlock(title: string, commonText: string, srcBl: string, classNameBl?: string){
  const petsitBlock = createHtmlElement('div', 'petsit-main-page-block');
  if(classNameBl) petsitBlock.classList.add(classNameBl);
  const textPetsitBlock = createHtmlElement('div', 'petsit-text-block');
  petsitBlock.append(textPetsitBlock);
  const litleTitlePetsitBlock = createHtmlElement('h5', 'little-title-petsit-block', '', 'PETSI');
  textPetsitBlock.append(litleTitlePetsitBlock);
  const titlePetsitBlock = createHtmlElement('h2', 'petsit-title-block', '', title);
  textPetsitBlock.append(titlePetsitBlock);
  const commonTextPetsitBlock = createHtmlElement('div','common-text-petsit-block','', commonText);
  textPetsitBlock.append(commonTextPetsitBlock);
  const btnCreatAcc = createBtnCreatAcc();
  textPetsitBlock.append(btnCreatAcc);
  const boxImgPetsitBlock = createHtmlElement('div', 'block-box-img-petsit-main');
  petsitBlock.append(boxImgPetsitBlock);
  const imgPetsitBlock = createHtmlElement('img', 'img-petsit-block');
  boxImgPetsitBlock.append(imgPetsitBlock);
  if(imgPetsitBlock instanceof HTMLImageElement){
    imgPetsitBlock.src = srcBl;
    imgPetsitBlock.alt = 'people with pet';
  }
  return petsitBlock;
}

function createBtnCreatAcc(){
  const btnCreateAcc = createHtmlElement('a', 'btn-create-account', '', 'Create account');
  if(btnCreateAcc instanceof HTMLAnchorElement){
    btnCreateAcc.href = '/auth/register/petsitter';
  }
  return btnCreateAcc;
}

function createBtnViewProf(){
  const btnViewProf = createHtmlElement('a', 'btn-view-profile', '', 'View profile');
  if(btnViewProf instanceof HTMLAnchorElement){
    btnViewProf.href = '/p/';//надо добавить корректную ссылку на человека!!!!
  }
  return btnViewProf;
}

function createSliderReview(){
  let index = 0;
  const sliderPetsitContainer = createHtmlElement('section', 'slider-petsit-container');
  const sliderPetsitWrapper = createHtmlElement('div', 'slider-petsit-wrapper');
  sliderPetsitContainer.append(sliderPetsitWrapper);
  const sliderItemWraper = createHtmlElement('div', 'slider-item-wrapper');
  sliderPetsitWrapper.append(sliderItemWraper);
  setInterval(function(){
    if(index > (petsitArrForReview.length-1)) index = 0;
    sliderItemWraper.innerHTML = '';
    const sliderItem = createSliderPetsitItem(index);
    sliderItemWraper.append(sliderItem);
    index +=1;
  }, 5000);
  const paginationBtnPetsitContainer = createHtmlElement('div', 'pagination-petsit-slider-container');
  sliderPetsitWrapper.append(paginationBtnPetsitContainer);
  const paginationBtnLeftPetsit = createHtmlElement('div', 'pagination-btn-petsit', '', '🠔');
  paginationBtnPetsitContainer.append(paginationBtnLeftPetsit);
  paginationBtnLeftPetsit.addEventListener('click', ()=>{
    index -= 1;
    if(index < 0) {
      index = petsitArrForReview.length - 1;
    }
    sliderItemWraper.innerHTML = '';
    const sliderItem = createSliderPetsitItem(index);
    sliderItemWraper.append(sliderItem);
  })
  const paginationBtnRightPetsit = createHtmlElement('div', 'pagination-btn-petsit', '', '🠖');
  paginationBtnPetsitContainer.append(paginationBtnRightPetsit);
  paginationBtnRightPetsit.addEventListener('click', ()=>{
    index += 1;
    if(index > petsitArrForReview.length - 1) index = 0;
    sliderItemWraper.innerHTML = '';
    const sliderItem = createSliderPetsitItem(index);
    sliderItemWraper.append(sliderItem);
  })
  return sliderPetsitContainer;
}

function createSliderPetsitItem(index: number){
  const sliderItem = createHtmlElement('div', 'slider-petsit-item');
  const imgBtnSliderContainer = createHtmlElement('div', 'img-btn-slider-container');
  sliderItem.append(imgBtnSliderContainer);
  const imgPetsitContainer = createHtmlElement('div', 'img-slider-item-container');
  const imgPetsitItem = createHtmlElement('img', 'img-petsit-slider-item');
  if(imgPetsitItem instanceof HTMLImageElement){
    imgPetsitItem.src = petsitArrForReview[index].src;
    imgPetsitItem.alt = `Photo of ${petsitArrForReview[index].lastName} ${petsitArrForReview[index].firstName}`;
  }
  imgBtnSliderContainer.append(imgPetsitContainer);
  imgPetsitContainer.append(imgPetsitItem);
  const btnViewProf = createBtnViewProf();
  imgBtnSliderContainer.append(btnViewProf);
  const textBoxSliderItem = createHtmlElement('div', 'text-box-slider-item');
  sliderItem.append(textBoxSliderItem);
  const namePetsitSlider = createHtmlElement('h4', 'name-petsit-slider', '', `${petsitArrForReview[index].firstName}`);
  textBoxSliderItem.append(namePetsitSlider);
  const rolePetsitSlider = createHtmlElement('div', 'role-petsit-slider','', `${petsitArrForReview[index].role}`);
  textBoxSliderItem.append(rolePetsitSlider);
  const starsContainerSlider = createHtmlElement('div', 'stars-slider-container','', '★★★★★');
  textBoxSliderItem.append(starsContainerSlider);
  const reviewText = createHtmlElement('div', 'review-slider-item','',`${petsitArrForReview[index].review}`);
  textBoxSliderItem.append(reviewText);
  const reviewOwnerText = createHtmlElement('div', 'review-owner-text', '', `${petsitArrForReview[index].reviewOwner}`);
  textBoxSliderItem.append(reviewOwnerText);
  return sliderItem;
}

function createContactPetsitSection(){
  const contactPetsitMainSection = createHtmlElement('section', 'section-contact-petsit-main-page');
  const contactPetsitWrapper = createHtmlElement('div', 'contact-petsitter-wrapper-main-page');
  contactPetsitMainSection.append(contactPetsitWrapper);
  const inputTextContactContainer = createHtmlElement('div', 'input-text-contact-petsit-container');
  contactPetsitWrapper.append(inputTextContactContainer);
  const contactTitle = createHtmlElement('h2', 'petsit-title-block', '', 'Let\'s stay in touch!');
  inputTextContactContainer.append(contactTitle);
  const contactCommonText = createHtmlElement('div', 'common-text-petsit-block','', 'Sign up and receive once a month tips, discounts and news straight from us');
  contactTitle.after(contactCommonText);
  const inputContactWrapper = createHtmlElement('div', 'input-contact-petsit-main-wrapper');
  contactCommonText.after(inputContactWrapper);
  const emailContactInput = createHtmlElement('input', 'input-contact-email');
  inputContactWrapper.append(emailContactInput);
  const btnSignUp = createHtmlElement('button', 'btn-sign-up-contact', '', 'Subscribe');
  emailContactInput.after(btnSignUp);
  const emailTextError = createHtmlElement('p', 'email-text-error-petsit-contact-main', '', 'Incorrect email format');
  emailContactInput.after(emailTextError);
  if(emailContactInput instanceof HTMLInputElement){
    emailContactInput.type = 'email';
    emailContactInput.placeholder = 'e-mail';
    emailContactInput.setAttribute("required", "");
    btnSignUp.addEventListener('click', ()=>{
        if(!emailContactInput.checkValidity() && !emailTextError.classList.contains('active')){
            emailTextError.classList.add('active');
        }else if(emailContactInput.checkValidity() && emailTextError.classList.contains('active')){
            emailTextError.classList.remove('active');
            emailContactInput.value = '';
        }
})
}
  const imgContactWrap = createHtmlElement('div', 'img-contact-main-petsit-wrapper');
  contactPetsitWrapper.append(imgContactWrap);
  const imgContact = createHtmlElement('img', 'img-contact-main-petsit');
  imgContactWrap.append(imgContact);
  if(imgContact instanceof HTMLImageElement){
    imgContact.src = 'https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fpetsitter_newsletter.jpg&w=1200&q=75';
    imgContact.alt = 'cat with gadget';
  }
  return contactPetsitMainSection;
}


export default function petsitters() {
  document.body.innerHTML = '';
   header(document.body);
    renderPetsitMainPage();
    document.body.append(sectionPetsitters);
    footerFun(sectionPetsitters);
    return document.body;
}
