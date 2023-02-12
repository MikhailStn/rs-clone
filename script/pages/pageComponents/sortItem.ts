import { createHtmlElement } from "../../utils";
import { IPetsitters } from "../../utils/interface";
//import { mas } from "../../../app/app";

export function createSortItem(tagParent: HTMLElement, mas: IPetsitters[], hour: string): void {
  tagParent.innerHTML = '';
  let x = 1;
  const hours = String(hour.match(/\d/g)?.join(''));
  switch(hours){
    case '30': x = 1;break;
    case '1': x = 2;break;
    case '15': x = 3;break;
    case '2': x = 4;break;
  }

  for (let i = 0; i < mas.length; i++) {
    const container = createHtmlElement("div", "containerSearchCart");//id тут
    const fotoBox = createHtmlElement("div", "fotoSearchCart");
    const foto = new Image();
    foto.src = `${mas[i].photo}`;
    const descriptionBlock = createHtmlElement("div", "descriptionSearchCart");
    const priceBlock = createHtmlElement("div", "priceSearchCart");

    const name = createHtmlElement("p", "", "", `${i + 1}. ${mas[i].name}`);
    const city = createHtmlElement("p", "", "", `${mas[i].city}`);
    const stars = createHtmlElement("p", "starsSearchCart");
    stars.innerHTML = "★".repeat(mas[i].stars);
    const level = createHtmlElement("p", "", "", `${mas[i].level}`);
    const price1 = createHtmlElement("p", "priceSearchCart", "", `${mas[i].price1} p.`);
    const price2 = createHtmlElement("p", "priceSearchCart", "", `${mas[i].price2*x} p.`);//
    const price3 = createHtmlElement("p", "priceSearchCart", "", `${mas[i].price3} p.`);//
    const type = createHtmlElement("div", "typeSearchCart");
    for (let j = 0; j < mas[i].typeOfService.length; j++) {
      const typeN = createHtmlElement("p", "typeOfService", "", `${mas[i].typeOfService[j]}`);
      type.append(typeN);
    }
    const description = createHtmlElement("p", "", "", `${mas[i].description}`);
    const btn = createHtmlElement("button", "btnSearchCart rectangle", `${mas[i].id}`, `meet me`); //кнопка ссылка на ситтера

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
}
