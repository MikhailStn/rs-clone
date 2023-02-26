import { createHtmlElement } from "../../utils";
import { getUser } from "../../commonFunction/getUser";

export interface Pets {
  petId: string;
  name: string;
  type: string;
  gender: string;
  breed: string;
  size: string;
  age: string;
  avatarPath: string;
  about: string;
  other: {
    neutered: string;
    canBeInHerd: string;
    hasMotionSickness: string;
    takesMedication: string;
    isAgressive: string;
    isExcitable: string;
    isTimid: string;
    tendsToRunAway: string;
    hasVaccinationBoolket: string;
    withYellowRibbon: string;
    inMidstOfHeat: string;
    defecatesAtHome: string;
    arr: [];
  };
}

export async function createMyPetsBlock() {
  const user = await getUser();
  const userInfo = user.item;
  const basicPetsBlock = createHtmlElement("div", "basic-info-block my-pets");
  const myPetsTitle = createHtmlElement(
    "h1",
    "title-photo-profile-block my-pets-title",
    "",
    "My pets"
  );
  basicPetsBlock.append(myPetsTitle);
  const textBtnMyPetWrapper = createHtmlElement(
    "div",
    "my-pet-text-btn-wrapper"
  );
  basicPetsBlock.append(textBtnMyPetWrapper);
  const commonTextPetsit = createHtmlElement("div", "common-text-my-pets");
  textBtnMyPetWrapper.append(commonTextPetsit);
  const userRole = userInfo.role;
  userRole === "OWNER"
    ? (commonTextPetsit.innerHTML =
        "Add your pet to conveniently and quickly order petsitter care services.")
    : (commonTextPetsit.innerHTML =
        "If you own a dog or cat, add its profile. This will allow your customers to see who their pet will be spending time with.");
  const btnAddPet = createHtmlElement(
    "button",
    "btn-add-pet",
    "btn-add-pet",
    "Add pet"
  );
  textBtnMyPetWrapper.append(btnAddPet);
  btnAddPet.addEventListener("click", () => {
    history.pushState("", "", "/pets/add");
    window.dispatchEvent(new Event("popstate"));
  });
  const petsItemCountBlock = createHtmlElement("div", "pets-item-count-block");
  basicPetsBlock.append(petsItemCountBlock);
  const petsUser: Pets[] = userInfo.pets;
  if (petsUser.length === 0) {
    petsItemCountBlock.innerHTML = "";
    const noPetsText = createHtmlElement(
      "div",
      "no-pets-text",
      "",
      "No pets added"
    );
    petsItemCountBlock.append(noPetsText);
  } else {
    petsItemCountBlock.innerHTML = "";
    petsUser.forEach((elem) => {
      const itemPets = createItemPetsCard(elem);
      petsItemCountBlock.append(itemPets);
    });
  }
  return basicPetsBlock;
}

export function createItemPetsCard(petsObject: Pets, className?:string) {
  const itemPetBlock = createHtmlElement("div", `item-pet-block ${className}`);
  const namePetItem = createHtmlElement(
    "h4",
    "name-pet-item",
    "",
    petsObject.name
  );
  const breedPetItem = createHtmlElement(
    "div",
    "breed-pet-item",
    "",
    petsObject.breed
  );
  itemPetBlock.append(namePetItem, breedPetItem);
  if (petsObject.avatarPath !== "") {
    const divImgPet = createHtmlElement("div", "div-img-pet");
    const imgItemPet = createHtmlElement(
      "img",
      "img-pet-item"
    ) as HTMLImageElement;
    divImgPet.append(imgItemPet);
    imgItemPet.src = petsObject.avatarPath;
    itemPetBlock.append(divImgPet);
  }
  const divCommonInfoPet = createHtmlElement("div", "div-common-info-pet");
  const kindOfPet = createHtmlElement(
    "div",
    "common-info-pet-item-text",
    "",
    petsObject.type
  );
  const genderOfPet = createHtmlElement(
    "div",
    "common-info-pet-item-text",
    "",
    petsObject.gender
  );
  divCommonInfoPet.append(kindOfPet, genderOfPet);
  if (petsObject.size !== "") {
    const sizeOfPet = createHtmlElement(
      "div",
      "common-info-pet-item-text",
      "",
      petsObject.size
    );
    divCommonInfoPet.append(sizeOfPet);
  }
  if (petsObject.age !== "") {
    const ageOfPet = createHtmlElement(
      "div",
      "common-info-pet-item-text",
      "",
      petsObject.age
    );
    divCommonInfoPet.append(ageOfPet);
  }
  const descrTitle = createHtmlElement(
    "h4",
    "description-title-item",
    "",
    "Description"
  );
  const descrTex = createHtmlElement(
    "p",
    "description-text-item-pet",
    "",
    petsObject.about
  );
  itemPetBlock.append(divCommonInfoPet, descrTitle, descrTex);
  const values = Object.values(petsObject.other);
  if (values.includes("true")) {
    const otherInfoPetTitle = createHtmlElement(
      "ul",
      "other-info-pet-item-title",
      "",
      "Other important information"
    );
    itemPetBlock.append(otherInfoPetTitle);
    petsObject.other.arr.forEach((elem: string) => {
      const otherPetItem = createHtmlElement("li", "other-pet-item", "", elem);
      itemPetBlock.append(otherPetItem);
    });
  }
  if (
    window.location.pathname === "/owner/pets" ||
    window.location.pathname === "/petsitter/profile/basics"
  ) {
    const imgSvgMore = createHtmlElement(
      "img",
      "svg-btn-edit-delete"
    ) as HTMLImageElement;
    imgSvgMore.src = "img/svg/threeDots.svg";
    const deleteEditWrapper = createHtmlElement("div", "delete-edit-wrapper");
    itemPetBlock.append(imgSvgMore, deleteEditWrapper);
    const btnDeletePet = createHtmlElement(
      "button",
      "btn-delete-pet",
      `btn-delete-pet-${petsObject.petId}`,
      "Delete"
    );
    btnDeletePet.addEventListener("click", () => {
      fetch(`https://rs-clone-api-production-3ab8.up.railway.app/remove-pet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("curr-user-id"),
          petId: petsObject.petId,
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then(() => {
          location.reload();
        });
    });
    const btnEditPet = createHtmlElement(
      "button",
      "btn-edit-pet",
      `btn-edit-pet-${petsObject.petId}`,
      "Edit"
    );
    btnEditPet.addEventListener("click", () => {
      history.pushState("", "", `/pets/edit/${petsObject.petId}`);
      window.dispatchEvent(new Event("popstate"));
    });
    imgSvgMore.addEventListener("click", () => {
      deleteEditWrapper.classList.toggle("active");
    });
    deleteEditWrapper.append(btnDeletePet, btnEditPet);
  }

  return itemPetBlock;
}
