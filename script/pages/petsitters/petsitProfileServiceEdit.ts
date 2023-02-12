import { createHtmlElement } from "../../utils";


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
    }
}

function createDogSizeBtn(dogSize: string, weightDog:string){
    const btnSize = createHtmlElement('div', 'btn-dog-size', dogSize);
    btnSize.innerHTML = `<div class="div-btn-size">${dogSize}<span class = "span-btn-size">${weightDog}</span></div>`;
    return btnSize;
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