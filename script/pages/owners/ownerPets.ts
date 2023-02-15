import { createHtmlElement } from "../../utils";
import { createMyPetsBlock } from "../pageComponents/ownerPetsitPets";
import { headerOwner } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";

const sectionOwnerPets = createHtmlElement('section', 'section-owner-pets');

async function renderOwnerPets(){
    sectionOwnerPets.innerHTML = '';
    const myPetsOwnerWrapper = createHtmlElement('div','my-pets-owner-wrapper');
    const petsBlock = await createMyPetsBlock();
    myPetsOwnerWrapper.append(petsBlock);
    sectionOwnerPets.append(myPetsOwnerWrapper);
}

export default async function ownerPets() {
    document.body.innerHTML = "";
    await headerOwner(document.body);
    document.querySelector('.section-menu-field')?.classList.add('active');
    renderOwnerPets();
    document.body.append(sectionOwnerPets);
    footerFun(document.body);
    return document.body;
  }