import { createHtmlElement } from "../../utils";
import { headerOwner, header } from "../pageComponents/headers";
import { petsitArrForReview } from "../../utils/petsitArrayFor";
import { footerFun } from "../pageComponents/footer";
import { filterHow } from "../pageComponents/filter";

export function mainOwner(): void {
  document.body.innerHTML = "";

  if (!localStorage.getItem("curr-user-id")) {
    header(document.body);
  } else {
    headerOwner(document.body);
  }

  const banner = createHtmlElement("section", "wrapper wrapper-main-owner");
  const bannerContent = createHtmlElement("div", "content");
  const bannerLeft = createHtmlElement("div", "leftText");
  const bannerTitle = createHtmlElement(
    "h1",
    "title",
    "",
    "Leave your dog or cat in good hands and go on vacation in peace! We have the best pet sitters in town!"
  );
  const bannerText = createHtmlElement(
    "p",
    "text",
    "",
    "Petsi gives you the freedom to choose. Here you will find real enthusiasts who will take care of your pet the way you want."
  );
  const banimgs = createHtmlElement("div", "banImgs");
  const banimg1 = new Image();
  const banimg2 = new Image();
  const banimg3 = new Image();
  banimg1.className = "banImg";
  banimg1.src = "img/images/homeService.jpg";
  banimg2.className = "banImg";
  banimg2.src = "img/images/hotelService.jpg";
  banimg3.className = "banImg";
  banimg3.src = "img/images/walkService.jpg";

  const bannerRight = createHtmlElement("div", "rightImg");
  const bannerImg = createHtmlElement("div", "imgDiv");
  const img1 = new Image();
  img1.src =
    "https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fhero.jpg&w=1920&q=75";

  const section1 = createHtmlElement("section", "wrapper section1");
  const section1Content = createHtmlElement("div", "content");

  filterHow(section1Content);

  const section2 = createHtmlElement("section", "wrapper section2");
  const section2Content = createHtmlElement("div", "content");
  const section2Title = createHtmlElement(
    "h2",
    "",
    "",
    "The best petsitters for your pets"
  );
  const section2Left = createHtmlElement("div", "leftText");
  section2Left.innerHTML = `    <div class="line">
  <div class="svg">

  <img style="width:100%" src="img/home.svg" />
  </div><div class="text">
      <h3>Accommodation for a dog or cat</h3>
      <p>Your pets stay overnight at the petsitter's house. They will be treated like family members in comfortable conditions.</p>
  </div>
</div>
<div class="line">
  <div class="svg">
      <img style="width:100%" src="img/paw.svg" />
  </div>
  <div class="text">
      <h3>Walking the dog</h3>
      <p>Your dog is walking around your neighborhood. Perfect for busy days and for dogs with a lot of energy to use.</p>
  </div>
</div>
<div class="line">
  <div class="svg">
  <img style="width:100%" src="img/user_house.svg" />
  </div>
  <div class="text">
      <h3>Home visits</h3>
      <p>A petsitter comes to your house to keep your pets company, give food, take a break for a walk or clean up the litter box.</p>
  </div>
</div>`;
  const section2Right = createHtmlElement("div", "rightImg find-a-trust");
  section2Right.innerHTML = `<div class="center">
  <div class="line">
      <div class="svg">
      <img style="width:100%" src="img/hand_heart.svg" />
      </div>
      <h3>Find a trusted local pet sitter</h3>
  </div>
  <div class="line">
      <div class="svg">
      <img style="width:100%" src="img/ok.svg" />
      </div>
      <p>Only verified pet sitters</p>
  </div>
  <div class="line">
      <div class="svg">
      <img style="width:100%" src="img/ok.svg" />
      </div>
      <p>We talk to everyone personally</p>
  </div>
  <div class="line">
      <div class="svg">
      <img style="width:100%" src="img/ok.svg" />
      </div>
      <p>Browse verified reviews</p>
  </div>
  <button class="btn rectangle" id="">Browse pet sitters</button>
</div>`;

  const section3 = createHtmlElement("section", "wrapper section3");
  const section3Content = createHtmlElement("div", "content");
  const section3Left = createHtmlElement("div", "rightImg");
  const section3Right = createHtmlElement("div", "leftText");
  section3Left.innerHTML = `<div class="imgDiv">
  <img src="https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fowner_main.jpg&w=1920&q=75" alt="">
</div>`;
  section3Right.innerHTML = `<h2>Go on vacation and we'll take care of your pet</h2>
    <div class="line">
<div class="svg"><svg></svg></div><div class="text">
    <h3>Accommodation for a dog or cat</h3>
    <p>Your pets stay overnight at the petsitter's house. They will be treated like family members in comfortable conditions.</p>
</div>
</div>
<div class="line">
<div class="svg">
    <svg></svg>
</div>
<div class="text">
    <h3>Walking the dog</h3>
    <p>Your dog is walking around your neighborhood. Perfect for busy days and for dogs with a lot of energy to use.</p>
</div>
</div>
<div class="line">
<div class="svg">
    <svg></svg>
</div>
<div class="text">
    <h3>Home visits</h3>
    <p>A petsitter comes to your house to keep your pets company, give food, take a break for a walk or clean up the litter box.</p>
</div>
</div>`;

  const section4 = createHtmlElement("section", "wrapper section4");
  section4.innerHTML = `    <div class="content">
  <div class="leftText">
      <span>PETSI</span>
      <h2 class="title">Overnight with a pet sitter</h2>
      <p class="text">Are you looking for accommodation for your pet? With us you will find a guardian who will take care of him the way you want! She will be with him all day, give him full attention, and at night will hug him and let him into the bed!</p>
      <button class="btn rectangle" id="">Browse pet sitters</button>
  </div>
  <div class="rightImg">
      <div class="imgDiv">
          <img src="https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fowner_accommodation.jpg&w=1920&q=75" alt="">
      </div>
  </div>
</div>`;

  const section5 = createHtmlElement("section", "wrapper section5");
  section5.innerHTML = `    <div class="content">
  <div class="rightImg">
  <div class="imgDiv">
      <img src="https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fowner_walk.jpg&w=1920&q=75" alt="">
  </div>
</div>
  <div class="leftText">
      <span>PETSI</span>
      <h2 class="title">Walk</h2>
      <p class="text">Coming home late from work? Do you have to leave early? Find a guardian who will walk your pet, throw him a ball, comb and scratch behind the ear! Browse profiles and choose the best candidate.</p>
      <button class="btn rectangle" id="">Browse pet sitters</button>
  </div>

</div>`;
  /*
  const section6 = createHtmlElement("section", "wrapper section6");
  const sliderBlock  = createSliderReview();*/
  const section6 = createSliderReview();

  //const section7 = createHtmlElement("section", "wrapper");

  document.body.append(banner);
  document.body.append(section1);
  document.body.append(section2);
  document.body.append(section3);
  document.body.append(section4);
  document.body.append(section5);
  document.body.append(section6);
  //document.body.append(section7);

  banner.append(bannerContent);
  bannerContent.append(bannerLeft);
  bannerContent.append(bannerRight);
  bannerLeft.append(bannerTitle);
  bannerLeft.append(bannerText);
  bannerLeft.append(banimgs);
  banimgs.append(banimg1);
  banimgs.append(banimg2);
  banimgs.append(banimg3);

  bannerRight.append(bannerImg);
  bannerImg.append(img1);

  section1.append(section1Content);

  section2.append(section2Title);
  section2.append(section2Content);
  section2Content.append(section2Left);
  section2Content.append(section2Right);

  section3.append(section3Content);
  section3Content.append(section3Left);
  section3Content.append(section3Right);


  const devDiv = createHtmlElement("div", "developers");
  const detTitle = createHtmlElement("h2", "developers-title");
  const devName = createHtmlElement("p", "developers-name");
  const devName1 = createHtmlElement("p", "developers-name");
  const devName2 = createHtmlElement("p", "developers-name");
  detTitle.textContent = "Developers";
  devName.textContent = "Hannah";
  devName1.textContent = "Mikhail";
  devName2.textContent = "Lisa"
  devDiv.append(devName, devName1, devName2)

  const div = createHtmlElement("div", "developers-container");
  const image1 = createHtmlElement("img", "developers-photo") as HTMLImageElement
  const image2 = createHtmlElement("img", "developers-photo") as HTMLImageElement
  const image3 = createHtmlElement("img", "developers-photo") as HTMLImageElement
  image1.src = 'img/developers/hanna.jpg'
  image2.src = 'img/developers/misha.png'
  image3.src = 'img/developers/lisa.jpg'
  div.append(image1, image2, image3)
  document.body.append(detTitle, devDiv, div)

  footerFun(document.body);

  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      if (buttons[i].innerHTML === "Browse pet sitters") {
        history.pushState("", "", "/search");
        window.dispatchEvent(new Event("popstate"));
      }
    });
  }
}

