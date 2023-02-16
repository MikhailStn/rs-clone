import { createHtmlElement } from "../../utils";
import { createDivInputs } from "../../commonFunction/inputsCreate";

const sectionEditAccomodation = createHtmlElement(
  "section",
  "section-edit-services"
);

let currService = "";

async function renderPetsitProfileServiceEdit(service: string) {
  currService = service;
  sectionEditAccomodation.innerHTML = "";
  const sectionComeBack = createHtmlElement("div", "come-back-wrapper-service");
  sectionEditAccomodation.append(sectionComeBack);
  const comeBackText = createHtmlElement(
    "div",
    "come-back-div-service",
    "",
    "← Back to edit profile"
  );
  sectionComeBack.append(comeBackText);
  comeBackText.addEventListener("click", () => {
    history.pushState("", "", "/petsitter/profile/basics");
    window.dispatchEvent(new Event("popstate"));
  });
  const sectionTitleTetxtService = createHtmlElement(
    "div",
    "section-service-text-title-wrapper"
  );
  sectionEditAccomodation.append(sectionTitleTetxtService);
  const serviceTextTitleWrapper = createHtmlElement(
    "div",
    "service-text-title-wrapper"
  );
  sectionTitleTetxtService.append(serviceTextTitleWrapper);
  const titleServiceEdit = createHtmlElement("h1", "title-service-edit");
  const textAfterTitleService = createHtmlElement(
    "div",
    "text-after-title-service"
  );
  serviceTextTitleWrapper.append(titleServiceEdit, textAfterTitleService);
  switch (service) {
    case "accommodation":
      (titleServiceEdit.innerHTML = "Accommodation: service settings"),
        (textAfterTitleService.innerHTML =
          "A service in which you take a pet under your roof for a specified period of time.");
      break;
    case "walk":
      (titleServiceEdit.innerHTML = "Walk: Service Settings"),
        (textAfterTitleService.innerHTML =
          "A service in which you go to the customer and walk his dog in the area where he lives.");
      break;
    case "drop-in":
      (titleServiceEdit.innerHTML = "Home visits: Service settings"),
        (textAfterTitleService.innerHTML =
          "30-minute visits to the owner's home to play with the animals, serve food, take a quick walk or clean the litter box.");
      break;
  }

  if (service === "drop-in" || service === "walk") {
    const areaOfServiceWrapper = createHtmlElement(
      "div",
      "area-of-service-wrapper"
    );
    sectionEditAccomodation.append(areaOfServiceWrapper);
    const areaOfServiceTitle = createHtmlElement(
      "h3",
      "area-of-service-title",
      "",
      "Where do you want to provide the service?"
    );
    areaOfServiceWrapper.append(areaOfServiceTitle);
    const areaOfServiceCommonText = createHtmlElement(
      "div",
      "area-of-service-common-text",
      "",
      "Specify below which streets or neighborhoods you are willing to provide service within. Keep in mind that for this service you need to reach the client. The most efficient way to make money on the platform is to find pets a maximum of 2 - 3 kilometers away. This will save you time and maximize the number of pets you can service in a day."
    );
    areaOfServiceWrapper.append(areaOfServiceCommonText);
    const inputAreaService = createHtmlElement(
      "textarea",
      "input-area-service",
      "service-area"
    ) as HTMLTextAreaElement;
    inputAreaService.placeholder = "Service area";
    inputAreaService.maxLength = 300;
    inputAreaService.wrap = "soft";
    areaOfServiceWrapper.append(inputAreaService);
    inputAreaService.addEventListener("keyup", function () {
      if (this.scrollTop > 0) {
        this.style.height = this.scrollHeight + "px";
      }
    });
  }
  if (service === "walk") {
    createBlockDogView();
  }
  if (service === "drop-in" || service === "accommodation") {
    let text: string;
    service === "drop-in"
      ? (text = "What animals will I visit?")
      : (text = "What kind of animals will you accommodate?");
    createBlockKindsOfPet(text, service);
  }

  const sectionPriceService = createHtmlElement("div", "price-section-service");
  sectionEditAccomodation.append(sectionPriceService);
  const priceTitle = createHtmlElement(
    "h3",
    "area-of-service-title",
    "",
    "Pricing of your services"
  );
  sectionPriceService.append(priceTitle);
  const commonPriceText = createHtmlElement("div", "common-price-text");
  sectionPriceService.append(commonPriceText);
  switch (service) {
    case "accommodation":
      commonPriceText.innerHTML = "The amount you get per night per week";
      break;
    case "walk":
      commonPriceText.innerHTML =
        "The amount you will receive for a standard walk (30 min)";
      break;
    case "drop-in":
      commonPriceText.innerHTML =
        "The amount you will receive per visit (30 min)";
      break;
  }
  const inputTextWrapper = createHtmlElement(
    "div",
    "input-text-service-wrapper-price"
  );
  sectionPriceService.append(inputTextWrapper);
  const inputNumberPrice = createHtmlElement(
    "input",
    "input-number-price",
    `price-${service}`
  ) as HTMLInputElement;
  inputNumberPrice.type = "number";
  inputNumberPrice.min = "0";
  inputTextWrapper.append(inputNumberPrice);
  const textСurrency = createHtmlElement(
    "div",
    "currency-text-price",
    "",
    "byn / "
  );
  inputTextWrapper.append(textСurrency);
  const spanCurrency = createHtmlElement("span", "span-currency-price");
  textСurrency.append(spanCurrency);
  switch (service) {
    case "accommodation":
      spanCurrency.innerHTML = "overnight stay during the week";
      break;
    case "walk":
      spanCurrency.innerHTML = "walk";
      break;
    case "drop-in":
      spanCurrency.innerHTML = "visit";
      break;
  }
  const btnSaveWrapper = createHtmlElement("div", "btn-save-price-wrapper");
  sectionEditAccomodation.append(btnSaveWrapper);
  const btnSaveServiceEdit = createHtmlElement(
    "button",
    "btn-save-service-edit",
    `btn-save-edit-${service}`,
    "Save"
  );
  btnSaveWrapper.append(btnSaveServiceEdit);
}

