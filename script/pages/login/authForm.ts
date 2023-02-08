import { createHtmlElement } from "../../utils";

const formSection = createHtmlElement("section", "petsitter-form-section");

interface PetsitterData {
  birth: string;
  gender: string;
  services: string[];
  city: string;
  address: string;
}

const fetchPetsitterData: PetsitterData = {
  birth: "",
  gender: "",
  services: [],
  city: "",
  address: "",
};

function renderPetsitterForm() {
  document.body.setAttribute("style", "padding: 0");
  const formContainer = createHtmlElement("div", "petsitter-form-container");
  const progress = createHtmlElement("input", "form-progress") as HTMLInputElement;
  progress.value = "0";
  progress.type = "range";
  const subtitle = createHtmlElement("p", "petsitter-form-subtitle");
  subtitle.textContent = "Just few more steps..";
  const formTitle = createHtmlElement("h3", "petsitter-form-title");
  formTitle.textContent = "Petsi";
  const icon = createHtmlElement("div", "petsitter-form-icon");
  icon.style.backgroundImage = `url('../img/icons/home.png')`;
  const temporaryContainer = createHtmlElement("form", "petsitter-form-temporary");
  const tempTitle = createHtmlElement("h4", "temp-title");
  tempTitle.textContent = "Tell us about yourself";
  const dateOfBirthTitle = createHtmlElement("h4", "date-of-birth-input-title");
  dateOfBirthTitle.textContent = "Enter you date of birth";
  const dateOfBirthInput = createHtmlElement("input", "date-of-birth-input petsitter-form-input") as HTMLInputElement;
  dateOfBirthInput.type = "date";
  const genderContainer = createHtmlElement("div", "gender-container");
  const maleContainer = createHtmlElement("div", "male-gender-container");
  const maleGenderRadio = createHtmlElement("input", "gender-input male-input") as HTMLInputElement;
  maleGenderRadio.type = "radio";
  maleGenderRadio.name = "gender";
  maleGenderRadio.id = "Male";
  const maleLabel = createHtmlElement("label", "gender-input-label") as HTMLLabelElement;
  maleLabel.setAttribute("for", "Male");
  maleLabel.textContent = "Male";
  maleContainer.append(maleGenderRadio, maleLabel);
  const femaleContainer = createHtmlElement("div", "female-gender-container");
  const femaleGenderRadio = createHtmlElement("input", "gender-input female-input") as HTMLInputElement;
  femaleGenderRadio.type = "radio";
  femaleGenderRadio.name = "gender";
  femaleGenderRadio.id = "Female";
  const femaleLabel = createHtmlElement("label", "gender-input-label") as HTMLLabelElement;
  femaleLabel.setAttribute("for", "Female");
  femaleLabel.textContent = "Female";
  femaleContainer.append(femaleGenderRadio, femaleLabel);
  genderContainer.append(maleContainer, femaleContainer);
  const btnNext = createHtmlElement("div", "form-btn-next");
  btnNext.textContent = "Next";
  btnNext.addEventListener("click", renderSecondForm);
  temporaryContainer.append(tempTitle, dateOfBirthTitle, dateOfBirthInput, genderContainer, btnNext);
  const linkBackHome = createHtmlElement("a", "go-main-page-link") as HTMLAnchorElement;
  linkBackHome.textContent = "Back to main page";
  linkBackHome.href = "/";

  formContainer.append(progress, subtitle, formTitle, icon, temporaryContainer, linkBackHome);

  formSection.append(formContainer);
  return formSection;
}