function createBtnViewProf(id: string) {
  const btnViewProf = createHtmlElement(
    "a",
    "btn-view-profile",
    "",
    "View profile"
  );
  if (btnViewProf instanceof HTMLAnchorElement) {
    btnViewProf.href = `/petsitter/n/${id}`;
  }
  return btnViewProf;
}

function createSliderReview() {
  let index = 0;
  const sliderPetsitContainer = createHtmlElement(
    "section",
    "slider-petsit-container"
  );
  const sliderPetsitWrapper = createHtmlElement("div", "slider-petsit-wrapper");
  sliderPetsitContainer.append(sliderPetsitWrapper);
  const sliderItemWraper = createHtmlElement("div", "slider-item-wrapper");
  sliderPetsitWrapper.append(sliderItemWraper);
  const sliderItem = createSliderPetsitItem(index);
  sliderItemWraper.append(sliderItem);
  setInterval(function () {
    if (index > petsitArrForReview.length - 1) index = 0;
    sliderItemWraper.innerHTML = "";
    const sliderItem = createSliderPetsitItem(index);
    sliderItemWraper.append(sliderItem);
    index += 1;
  }, 4000);
  const paginationBtnPetsitContainer = createHtmlElement(
    "div",
    "pagination-petsit-slider-container"
  );
  sliderPetsitWrapper.append(paginationBtnPetsitContainer);
  const paginationBtnLeftPetsit = createHtmlElement(
    "div",
    "pagination-btn-petsit",
    "",
    "????"
  );
  paginationBtnPetsitContainer.append(paginationBtnLeftPetsit);
  paginationBtnLeftPetsit.addEventListener("click", () => {
    index -= 1;
    if (index < 0) {
      index = petsitArrForReview.length - 1;
    }
    sliderItemWraper.innerHTML = "";
    const sliderItem = createSliderPetsitItem(index);
    sliderItemWraper.append(sliderItem);
  });
  const paginationBtnRightPetsit = createHtmlElement(
    "div",
    "pagination-btn-petsit",
    "",
    "????"
  );
  paginationBtnPetsitContainer.append(paginationBtnRightPetsit);
  paginationBtnRightPetsit.addEventListener("click", () => {
    index += 1;
    if (index > petsitArrForReview.length - 1) index = 0;
    sliderItemWraper.innerHTML = "";
    const sliderItem = createSliderPetsitItem(index);
    sliderItemWraper.append(sliderItem);
  });
  return sliderPetsitContainer;
}

