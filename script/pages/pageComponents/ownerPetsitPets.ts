import { createHtmlElement } from "../../utils";
import { getUser } from "../../commonFunction/getUser";

export async function createMyPetsBlock() {
    const user = await getUser();
    const userInfo = (user).item;
    const basicPetsBlock = createHtmlElement('div', 'basic-info-block my-pets');
    const myPetsTitle = createHtmlElement('h1', 'title-photo-profile-block my-pets-title', '', 'My pets');
    basicPetsBlock.append(myPetsTitle);
    const textBtnMyPetWrapper = createHtmlElement('div', 'my-pet-text-btn-wrapper');
    basicPetsBlock.append(textBtnMyPetWrapper);
    const commonTextPetsit = createHtmlElement('div','common-text-my-pets');
    textBtnMyPetWrapper.append(commonTextPetsit);
    const userRole = userInfo.role;
    userRole === 'OWNER'? commonTextPetsit.innerHTML = 'Add your pet to conveniently and quickly order petsitter care services.' : commonTextPetsit.innerHTML = 'If you own a dog or cat, add its profile. This will allow your customers to see who their pet will be spending time with.';
    const btnAddPet = createHtmlElement('button', 'btn-add-pet','btn-add-pet', 'Add pet');
    textBtnMyPetWrapper.append(btnAddPet);
    btnAddPet.addEventListener('click', ()=>{
        history.pushState("", "", "/pets/add");
        window.dispatchEvent(new Event("popstate"));
    })
    const petsItemCountBlock = createHtmlElement('div', 'pets-item-count-block');
    basicPetsBlock.append(petsItemCountBlock);
    const petsUser: string[] = userInfo.pets;
    console.log('petsUser', petsUser);
    if(petsUser.length === 0){
        petsItemCountBlock.innerHTML = '';
        const noPetsText = createHtmlElement('div', 'no-pets-text', '', 'No pets added');
        petsItemCountBlock.append(noPetsText);
    }else{
        petsUser.forEach(elem =>{
            console.log(elem); //ВСТАВИТЬ Ф-ЦИЮ ДЛЯ ОТРИСОВКИ КАРТОЧКИ ПИТОМЦА!!!!!
        })
    }



    return basicPetsBlock;
}