function renderSecondForm() {
  const temporaryContainer = document.querySelector(".petsitter-form-temporary") as HTMLDivElement;
  const dateOfBirthInput = document.querySelector(".date-of-birth-input") as HTMLInputElement;
  const femaleGenderRadio = document.querySelector(".male-input") as HTMLInputElement;
  const maleGenderRadio = document.querySelector(".female-input") as HTMLInputElement;
  const progress = document.querySelector(".form-progress") as HTMLInputElement;
  const icon = document.querySelector(".petsitter-form-icon") as HTMLDivElement;
  if (dateOfBirthInput.value && maleGenderRadio.checked) {
    fetchPetsitterData.birth = dateOfBirthInput.value;
    fetchPetsitterData.gender = "Male";
    temporaryContainer.innerHTML = "";
    progress.value = "17";
    icon.style.backgroundImage = `url('../img/icons/cat.png')`;
    appearSecondView();
  } else if (dateOfBirthInput.value && femaleGenderRadio.checked) {
    fetchPetsitterData.birth = dateOfBirthInput.value;
    fetchPetsitterData.gender = "Female";
    temporaryContainer.innerHTML = "";
    progress.value = "17";
    icon.style.backgroundImage = `url('../img/icons/cat.png')`;
    appearSecondView();
  } else {
    const p = createHtmlElement("p", "error-enter-fields");
    p.textContent = "Error: Please, fill in all fields";
    document.body.append(p);
    setTimeout(() => {
      document.body.removeChild(p);
    }, 2000);
  }
}