function createSliderPetsitItem(index: number) {
  const sliderItem = createHtmlElement("div", "slider-petsit-item");
  const imgBtnSliderContainer = createHtmlElement(
    "div",
    "img-btn-slider-container"
  );
  sliderItem.append(imgBtnSliderContainer);
  const imgPetsitContainer = createHtmlElement(
    "div",
    "img-slider-item-container"
  );
  const imgPetsitItem = createHtmlElement("img", "img-petsit-slider-item");
  if (imgPetsitItem instanceof HTMLImageElement) {
    imgPetsitItem.src = petsitArrForReview[index].src;
    imgPetsitItem.alt = `Photo of ${petsitArrForReview[index].lastName} ${petsitArrForReview[index].firstName}`;
  }
  imgBtnSliderContainer.append(imgPetsitContainer);
  imgPetsitContainer.append(imgPetsitItem);
  const btnViewProf = createBtnViewProf(petsitArrForReview[index].id);
  imgBtnSliderContainer.append(btnViewProf);
  const textBoxSliderItem = createHtmlElement("div", "text-box-slider-item");
  sliderItem.append(textBoxSliderItem);
  const namePetsitSlider = createHtmlElement(
    "h4",
    "name-petsit-slider",
    "",
    `${petsitArrForReview[index].firstName}`
  );
  textBoxSliderItem.append(namePetsitSlider);
  const rolePetsitSlider = createHtmlElement(
    "div",
    "role-petsit-slider",
    "",
    `${petsitArrForReview[index].role}`
  );
  textBoxSliderItem.append(rolePetsitSlider);
  const starsContainerSlider = createHtmlElement(
    "div",
    "stars-slider-container",
    "",
    "???????????????"
  );
  textBoxSliderItem.append(starsContainerSlider);
  const reviewText = createHtmlElement(
    "div",
    "review-slider-item",
    "",
    `${petsitArrForReview[index].review}`
  );
  textBoxSliderItem.append(reviewText);
  const reviewOwnerText = createHtmlElement(
    "div",
    "review-owner-text",
    "",
    `${petsitArrForReview[index].reviewOwner}`
  );
  textBoxSliderItem.append(reviewOwnerText);
  return sliderItem;
}
