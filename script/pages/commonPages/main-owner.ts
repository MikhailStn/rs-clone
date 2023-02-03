import { createHtmlElement } from "../../utils";
import { headerOwner } from "../pageComponents/headers";
import { reviews } from "../pageComponents/test_otzov";

function slider(tagParent: HTMLElement): void {
  //for(let i=0; i<products.length; i++){

  tagParent.innerHTML = `<div class="content">
  <div class="left">
      <div class="imgSlider">
          <img src="${reviews[0].photo}" alt="">
      </div>
      <button class="rectangle btn">view profile</button>
  </div>
  <div class="right">
      <p class="name">${reviews[0].name}</p>
      <p class="description">${reviews[0].description}</p>
      <p>${"&#9734;".repeat(reviews[0].stars)}</p>
      <p class="text">${reviews[0].text}</p>
      <span class="author">${reviews[0].author}</span>
  </div>
</div>
<div class="arrows">
  <button id="left" class="btn arrow">&larr;</button>
  <button id="right" class="btn arrow">&rarr;</button>
</div>`
//}
}


export function mainOwner(): void {
  headerOwner(document.body);

  const banner = createHtmlElement("section", "wrapper");
  const bannerContent = createHtmlElement("div", "content");
  const bannerLeft = createHtmlElement("div", "leftText");
  const bannerTitle = createHtmlElement("h1", "title", "", "Leave your dog or cat in good hands and go on vacation in peace! We have the best pet sitters in town!");
  const bannerText = createHtmlElement("p", "text", "", "Petsy gives you the freedom to choose. Here you will find real enthusiasts who will take care of your pet the way you want.");
  const bannerRight = createHtmlElement("div", "rightImg");
  const bannerImg = createHtmlElement("div", "imgDiv");
  const img1 = new Image();
  img1.src = "https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fhero.jpg&w=1920&q=75";

  const filter = createHtmlElement("div", "wrapper filter");/*!!!!!*/

  const section2 = createHtmlElement("section", "wrapper section2");
  const section2Content = createHtmlElement("div", "content");
  const section2Title = createHtmlElement("h2", "", "", "The best petsitters for your pets");
  const section2Left = createHtmlElement("div", "leftText");
  section2Left.innerHTML = `    <div class="line">
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
      <h3>home visits</h3>
      <p>A petsitter comes to your house to keep your pets company, give food, take a break for a walk or clean up the litter box.</p>
  </div>
</div>`
  const section2Right = createHtmlElement("div", "rightImg");
  section2Right.innerHTML = `<div class="center">
  <div class="line">
      <div class="svg">
          <svg></svg>
      </div>
      <h3>Find a trusted local pet sitter</h3>
  </div>
  <div class="line">
      <div class="svg">
          <svg></svg>
      </div>
      <p>Only verified pet sitters</p>
  </div>
  <div class="line">
      <div class="svg">
          <svg></svg>
      </div>
      <p>We talk to everyone personally</p>
  </div>
  <div class="line">
      <div class="svg">
          <svg></svg>
      </div>
      <p>Browse verified reviews</p>
  </div>
  <button class="btn rectangle" id="">Browse pet sitters</button>
</div>`

  const section3 = createHtmlElement("section", "wrapper section3");
  const section3Content = createHtmlElement("div", "content");
  const section3Left = createHtmlElement("div", "rightImg");
  const section3Right = createHtmlElement("div", "leftText");
  section3Left.innerHTML = `<div class="imgDiv">
  <img src="https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fowner_main.jpg&w=1920&q=75" alt="">
</div>`;
section3Right.innerHTML =`<h2>Go on vacation and we'll take care of your pet</h2>
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
    <h3>home visits</h3>
    <p>A petsitter comes to your house to keep your pets company, give food, take a break for a walk or clean up the litter box.</p>
</div>
</div>`


  const section4 = createHtmlElement("section", "wrapper section4");
  section4.innerHTML = `    <div class="content">
  <div class="leftText">
      <span>PETS</span>
      <h2 class="title">Overnight with a pet sitter</h2>
      <p class="text">Are you looking for accommodation for your pet? With us you will find a guardian who will take care of him the way you want! She will be with him all day, give him full attention, and at night will hug him and let him into the bed!</p>
      <button class="btn rectangle" id="">Browse pet sitters</button>
  </div>
  <div class="rightImg">
      <div class="imgDiv">
          <img src="https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fowner_accommodation.jpg&w=1920&q=75" alt="">
      </div>
  </div>
</div>`

  const section5 = createHtmlElement("section", "wrapper section5");
  section5.innerHTML = `    <div class="content">
  <div class="rightImg">
  <div class="imgDiv">
      <img src="https://petsy.pl/_next/image/?url=%2Fimages%2Flandings%2Fowner_walk.jpg&w=1920&q=75" alt="">
  </div>
</div>
  <div class="leftText">
      <span>PETS</span>
      <h2 class="title">Walk</h2>
      <p class="text">Coming home late from work? Do you have to leave early? Find a guardian who will walk your pet, throw him a ball, comb and scratch behind the ear! Browse profiles and choose the best candidate.</p>
      <button class="btn rectangle" id="">Browse pet sitters</button>
  </div>

</div>`

  const section6 = createHtmlElement("section", "wrapper section6");
  slider(section6);

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

  banner.append(bannerContent);
  bannerContent.append(bannerLeft);
  bannerContent.append(bannerRight);
  bannerLeft.append(bannerTitle);
  bannerLeft.append(bannerText);
  bannerRight.append(bannerImg);
  bannerImg.append(img1);

  section2.append(section2Title);
  section2.append(section2Content);
  section2Content.append(section2Left);
  section2Content.append(section2Right);

  section3.append(section3Content);
  section3Content.append(section3Left);
  section3Content.append(section3Right);
}
