import { createHtmlElement } from "../../utils";
import { createDivInputs } from "../../commonFunction/inputsCreate";
import { createDogSizeBtn } from "../petsitters/petsitProfileServiceEdit";
import { getUser } from "../../commonFunction/getUser";

interface IPetsObj {
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
    arr: string[];
  };
}

const sectionPetsAdd = createHtmlElement("div", "section-pets-add");

async function renderPetsEditPage() {
  const currPetId = document.location.href.substring(32);
  fetch(`https://rs-clone-api-production-3ab8.up.railway.app/get-pet`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      _id: localStorage.getItem("curr-user-id"),
      petId: currPetId,
    }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const petsObj: IPetsObj = {
        petId: data.petId,
        name: data.name,
        type: data.type,
        gender: data.gender,
        breed: data.breed,
        size: data.size,
        age: data.age,
        avatarPath: data.avatarPath,
        about: data.about,
        other: {
          neutered: data.other.neutered,
          canBeInHerd: data.other.canBeInHerd,
          hasMotionSickness: data.other.hasMotionSickness,
          takesMedication: data.other.takesMedication,
          isAgressive: data.other.isAgressive,
          isExcitable: data.other.isExcitable,
          isTimid: data.other.isTimid,
          tendsToRunAway: data.other.tendsToRunAway,
          hasVaccinationBoolket: data.other.hasVaccinationBoolket,
          withYellowRibbon: data.other.withYellowRibbon,
          inMidstOfHeat: data.other.inMidstOfHeat,
          defecatesAtHome: data.other.defecatesAtHome,
          arr: data.other.arr,
        },
      };
      sectionPetsAdd.innerHTML = "";
      const sectionComeBack = createHtmlElement(
        "div",
        "come-back-wrapper-service"
      );
      sectionPetsAdd.append(sectionComeBack);
      const comeBackText = createHtmlElement(
        "div",
        "come-back-div-service",
        "",
        "← Back home"
      );
      sectionComeBack.append(comeBackText);
      comeBackText.addEventListener("click", () => {
        history.pushState("", "", "");
        window.dispatchEvent(new Event("popstate"));
      });
      const sectionTitleTetxtService = createHtmlElement(
        "div",
        "section-service-text-title-wrapper add-pets"
      );
      sectionPetsAdd.append(sectionTitleTetxtService);
      const serviceTextTitleWrapper = createHtmlElement(
        "div",
        "service-text-title-wrapper"
      );
      sectionTitleTetxtService.append(serviceTextTitleWrapper);
      const titleServiceEdit = createHtmlElement(
        "h1",
        "title-service-edit pets-add-title",
        "",
        "Edit pet information"
      );
      serviceTextTitleWrapper.append(titleServiceEdit);
      const sectionKindOfPet = createHtmlElement(
        "div",
        "section-kind-of-pet-service pets-add-block"
      );
      sectionPetsAdd.append(sectionKindOfPet);
      const inputPetsName = createHtmlElement(
        "input",
        "input-pets-name input-pets",
        "pet-name"
      ) as HTMLInputElement;
      inputPetsName.type = "text";
      inputPetsName.placeholder = "Name";
      inputPetsName.value = petsObj.name;
      inputPetsName.setAttribute("required", "");
      inputPetsName.addEventListener("input", () => {
        petsObj.name = `${inputPetsName.value}`;
      });
      const mandatoryText1 = createHtmlElement(
        "div",
        "mandatory-text-pet",
        "",
        "* Required field"
      );
      sectionKindOfPet.append(inputPetsName, mandatoryText1);

      const catOrDogField = createHtmlElement(
        "fieldset",
        "additional-qualification-block cat-or-dog-fieldset"
      );
      const mandatoryText2 = createHtmlElement(
        "div",
        "mandatory-text-pet",
        "",
        "* Required field"
      );
      sectionKindOfPet.append(catOrDogField, mandatoryText2);
      const divInput1 = createHtmlElement(
        "div",
        "pets-item-wrapper-service div-input-cat-or-dog"
      );
      const divInput2 = createHtmlElement(
        "div",
        "pets-item-wrapper-service div-input-cat-or-dog"
      );
      catOrDogField.append(divInput1, divInput2);

      const petsItemImgWrapper1 = createHtmlElement(
        "div",
        "pets-img-wrapper-service"
      );
      divInput1.append(petsItemImgWrapper1);
      const imgPetsItem1 = createHtmlElement(
        "img",
        "img-pets-item-service"
      ) as HTMLImageElement;
      imgPetsItem1.src =
        "https://petsy.pl/_next/image/?url=%2Fimages%2Fpets%2FDOG.jpg&w=1920&q=75";
      imgPetsItem1.alt = "Dog";
      petsItemImgWrapper1.append(imgPetsItem1);

      const petsItemImgWrapper2 = createHtmlElement(
        "div",
        "pets-img-wrapper-service"
      );
      divInput2.append(petsItemImgWrapper2);
      const imgPetsItem2 = createHtmlElement(
        "img",
        "img-pets-item-service"
      ) as HTMLImageElement;
      imgPetsItem2.src =
        "https://petsy.pl/_next/image/?url=%2Fimages%2Fpets%2FCAT.jpg&w=1920&q=75";
      imgPetsItem2.alt = "Cat";
      petsItemImgWrapper2.append(imgPetsItem2);

      const inputCatOrDog1 = createHtmlElement(
        "input",
        "input-pets",
        "dog"
      ) as HTMLInputElement;
      inputCatOrDog1.type = "radio";
      inputCatOrDog1.name = "kind-of-pet";
      inputCatOrDog1.value = "Dog";
      inputCatOrDog1.setAttribute("required", "");
      inputCatOrDog1.addEventListener("click", () => {
        petsObj.type = "Dog";
      });
      if (petsObj.type == "Dog") {
        inputCatOrDog1.checked = true;
      }
      const lableInput1 = createHtmlElement(
        "label",
        "",
        "",
        "Dog"
      ) as HTMLLabelElement;
      lableInput1.setAttribute("for", "dog");
      divInput1.append(inputCatOrDog1, lableInput1);
      const inputCatOrDog2 = createHtmlElement(
        "input",
        "input-pets",
        "cat"
      ) as HTMLInputElement;
      inputCatOrDog2.type = "radio";
      inputCatOrDog2.name = "kind-of-pet";
      inputCatOrDog2.value = "Cat";
      inputCatOrDog2.addEventListener("click", () => {
        petsObj.type = "Cat";
      });
      if (petsObj.type == "Cat") {
        inputCatOrDog2.checked = true;
      }
      const lableInput2 = createHtmlElement(
        "label",
        "",
        "",
        "Cat"
      ) as HTMLLabelElement;
      lableInput2.setAttribute("for", "cat");
      divInput2.append(inputCatOrDog2, lableInput2);

      const genderDogTitle = createHtmlElement(
        "div",
        "dog-gender-title cat-or-dog-gender",
        "",
        "Gender of the Pet"
      );
      sectionKindOfPet.append(genderDogTitle);
      const genderInputsBlock = createHtmlElement("div", "gender-inputs-block");
      sectionKindOfPet.append(genderInputsBlock);
      const inputDiv1 = createDivInputs(
        "radio",
        "male",
        "gender-pet",
        "Male",
        "div-gender-inputs",
        "input-pets"
      );
      inputDiv1.addEventListener("click", () => {
        petsObj.gender = "Male";
      });
      const inp1 = inputDiv1.firstChild as HTMLInputElement;
      if (petsObj.gender == "Male") {
        inp1.checked = true;
      }
      const inputDiv2 = createDivInputs(
        "radio",
        "female",
        "gender-pet",
        "Female",
        "div-gender-inputs",
        "input-pets"
      );
      inputDiv2.addEventListener("click", () => {
        petsObj.gender = "Female";
      });
      const inp2 = inputDiv1.firstChild as HTMLInputElement;
      if (petsObj.gender == "Female") {
        inp2.checked = true;
      }
      const mandatoryText3 = createHtmlElement(
        "div",
        "mandatory-text-pet",
        "",
        "* Required field"
      );
      genderInputsBlock.append(inputDiv1, inputDiv2);
      sectionKindOfPet.append(mandatoryText3);

      const inputBreedOfAnimal = createHtmlElement(
        "input",
        "input-breed-of-pets input-pets",
        "pets-breed"
      ) as HTMLInputElement;
      inputBreedOfAnimal.type = "text";
      inputBreedOfAnimal.placeholder = "Breed of animal";
      inputBreedOfAnimal.setAttribute("required", "");
      inputBreedOfAnimal.addEventListener("input", () => {
        petsObj.breed = `${inputBreedOfAnimal.value}`;
      });
      inputBreedOfAnimal.value = petsObj.breed;
      const mandatoryText4 = createHtmlElement(
        "div",
        "mandatory-text-pet",
        "",
        "* Required field"
      );
      sectionKindOfPet.append(inputBreedOfAnimal, mandatoryText4);

      const dogSizeTitle = createHtmlElement(
        "div",
        "dog-size-title dog-size-pet",
        "",
        "Size of the pet"
      );
      sectionKindOfPet.append(dogSizeTitle);
      const areaBtnDogSize = createHtmlElement("div", "area-btn-dog-size");
      sectionKindOfPet.append(areaBtnDogSize);
      const btnSize1 = createDogSizeBtn("Micro", "< 5 kg", "dog-size");
      btnSize1.addEventListener("click", () => {
        petsObj.size = "Micro";
      });
      const btnSize2 = createDogSizeBtn("Small", "6 - 15 kg", "dog-size");
      btnSize2.addEventListener("click", () => {
        petsObj.size = "Small";
      });
      const btnSize3 = createDogSizeBtn("Medium", "16 - 25 kg", "dog-size");
      btnSize3.addEventListener("click", () => {
        petsObj.size = "Medium";
      });
      const btnSize4 = createDogSizeBtn("Large", "26 - 35 kg", "dog-size");
      btnSize4.addEventListener("click", () => {
        petsObj.size = "Large";
      });
      const btnSize5 = createDogSizeBtn("Giant", "> 36 kg", "dog-size");
      btnSize5.addEventListener("click", () => {
        petsObj.size = "Giant";
      });
      if (petsObj.size == "Micro") {
        btnSize1.classList.add("active");
      } else if (petsObj.size == "Small") {
        btnSize2.classList.add("active");
      } else if (petsObj.size == "Medium") {
        btnSize3.classList.add("active");
      } else if (petsObj.size == "Large") {
        btnSize4.classList.add("active");
      } else if (petsObj.size == "Giant") {
        btnSize5.classList.add("active");
      }
      areaBtnDogSize.append(btnSize1, btnSize2, btnSize3, btnSize4, btnSize5);

      areaBtnDogSize.addEventListener("click", (event) => {
        const target = event.target;
        if (
          target instanceof HTMLElement &&
          target.classList.contains("dog-size")
        ) {
          const allButtonSelect = document.querySelectorAll(".dog-size");
          for (let i = 0; i < allButtonSelect.length; i++) {
            allButtonSelect[i].classList.remove("active");
          }
          target.classList.add("active");
        }
      });

      const dogAgeTitle = createHtmlElement(
        "div",
        "dog-age-title pet-age-title",
        "",
        "Age of the pet"
      );
      sectionKindOfPet.append(dogAgeTitle);
      const areaBtnDogAge = createHtmlElement("div", "area-btn-dog-age");
      sectionKindOfPet.append(areaBtnDogAge);
      const btnAge1 = createDogSizeBtn("Puppy", "< 1 year", "age-btn");
      btnAge1.addEventListener("click", () => {
        petsObj.age = "Puppy";
      });
      const btnAge2 = createDogSizeBtn("Youngster", "2 - 3 years", "age-btn");
      btnAge2.addEventListener("click", () => {
        petsObj.age = "Youngster";
      });
      const btnAge3 = createDogSizeBtn("Adult", "4 - 10 years", "age-btn");
      btnAge3.addEventListener("click", () => {
        petsObj.age = "Adult";
      });
      const btnAge4 = createDogSizeBtn("Senior", "> 11 years", "age-btn");
      btnAge4.addEventListener("click", () => {
        petsObj.age = "Senior";
      });
      if (petsObj.age == "Puppy") {
        btnAge1.classList.add("active");
      } else if (petsObj.age == "Youngster") {
        btnAge2.classList.add("active");
      } else if (petsObj.age == "Adult") {
        btnAge3.classList.add("active");
      } else if (petsObj.age == "Senior") {
        btnAge4.classList.add("active");
      }
      areaBtnDogAge.append(btnAge1, btnAge2, btnAge3, btnAge4);
      areaBtnDogAge.addEventListener("click", (event) => {
        const target = event.target;
        if (
          target instanceof HTMLElement &&
          target.classList.contains("age-btn")
        ) {
          const allButtonSelect = document.querySelectorAll(".age-btn");
          for (let i = 0; i < allButtonSelect.length; i++) {
            allButtonSelect[i].classList.remove("active");
          }
          target.classList.add("active");
        }
      });

      const fieldsetOtherInfo = createHtmlElement(
        "fieldset",
        "other-info-pet-add-field"
      );
      sectionKindOfPet.append(fieldsetOtherInfo);
      const legendOtherInfo = createHtmlElement(
        "legend",
        "other-info-pet-title",
        "",
        "Other important information"
      );
      fieldsetOtherInfo.append(legendOtherInfo);
      const inputInfo1 = createDivInputs(
        "checkbox",
        "neutered-castrated",
        "Neutered/castrated",
        "Neutered/castrated",
        "div-other-info-pets"
      );
      inputInfo1.addEventListener("input", () => {
        if (petsObj.other.neutered == "true") {
          petsObj.other.neutered = "false";
          const ind = petsObj.other.arr.indexOf("Neutered/castrated");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.neutered = "true";
          petsObj.other.arr.push("Neutered/castrated");
        }
      });
      const inputInfo1Child = inputInfo1.firstChild as HTMLInputElement;
      if (petsObj.other.neutered == "true") {
        inputInfo1Child.checked = true;
      }
      const inputInfo2 = createDivInputs(
        "checkbox",
        "cannot-be-in-the-herd",
        "The only one/cannot be in the herd",
        "The only one/cannot be in the herd",
        "div-other-info-pets"
      );
      inputInfo2.addEventListener("input", () => {
        if (petsObj.other.canBeInHerd == "true") {
          petsObj.other.canBeInHerd = "false";
          const ind = petsObj.other.arr.indexOf(
            "The only one/cannot be in the herd"
          );
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.canBeInHerd = "true";
          petsObj.other.arr.push("The only one/cannot be in the herd");
        }
      });
      const inputInfo2Child = inputInfo2.firstChild as HTMLInputElement;
      if (petsObj.other.canBeInHerd == "true") {
        inputInfo2Child.checked = true;
      }
      const inputInfo3 = createDivInputs(
        "checkbox",
        "has-motion-sickness",
        "He has motion sickness",
        "He has motion sickness",
        "div-other-info-pets"
      );
      inputInfo3.addEventListener("input", () => {
        if (petsObj.other.hasMotionSickness == "true") {
          petsObj.other.hasMotionSickness = "false";
          const ind = petsObj.other.arr.indexOf("Has motion sickness");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.hasMotionSickness = "true";
          petsObj.other.arr.push("Has motion sickness");
        }
      });
      const inputInfo3Child = inputInfo3.firstChild as HTMLInputElement;
      if (petsObj.other.hasMotionSickness == "true") {
        inputInfo3Child.checked = true;
      }
      const inputInfo4 = createDivInputs(
        "checkbox",
        "takes-medication",
        "Takes medication",
        "Takes medication",
        "div-other-info-pets"
      );
      inputInfo4.addEventListener("input", () => {
        if (petsObj.other.takesMedication == "true") {
          petsObj.other.takesMedication = "false";
          const ind = petsObj.other.arr.indexOf("Takes medication");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.takesMedication = "true";
          petsObj.other.arr.push("Takes medication");
        }
      });
      const inputInfo4Child = inputInfo4.firstChild as HTMLInputElement;
      if (petsObj.other.takesMedication == "true") {
        inputInfo4Child.checked = true;
      }
      const inputInfo5 = createDivInputs(
        "checkbox",
        "it-is-aggressive",
        "It is aggressive",
        "It is aggressive",
        "div-other-info-pets"
      );
      inputInfo5.addEventListener("input", () => {
        if (petsObj.other.isAgressive == "true") {
          petsObj.other.isAgressive = "false";
          const ind = petsObj.other.arr.indexOf("It is aggressive");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.isAgressive = "true";
          petsObj.other.arr.push("It is aggressive");
        }
      });
      const inputInfo5Child = inputInfo5.firstChild as HTMLInputElement;
      if (petsObj.other.isAgressive == "true") {
        inputInfo5Child.checked = true;
      }
      const inputInfo6 = createDivInputs(
        "checkbox",
        "excessively-excitable",
        "He is excessively excitable",
        "He is excessively excitable",
        "div-other-info-pets"
      );
      inputInfo6.addEventListener("input", () => {
        if (petsObj.other.isExcitable == "true") {
          petsObj.other.isExcitable = "false";
          const ind = petsObj.other.arr.indexOf("Excessively excitable");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.isExcitable = "true";
          petsObj.other.arr.push("Excessively excitable");
        }
      });
      const inputInfo6Child = inputInfo6.firstChild as HTMLInputElement;
      if (petsObj.other.isExcitable == "true") {
        inputInfo6Child.checked = true;
      }
      const inputInfo7 = createDivInputs(
        "checkbox",
        "timid",
        "He is timid",
        "He is timid",
        "div-other-info-pets"
      );
      inputInfo7.addEventListener("input", () => {
        if (petsObj.other.isTimid == "true") {
          petsObj.other.isTimid = "false";
          const ind = petsObj.other.arr.indexOf("He is timid");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.isTimid = "true";
          petsObj.other.arr.push("He is timid");
        }
      });
      const inputInfo7Child = inputInfo7.firstChild as HTMLInputElement;
      if (petsObj.other.isTimid == "true") {
        inputInfo7Child.checked = true;
      }
      const inputInfo8 = createDivInputs(
        "checkbox",
        "tends-to-run-away",
        "He tends to run away",
        "He tends to run away",
        "div-other-info-pets"
      );
      inputInfo8.addEventListener("input", () => {
        if (petsObj.other.tendsToRunAway == "true") {
          petsObj.other.tendsToRunAway = "false";
          const ind = petsObj.other.arr.indexOf("Tends to run away");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.tendsToRunAway = "true";
          petsObj.other.arr.push("Tends to run away");
        }
      });
      const inputInfo8Child = inputInfo8.firstChild as HTMLInputElement;
      if (petsObj.other.tendsToRunAway == "true") {
        inputInfo8Child.checked = true;
      }
      const inputInfo9 = createDivInputs(
        "checkbox",
        "has-vaccination-booklet",
        "Has a vaccination booklet",
        "Has a vaccination booklet",
        "div-other-info-pets"
      );
      inputInfo9.addEventListener("input", () => {
        if (petsObj.other.hasVaccinationBoolket == "true") {
          petsObj.other.hasVaccinationBoolket = "false";
          const ind = petsObj.other.arr.indexOf("Has a vaccination booklet");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.hasVaccinationBoolket = "true";
          petsObj.other.arr.push("Has a vaccination booklet");
        }
      });
      const inputInfo9Child = inputInfo9.firstChild as HTMLInputElement;
      if (petsObj.other.hasVaccinationBoolket == "true") {
        inputInfo9Child.checked = true;
      }
      const inputInfo10 = createDivInputs(
        "checkbox",
        "dog-with-a-yellow-ribbon",
        "Dog with a yellow ribbon",
        "Dog with a yellow ribbon",
        "div-other-info-pets"
      );
      inputInfo10.addEventListener("input", () => {
        if (petsObj.other.withYellowRibbon == "true") {
          petsObj.other.withYellowRibbon = "false";
          const ind = petsObj.other.arr.indexOf("Dog with a yellow ribbon");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.withYellowRibbon = "true";
          petsObj.other.arr.push("Dog with a yellow ribbon");
        }
      });
      const inputInfo10Child = inputInfo10.firstChild as HTMLInputElement;
      if (petsObj.other.withYellowRibbon == "true") {
        inputInfo10Child.checked = true;
      }
      const inputInfo11 = createDivInputs(
        "checkbox",
        "in-the-midst-of-heat",
        "In the midst of heat",
        "In the midst of heat",
        "div-other-info-pets"
      );
      inputInfo11.addEventListener("input", () => {
        if (petsObj.other.inMidstOfHeat == "true") {
          petsObj.other.inMidstOfHeat = "false";
          const ind = petsObj.other.arr.indexOf("In the midst of heat");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.inMidstOfHeat = "true";
          petsObj.other.arr.push("In the midst of heat");
        }
      });
      const inputInfo11Child = inputInfo11.firstChild as HTMLInputElement;
      if (petsObj.other.inMidstOfHeat == "true") {
        inputInfo11Child.checked = true;
      }
      const inputInfo12 = createDivInputs(
        "checkbox",
        "defecates-at-home",
        "Defecates at home",
        "Defecates at home",
        "div-other-info-pets"
      );
      inputInfo12.addEventListener("input", () => {
        if (petsObj.other.defecatesAtHome == "true") {
          petsObj.other.defecatesAtHome = "false";
          const ind = petsObj.other.arr.indexOf("Defecates at home");
          petsObj.other.arr.splice(ind, 1);
        } else {
          petsObj.other.defecatesAtHome = "true";
          petsObj.other.arr.push("Defecates at home");
        }
      });
      const inputInfo12Child = inputInfo12.firstChild as HTMLInputElement;
      if (petsObj.other.defecatesAtHome == "true") {
        inputInfo12Child.checked = true;
      }
      fieldsetOtherInfo.append(
        inputInfo1,
        inputInfo2,
        inputInfo3,
        inputInfo4,
        inputInfo5,
        inputInfo6,
        inputInfo7,
        inputInfo8,
        inputInfo9,
        inputInfo10,
        inputInfo11,
        inputInfo12
      );

      const tempTitle = createHtmlElement("h4", "temp-title pet-photo-title");
      tempTitle.textContent = "Photo";
      tempTitle.setAttribute("style", "margin-bottom: 0");
      const photoContainer = createHtmlElement(
        "div",
        "photo-container animals-photo-container"
      );
      photoContainer.setAttribute(
        "style",
        "background-image: url('../img/icons/photo.png')"
      );
      const btnsDiv = createHtmlElement("div", "photo-btns-container");
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

      sectionKindOfPet.append(tempTitle, photoContainer);
      const btnRemovePhoto = createHtmlElement(
        "button",
        "button-remove-photo"
      ) as HTMLInputElement;
      btnRemovePhoto.textContent = "Remove";
      btnRemovePhoto.addEventListener("click", () => {
        btnAddPhoto.files = null;
        photoContainer.setAttribute(
          "style",
          `background-image: url('img/images/noPetPhoto.jpg'); background-blend-mode:multiply`
        );
        petsObj.avatarPath = "img/images/noPetPhoto.jpg";
      });
      btnsDiv.append(btnAddPhoto, btnAddPhotoLabel, btnRemovePhoto);
      photoContainer.append(btnsDiv);
      if (petsObj.avatarPath == "img/images/noPetPhoto.jpg") {
        photoContainer.setAttribute(
          "style",
          `background-image: url('${petsObj.avatarPath}'); background-blend-mode:multiply`
        );
      } else {
        photoContainer.setAttribute(
          "style",
          `background-image: url('${petsObj.avatarPath}'); background-blend-mode:normal`
        );
      }
      const handleUpload = () => {
        if (btnAddPhoto.files) {
          const formData = new FormData();
          formData.append(
            "image",
            btnAddPhoto.files[0],
            btnAddPhoto.files[0].name
          );
          const fetchData = {
            method: "POST",
            body: formData,
          };
          fetch(
            `https://rs-clone-api-production-3ab8.up.railway.app/auth/register/add-photo`,
            fetchData
          )
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              photoContainer.setAttribute(
                "style",
                `background-image: url('https://rs-clone-api-production-3ab8.up.railway.app/${data.filePath}'); background-blend-mode:normal`
              );
              petsObj.avatarPath = `https://rs-clone-api-production-3ab8.up.railway.app/${data.filePath}`;
              btnConfirm.setAttribute("style", "pointer-events:all");
            });
          return btnAddPhoto.files[0];
        }
      };

      btnAddPhoto.onchange = handleUpload;

      const inputTextAboutPet = createHtmlElement(
        "textarea",
        "input-text-about-pet input-pets",
        "text-about-pet"
      ) as HTMLTextAreaElement;
      inputTextAboutPet.placeholder = "Tell us about your pet";
      inputTextAboutPet.setAttribute("required", "");
      inputTextAboutPet.minLength = 10;
      inputTextAboutPet.maxLength = 1000;
      inputTextAboutPet.wrap = "soft";
      inputTextAboutPet.addEventListener("input", () => {
        petsObj.about = `${inputTextAboutPet.value}`;
      });
      inputTextAboutPet.value = petsObj.about;
      const countTextAboutPet = createHtmlElement(
        "div",
        "count-motto-profile",
        "",
        `${inputTextAboutPet.value.length}/1000`
      );
      inputTextAboutPet.addEventListener("input", () => {
        countTextAboutPet.innerHTML = "";
        countTextAboutPet.innerHTML = `${inputTextAboutPet.value.length}/1000`;
      });
      const mandatoryText5 = createHtmlElement(
        "div",
        "mandatory-text-pet",
        "",
        "* Minimum number of characters: 10"
      );
      const mandatoryText6 = createHtmlElement(
        "div",
        "mandatory-text-pet",
        "",
        "* Required field"
      );
      sectionKindOfPet.append(
        inputTextAboutPet,
        countTextAboutPet,
        mandatoryText5,
        mandatoryText6
      );

      const btnSaveWrapper = createHtmlElement("div", "btn-save-wrapper");
      sectionKindOfPet.append(btnSaveWrapper);
      const errorText = createHtmlElement("div", "error-text-pets");
      const saveText = createHtmlElement("div", "save-text-pets");
      const btnSaveMyHome = createHtmlElement(
        "button",
        "btn-save-my-home",
        "btn-save-pet",
        "Save"
      );
      btnSaveWrapper.append(saveText, errorText, btnSaveMyHome);
      const inputs = sectionKindOfPet.querySelectorAll(".input-pets");
      const allRequiredTexts = sectionKindOfPet.querySelectorAll(
        ".mandatory-text-pet"
      );
      btnSaveMyHome.addEventListener("click", async () => {
        let numberOfInvalid = 0;
        inputs.forEach((el) => {
          if (el instanceof HTMLInputElement) {
            if (!el.checkValidity()) {
              numberOfInvalid += 1;
            } else {
              numberOfInvalid = numberOfInvalid + 0;
            }
          }
        });
        if (
          (numberOfInvalid > 0 && inputTextAboutPet.value.length < 10) ||
          (numberOfInvalid === 0 && inputTextAboutPet.value.length < 10)
        ) {
          allRequiredTexts.forEach((elem) => {
            if (elem instanceof HTMLElement) elem.style.color = "#f04a2d";
          });
          saveText.innerHTML = "";
          errorText.innerHTML = "";
          errorText.innerHTML = "Please fill in all required fields";
        }
        if (numberOfInvalid === 0 && inputTextAboutPet.value.length >= 10) {
          allRequiredTexts.forEach((elem) => {
            if (elem instanceof HTMLElement) elem.style.color = "#696869";
          });
          errorText.innerHTML = "";
          saveText.innerHTML = "";
          saveText.innerHTML = "Your information is saved";

          const fetchData = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              _id: localStorage.getItem("curr-user-id"),
              petId: currPetId,
              petsObj: petsObj,
            }),
          };
          fetch(
            `https://rs-clone-api-production-3ab8.up.railway.app/update-pet`,
            fetchData
          ).then((response) => {
            return response.json();
          });

          const user = await getUser();
          const userInfo = user.item;
          const userRole = userInfo.role;
          if (userRole === "OWNER") {
            history.pushState("", "", "/owner/pets");
            window.dispatchEvent(new Event("popstate"));
          } else {
            history.pushState("", "", "/petsitter/profile/basics");
            window.dispatchEvent(new Event("popstate"));
          }
        }
      });
    });
}

export default async function petsEditShowPage() {
  document.body.innerHTML = "";
  await renderPetsEditPage();
  document.body.append(sectionPetsAdd);
  return document.body;
}
