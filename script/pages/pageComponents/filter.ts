import { createHtmlElement, createInputElement } from "../../utils";

export function filterHow(tagParent: HTMLElement): void {
  const boxFilter = createHtmlElement("div", "boxFilter");
  const selectionBox = createHtmlElement("div", "selectionBox ");
  const boxAccomodation = createHtmlElement(
    "div",
    "selectionBoxN ActivSelectionBox",
    "",
    "Accomodation"
  );
  const boxWalk = createHtmlElement("div", "selectionBoxN", "", "Walk");
  const boxHomevisits = createHtmlElement(
    "div",
    "selectionBoxN",
    "",
    "Home visits"
  );
  const line = createHtmlElement("hr");
  const inputsBox = createHtmlElement("div", "inputsBox");

  const petBox = createHtmlElement("div", "box1");
  const namePetBox = createHtmlElement("p", "nameInputBox", "", "Dog Cat");
  const divPetBox = createHtmlElement("div", "petBox");
  const divMenuPets = createHtmlElement("ul", "menuPets");
  setMenuPets(divMenuPets, ["qwe", "asd", "zxc"]); ///////!!!!
  const imgNamePetBox = new Image();
  imgNamePetBox.src = "img/paw.svg";
  const inputPetBox = createInputElement("text"); ///////!!!!
  const img2NamePetBox = new Image();
  img2NamePetBox.src = "img/down.svg";

  const addressBox = createHtmlElement("div", "box1");
  const addressPetBox = createHtmlElement("p", "nameInputBox", "", "Address");
  const divAddressBox = createHtmlElement("div");
  const imgAddressPetBox = new Image();
  imgAddressPetBox.src = "img/geoloc.svg";
  const inputAddressBox = createInputElement("search", "search");
  inputAddressBox.setAttribute("placeholder", "city");
  //const img2addressPetBox = new Image(); img2addressPetBox.src = "img/location.svg";

  const deadlineBox = createHtmlElement("div", "box1");
  const deadlinePetBox = createHtmlElement("p", "nameInputBox", "", "Deadline");
  const divDeadlineBox = createHtmlElement("div");
  //const imgDeadlineBox = new Image(); imgDeadlineBox.src = "img/calendar.svg";
  const inputDeadlineBox = createInputElement("date");
  inputDeadlineBox.value = currentDay();

  const timeBox = createHtmlElement("div", "box1");
  const timePetBox = createHtmlElement("p", "nameInputBox", "", "Time");
  const divTimeBox = createHtmlElement("div", "timeBox");
  const divMenuTime = createHtmlElement("ul", "menuTime");
  setMenuTime(divMenuTime);
  const imgTimeBox = new Image();
  imgTimeBox.src = "img/clock.svg";
  const inputTimeBox = createInputElement("text", "itTime", "itTime");
  const img2TimeBox = new Image();
  img2TimeBox.src = "img/down.svg";

  const btnSearch = createHtmlElement("button", "btn rectangle", "", "search");
  const btnImg = new Image();
  btnImg.src = "img/loupe.svg";

  tagParent.append(boxFilter);
  boxFilter.append(selectionBox);
  boxFilter.append(line);
  boxFilter.append(inputsBox);
  selectionBox.append(boxAccomodation);
  selectionBox.append(boxWalk);
  selectionBox.append(boxHomevisits);
  inputsBox.append(petBox);
  inputsBox.append(addressBox);
  inputsBox.append(deadlineBox);
  inputsBox.append(timeBox);
  inputsBox.append(btnSearch);

  petBox.append(namePetBox);
  petBox.append(divPetBox);
  divPetBox.append(imgNamePetBox);
  divPetBox.append(inputPetBox);
  divPetBox.append(img2NamePetBox);
  divPetBox.append(divMenuPets);

  addressBox.append(addressPetBox);
  addressBox.append(divAddressBox);
  divAddressBox.append(imgAddressPetBox);
  divAddressBox.append(inputAddressBox);
  //divAddressBox.append(img2addressPetBox);

  deadlineBox.append(deadlinePetBox);
  deadlineBox.append(divDeadlineBox);
  divDeadlineBox.append(inputDeadlineBox);

  timeBox.append(timePetBox);
  timeBox.append(divTimeBox);
  divTimeBox.append(imgTimeBox);
  divTimeBox.append(inputTimeBox);
  divTimeBox.append(img2TimeBox);
  divTimeBox.append(divMenuTime);

  btnSearch.append(btnImg);

  function setMenuPets(tagParent: HTMLElement, myPets?: string[]): void {
    if (myPets) {
      const myPet = createHtmlElement("p", "titlePetsChoise", "", "My Pets");
      tagParent.append(myPet);
      for (let i = 0; i < myPets.length; i++) {
        const pet = createHtmlElement("li", "", "", `${myPets[i]}`);
        tagParent.append(pet);
      }
    }
    const cat = createHtmlElement("p", "titlePetsChoise", "", "Cat");
    const cat1 = createHtmlElement("li", "", "", "Small(<6 kg)");
    const cat2 = createHtmlElement("li", "", "", `Large(<6 kg)`);
    const dog = createHtmlElement("p", "titlePetsChoise", "", "Dog");
    const dog1 = createHtmlElement("li", "", "", "Micro(<5 kg)");
    const dog2 = createHtmlElement("li", "", "", "Small(6 - 15 kg)");
    const dog3 = createHtmlElement("li", "", "", "Medium(16 - 25 kg)");
    const dog4 = createHtmlElement("li", "", "", "Large(26 - 35 kg)");
    const dog5 = createHtmlElement("li", "", "", "Giant(>36 kg)");

    tagParent.append(cat);
    tagParent.append(cat1);
    tagParent.append(cat2);
    tagParent.append(dog);
    tagParent.append(dog1);
    tagParent.append(dog2);
    tagParent.append(dog3);
    tagParent.append(dog4);
    tagParent.append(dog5);
  }

  function currentDay() {
    const getCurrentDay = new Date();
    const year = getCurrentDay.getFullYear();
    const month1 = getCurrentDay.getMonth() + 1;
    const day1 = getCurrentDay.getDate();
    let month = "";
    let day = "";
    month = month1 < 10 ? "0" + month1 : String(month1);
    day = day1 < 10 ? "0" + day1 : String(day1);
    const value = year + "-" + month + "-" + day;
    return value;
  }
  function currentTime() {
    const getCurrentDay = new Date();
    const hours = getCurrentDay.getHours();
    const min = getCurrentDay.getMinutes();
    const timeNow = hours + "-" + min;
    return timeNow;
  }

  function setMenuTime(tagParent: HTMLElement): void {
    let choiceTime = "";
    if (inputDeadlineBox.value == currentDay()) {
      choiceTime = currentTime();
    } else {
      choiceTime = "05-00";
    }
    const gettime = choiceTime.split("-");
    let getHours = Number(gettime[0]);
    let getMin = Number(gettime[1]);

    if (getMin == 0 || getMin == 30) {
      getHours += 1;
    }
    if (getMin > 0 && getMin < 30) {
      getHours += 1;
      getMin = 30;
    }
    if (getMin > 30) {
      getHours += 2;
      getMin = 0;
    }

    while (getHours < 22) {
      let str = "";
      if (getHours < 10 && getMin < 10) str = `0${getHours}:0${getMin}`;
      else if (getHours < 0 && getMin >= 0) str = `0${getHours}:${getMin}`;
      else if (getHours >= 0 && getMin < 10) str = `${getHours}:0${getMin}`;
      else if (getHours < 0) str = `${getHours}:${getMin}`;

      const li = createHtmlElement("li", "", "", `${str}`);

      tagParent.append(li);
      if (getMin == 0) {
        getMin = 30;
        getHours += 0;
      } else if (getMin == 30) {
        getMin = 0;
        getHours += 1;
      }
    }
  }

  let selectedBox = boxAccomodation;
  selectionBox.addEventListener("click", (event) => {
    if (event.target && event.target instanceof HTMLElement) {
      const tag = event.target;
      if (tag.classList.contains("ActivSelectionBox")) return;
      activeBox(tag);
    }
    function activeBox(div: HTMLElement) {
      if (!div.classList.contains("selectionBoxN")) return;
      selectedBox.classList.remove("ActivSelectionBox");
      selectedBox = div;
      selectedBox.classList.add("ActivSelectionBox");
    }
  });

  divPetBox.addEventListener("click", (event) => {
    if (event.target && event.target instanceof HTMLElement) {
      const target = event.target;
      if (target.tagName == "LI") {
        inputPetBox.value = target.innerHTML;
      }
    }
  });

  divTimeBox.addEventListener("click", (event) => {
    if (event.target && event.target instanceof HTMLElement) {
      const target = event.target;
      if (target.tagName == "LI") {
        inputTimeBox.value = target.innerHTML;
      }
    }
  });

  inputDeadlineBox.addEventListener("change", () => {
    divMenuTime.innerHTML = "";
    setMenuTime(divMenuTime);
  });
  inputAddressBox.addEventListener("input", () => {
    /*  console.log("search= ", inputAddressBox.value);*/
  });

  btnSearch.addEventListener("click", () => {
    console.log("способ выгула = ", selectedBox.innerHTML); /** */
    console.log("time= ", inputTimeBox.value); /**/
    console.log("date= ", inputDeadlineBox.value);
    console.log("search= ", inputAddressBox.value);
    console.log("pet= ", inputPetBox.value);
  });
}