function appearSecondView() {
  const temporaryContainer = document.querySelector(".petsitter-form-temporary") as HTMLDivElement;
  const tempTitle = createHtmlElement("h4", "temp-title");
  tempTitle.textContent = "Choose services you want to provide";
  const services = createHtmlElement("div", "sevices-wrapper");
  const progress = document.querySelector(".form-progress") as HTMLInputElement;
  const icon = document.querySelector(".petsitter-form-icon") as HTMLDivElement;

  const checkBoxServiceHotel = createHtmlElement("div", "check-box-service");
  const checkBoxInputHotel = createHtmlElement("input", "check-box-input-service") as HTMLInputElement;
  checkBoxInputHotel.type = "checkbox";
  checkBoxInputHotel.name = "service";
  checkBoxInputHotel.id = "hotel";
  checkBoxInputHotel.addEventListener("input", () => {
    if (checkBoxInputHotel.checked) {
      checkBoxLabelHotel.setAttribute(
        "style",
        "filter: opacity(1); box-shadow: 0 2px 4px 1px rgb(27 28 29 / 90%); background-image: url('../img/images/hotelService.jpg')"
      );
      fetchPetsitterData.services.push("hotel");
    } else {
      checkBoxLabelHotel.setAttribute("style", "background-image: url('../img/images/hotelService.jpg");
      const index = fetchPetsitterData.services.indexOf("hotel");
      fetchPetsitterData.services.splice(index, 1);
    }
  });
  const checkBoxLabelHotel = createHtmlElement("label", "check-box-label-service");
  checkBoxLabelHotel.setAttribute("for", "hotel");
  checkBoxLabelHotel.textContent = "Home hotel for pets";
  checkBoxLabelHotel.style.backgroundImage = `url('../img/images/hotelService.jpg')`;

  const checkBoxServiceWalk = createHtmlElement("div", "check-box-service");
  const checkBoxInputWalk = createHtmlElement("input", "check-box-input-service") as HTMLInputElement;
  checkBoxInputWalk.type = "checkbox";
  checkBoxInputWalk.name = "service";
  checkBoxInputWalk.id = "walk";
  checkBoxInputWalk.addEventListener("input", () => {
    if (checkBoxInputWalk.checked) {
      checkBoxLabelWalk.setAttribute(
        "style",
        "filter: opacity(1); box-shadow: 0 2px 4px 1px rgb(27 28 29 / 90%); background-image: url('../img/images/walkService.jpg')"
      );
      fetchPetsitterData.services.push("walk");
    } else {
      checkBoxLabelWalk.setAttribute("style", "background-image: url('../img/images/walkService.jpg')");
      const index = fetchPetsitterData.services.indexOf("walk");
      fetchPetsitterData.services.splice(index, 1);
    }
  });
  const checkBoxLabelWalk = createHtmlElement("label", "check-box-label-service");
  checkBoxLabelWalk.setAttribute("for", "walk");
  checkBoxLabelWalk.textContent = "Walks";
  checkBoxLabelWalk.style.backgroundImage = `url('../img/images/walkService.jpg')`;

  const checkBoxServiceHome = createHtmlElement("div", "check-box-service");
  const checkBoxInputHome = createHtmlElement("input", "check-box-input-service") as HTMLInputElement;
  checkBoxInputHome.type = "checkbox";
  checkBoxInputHome.name = "service";
  checkBoxInputHome.id = "home";
  checkBoxInputHome.addEventListener("input", () => {
    if (checkBoxInputHome.checked) {
      checkBoxLabelHome.setAttribute(
        "style",
        "filter: opacity(1); box-shadow: 0 2px 4px 1px rgb(27 28 29 / 90%); background-image: url('../img/images/homeService.jpg"
      );
      fetchPetsitterData.services.push("home");
    } else {
      checkBoxLabelHome.setAttribute("style", "background-image: url('../img/images/homeService.jpg')");
      const index = fetchPetsitterData.services.indexOf("home");
      fetchPetsitterData.services.splice(index, 1);
    }
  });
  const checkBoxLabelHome = createHtmlElement("label", "check-box-label-service");
  checkBoxLabelHome.setAttribute("for", "home");
  checkBoxLabelHome.textContent = "Home visits";
  checkBoxLabelHome.style.backgroundImage = `url('../img/images/homeService.jpg')`;

  const checkBoxServiceTraining = createHtmlElement("div", "check-box-service");
  const checkBoxInputTraining = createHtmlElement("input", "check-box-input-service") as HTMLInputElement;
  checkBoxInputTraining.type = "checkbox";
  checkBoxInputTraining.name = "service";
  checkBoxInputTraining.id = "training";
  checkBoxInputTraining.addEventListener("input", () => {
    if (checkBoxInputTraining.checked) {
      checkBoxLabelTraining.setAttribute(
        "style",
        "filter: opacity(1); box-shadow: 0 2px 4px 1px rgb(27 28 29 / 90%); background-image: url('../img/images/dreesingService.jpg')"
      );
      fetchPetsitterData.services.push("training");
    } else {
      checkBoxLabelTraining.setAttribute("style", "background-image: url('../img/images/dreesingService.jpg')");
      const index = fetchPetsitterData.services.indexOf("training");
      fetchPetsitterData.services.splice(index, 1);
    }
  });
  const checkBoxLabelTraining = createHtmlElement("label", "check-box-label-service");
  checkBoxLabelTraining.setAttribute("for", "training");
  checkBoxLabelTraining.textContent = "Training";
  checkBoxLabelTraining.style.backgroundImage = `url('../img/images/dreesingService.jpg')`;

  checkBoxServiceHotel.append(checkBoxInputHotel, checkBoxLabelHotel);
  checkBoxServiceWalk.append(checkBoxInputWalk, checkBoxLabelWalk);
  checkBoxServiceHome.append(checkBoxInputHome, checkBoxLabelHome);
  checkBoxServiceTraining.append(checkBoxInputTraining, checkBoxLabelTraining);

  services.append(checkBoxServiceHotel, checkBoxServiceWalk, checkBoxServiceHome, checkBoxServiceTraining);

  const btnGoNext = createHtmlElement("div", "form-btn-next");
  btnGoNext.textContent = "Next";
  btnGoNext.addEventListener("click", () => {
    if (
      !checkBoxInputHotel.checked &&
      !checkBoxInputWalk.checked &&
      !checkBoxInputTraining.checked &&
      !checkBoxInputHome.checked
    ) {
      const p = createHtmlElement("p", "error-enter-fields");
      p.textContent = "Error: Please, choose at least one option!";
      document.body.append(p);
      setTimeout(() => {
        document.body.removeChild(p);
      }, 2000);
    } else {
      temporaryContainer.innerHTML = "";
      progress.value = "34";
      icon.style.backgroundImage = `url('../img/icons/home.png')`;
      appearThirdView();
    }
  });
  temporaryContainer.append(tempTitle, services, btnGoNext);
}

