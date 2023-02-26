import { createHtmlElement } from "../../utils";
import { headerOwner, header } from "../pageComponents/headers";
import { createInputElement } from "../../utils";
import { setMenuPets } from "../pageComponents/filter";
import { currentDay } from "../pageComponents/filter";
import { filterItem } from "../../filterItem/sortItem";
import { createSortItem } from "../pageComponents/sortItem";
import { footerFun } from "../pageComponents/footer";
import { firstVal } from "../pageComponents/filter";
import { getPetsitters } from "../../commonFunction/getUser";

export async function searchShowPage() {
  document.body.innerHTML = "";
  if (!localStorage.getItem("curr-user-id")) {
    header(document.body);
  } else {
    headerOwner(document.body);
  }

  const main = createHtmlElement("main");
  const blockFilter = createHtmlElement("div", "blockFilter", "", "");
  const blockPetsitters = createHtmlElement("div", "blockPetsitters");
  const blockMap = createHtmlElement("div", "blockMap", "map");
  blockMap.innerHTML = `<iframe id="ifr" src="https://www.google.com/maps/d/embed?mid=1J_67mzYKVayzRdUrsUQfRGItQFGZoN0&ehbc=2E312F"></iframe>`;
  const title = createHtmlElement("h3", "", "", "What service do you need?");
  const th = createHtmlElement("hr");
  const type = createHtmlElement("p", "", "", "The type of service");
  const divType = createHtmlElement("div", "divType");
  const boxAccomodation = createHtmlElement(
    "div",
    "typeBoxN ActivTypeBoxN Accomodation",
    "hotel",
    "Accomodation"
  );
  const boxWalk = createHtmlElement("div", "typeBoxN Walk", "walking", "Walk");
  const boxHomevisits = createHtmlElement(
    "div",
    "typeBoxN HomeVisits",
    "homevisits",
    "Home visits"
  );

  const petBox = createHtmlElement("div", "box1");
  const namePetBox = createHtmlElement("p", "nameInputBox", "", "Dog Cat");
  const divPetBox = createHtmlElement("div", "petBox");
  const divMenuPets = createHtmlElement("ul", "menuPets");
  setMenuPets(divMenuPets); //, myPets);
  const inputPetBox = createInputElement("text", "petBoxInput");
  const img2NamePetBox = new Image();
  img2NamePetBox.src = "img/down.svg";

  const addressBox = createHtmlElement("div", "box1");
  const addressPetBox = createHtmlElement("p", "nameInputBox", "", "Address");
  const divAddressBox = createHtmlElement("div");
  const inputAddressBox = createInputElement("text", "search"); //----------'v-model="text"'---------------
  inputAddressBox.setAttribute("placeholder", "city");
  const imgAddressPetBox = new Image();
  imgAddressPetBox.src = "img/geoloc.svg";

  const deadlineBoxFromTo = createHtmlElement(
    "div",
    "deadlineBoxFromTo FromTo"
  );
  const deadlineBox1 = createHtmlElement("div", "box1");
  const deadlinePetBox1 = createHtmlElement(
    "p",
    "nameInputBox",
    "",
    "Deadline from"
  );
  const divDeadlineBox1 = createHtmlElement("div");
  const inputDeadlineBox1 = createInputElement("date", "");
  inputDeadlineBox1.value = currentDay();
  const deadlineBox2 = createHtmlElement("div", "box1");
  const deadlinePetBox2 = createHtmlElement(
    "p",
    "nameInputBox",
    "",
    "Deadline to"
  );
  const divDeadlineBox2 = createHtmlElement("div");
  const inputDeadlineBox2 = createInputElement("date");
  inputDeadlineBox2.value = currentDay();

  const walkTime = createHtmlElement("div", "box1 box2");
  const nameWalkTime = createHtmlElement(
    "p",
    "nameInputBox",
    "",
    "The duration of the walk"
  );
  const divWalkTime = createHtmlElement("div", "petBox");
  const divMenuWalkTime = createHtmlElement("ul", "menuPets");
  const li1 = createHtmlElement("li", "menuWalkTime", "", "30 minutes");
  const li2 = createHtmlElement("li", "menuWalkTime", "", "1 hour");
  const li3 = createHtmlElement("li", "menuWalkTime", "", "1.5 hours");
  const li4 = createHtmlElement("li", "menuWalkTime", "", "2 hours");
  const inputWalkTime = createInputElement("text", "petBoxInput");
  inputWalkTime.setAttribute("placeholder", "30 minutes");
  const imgWalkTime = new Image();
  img2NamePetBox.src = "img/down.svg";

  //-----------Price----------
  const range = createHtmlElement("div");
  const pPrice = createHtmlElement("p", "", "", "Price per night");
  range.append(pPrice);
  const rangeBox = createHtmlElement("div", "range-box1 range-box", "rangeBox");
  range.append(rangeBox);
  const rangePrice1 = createInputElement("range", "input-range", "rangePrice1");
  rangeBox.append(rangePrice1);
  rangePrice1.setAttribute("min", `0`);
  rangePrice1.setAttribute("max", `200`);
  rangePrice1.setAttribute("step", "1");
  const rangePrice2 = createInputElement("range", "input-range", "rangePrice2");
  rangeBox.append(rangePrice2);
  rangePrice2.setAttribute("type", "range");
  rangePrice2.setAttribute("min", `0`);
  rangePrice2.setAttribute("max", `200`);
  rangePrice2.setAttribute("step", "1");
  const rangeBoxs = rangeBox.getElementsByTagName("input");
  rangeBoxs[0].value = String(0);
  rangeBoxs[1].value = String(200);
  const divPrice = createHtmlElement("div", "FromTo", "", "");
  const pMin = createHtmlElement("p", "", "", "0");
  const pMax = createHtmlElement("p", "", "", "200+");

  function getVals() {
    const slides1 = rangeBox.getElementsByTagName("input");
    let slide1 = parseFloat(slides1[0].value);
    let slide2 = parseFloat(slides1[1].value);
    if (slide1 > slide2) {
      const a = slide2;
      slide2 = slide1;
      slide1 = a;
    }
    rangeBoxs[0].value = String(slide1);
    rangeBoxs[1].value = String(slide2);
    pMin.innerHTML = String(slide1);
    pMax.innerHTML = String(slide2);
  }

  const clear = createHtmlElement("div", "FromTo");
  const clearTitle = createHtmlElement("p", "", "", "Filters");
  const clearBtn = createHtmlElement("button", "clear", "", "Clear");

  document.body.append(main);
  main.append(blockFilter);
  main.append(blockPetsitters);
  main.append(blockMap);

  blockFilter.append(title);
  blockFilter.append(th);
  blockFilter.append(type);
  blockFilter.append(divType);
  blockFilter.append(petBox);
  blockFilter.append(addressBox);
  blockFilter.append(deadlineBoxFromTo);
  blockFilter.append(walkTime);
  blockFilter.append(range);
  blockFilter.append(divPrice);
  blockFilter.append(clear);
  divType.append(boxAccomodation);
  divType.append(boxWalk);
  divType.append(boxHomevisits);
  petBox.append(namePetBox);
  petBox.append(divPetBox);
  divPetBox.append(inputPetBox);
  divPetBox.append(img2NamePetBox);
  divPetBox.append(divMenuPets);
  addressBox.append(addressPetBox);
  addressBox.append(divAddressBox);
  divAddressBox.append(inputAddressBox);
  divAddressBox.append(imgAddressPetBox);
  deadlineBoxFromTo.append(deadlineBox1);
  deadlineBoxFromTo.append(deadlineBox2);
  deadlineBox1.append(deadlinePetBox1);
  deadlineBox1.append(divDeadlineBox1);
  divDeadlineBox1.append(inputDeadlineBox1);
  deadlineBox2.append(deadlinePetBox2);
  deadlineBox2.append(divDeadlineBox2);
  divDeadlineBox2.append(inputDeadlineBox2);
  walkTime.append(nameWalkTime);
  walkTime.append(divWalkTime);

  divWalkTime.append(inputWalkTime);
  divWalkTime.append(imgWalkTime);
  divWalkTime.append(divMenuWalkTime);
  divMenuWalkTime.append(li1);
  divMenuWalkTime.append(li2);
  divMenuWalkTime.append(li3);
  divMenuWalkTime.append(li4);

  divPrice.append(pMin);
  divPrice.append(pMax);
  clear.append(clearTitle);
  clear.append(clearBtn);
  footerFun(document.body);

  //**********FILTER******************************

  let selectedBox = boxAccomodation;
  function activeBox(div: HTMLElement) {
    if (!div.classList.contains("typeBoxN")) return;
    selectedBox.classList.remove("ActivTypeBoxN");
    selectedBox = div;
    selectedBox.classList.add("ActivTypeBoxN");
  }

  const obj = {
    type: selectedBox.id,
    animal: inputPetBox.value,
    city: inputAddressBox.value,
    dateFrom: inputDeadlineBox1.value,
    dateTo: inputDeadlineBox2.value,
    priceMin: rangeBoxs[0].value,
    priceMax: rangeBoxs[1].value,
    hours: inputWalkTime.value,
  };

  if (firstVal.type) {
    switch (firstVal.type) {
      case "Accomodation":
        obj.type = "hotel";
        break;
      case "Walk":
        obj.type = "walking";
        walkTime.style.display = "block";
        break;
      case "Home visits":
        obj.type = "homevisits";
        break;
    }
    const a = document.getElementById(`${obj.type}`);
    if (a) activeBox(a);
    //if (firstVal.type === 'walking') walkTime.style.display = "block";
  }
  if (firstVal.date) {
    obj.dateFrom = firstVal.date;
    inputDeadlineBox1.value = firstVal.date;
    inputDeadlineBox2.value = firstVal.date;
  }
  if (firstVal.city) {
    obj.city = firstVal.city;
    inputAddressBox.value = firstVal.city;
  }
  if (firstVal.pet) {
    obj.animal = firstVal.pet;
    inputPetBox.value = firstVal.pet;
  }

  const petsittersItems = await getPetsitters();
  const petsit = petsittersItems.item;
  createSortItem(blockPetsitters, await filterItem(petsit, obj), obj.hours);

  divPetBox.addEventListener("click", async (event) => {
    if (event.target && event.target instanceof HTMLElement) {
      const target = event.target;
      if (target.tagName == "LI") {
        inputPetBox.value = target.innerHTML;
        //inputPetBox.setAttribute("animal", target.className);
        obj.animal = target.innerHTML; //target.className;
      }
    }
    createSortItem(blockPetsitters, await filterItem(petsit, obj), obj.hours);
  });

  divWalkTime.addEventListener("click", async (event) => {
    if (event.target && event.target instanceof HTMLElement) {
      const target = event.target;
      if (target.tagName == "LI") {
        inputWalkTime.value = target.innerHTML;
        obj.hours = inputWalkTime.value;
      }
    }
    createSortItem(blockPetsitters, await filterItem(petsit, obj), obj.hours);
  });

  const sliders1 = rangeBox.getElementsByTagName("input");
  for (let j = 0; j < sliders1.length; j++) {
    if (sliders1[j].type === "range") {
      sliders1[j].oninput = getVals;
    }
    createSortItem(blockPetsitters, await filterItem(petsit, obj), obj.hours);
  }

  blockFilter.addEventListener("click", async (event) => {
    if (event.target && event.target instanceof HTMLElement) {
      const tag = event.target;
      if (tag.classList.contains("Walk")) {
        walkTime.style.display = "block";
      } else if (
        tag.classList.contains("HomeVisits") ||
        tag.classList.contains("Accomodation")
      ) {
        walkTime.style.display = "none";
      }
      if (tag.classList.contains("ActivTypeBoxN")) return;
      activeBox(tag);
      obj.type = selectedBox.id;
    }
    createSortItem(blockPetsitters, await filterItem(petsit, obj), obj.hours);
  });

  clearBtn.addEventListener("click", async () => {
    activeBox(boxAccomodation);
    inputDeadlineBox2.value = currentDay();
    inputDeadlineBox1.value = currentDay();
    inputAddressBox.value = "";
    inputPetBox.value = "";
    rangeBoxs[0].value = String(0);
    rangeBoxs[1].value = String(200);
    pMin.innerHTML = String(0);
    pMax.innerHTML = String(200);

    obj.type = selectedBox.id;
    obj.animal = "";
    obj.city = inputAddressBox.value;
    obj.dateFrom = inputDeadlineBox1.value;
    obj.dateTo = inputDeadlineBox2.value;
    obj.priceMin = rangeBoxs[0].value;
    obj.priceMax = rangeBoxs[1].value;
    obj.hours = inputWalkTime.value;
    createSortItem(blockPetsitters, await filterItem(petsit, obj), obj.hours);
  });

  blockFilter.addEventListener("change", async () => {
    obj.city = inputAddressBox.value;
    obj.dateFrom = inputDeadlineBox1.value;
    obj.dateTo = inputDeadlineBox2.value;
    obj.priceMin = rangeBoxs[0].value;
    obj.priceMax = rangeBoxs[1].value;
    createSortItem(blockPetsitters, await filterItem(petsit, obj), obj.hours);
  });

  /*const itemsBtn = document.getElementsByClassName("btnSearchCart"); // обработчик перенесен в SortItem!
  for (let i = 0; i < itemsBtn.length; i++) {
    itemsBtn[i].addEventListener("click", () => {  console.log("obj=", obj);
      console.log(".....", itemsBtn[i].id); //переход на страницу петситтера

      history.pushState("", "", `/petsitter/n/${itemsBtn[i].id}`);
      window.dispatchEvent(new Event("popstate"));
    });
  }*/
  return document.body;
}