function createBlockDogView() {
  const viewOfDogSectionWrapper = createHtmlElement(
    "div",
    "view-of-dog-section-wrapper"
  );
  sectionEditAccomodation.append(viewOfDogSectionWrapper);
  const viewOfDogTitle = createHtmlElement(
    "h3",
    "area-of-service-title",
    "",
    "What kind of dogs do you want to walk?"
  );
  viewOfDogSectionWrapper.append(viewOfDogTitle);
  const dogSizeTitle = createHtmlElement(
    "div",
    "dog-size-title",
    "",
    "Size of the dog"
  );
  viewOfDogSectionWrapper.append(dogSizeTitle);
  const areaBtnDogSize = createHtmlElement("div", "area-btn-dog-size");
  viewOfDogSectionWrapper.append(areaBtnDogSize);
  const btnSize1 = createDogSizeBtn("Micro", "< 5 kg");
  const btnSize2 = createDogSizeBtn("Small", "6 - 15 kg");
  const btnSize3 = createDogSizeBtn("Medium", "16 - 25 kg");
  const btnSize4 = createDogSizeBtn("Large", "26 - 35 kg");
  const btnSize5 = createDogSizeBtn("Giant", "> 36 kg");
  areaBtnDogSize.append(btnSize1, btnSize2, btnSize3, btnSize4, btnSize5);
  areaBtnDogSize.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      target.classList.contains("btn-dog-size")
    ) {
      if (target.classList.contains("active")) {
        target.classList.remove("active");
      } else {
        target.classList.add("active");
      }
    }
  });
  const textAfterViewBlock = createHtmlElement(
    "div",
    "little-service-text",
    "",
    "Mark all sizes of dogs you can take for a walk"
  );
  viewOfDogSectionWrapper.append(textAfterViewBlock);

  const dogAgeTitle = createHtmlElement(
    "div",
    "dog-age-title",
    "",
    "Age of the dog"
  );
  viewOfDogSectionWrapper.append(dogAgeTitle);
  const areaBtnDogAge = createHtmlElement("div", "area-btn-dog-age");
  viewOfDogSectionWrapper.append(areaBtnDogAge);
  const btnAge1 = createDogSizeBtn("Puppy", "< 1 year", "age-btn");
  const btnAge2 = createDogSizeBtn("Youngster", "2 - 3 years", "age-btn");
  const btnAge3 = createDogSizeBtn("Adult", "4 - 10 years", "age-btn");
  const btnAge4 = createDogSizeBtn("Senior", "> 11 years", "age-btn");
  areaBtnDogAge.append(btnAge1, btnAge2, btnAge3, btnAge4);
  areaBtnDogAge.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.classList.contains("age-btn")) {
      if (target.classList.contains("active")) {
        target.classList.remove("active");
      } else {
        target.classList.add("active");
      }
    }
  });
  const textAfterViewBlock2 = createHtmlElement(
    "div",
    "little-service-text",
    "",
    "Mark all the age ranges of dogs you can take for a walk"
  );
  viewOfDogSectionWrapper.append(textAfterViewBlock2);

  const genderDogTitle = createHtmlElement(
    "div",
    "dog-gender-title",
    "",
    "Gender of the dog"
  );
  viewOfDogSectionWrapper.append(genderDogTitle);
  const genderInputsBlock = createHtmlElement("div", "gender-inputs-block");
  viewOfDogSectionWrapper.append(genderInputsBlock);
  const inputDiv1 = createDivInputs(
    "checkbox",
    "male",
    "Male",
    "Male",
    "div-gender-inputs"
  );
  const inputDiv2 = createDivInputs(
    "checkbox",
    "female",
    "Female",
    "Female",
    "div-gender-inputs"
  );
  genderInputsBlock.append(inputDiv1, inputDiv2);
}