function appearThirdView() {
  const temporaryContainer = document.querySelector(".petsitter-form-temporary") as HTMLDivElement;
  const progress = document.querySelector(".form-progress") as HTMLInputElement;
  const icon = document.querySelector(".petsitter-form-icon") as HTMLDivElement;
  temporaryContainer.innerHTML = "";

  const tempTitle = createHtmlElement("h4", "temp-title");
  tempTitle.textContent = "What is you location?";

  const tempSubtitle = createHtmlElement("p", "temp-title temp-sub");
  tempSubtitle.textContent = "This data is needed to create an account, it will not be visible on the portal";

  const inputsContainer = createHtmlElement("form", "petsitter-form-temporary");
  inputsContainer.setAttribute("style", "width: 100%");
  const addressTitle = createHtmlElement("h4", "address-subtitle");
  addressTitle.textContent = "Enter your address";
  const addressInput = createHtmlElement("input", "address-input") as HTMLInputElement;
  addressInput.placeholder = "Street, number of house";
  const cityTitle = createHtmlElement("h4", "city-subtitle");
  cityTitle.textContent = "Enter your city";
  const cityInput = createHtmlElement("input", "city-input") as HTMLInputElement;
  cityInput.placeholder = "City";
  const btnGoNext = createHtmlElement("div", "form-btn-next");
  btnGoNext.textContent = "Next";
  btnGoNext.setAttribute("style", "margin-top: 20px");
  btnGoNext.addEventListener("click", () => {
    if (addressInput.value.length < 5 || cityInput.value.length < 5) {
      const p = createHtmlElement("p", "error-enter-fields");
      p.textContent = "Error: Please, enter correct data!";
      document.body.append(p);
      setTimeout(() => {
        document.body.removeChild(p);
      }, 2000);
    } else {
      progress.value = "51";
      icon.style.backgroundImage = `url('../img/icons/info.png')`;
      fetchPetsitterData.city = `${cityInput.value}`;
      fetchPetsitterData.address = `${addressInput.value}`;
      appearForthView();
    }
  });
  inputsContainer.append(addressTitle, addressInput, cityTitle, cityInput);
  temporaryContainer.append(tempTitle, tempSubtitle, inputsContainer, btnGoNext);
}

function appearForthView() {
  const temporaryContainer = document.querySelector(".petsitter-form-temporary") as HTMLDivElement;
  const progress = document.querySelector(".form-progress") as HTMLInputElement;
  const icon = document.querySelector(".petsitter-form-icon") as HTMLDivElement;
  temporaryContainer.innerHTML = "";

  const tempTitle = createHtmlElement("h4", "temp-title");
  tempTitle.textContent = "Job Opportunity Statement";

  const statementWrapper1 = createHtmlElement("div", "statement-wrapper");
  const inputStatement1 = createHtmlElement("input", "input-statement") as HTMLInputElement;
  inputStatement1.id = "statement-one";
  inputStatement1.type = "checkbox";
  const labelForStatement1 = createHtmlElement("label", "label-statement");
  labelForStatement1.setAttribute("for", "statement-one");
  labelForStatement1.textContent = "I have never been punished for the crime of intentionally mistreating animals.";
  statementWrapper1.append(inputStatement1, labelForStatement1);

  const statementWrapper2 = createHtmlElement("div", "statement-wrapper");
  const inputStatement2 = createHtmlElement("input", "input-statement") as HTMLInputElement;
  inputStatement2.id = "statement-two";
  inputStatement2.type = "checkbox";
  const labelForStatement2 = createHtmlElement("label", "label-statement");
  labelForStatement2.setAttribute("for", "statement-two");
  labelForStatement2.textContent =
    "I confirm that there was no prohibition against me to perform work, any kind of activity related to the exploitation of animals.";
  statementWrapper2.append(inputStatement2, labelForStatement2);
  const btnNext = createHtmlElement("div", "form-btn-next");
  btnNext.textContent = "Next";
  btnNext.addEventListener("click", () => {
    if (!inputStatement2.checked || !inputStatement1.checked) {
      const p = createHtmlElement("p", "error-enter-fields");
      p.textContent = "Confirm all statements below";
      document.body.append(p);
      setTimeout(() => {
        document.body.removeChild(p);
      }, 2000);
    } else {
      progress.value = "68";
      icon.style.backgroundImage = `url('../img/icons/info.png')`;
      appearFifthView();
    }
  });

  temporaryContainer.append(tempTitle, statementWrapper1, statementWrapper2, btnNext);
}

