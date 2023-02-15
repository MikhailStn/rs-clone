import { createHtmlElement } from "../../utils";
import { createDivInputs } from "../../commonFunction/inputsCreate";
import { createDogSizeBtn } from "../petsitters/petsitProfileServiceEdit";
import { getUser } from "../../commonFunction/getUser";

const sectionPetsAdd = createHtmlElement('div', 'section-pets-add');

async function renderPetsAddPage(){
    sectionPetsAdd.innerHTML = '';
    const sectionComeBack = createHtmlElement('div', 'come-back-wrapper-service');
    sectionPetsAdd.append(sectionComeBack);
    const comeBackText = createHtmlElement('div', 'come-back-div-service', '', '← Back home');
    sectionComeBack.append(comeBackText);
    comeBackText.addEventListener('click', () => {
        history.pushState("", "", "");
        window.dispatchEvent(new Event("popstate"));
    })
    const sectionTitleTetxtService = createHtmlElement('div', "section-service-text-title-wrapper add-pets");
    sectionPetsAdd.append(sectionTitleTetxtService);
    const serviceTextTitleWrapper = createHtmlElement('div', 'service-text-title-wrapper');
    sectionTitleTetxtService.append(serviceTextTitleWrapper);
    const titleServiceEdit = createHtmlElement('h1', 'title-service-edit pets-add-title', '','Add your pet');
    serviceTextTitleWrapper.append(titleServiceEdit);
    const sectionKindOfPet = createHtmlElement('div', 'section-kind-of-pet-service pets-add-block');
    sectionPetsAdd.append(sectionKindOfPet);
    const inputPetsName = createHtmlElement('input', 'input-pets-name input-pets','pet-name') as HTMLInputElement;
    inputPetsName.type = 'text';
    inputPetsName.placeholder = 'Name'
    inputPetsName.setAttribute("required", "");
    const mandatoryText1 = createHtmlElement('div','mandatory-text-pet','','* Required field');
    sectionKindOfPet.append(inputPetsName, mandatoryText1);

    const catOrDogField = createHtmlElement('fieldset', 'additional-qualification-block cat-or-dog-fieldset');
    const mandatoryText2 = createHtmlElement('div','mandatory-text-pet','','* Required field');
    sectionKindOfPet.append(catOrDogField, mandatoryText2);
    const divInput1 = createHtmlElement('div', 'pets-item-wrapper-service div-input-cat-or-dog');
    const divInput2 = createHtmlElement('div', 'pets-item-wrapper-service div-input-cat-or-dog');
    catOrDogField.append(divInput1,divInput2);

    const petsItemImgWrapper1 = createHtmlElement('div', 'pets-img-wrapper-service');
    divInput1.append(petsItemImgWrapper1);
    const imgPetsItem1 = createHtmlElement('img', 'img-pets-item-service') as HTMLImageElement;
    imgPetsItem1.src = 'https://petsy.pl/_next/image/?url=%2Fimages%2Fpets%2FDOG.jpg&w=1920&q=75';
    imgPetsItem1.alt = 'Dog';
    petsItemImgWrapper1.append(imgPetsItem1);

    const petsItemImgWrapper2 = createHtmlElement('div', 'pets-img-wrapper-service');
    divInput2.append(petsItemImgWrapper2);
    const imgPetsItem2 = createHtmlElement('img', 'img-pets-item-service') as HTMLImageElement;
    imgPetsItem2.src = 'https://petsy.pl/_next/image/?url=%2Fimages%2Fpets%2FCAT.jpg&w=1920&q=75';
    imgPetsItem2.alt = 'Cat';
    petsItemImgWrapper2.append(imgPetsItem2);

    const inputCatOrDog1 = createHtmlElement('input', 'input-pets', 'dog') as HTMLInputElement;
    inputCatOrDog1.type = 'radio';
    inputCatOrDog1.name = 'kind-of-pet';
    inputCatOrDog1.value = 'Dog';
    inputCatOrDog1.setAttribute("required", "");
    const lableInput1 = createHtmlElement('label', '', '', 'Dog') as HTMLLabelElement;
    lableInput1.setAttribute('for', 'dog');
    divInput1.append(inputCatOrDog1, lableInput1);
    const inputCatOrDog2 = createHtmlElement('input', 'input-pets', 'cat') as HTMLInputElement;
    inputCatOrDog2.type = 'radio';
    inputCatOrDog2.name = 'kind-of-pet';
    inputCatOrDog2.value = 'Cat';
    const lableInput2 = createHtmlElement('label', '', '', 'Cat') as HTMLLabelElement;
    lableInput2.setAttribute('for', 'cat');
    divInput2.append(inputCatOrDog2, lableInput2);

    const genderDogTitle = createHtmlElement('div', 'dog-gender-title cat-or-dog-gender', '', 'Gender of the Pet');
    sectionKindOfPet.append(genderDogTitle);
    const genderInputsBlock = createHtmlElement('div', 'gender-inputs-block');
    sectionKindOfPet.append(genderInputsBlock);
    const inputDiv1 = createDivInputs('radio', 'male', 'gender-pet', 'Male', 'div-gender-inputs', 'input-pets');
    const inputDiv2 = createDivInputs('radio', 'female', 'gender-pet', 'Female', 'div-gender-inputs', 'input-pets');
    const mandatoryText3 = createHtmlElement('div','mandatory-text-pet','','* Required field');
    genderInputsBlock.append(inputDiv1, inputDiv2);
    sectionKindOfPet.append(mandatoryText3);

    const inputBreedOfAnimal = createHtmlElement('input', 'input-breed-of-pets input-pets', 'pets-breed') as HTMLInputElement;
    inputBreedOfAnimal.type = 'text';
    inputBreedOfAnimal.placeholder = 'Breed of animal'
    inputBreedOfAnimal.setAttribute("required", "");
    const mandatoryText4 = createHtmlElement('div','mandatory-text-pet','','* Required field');
    sectionKindOfPet.append(inputBreedOfAnimal, mandatoryText4);

    const dogSizeTitle = createHtmlElement('div', 'dog-size-title dog-size-pet', '', 'Size of the pet');
    sectionKindOfPet.append(dogSizeTitle);
    const areaBtnDogSize = createHtmlElement('div', 'area-btn-dog-size');
    sectionKindOfPet.append(areaBtnDogSize);
    const btnSize1 = createDogSizeBtn('Micro', '< 5 kg', 'dog-size');
    const btnSize2 = createDogSizeBtn('Small', '6 - 15 kg', 'dog-size');
    const btnSize3 = createDogSizeBtn('Medium', '16 - 25 kg', 'dog-size');
    const btnSize4 = createDogSizeBtn('Large', '26 - 35 kg', 'dog-size');
    const btnSize5 = createDogSizeBtn('Giant', '> 36 kg', 'dog-size');
    areaBtnDogSize.append(btnSize1, btnSize2, btnSize3,btnSize4,btnSize5);
    areaBtnDogSize.addEventListener('click', (event)=>{
        const target = event.target;
        if(target instanceof HTMLElement && target.classList.contains('dog-size')){
            const allButtonSelect = document.querySelectorAll('.dog-size');
            for(let i = 0; i < allButtonSelect.length; i++){
                allButtonSelect[i].classList.remove('active');
            }
                target.classList.add('active');
            }
    })

    const dogAgeTitle = createHtmlElement('div', 'dog-age-title pet-age-title', '', 'Age of the pet');
    sectionKindOfPet.append(dogAgeTitle);
    const areaBtnDogAge = createHtmlElement('div', 'area-btn-dog-age');
    sectionKindOfPet.append(areaBtnDogAge);
    const btnAge1 = createDogSizeBtn('Puppy','< 1 year','age-btn');
    const btnAge2 = createDogSizeBtn('Youngster','2 - 3 years','age-btn');
    const btnAge3 = createDogSizeBtn('Adult','4 - 10 years','age-btn');
    const btnAge4 = createDogSizeBtn('Senior','> 11 years','age-btn');
    areaBtnDogAge.append(btnAge1, btnAge2, btnAge3, btnAge4);
    areaBtnDogAge.addEventListener('click', (event)=>{
        const target = event.target;
        console.log('click')
        if(target instanceof HTMLElement && target.classList.contains('age-btn')){
            const allButtonSelect = document.querySelectorAll('.age-btn');
            for(let i = 0; i < allButtonSelect.length; i++){
                allButtonSelect[i].classList.remove('active');
            }
                target.classList.add('active');
        }
    })

    const fieldsetOtherInfo = createHtmlElement('fieldset', 'other-info-pet-add-field');
    sectionKindOfPet.append(fieldsetOtherInfo);
    const legendOtherInfo = createHtmlElement('legend', 'other-info-pet-title', '', 'Other important information');
    fieldsetOtherInfo.append(legendOtherInfo);
    const inputInfo1 = createDivInputs('checkbox', 'neutered-castrated', 'Neutered/castrated', 'Neutered/castrated', 'div-other-info-pets');
    const inputInfo2 = createDivInputs('checkbox', 'cannot-be-in-the-herd', 'The only one/cannot be in the herd', 'The only one/cannot be in the herd', 'div-other-info-pets');
    const inputInfo3 = createDivInputs('checkbox', 'has-motion-sickness', 'He has motion sickness', 'He has motion sickness', 'div-other-info-pets');
    const inputInfo4 = createDivInputs('checkbox', 'takes-medication', 'Takes medication', 'Takes medication', 'div-other-info-pets');
    const inputInfo5 = createDivInputs('checkbox', 'it-is-aggressive', 'It is aggressive', 'It is aggressive', 'div-other-info-pets');
    const inputInfo6 = createDivInputs('checkbox', 'excessively-excitable', 'He is excessively excitable', 'He is excessively excitable', 'div-other-info-pets');
    const inputInfo7 = createDivInputs('checkbox', 'timid', 'He is timid', 'He is timid', 'div-other-info-pets');
    const inputInfo8 = createDivInputs('checkbox', 'tends-to-run-away', 'He tends to run away', 'He tends to run away', 'div-other-info-pets');
    const inputInfo9 = createDivInputs('checkbox', 'has-vaccination-booklet', 'Has a vaccination booklet', 'Has a vaccination booklet', 'div-other-info-pets');
    const inputInfo10 = createDivInputs('checkbox', 'dog-with-a-yellow-ribbon', 'Dog with a yellow ribbon', 'Dog with a yellow ribbon', 'div-other-info-pets');
    const inputInfo11 = createDivInputs('checkbox', 'in-the-midst-of-heat', 'In the midst of heat', 'In the midst of heat', 'div-other-info-pets');
    const inputInfo12 = createDivInputs('checkbox', 'defecates-at-home', 'Defecates at home', 'Defecates at home', 'div-other-info-pets');
    fieldsetOtherInfo.append(inputInfo1, inputInfo2, inputInfo3, inputInfo4, inputInfo5, inputInfo6, inputInfo7, inputInfo8, inputInfo9, inputInfo10, inputInfo11,inputInfo12);
    
    const tempTitle = createHtmlElement("h4", "temp-title pet-photo-title");
    tempTitle.textContent = "Photo";
    tempTitle.setAttribute("style", "margin-bottom: 0");
    const photoContainer = createHtmlElement("div", "photo-container");
    photoContainer.setAttribute(
    "style",
    "background-image: url('../img/icons/photo.png')"
    );
    const btnAddPhoto = createHtmlElement(
    "input",
    "button-add-photo"
    ) as HTMLInputElement;
    btnAddPhoto.type = "file";
    btnAddPhoto.accept = ".png,.jpg,.jpeg";
    btnAddPhoto.id = "photo";
    const btnConfirm = createHtmlElement("button", "button-confirm");
    btnConfirm.textContent = "Confirm";
    const btnAddPhotoLabel = createHtmlElement(
    "label",
    "label-add-photo"
    ) as HTMLLabelElement;
    btnAddPhotoLabel.setAttribute("for", "photo");
    btnAddPhotoLabel.textContent = "Add photo";
    photoContainer.append(btnAddPhoto, btnAddPhotoLabel);
    const btnSkip = createHtmlElement("button", "button-skip");
    btnSkip.textContent = "Skip";

    //Добавить функцию сохранения на сервер!!!!!!

    sectionKindOfPet.append(
        tempTitle,
        photoContainer,
        btnConfirm,
        btnSkip
    );

    const inputTextAboutPet = createHtmlElement('textarea', 'input-text-about-pet input-pets', 'text-about-pet') as HTMLTextAreaElement;
    inputTextAboutPet.placeholder = 'Tell us about your pet';
    inputTextAboutPet.setAttribute("required", "");
    inputTextAboutPet.minLength = 50;
    inputTextAboutPet.maxLength = 1000;
    inputTextAboutPet.wrap = 'soft';
    const countTextAboutPet = createHtmlElement('div','count-motto-profile','',`0/1000`);
    inputTextAboutPet.addEventListener('input', ()=>{
        countTextAboutPet.innerHTML='';
        countTextAboutPet.innerHTML = `${inputTextAboutPet.value.length}/1000`;
    })
    const mandatoryText5 = createHtmlElement('div','mandatory-text-pet','','* Minimum number of characters: 50');
    const mandatoryText6 = createHtmlElement('div','mandatory-text-pet','','* Required field');
    sectionKindOfPet.append(inputTextAboutPet, countTextAboutPet, mandatoryText5, mandatoryText6);

    const btnSaveWrapper = createHtmlElement('div', 'btn-save-wrapper');
    sectionKindOfPet.append(btnSaveWrapper);
    const errorText = createHtmlElement('div','error-text-pets');
    const saveText = createHtmlElement('div','save-text-pets');
    const btnSaveMyHome = createHtmlElement('button', 'btn-save-my-home', 'btn-save-pet', 'Save');
    btnSaveWrapper.append(saveText, errorText, btnSaveMyHome);
    const inputs = sectionKindOfPet.querySelectorAll('.input-pets');
    const allRequiredTexts = sectionKindOfPet.querySelectorAll('.mandatory-text-pet');
    btnSaveMyHome.addEventListener('click', async()=>{
        let numberOfInvalid = 0;
        inputs.forEach(el =>{
            if(el instanceof HTMLInputElement){
                if(!el.checkValidity()){
                    numberOfInvalid +=1;
                }else{
                    numberOfInvalid = numberOfInvalid + 0;
                }
            }})
        if(numberOfInvalid > 0 && inputTextAboutPet.value.length < 50 || numberOfInvalid === 0 && inputTextAboutPet.value.length < 50 ){
            allRequiredTexts.forEach(elem => {
                if(elem instanceof HTMLElement) elem.style.color = '#f04a2d';
            })
            saveText.innerHTML='';
            errorText.innerHTML='';
            errorText.innerHTML = 'Please fill in all required fields';
        }
        if(numberOfInvalid === 0 && inputTextAboutPet.value.length >= 50){
            allRequiredTexts.forEach(elem => {
                if(elem instanceof HTMLElement) elem.style.color = '#696869';
            })
            errorText.innerHTML='';
            saveText.innerHTML='';
            saveText.innerHTML = 'Your information is saved'; 
            
            // добавить сохранение данных на сервер!!!!!!!!!!

            const user = await getUser();
            const userInfo = (user).item;
            const userRole = userInfo.role;
            if(userRole === 'OWNER'){
                history.pushState("", "", "/owner/pets");
                window.dispatchEvent(new Event("popstate"));
            }else{
                history.pushState("", "", "/petsitter/profile/basics");
                window.dispatchEvent(new Event("popstate"));
            }
        }
    })
}

export default async function petsAddShowPage() {
  document.body.innerHTML = "";
  await renderPetsAddPage();
  document.body.append(sectionPetsAdd);
  return document.body;
}
