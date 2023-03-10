import { createHtmlElement } from "../../utils";
import { createMyPetsBlock } from "../pageComponents/ownerPetsitPets";
import { headerOwner } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";

const sectionOwnerPets = createHtmlElement("section", "section-owner-pets");

async function renderOwnerPets() {
  if(!localStorage.getItem("curr-user-id")){
    history.pushState("", "", "");
    window.dispatchEvent(new Event("popstate"));
  }else{
  sectionOwnerPets.innerHTML = "";
  const myPetsOwnerWrapper = createHtmlElement("div", "my-pets-owner-wrapper");
  const petsBlock = await createMyPetsBlock();
  myPetsOwnerWrapper.append(petsBlock);
  sectionOwnerPets.append(myPetsOwnerWrapper);
  }
}

export default async function ownerPets() {
  document.body.innerHTML = "";
  await headerOwner(document.body);
  renderOwnerPets();
  document.body.append(sectionOwnerPets);
  footerFun(document.body);
  return document.body;
}