function appearFifthView() {
  const temporaryContainer = document.querySelector(".petsitter-form-temporary") as HTMLDivElement;
  const progress = document.querySelector(".form-progress") as HTMLInputElement;
  const icon = document.querySelector(".petsitter-form-icon") as HTMLDivElement;
  icon.style.backgroundImage = `url('../img/icons/cat.png')`;
  temporaryContainer.innerHTML = "";
  const tempTitle = createHtmlElement("h4", "temp-title");
  tempTitle.textContent = "Why do you wish to become a petsitter?";
  const tempSubtitle = createHtmlElement("p", "temp-subtitle");
  tempSubtitle.textContent = "This information will not appear on your profile.";
  const inputText = createHtmlElement("textarea", "petsitter-description") as HTMLTextAreaElement;
  inputText.maxLength = 200;
  inputText.minLength = 20;
  const btnGoNext = createHtmlElement("div", "form-btn-next");
  btnGoNext.textContent = "Next";
  btnGoNext.addEventListener("click", () => {
    if (inputText.value.length < 20) {
      const p = createHtmlElement("p", "error-enter-fields");
      p.textContent = "Description should include minimum 20 characters";
      document.body.append(p);
      setTimeout(() => {
        document.body.removeChild(p);
      }, 2000);
    } else {
      progress.value = "85";
      icon.style.backgroundImage = `url('../img/icons/cat.png')`;
      appearSixthView();
    }
  });
  temporaryContainer.append(tempTitle, tempSubtitle, inputText, btnGoNext);
}