function createBlockKindsOfPet(text: string, service: string) {
  const sectionKindOfPet = createHtmlElement(
    "div",
    "section-kind-of-pet-service"
  );
  sectionEditAccomodation.append(sectionKindOfPet);
  if (service === "accommodation") {
    sectionKindOfPet.style.marginTop = "-110px";
  }
  const kindOfPetTitle = createHtmlElement(
    "h3",
    "area-of-service-title",
    "",
    text
  );
  sectionKindOfPet.append(kindOfPetTitle);
  const checkPetsBox = createHtmlElement("div", "check-pet-box");
  sectionKindOfPet.append(checkPetsBox);
  const blockPet1 = createPetsItem(
    "https://petsy.pl/_next/image/?url=%2Fimages%2Fpets%2FDOG.jpg&w=1920&q=75",
    "dog"
  );
  const blockPet2 = createPetsItem(
    "https://petsy.pl/_next/image/?url=%2Fimages%2Fpets%2FCAT.jpg&w=1920&q=75",
    "cat"
  );
  checkPetsBox.append(blockPet1, blockPet2);
}

export function createDogSizeBtn(
  dogSizeOrAge: string,
  weightOrYearsDog: string,
  className?: string
) {
  const btnSize = createHtmlElement(
    "div",
    `btn-dog-size ${className}`,
    dogSizeOrAge
  );
  btnSize.innerHTML = `<div class="div-btn-size ${className}">${dogSizeOrAge}<span class = "span-btn-size">${weightOrYearsDog}</span></div>`;
  return btnSize;
}

function createPetsItem(src: string, pet: string) {
  const petsItemWrapper = createHtmlElement("div", "pets-item-wrapper-service");
  const petsItemImgWrapper = createHtmlElement(
    "div",
    "pets-img-wrapper-service"
  );
  petsItemWrapper.append(petsItemImgWrapper);
  const imgPetsItem = createHtmlElement(
    "img",
    "img-pets-item-service"
  ) as HTMLImageElement;
  imgPetsItem.src = src;
  imgPetsItem.alt = pet;
  petsItemImgWrapper.append(imgPetsItem);
  const divInputPet = createDivInputs(
    "checkbox",
    pet,
    pet,
    pet,
    "div-input-pets-service"
  );
  petsItemWrapper.append(divInputPet);
  return petsItemWrapper;
}

