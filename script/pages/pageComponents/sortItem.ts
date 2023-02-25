import { createHtmlElement } from "../../utils";
import { IPetsitters1 } from "../../utils/interface";

export async function createSortItem(
  tagParent: HTMLElement,
  mas: IPetsitters1[],
  hour: string
) {
  tagParent.innerHTML = "";
  let x = 1;
  const hours = String(hour.match(/\d/g)?.join(""));
  switch (hours) {
    case "30":
      x = 1;
      break;
    case "1":
      x = 2;
      break;
    case "15":
      x = 3;
      break;
    case "2":
      x = 4;
      break;
  }

  for (let i = 0; i < mas.length; i++) {
    const container = createHtmlElement("div", "containerSearchCart");
    const fotoBox = createHtmlElement("div", "fotoSearchCart");
    const foto = new Image();
    if (mas[i].avatarPath) {
      foto.src = `${mas[i].avatarPath}`;
    } else {
      foto.src = `./img/icons/photo.png`;
      if (mas[i].petsitterData.gender === "Male") {
        foto.src = "img/images/manDog.jpg";
        foto.style.background = "#ffffff";
      } else {
        foto.src = "img/images/dogHaveFive.jpg";
      }
      foto.setAttribute("class", "noPhoto");
      foto.setAttribute("style", "border-radius:50%")
    }
    const descriptionBlock = createHtmlElement("div", "descriptionSearchCart");
    const priceBlock = createHtmlElement("div", "priceSearchCart");

    const name = createHtmlElement(
      "p",
      "",
      "",
      `${i + 1}. ${mas[i].firstName}`
    );
    const city = createHtmlElement("p", "", "", `${mas[i].city}`);
    const stars = createHtmlElement("p", "starsSearchCart");
    if (mas[i].petsitterData.rate) {
      stars.innerHTML = "★".repeat(+mas[i].petsitterData.rate);
    } else {
      stars.innerHTML = "no ratings";
    }

    const level = createHtmlElement(
      "p",
      "",
      "",
      `${mas[i].petsitterData.level}`
    );
    const price1 = createHtmlElement(
      "p",
      "priceSearchCart",
      "",
      `${mas[i].petsitterData.services.hotel.price} p.`
    );
    if (mas[i].petsitterData.services.hotel.active == "true") {
      price1.innerHTML = `${mas[i].petsitterData.services.hotel.price} p.`;
    } else {
      price1.innerHTML = "-";
    }
    const price2 = createHtmlElement("p", "priceSearchCart");
    if (mas[i].petsitterData.services.walking.active == "true") {
      price2.innerHTML = `${
        +mas[i].petsitterData.services.walking.price * x
      } p.`;
    } else price2.innerHTML = "-";
    const price3 = createHtmlElement("p", "priceSearchCart"); //
    if (mas[i].petsitterData.services.homevisits.active == "true") {
      price3.innerHTML = `${mas[i].petsitterData.services.homevisits.price} p.`;
    } else price3.innerHTML = "-";
    const type = createHtmlElement("div", "typeSearchCart");
    for (let j = 0; j < mas[i].petsitterData.services.servicesArr.length; j++) {
      const typeN = createHtmlElement(
        "p",
        "typeOfService",
        "",
        `${mas[i].petsitterData.services.servicesArr[j]}`
      );
      type.append(typeN);
    }
    let description = createHtmlElement("p", "");
    if (mas[i].petsitterData.aboutMe) {
      description.innerHTML = `${mas[i].petsitterData.aboutMe}`;
    } else description = createHtmlElement("p", "", "", "");

    const btn = createHtmlElement(
      "button",
      "btnSearchCart rectangle",
      `${mas[i]._id}`,
      `meet me`
    );
    btn.addEventListener("click", () => {
      const id = btn.id;
      history.pushState("", "", `/petsitter/n/${id}`);
      window.dispatchEvent(new Event("popstate"));
    });

    tagParent.append(container);
    container.append(fotoBox);
    container.append(descriptionBlock);
    container.append(priceBlock);
    fotoBox.append(foto);
    descriptionBlock.append(name);
    descriptionBlock.append(city);
    descriptionBlock.append(stars);
    descriptionBlock.append(level);
    descriptionBlock.append(type);
    descriptionBlock.append(description);
    priceBlock.append(price1);
    priceBlock.append(price2);
    priceBlock.append(price3);
    priceBlock.append(btn);
  }
  return tagParent;
}