function appearSixthView() {
  const temporaryContainer = document.querySelector(".petsitter-form-temporary") as HTMLDivElement;
  const progress = document.querySelector(".form-progress") as HTMLInputElement;
  const icon = document.querySelector(".petsitter-form-icon") as HTMLDivElement;
  icon.style.backgroundImage = `url('../img/icons/cat.png')`;
  temporaryContainer.innerHTML = "";
  temporaryContainer.setAttribute("style", "row-gap: 10px");

  const tempTitle = createHtmlElement("h4", "temp-title");
  tempTitle.textContent = "How did you know about Petsi?";

  const div_1 = createHtmlElement("div", "radio-wrapper");
  const radio_1 = createHtmlElement("input", "how-you-know-radio") as HTMLInputElement;
  radio_1.type = "radio";
  radio_1.name = "how-you-know";
  radio_1.id = "radio-1";
  const label_1 = createHtmlElement("label", "how-you-know-label");
  label_1.setAttribute("for", "radio-1");
  label_1.textContent = "Internet advertising";
  div_1.append(radio_1, label_1);

  const div_2 = createHtmlElement("div", "radio-wrapper");
  const radio_2 = createHtmlElement("input", "how-you-know-radio") as HTMLInputElement;
  radio_2.type = "radio";
  radio_2.name = "how-you-know";
  radio_2.id = "radio-2";
  const label_2 = createHtmlElement("label", "how-you-know-label");
  label_2.setAttribute("for", "radio-2");
  label_2.textContent = "Social media";
  div_2.append(radio_2, label_2);

  const div_3 = createHtmlElement("div", "radio-wrapper");
  const radio_3 = createHtmlElement("input", "how-you-know-radio") as HTMLInputElement;
  radio_3.type = "radio";
  radio_3.name = "how-you-know";
  radio_3.id = "radio-3";
  const label_3 = createHtmlElement("label", "how-you-know-label");
  label_3.setAttribute("for", "radio-3");
  label_3.textContent = "Direct request from the owner";
  div_3.append(radio_3, label_3);

  const div_4 = createHtmlElement("div", "radio-wrapper");
  const radio_4 = createHtmlElement("input", "how-you-know-radio") as HTMLInputElement;
  radio_4.type = "radio";
  radio_4.name = "how-you-know";
  radio_4.id = "radio-4";
  const label_4 = createHtmlElement("label", "how-you-know-label");
  label_4.setAttribute("for", "radio-4");
  label_4.textContent = "On the advice of a friend";
  div_4.append(radio_4, label_4);

  const div_5 = createHtmlElement("div", "radio-wrapper");
  const radio_5 = createHtmlElement("input", "how-you-know-radio") as HTMLInputElement;
  radio_5.type = "radio";
  radio_5.name = "how-you-know";
  radio_5.id = "radio-5";
  const label_5 = createHtmlElement("label", "how-you-know-label");
  label_5.setAttribute("for", "radio-5");
  label_5.textContent = "Direct contact with Petsi";
  div_5.append(radio_5, label_5);

  const div_6 = createHtmlElement("div", "radio-wrapper");
  const radio_6 = createHtmlElement("input", "how-you-know-radio") as HTMLInputElement;
  radio_6.type = "radio";
  radio_6.name = "how-you-know";
  radio_6.id = "radio-6";
  const label_6 = createHtmlElement("label", "how-you-know-label");
  label_6.setAttribute("for", "radio-6");
  label_6.textContent = "Other";
  div_6.append(radio_6, label_6);

  const btnGoNext = createHtmlElement("div", "form-btn-next");
  btnGoNext.setAttribute("style", "margin-top: 20px");
  btnGoNext.textContent = "Next";
  btnGoNext.addEventListener("click", () => {
    if (
      !radio_1.checked &&
      !radio_2.checked &&
      !radio_3.checked &&
      !radio_4.checked &&
      !radio_5.checked &&
      !radio_6.checked
    ) {
      const p = createHtmlElement("p", "error-enter-fields");
      p.textContent = "Error: choose one source";
      document.body.append(p);
      setTimeout(() => {
        document.body.removeChild(p);
      }, 2000);
    } else {
      progress.value = "100";
      appearSeventhView();
    }
  });
  temporaryContainer.append(tempTitle, div_1, div_2, div_3, div_4, div_5, div_6, btnGoNext);
}

function appearSeventhView() {
  const temporaryContainer = document.querySelector(".petsitter-form-temporary") as HTMLDivElement;
  temporaryContainer.innerHTML = "";

  const tempTitle = createHtmlElement("h4", "temp-title");
  tempTitle.textContent = "Adding a photo";
  tempTitle.setAttribute("style", "margin-bottom: 0");
  const tempSubtitle = createHtmlElement("p", "temp-subtitle");
  tempSubtitle.textContent = "Add a profile photo to make it easier for owners to recognize you.";
  tempSubtitle.setAttribute("style", "text-align: center");
  const photoContainer = createHtmlElement("div", "photo-container");
  photoContainer.setAttribute("style", "background-image: url('../img/icons/photo.png')");
  const btnAddPhoto = createHtmlElement("button", "button-add-photo");
  btnAddPhoto.textContent = "Add photo";
  photoContainer.append(btnAddPhoto);
  const btnSkip = createHtmlElement("button", "button-skip");
  btnSkip.textContent = "Skip";
  temporaryContainer.append(tempTitle, tempSubtitle, photoContainer, btnSkip);
}

export default function authPetsitterForm() {
  document.body.innerHTML = "";
  renderPetsitterForm();
  return document.body.append(formSection);
}