export const updateValues = () => {
  if (currService == "accommodation") {
    const accomodatePetsArr: string[] = [];
    const dogItem = document.getElementById("dog") as HTMLInputElement;
    const catItem = document.getElementById("cat") as HTMLInputElement;
    if (dogItem) {
      dogItem.addEventListener("click", () => {
        if (dogItem.checked) {
          accomodatePetsArr.push("dog");
        } else {
          const index = accomodatePetsArr.indexOf("dog");
          accomodatePetsArr.splice(index, 1);
        }
      });
    }
    if (catItem) {
      catItem.addEventListener("click", () => {
        if (catItem.checked) {
          accomodatePetsArr.push("cat");
        } else {
          const index = accomodatePetsArr.indexOf("cat");
          accomodatePetsArr.splice(index, 1);
        }
      });
    }
    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        _id: localStorage.getItem("curr-user-id"),
      }),
    };
    fetch(`http://localhost:5000/auth/user`, fetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (
          data.petsitterData.services.hotel.animals[0] == "dog" ||
          data.petsitterData.services.hotel.animals[1] == "dog"
        ) {
          dogItem.setAttribute("checked", "true");
          accomodatePetsArr.push("dog");
        }
        if (
          data.petsitterData.services.hotel.animals[0] == "cat" ||
          data.petsitterData.services.hotel.animals[1] == "cat"
        ) {
          catItem.setAttribute("checked", "true");
          accomodatePetsArr.push("cat");
        }
        const amountInput = document.querySelector(
          ".input-number-price"
        ) as HTMLInputElement;
        amountInput.value = data.petsitterData.services.hotel.price;
      });
    const btnSave = document.querySelector(
      ".btn-save-service-edit"
    ) as HTMLButtonElement;
    btnSave.addEventListener("click", () => {
      const amountInput = document.querySelector(
        ".input-number-price"
      ) as HTMLInputElement;
      const fetchData1 = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("curr-user-id"),
          animals_hotel: accomodatePetsArr,
          price_hotel: amountInput.value,
        }),
      };
      fetch(`http://localhost:5000/petsitter/add-data`, fetchData1)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const div = document.querySelector(".btn-save-price-wrapper");
          const p = createHtmlElement("p", "comment-saved-settings");
          p.textContent = "Settings saved";
          p.setAttribute("style", "margin-top: 5px");
          div?.append(p);
          setTimeout(() => {
            div?.removeChild(p);
          }, 2000);
          return data;
        });
    });
  } else if (currService == "walk") {
    const serviceArea = document.querySelector(
      ".input-area-service"
    ) as HTMLTextAreaElement;
    let sizeOfDog: string[] = [];
    let ageOfDog: string[] = [];
    let genderOfDog: string[] = [];
    const amount = document.querySelector(
      ".input-number-price"
    ) as HTMLInputElement;
    const micro = document.getElementById("Micro");
    const small = document.getElementById("Small");
    const medium = document.getElementById("Medium");
    const large = document.getElementById("Large");
    const giant = document.getElementById("Giant");
    const puppy = document.getElementById("Puppy");
    const youngster = document.getElementById("Youngster");
    const adult = document.getElementById("Adult");
    const senior = document.getElementById("Senior");
    const male = document.getElementById("male") as HTMLInputElement;
    const female = document.getElementById("female") as HTMLInputElement;
    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        _id: localStorage.getItem("curr-user-id"),
      }),
    };
    fetch(`http://localhost:5000/auth/user`, fetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.petsitterData.services.walking.serviceArea) {
          serviceArea.value = data.petsitterData.services.walking.serviceArea;
        }
        sizeOfDog = data.petsitterData.services.walking.kindOfDogs;
        ageOfDog = data.petsitterData.services.walking.ageOfDogs;
        genderOfDog = data.petsitterData.services.walking.genderOfDogs;
        amount.value = data.petsitterData.services.walking.price;
        if (sizeOfDog.includes("micro")) {
          micro?.classList.add("active");
        }
        if (sizeOfDog.includes("small")) {
          small?.classList.add("active");
        }
        if (sizeOfDog.includes("medium")) {
          medium?.classList.add("active");
        }
        if (sizeOfDog.includes("large")) {
          large?.classList.add("active");
        }
        if (sizeOfDog.includes("giant")) {
          giant?.classList.add("active");
        }
        if (ageOfDog.includes("puppy")) {
          puppy?.classList.add("active");
        }
        if (ageOfDog.includes("youngster")) {
          youngster?.classList.add("active");
        }
        if (ageOfDog.includes("adult")) {
          adult?.classList.add("active");
        }
        if (ageOfDog.includes("senior")) {
          senior?.classList.add("active");
        }
        if (genderOfDog.includes("male")) {
          male.checked = true;
        }
        if (genderOfDog.includes("female")) {
          female.checked = true;
        }
        micro?.addEventListener("click", () => {
          if (micro.classList.contains("active")) {
            const ind = sizeOfDog.indexOf("micro");
            sizeOfDog.splice(ind, 1);
          } else {
            sizeOfDog.push("micro");
          }
        });
        small?.addEventListener("click", () => {
          if (small.classList.contains("active")) {
            const ind = sizeOfDog.indexOf("small");
            sizeOfDog.splice(ind, 1);
          } else {
            sizeOfDog.push("small");
          }
        });
        medium?.addEventListener("click", () => {
          if (medium.classList.contains("active")) {
            const ind = sizeOfDog.indexOf("medium");
            sizeOfDog.splice(ind, 1);
          } else {
            sizeOfDog.push("medium");
          }
        });
        large?.addEventListener("click", () => {
          if (large.classList.contains("active")) {
            const ind = sizeOfDog.indexOf("large");
            sizeOfDog.splice(ind, 1);
          } else {
            sizeOfDog.push("large");
          }
        });
        giant?.addEventListener("click", () => {
          if (giant.classList.contains("active")) {
            const ind = sizeOfDog.indexOf("giant");
            sizeOfDog.splice(ind, 1);
          } else {
            sizeOfDog.push("giant");
          }
        });
        puppy?.addEventListener("click", () => {
          if (puppy.classList.contains("active")) {
            const ind = ageOfDog.indexOf("puppy");
            ageOfDog.splice(ind, 1);
          } else {
            ageOfDog.push("puppy");
          }
        });
        youngster?.addEventListener("click", () => {
          if (youngster.classList.contains("active")) {
            const ind = ageOfDog.indexOf("youngster");
            ageOfDog.splice(ind, 1);
          } else {
            ageOfDog.push("youngster");
          }
        });
        adult?.addEventListener("click", () => {
          if (adult.classList.contains("active")) {
            const ind = ageOfDog.indexOf("adult");
            ageOfDog.splice(ind, 1);
          } else {
            ageOfDog.push("adult");
          }
        });
        senior?.addEventListener("click", () => {
          if (senior.classList.contains("active")) {
            const ind = ageOfDog.indexOf("senior");
            ageOfDog.splice(ind, 1);
          } else {
            ageOfDog.push("senior");
          }
        });
        male?.addEventListener("click", () => {
          if (!male.checked) {
            const ind = genderOfDog.indexOf("male");
            genderOfDog.splice(ind, 1);
          } else {
            genderOfDog.push("male");
          }
        });
        female?.addEventListener("click", () => {
          if (!female.checked) {
            const ind = genderOfDog.indexOf("female");
            genderOfDog.splice(ind, 1);
          } else {
            genderOfDog.push("female");
          }
        });
      });
    const btnSave = document.querySelector(".btn-save-service-edit");
    btnSave?.addEventListener("click", () => {
      const fetchData1 = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("curr-user-id"),
          serviceArea_walking: serviceArea.value,
          kindOfDogs: sizeOfDog,
          ageOfDogs: ageOfDog,
          genderOfDogs: genderOfDog,
          price_walking: amount.value,
        }),
      };
      fetch(`http://localhost:5000/petsitter/add-data`, fetchData1)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const div = document.querySelector(".btn-save-price-wrapper");
          const p = createHtmlElement("p", "comment-saved-settings");
          p.textContent = "Settings saved";
          p.setAttribute("style", "margin-top: 5px");
          div?.append(p);
          setTimeout(() => {
            div?.removeChild(p);
          }, 2000);
          return data;
        });
    });
  } else if (currService == "drop-in") {
    const accomodatePetsArr1: string[] = [];
    const dogItem = document.getElementById("dog") as HTMLInputElement;
    const catItem = document.getElementById("cat") as HTMLInputElement;
    if (dogItem) {
      dogItem.addEventListener("click", () => {
        if (dogItem.checked) {
          accomodatePetsArr1.push("dog");
        } else {
          const index = accomodatePetsArr1.indexOf("dog");
          accomodatePetsArr1.splice(index, 1);
        }
      });
    }
    if (catItem) {
      catItem.addEventListener("click", () => {
        if (catItem.checked) {
          accomodatePetsArr1.push("cat");
        } else {
          const index = accomodatePetsArr1.indexOf("cat");
          accomodatePetsArr1.splice(index, 1);
        }
      });
    }

    const serviceArea = document.querySelector(
      ".input-area-service"
    ) as HTMLTextAreaElement;
    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        _id: localStorage.getItem("curr-user-id"),
      }),
    };
    fetch(`http://localhost:5000/auth/user`, fetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (
          data.petsitterData.services.homevisits.animals[0] == "dog" ||
          data.petsitterData.services.homevisits.animals[1] == "dog"
        ) {
          dogItem.setAttribute("checked", "true");
          accomodatePetsArr1.push("dog");
        }
        if (
          data.petsitterData.services.homevisits.animals[0] == "cat" ||
          data.petsitterData.services.homevisits.animals[1] == "cat"
        ) {
          catItem.setAttribute("checked", "true");
          accomodatePetsArr1.push("cat");
        }
        const amountInput = document.querySelector(
          ".input-number-price"
        ) as HTMLInputElement;
        amountInput.value = data.petsitterData.services.homevisits.price;
        if (data.petsitterData.services.homevisits.serviceArea) {
          serviceArea.value =
            data.petsitterData.services.homevisits.serviceArea;
        }
      });
    const btnSave = document.querySelector(
      ".btn-save-service-edit"
    ) as HTMLButtonElement;
    btnSave.addEventListener("click", () => {
      const amountInput = document.querySelector(
        ".input-number-price"
      ) as HTMLInputElement;
      const fetchData1 = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("curr-user-id"),
          animals_homevisits: accomodatePetsArr1,
          price_homevisits: amountInput.value,
          serviceArea_homevisits: serviceArea.value,
        }),
      };
      fetch(`http://localhost:5000/petsitter/add-data`, fetchData1)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const div = document.querySelector(".btn-save-price-wrapper");
          const p = createHtmlElement("p", "comment-saved-settings");
          p.textContent = "Settings saved";
          p.setAttribute("style", "margin-top: 5px");
          div?.append(p);
          setTimeout(() => {
            div?.removeChild(p);
          }, 2000);
          return data;
        });
    });
  }
};

setTimeout(updateValues, 100);

export default async function petsitProfileServiceEdit() {
  document.body.innerHTML = "";
  const path = window.location.pathname;
  const service = path.split("/")[5];
  renderPetsitProfileServiceEdit(service);
  document.body.append(sectionEditAccomodation);
  return document.body;
}
