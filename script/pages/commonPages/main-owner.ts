import { createHtmlElement } from "../../utils";
import { headerOwner } from "../pageComponents/headers";

export function mainOwner(): void {
  headerOwner(document.body);

  const banner = createHtmlElement("section", "wrapper");
  const bannerLeft = createHtmlElement("div", "leftText");
  const bannerTitle = createHtmlElement("h1", "title"); //Leave your dog or cat in good hands and go on vacation in peace! We have the best pet sitters in town!
  bannerTitle.innerHTML =
    "Leave your dog or cat in good hands and go on vacation in peace! We have the best pet sitters in town!";
  const bannerText = createHtmlElement("p", "text"); //Petsy gives you the freedom to choose. Here you will find real enthusiasts who will take care of your pet the way you want.
  bannerText.innerHTML =
    "Petsy gives you the freedom to choose. Here you will find real enthusiasts who will take care of your pet the way you want.";
  const bannerRight = createHtmlElement("div", "rightImg");
  const bannerImg = createHtmlElement("div", "imgDiv");
  const img1 = new Image();
  img1.src =
    "https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fhero.jpg&w=1920&q=75";

  const filter = createHtmlElement("div", "wrapper filter");

  const section2 = createHtmlElement("section", "wrapper");
  const section2Title = createHtmlElement("h2");
  section2Title.innerHTML = "The best petsitters for your pets";
  const section2box = createHtmlElement("div");
  const section2Left = createHtmlElement("div");
  const section2Right = createHtmlElement("div");

  const section3 = createHtmlElement("section", "wrapper");

  const section4 = createHtmlElement("section", "wrapper");

  const section5 = createHtmlElement("section", "wrapper");

  const section6 = createHtmlElement("section", "wrapper");

  const section7 = createHtmlElement("section", "wrapper");

  //document.body.append(header1);
  document.body.append(banner);
  document.body.append(filter);
  document.body.append(section2);
  document.body.append(section3);
  document.body.append(section4);
  document.body.append(section5);
  document.body.append(section6);
  document.body.append(section7);

  banner.append(bannerLeft);
  banner.append(bannerRight);
  bannerLeft.append(bannerTitle);
  bannerLeft.append(bannerText);
  bannerRight.append(bannerImg);
  bannerImg.append(img1);

  section2.append(section2Title);
  section2.append(section2box);
  section2box.append(section2Left);
  section2box.append(section2Right);
}
