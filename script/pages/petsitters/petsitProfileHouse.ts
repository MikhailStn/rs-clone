import { createHtmlElement } from "../../utils";
import { getUser } from "../../commonFunction/getUser";
import { createDivInputs } from "../../commonFunction/inputsCreate";

let typeOfHome = "";
let homeConditions: string[] = [];
let tenatsAtHome: string[] = [];
let otherAnimalsArr: string[] = [];

export async function createMyHomeBlock() {
  const user = await getUser();
  const userInfo = user.item;
  const basicHomeBlock = createHtmlElement("div", "basic-info-block");
  const myHomeBlockTitle = createHtmlElement(
    "h3",
    "title-photo-profile-block",
    "",
    "Address where you provide services"
  );
  basicHomeBlock.append(myHomeBlockTitle);
  const addressUser = createHtmlElement(
    "div",
    "text-service",
    "",
    `${userInfo.city}`
  );
  basicHomeBlock.append(addressUser);
  const titleHome = createHtmlElement(
    "h3",
    "title-photo-profile-block",
    "",
    "About my house"
  );
  basicHomeBlock.append(titleHome);
  const textHome1 = createHtmlElement(
    "div",
    "text-service",
    "",
    "Describe what conditions your pets will find in your home and what the rules are."
  );
  basicHomeBlock.append(textHome1);

  const whereLiveField = createHtmlElement(
    "fieldset",
    "additional-qualification-block fieldset-my-home where-live-fieldset"
  );
  basicHomeBlock.append(whereLiveField);
  const legendWhereLive = createHtmlElement(
    "legend",
    "legend-my-home",
    "",
    "Where you live"
  );
  const divInput1 = createHtmlElement("div", "div-input-where-live");
  const divInput2 = createHtmlElement("div", "div-input-where-live");
  const divInput3 = createHtmlElement("div", "div-input-where-live");
  const divInput4 = createHtmlElement("div", "div-input-where-live");
  const divInput5 = createHtmlElement("div", "div-input-where-live");
  whereLiveField.append(
    legendWhereLive,
    divInput1,
    divInput2,
    divInput3,
    divInput4,
    divInput5
  );

  const inputWhereLive1 = createHtmlElement(
    "input",
    "",
    "apartment-in-a-block-house"
  ) as HTMLInputElement;
  inputWhereLive1.type = "radio";
  inputWhereLive1.name = "view-house";
  inputWhereLive1.value = "Apartment in a block/house";
  inputWhereLive1.addEventListener("click", () => {
    typeOfHome = "Apartment in a block/house";
  });
  const lableInputLive1 = createHtmlElement(
    "label",
    "",
    "",
    "Apartment in a block/house"
  ) as HTMLLabelElement;
  lableInputLive1.setAttribute("for", "apartment-in-a-block-house");
  divInput1.append(inputWhereLive1, lableInputLive1);
  const inputWhereLive2 = createHtmlElement(
    "input",
    "",
    "apartment-with-garden"
  ) as HTMLInputElement;
  inputWhereLive2.type = "radio";
  inputWhereLive2.name = "view-house";
  inputWhereLive2.value = "Apartment with garden (first floor)";
  inputWhereLive2.addEventListener("click", () => {
    typeOfHome = "Apartment with garden (first floor)";
  });
  const lableInputLive2 = createHtmlElement(
    "label",
    "",
    "",
    "Apartment with garden (first floor)"
  ) as HTMLLabelElement;
  lableInputLive2.setAttribute("for", "apartment-with-garden");
  divInput2.append(inputWhereLive2, lableInputLive2);
  const inputWhereLive3 = createHtmlElement(
    "input",
    "",
    "house-with-garden"
  ) as HTMLInputElement;
  inputWhereLive3.type = "radio";
  inputWhereLive3.name = "view-house";
  inputWhereLive3.value = "House with garden";
  inputWhereLive3.addEventListener("click", () => {
    typeOfHome = "House with garden";
  });
  const lableInputLive3 = createHtmlElement(
    "label",
    "",
    "",
    "House with garden"
  ) as HTMLLabelElement;
  lableInputLive3.setAttribute("for", "house-with-garden");
  divInput3.append(inputWhereLive3, lableInputLive3);
  const inputWhereLive4 = createHtmlElement(
    "input",
    "",
    "apartment-with-balcony"
  ) as HTMLInputElement;
  inputWhereLive4.type = "radio";
  inputWhereLive4.name = "view-house";
  inputWhereLive4.value = "Apartment with balcony";
  inputWhereLive4.addEventListener("click", () => {
    typeOfHome = "Apartment with balcony";
  });
  const lableInputLive4 = createHtmlElement(
    "label",
    "",
    "",
    "Apartment with balcony"
  ) as HTMLLabelElement;
  lableInputLive4.setAttribute("for", "apartment-with-balcony");
  divInput4.append(inputWhereLive4, lableInputLive4);
  const inputWhereLive5 = createHtmlElement(
    "input",
    "",
    "house"
  ) as HTMLInputElement;
  inputWhereLive5.type = "radio";
  inputWhereLive5.name = "view-house";
  inputWhereLive5.value = "House";
  inputWhereLive5.addEventListener("click", () => {
    typeOfHome = "House";
  });
  const lableInputLive5 = createHtmlElement(
    "label",
    "",
    "",
    "House"
  ) as HTMLLabelElement;
  lableInputLive5.setAttribute("for", "house");
  divInput5.append(inputWhereLive5, lableInputLive5);

  const secondBlockInputs = createHtmlElement(
    "div",
    "second-block-inputs-home"
  );
  basicHomeBlock.append(secondBlockInputs);

  const fieldsetConditions = createHtmlElement(
    "fieldset",
    "additional-qualification-block fieldset-my-home fieldset-condition-my-home"
  );
  secondBlockInputs.append(fieldsetConditions);
  const legendConditions = createHtmlElement(
    "legend",
    "legend-my-home",
    "",
    "Conditions in my home"
  );
  fieldsetConditions.append(legendConditions);
  const inputDiv1 = createDivInputs(
    "checkbox",
    "animals-can-sleep-in-the-bed",
    "Animals can sleep in the bed",
    "Animals can sleep in the bed",
    "div-conditions-my-home"
  ) as HTMLInputElement;
  inputDiv1.addEventListener("input", () => {
    if (!inputDiv1.checked) {
      homeConditions.push("animals-can-sleep-in-the-bed");
      inputDiv1.checked = true;
    } else if (inputDiv1.checked) {
      const ind = homeConditions.indexOf("animals-can-sleep-in-the-bed");
      homeConditions.splice(ind, 1);
      inputDiv1.checked = false;
    }
  });
  const inputDiv2 = createDivInputs(
    "checkbox",
    "windows-protected-by-mesh",
    "Windows protected by mesh",
    "Windows protected by mesh",
    "div-conditions-my-home"
  ) as HTMLInputElement;
  inputDiv2.addEventListener("input", () => {
    if (!inputDiv2.checked) {
      homeConditions.push("windows-protected-by-mesh");
      inputDiv2.checked = true;
    } else if (inputDiv2.checked) {
      const ind = homeConditions.indexOf("windows-protected-by-mesh");
      homeConditions.splice(ind, 1);
      inputDiv2.checked = false;
    }
  });
  const inputDiv3 = createDivInputs(
    "checkbox",
    "balcony-secured-with-netting",
    "Balcony secured with netting",
    "Balcony secured with netting",
    "div-conditions-my-home"
  ) as HTMLInputElement;
  inputDiv3.addEventListener("input", () => {
    if (!inputDiv3.checked) {
      homeConditions.push("balcony-secured-with-netting");
      inputDiv3.checked = true;
    } else if (inputDiv3.checked) {
      const ind = homeConditions.indexOf("balcony-secured-with-netting");
      homeConditions.splice(ind, 1);
      inputDiv3.checked = false;
    }
  });
  const inputDiv4 = createDivInputs(
    "checkbox",
    "no-plants-toxic-to-animals-in-the-house",
    "No plants toxic to animals in the house",
    "No plants toxic to animals in the house",
    "div-conditions-my-home"
  ) as HTMLInputElement;
  inputDiv4.addEventListener("input", () => {
    if (!inputDiv4.checked) {
      homeConditions.push("no-plants-toxic-to-animals-in-the-house");
      inputDiv4.checked = true;
    } else if (inputDiv4.checked) {
      const ind = homeConditions.indexOf(
        "no-plants-toxic-to-animals-in-the-house"
      );
      homeConditions.splice(ind, 1);
      inputDiv4.checked = false;
    }
  });
  const inputDiv5 = createDivInputs(
    "checkbox",
    "the-apartment-has-a-playpen",
    "The apartment has a playpen",
    "The apartment has a playpen",
    "div-conditions-my-home"
  ) as HTMLInputElement;
  inputDiv5.addEventListener("input", () => {
    if (!inputDiv5.checked) {
      homeConditions.push("the-apartment-has-a-playpen");
      inputDiv5.checked = true;
    } else if (inputDiv5.checked) {
      const ind = homeConditions.indexOf("the-apartment-has-a-playpen");
      homeConditions.splice(ind, 1);
      inputDiv5.checked = false;
    }
  });
  const inputDiv6 = createDivInputs(
    "checkbox",
    "the-building-has-an-elevator",
    "The building has an elevator",
    "The building has an elevator",
    "div-conditions-my-home"
  ) as HTMLInputElement;
  inputDiv6.addEventListener("input", () => {
    if (!inputDiv6.checked) {
      homeConditions.push("the-building-has-an-elevator");
      inputDiv6.checked = true;
    } else if (inputDiv6.checked) {
      const ind = homeConditions.indexOf("the-building-has-an-elevator");
      homeConditions.splice(ind, 1);
      inputDiv6.checked = false;
    }
  });
  const inputDiv7 = createDivInputs(
    "checkbox",
    "no-smoking-inside",
    "No smoking inside",
    "No smoking inside",
    "div-conditions-my-home"
  ) as HTMLInputElement;
  inputDiv7.addEventListener("input", () => {
    if (!inputDiv7.checked) {
      homeConditions.push("no-smoking-inside");
      inputDiv7.checked = true;
    } else if (inputDiv7.checked) {
      const ind = homeConditions.indexOf("no-smoking-inside");
      homeConditions.splice(ind, 1);
      inputDiv7.checked = false;
    }
  });
  const inputDiv8 = createDivInputs(
    "checkbox",
    "animals-can-climb-on-the-furniture",
    "Animals can climb on the furniture (couches, armchairs, etc.).",
    "Animals can climb on the furniture (couches, armchairs, etc.).",
    "div-conditions-my-home"
  ) as HTMLInputElement;
  inputDiv8.addEventListener("input", () => {
    if (!inputDiv8.checked) {
      homeConditions.push("animals-can-climb-on-the-furniture");
      inputDiv8.checked = true;
    } else if (inputDiv8.checked) {
      const ind = homeConditions.indexOf("animals-can-climb-on-the-furniture");
      homeConditions.splice(ind, 1);
      inputDiv8.checked = false;
    }
  });

  fieldsetConditions.append(
    inputDiv1,
    inputDiv2,
    inputDiv3,
    inputDiv4,
    inputDiv5,
    inputDiv6,
    inputDiv7,
    inputDiv8
  );

  const secondBlockInSecondBlockInputs = createHtmlElement(
    "div",
    "second-block-in-second-block-inputs"
  );
  secondBlockInputs.append(secondBlockInSecondBlockInputs);
  const fieldsetConditions2 = createHtmlElement(
    "fieldset",
    "additional-qualification-block fieldset-my-home fieldset-second-second-block"
  );
  secondBlockInSecondBlockInputs.append(fieldsetConditions2);
  const legendConditions2 = createHtmlElement(
    "legend",
    "legend-my-home",
    "",
    "Other tenants"
  );
  const inputD1 = createDivInputs(
    "checkbox",
    "children-live-in-the-house",
    "Children live in the house",
    "Children live in the house",
    "div-my-home"
  ) as HTMLInputElement;
  inputD1.addEventListener("input", () => {
    if (!inputD1.checked) {
      tenatsAtHome.push("children-live-in-the-house");
      inputD1.checked = true;
    } else if (inputD1.checked) {
      const ind = tenatsAtHome.indexOf("children-live-in-the-house");
      tenatsAtHome.splice(ind, 1);
      inputD1.checked = false;
    }
  });
  const inputD2 = createDivInputs(
    "checkbox",
    "there-are-elderly-people-living-in-the-house",
    "There are elderly people living in the house",
    "There are elderly people living in the house",
    "div-my-home"
  ) as HTMLInputElement;
  inputD2.addEventListener("input", () => {
    if (!inputD2.checked) {
      tenatsAtHome.push("there-are-elderly-people-living-in-the-house");
      inputD2.checked = true;
    } else if (inputD2.checked) {
      const ind = tenatsAtHome.indexOf(
        "there-are-elderly-people-living-in-the-house"
      );
      tenatsAtHome.splice(ind, 1);
      inputD2.checked = false;
    }
  });
  const inputD3 = createDivInputs(
    "checkbox",
    "women-live-in-the-house",
    "Women live in the house",
    "Women live in the house",
    "div-my-home"
  ) as HTMLInputElement;
  inputD3.addEventListener("input", () => {
    if (!inputD3.checked) {
      tenatsAtHome.push("women-live-in-the-house");
      inputD3.checked = true;
    } else if (inputD3.checked) {
      const ind = tenatsAtHome.indexOf("women-live-in-the-house");
      tenatsAtHome.splice(ind, 1);
      inputD3.checked = false;
    }
  });
  const inputD4 = createDivInputs(
    "checkbox",
    "men-live-in-the-house",
    "Men live in the house",
    "Men live in the house",
    "div-my-home"
  ) as HTMLInputElement;
  inputD4.addEventListener("input", () => {
    if (!inputD4.checked) {
      tenatsAtHome.push("men-live-in-the-house");
      inputD4.checked = true;
    } else if (inputD4.checked) {
      const ind = tenatsAtHome.indexOf("men-live-in-the-house");
      tenatsAtHome.splice(ind, 1);
      inputD4.checked = false;
    }
  });
  fieldsetConditions2.append(
    legendConditions2,
    inputD1,
    inputD2,
    inputD3,
    inputD4
  );

  const fieldsetConditions3 = createHtmlElement(
    "fieldset",
    "additional-qualification-block fieldset-my-home fieldset-second-second-block"
  );
  secondBlockInSecondBlockInputs.append(fieldsetConditions3);
  const legendConditions3 = createHtmlElement(
    "legend",
    "legend-my-home",
    "",
    "Other animals"
  );
  const inputDi1 = createDivInputs(
    "checkbox",
    "i-own-a-dog",
    "I own a dog/dogs",
    "I own a dog/dogs",
    "div-my-home"
  ) as HTMLInputElement;
  inputDi1.addEventListener("input", () => {
    if (!inputDi1.checked) {
      otherAnimalsArr.push("i-own-a-dog");
      inputDi1.checked = true;
    } else if (inputDi1.checked) {
      const ind = otherAnimalsArr.indexOf("i-own-a-dog");
      otherAnimalsArr.splice(ind, 1);
      inputDi1.checked = false;
    }
  });
  const inputDi2 = createDivInputs(
    "checkbox",
    "i-am-settling-a-cat",
    "I am settling a cat/cats",
    "I am settling a cat/cats",
    "div-my-home"
  ) as HTMLInputElement;
  inputDi2.addEventListener("input", () => {
    if (!inputDi2.checked) {
      otherAnimalsArr.push("i-am-settling-a-cat");
      inputDi2.checked = true;
    } else if (inputDi2.checked) {
      const ind = otherAnimalsArr.indexOf("i-am-settling-a-cat");
      otherAnimalsArr.splice(ind, 1);
      inputDi2.checked = false;
    }
  });
  const inputDi3 = createDivInputs(
    "checkbox",
    "i-own-a-rodent(s)",
    "I own a rodent(s)",
    "I own a rodent(s)",
    "div-my-home"
  ) as HTMLInputElement;
  inputDi3.addEventListener("input", () => {
    if (!inputDi3.checked) {
      otherAnimalsArr.push("i-own-a-rodent(s)");
      inputDi3.checked = true;
    } else if (inputDi3.checked) {
      const ind = otherAnimalsArr.indexOf("i-own-a-rodent(s)");
      otherAnimalsArr.splice(ind, 1);
      inputDi3.checked = false;
    }
  });
  const inputDi4 = createDivInputs(
    "checkbox",
    "i-own-a-fish",
    "I own a fish",
    "I own a fish",
    "div-my-home"
  ) as HTMLInputElement;
  inputDi4.addEventListener("input", () => {
    if (!inputDi4.checked) {
      otherAnimalsArr.push("i-own-a-fish");
      inputDi4.checked = true;
    } else if (inputDi4.checked) {
      const ind = otherAnimalsArr.indexOf("i-own-a-fish");
      otherAnimalsArr.splice(ind, 1);
      inputDi4.checked = false;
    }
  });
  const inputDi5 = createDivInputs(
    "checkbox",
    "i-own-a-bird",
    "I own a bird(s)",
    "I own a bird(s)",
    "div-my-home"
  ) as HTMLInputElement;
  inputDi5.addEventListener("input", () => {
    if (!inputDi5.checked) {
      otherAnimalsArr.push("i-own-a-bird");
      inputDi5.checked = true;
    } else if (inputDi5.checked) {
      const ind = otherAnimalsArr.indexOf("i-own-a-bird");
      otherAnimalsArr.splice(ind, 1);
      inputDi5.checked = true;
    }
  });
  fieldsetConditions3.append(
    legendConditions3,
    inputDi1,
    inputDi2,
    inputDi3,
    inputDi4,
    inputDi5
  );

  const btnSaveMyHome = createHtmlElement(
    "button",
    "btn-save-my-home",
    "btn-save-my-home",
    "Save"
  );
  btnSaveMyHome.addEventListener("click", () => {
    const fecthData = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        _id: localStorage.getItem("curr-user-id"),
        typeOfHome: typeOfHome,
        homeConditions: homeConditions,
        tenatsAtHome: tenatsAtHome,
        otherAnimals: otherAnimalsArr,
      }),
    };
    fetch(`http://localhost:5000/petsitter/add-data`, fecthData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const div = document.querySelector(".fieldset-condition-my-home");
        const p = createHtmlElement("p", "comment-saved-settings");
        p.textContent = "Settings saved";
        p.setAttribute("style", "margin-top:350px");
        div?.append(p);
        setTimeout(() => {
          div?.removeChild(p);
        }, 2000);
      });
  });
  const fetchData1 = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      _id: localStorage.getItem("curr-user-id"),
    }),
  };
  fetch(`http://localhost:5000/auth/user`, fetchData1)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.petsitterData.typeOfHome == "Apartment in a block/house") {
        inputWhereLive1.checked = true;
      } else if (
        data.petsitterData.typeOfHome == "Apartment with garden (first floor)"
      ) {
        inputWhereLive2.checked = true;
      } else if (data.petsitterData.typeOfHome == "House with garden") {
        inputWhereLive3.checked = true;
      } else if (data.petsitterData.typeOfHome == "Apartment with balcony") {
        inputWhereLive4.checked = true;
      } else if (data.petsitterData.typeOfHome == "House") {
        inputWhereLive5.checked = true;
      }
      homeConditions = data.petsitterData.homeConditions;
      if (
        data.petsitterData.homeConditions.includes(
          "animals-can-sleep-in-the-bed"
        )
      ) {
        const inp = inputDiv1.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDiv1.checked = true;
      }
      if (
        data.petsitterData.homeConditions.includes("windows-protected-by-mesh")
      ) {
        const inp = inputDiv2.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDiv2.checked = true;
      }
      if (
        data.petsitterData.homeConditions.includes(
          "balcony-secured-with-netting"
        )
      ) {
        const inp = inputDiv3.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDiv3.checked = true;
      }
      if (
        data.petsitterData.homeConditions.includes(
          "no-plants-toxic-to-animals-in-the-house"
        )
      ) {
        const inp = inputDiv4.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDiv4.checked = true;
      }
      if (
        data.petsitterData.homeConditions.includes(
          "the-apartment-has-a-playpen"
        )
      ) {
        const inp = inputDiv5.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDiv5.checked = true;
      }
      if (
        data.petsitterData.homeConditions.includes(
          "the-building-has-an-elevator"
        )
      ) {
        const inp = inputDiv6.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDiv6.checked = true;
      }
      if (data.petsitterData.homeConditions.includes("no-smoking-inside")) {
        const inp = inputDiv7.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDiv7.checked = true;
      }
      if (
        data.petsitterData.homeConditions.includes(
          "animals-can-climb-on-the-furniture"
        )
      ) {
        const inp = inputDiv8.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDiv8.checked = true;
      }
      tenatsAtHome = data.petsitterData.tenatsAtHome;
      if (
        data.petsitterData.tenatsAtHome.includes("children-live-in-the-house")
      ) {
        const inp = inputD1.firstChild as HTMLInputElement;
        inp.checked = true;
        inputD1.checked = true;
      }
      if (
        data.petsitterData.tenatsAtHome.includes(
          "there-are-elderly-people-living-in-the-house"
        )
      ) {
        const inp = inputD2.firstChild as HTMLInputElement;
        inp.checked = true;
        inputD2.checked = true;
      }
      if (data.petsitterData.tenatsAtHome.includes("women-live-in-the-house")) {
        const inp = inputD3.firstChild as HTMLInputElement;
        inp.checked = true;
        inputD3.checked = true;
      }
      if (data.petsitterData.tenatsAtHome.includes("men-live-in-the-house")) {
        const inp = inputD4.firstChild as HTMLInputElement;
        inp.checked = true;
        inputD4.checked = true;
      }
      otherAnimalsArr = data.petsitterData.otherAnimals;
      if (data.petsitterData.otherAnimals.includes("i-own-a-dog")) {
        const inp = inputDi1.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDi1.checked = true;
      }
      if (data.petsitterData.otherAnimals.includes("i-am-settling-a-cat")) {
        const inp = inputDi2.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDi2.checked = true;
      }
      if (data.petsitterData.otherAnimals.includes("i-own-a-rodent(s)")) {
        const inp = inputDi3.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDi3.checked = true;
      }
      if (data.petsitterData.otherAnimals.includes("i-own-a-fish")) {
        const inp = inputDi4.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDi4.checked = true;
      }
      if (data.petsitterData.otherAnimals.includes("i-own-a-bird")) {
        const inp = inputDi5.firstChild as HTMLInputElement;
        inp.checked = true;
        inputDi5.checked = true;
      }
    });
  basicHomeBlock.append(btnSaveMyHome);

  return basicHomeBlock;
}
