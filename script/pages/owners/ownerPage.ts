import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUserFromId } from "../../commonFunction/getUser";
import { Pets } from "../pageComponents/ownerPetsitPets";
import { createItemPetsCard } from "../pageComponents/ownerPetsitPets";

const sectionOwnerPerson = createHtmlElement("section", "section-owner-person");

async function renderOwnerPerson(id: string) {
  sectionOwnerPerson.innerHTML = "";
  const user = await getUserFromId(id);
  const userInfo = user.item;
  const petsitPersonBlock = createHtmlElement(
    "div",
    "petsit-person-block-owner"
  );
  const imgWallWrapper = createHtmlElement("div", "img-wall-wrapper");
  const imgWalpaper = createHtmlElement(
    "img",
    "img-walpaper-person"
  ) as HTMLImageElement;
  imgWalpaper.src =
    "https://petsy.pl/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpetsitter_default_bg.b05b4509.webp&w=1920&q=75";
  imgWalpaper.alt = "Pets";
  imgWallWrapper.append(imgWalpaper);
  sectionOwnerPerson.append(imgWallWrapper);
  const imgNamePetsitPersonBlock = createHtmlElement(
    "div",
    "img-name-petsit-person-block"
  );
  const imgPersonWrapper = createHtmlElement("div", "img-person-wrapper");
  const imgPersonPetsit = createHtmlElement(
    "img",
    "img-person-petsit"
  ) as HTMLImageElement;
  if (userInfo.avatarPath === "" || userInfo.avatarPath === undefined) {
    imgPersonPetsit.src = "img/images/peopleWithPet.jpg";
    imgPersonPetsit.style.background = "#ffffff";
  } else {
    imgPersonPetsit.src = userInfo.avatarPath;
  }
  imgPersonWrapper.append(imgPersonPetsit);
  const petsitPersonNameQwalifBlock = createHtmlElement(
    "div",
    "petsit-name-qwalific-block"
  );
  const namePetsitPerson = createHtmlElement(
    "h1",
    "name-petsit-person",
    "",
    `${userInfo.firstName}`
  );
  const qwalificCityText = createHtmlElement(
    "h3",
    "qualific-city-person-text",
    "",
    `Pet owner, ${userInfo.city}`
  );
  petsitPersonNameQwalifBlock.append(namePetsitPerson, qwalificCityText);
  imgNamePetsitPersonBlock.append(
    imgPersonWrapper,
    petsitPersonNameQwalifBlock
  );

  const contactInfoTitle = createHtmlElement(
    "div",
    "contact-info-title",
    "",
    "Contact information"
  );
  const phoneOwner = createHtmlElement(
    "div",
    "phone-number-owner",
    "",
    `Phone number: ${userInfo.phone}`
  );
  const petTitle = createHtmlElement("div", "pet-title-owner-page", "", "Pets");
  const petsBlock = createHtmlElement("div", "pets-owner-block");
  if (userInfo.pets.length !== 0) {
    userInfo.pets.forEach(async (elem: Pets) => {
      const petsPetsiterItem = await createItemPetsCard(elem);
      petsBlock.append(petsPetsiterItem);
    });
  }
  petsitPersonBlock.append(contactInfoTitle, phoneOwner, petTitle, petsBlock);
  sectionOwnerPerson.append(imgNamePetsitPersonBlock, petsitPersonBlock);
}

export default async function ownerPerson() {
  document.body.innerHTML = "";
  await headerPetsitter(document.body);
  const path = window.location.pathname;
  const id = path.split("/")[3];
  renderOwnerPerson(id);
  document.body.append(sectionOwnerPerson);
  footerFun(document.body);
  return document.body;
}
