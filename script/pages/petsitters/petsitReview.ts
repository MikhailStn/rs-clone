import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUser } from "../../commonFunction/getUser";


const sectionPetsitReview = createHtmlElement(
  "section",
  "section-petsit-review"
);

export type Review = [string, string, number];

async function renderPetsitReview(){
    sectionPetsitReview.innerHTML = "";
    const user = await getUser();
  const userInfo = user.item;
  console.log(userInfo);
  const sectionPetsitReviewBlock = createHtmlElement(
    "div",
    "section-petsit-review-block"
  );
  sectionPetsitReview.append(sectionPetsitReviewBlock);
  const sectionOrdersTitle = createHtmlElement(
    "h1",
    "title-section-review",
    "",
    "My review"
  );
  sectionPetsitReviewBlock.append(sectionOrdersTitle);
  const reviewItemsWrapper = createHtmlElement("div", "orders-review-wrapper");

  const userReview: [] = userInfo.petsitterData.reviews;
  if (userReview.length === 0) {
    reviewItemsWrapper.innerHTML = "";
    const noReviewText = createHtmlElement(
      "div",
      "no-pets-text",
      "",
      "No review added"
    );
    reviewItemsWrapper.append(noReviewText);
  } else {
    reviewItemsWrapper.innerHTML = "";
    userReview.forEach(async(elem: Review) => {
      const itemReview = await createItemReview(elem);
      reviewItemsWrapper.append(itemReview);
    });
  }
  sectionPetsitReviewBlock.append(reviewItemsWrapper);

}

export async function createItemReview(review:Review){
    const itemReviewWrapper = createHtmlElement('div', 'item-review-wrapper');
    const blockNameRating = createHtmlElement('div','block-rating-name-review');
    const nameReview = createHtmlElement('h3', 'name-of-reviewer', '', review[0]);
    const rate = review[2];
    const starBlock = createHtmlElement("div", "star-block-item-order rating");
    const istar1 = createHtmlElement("i", "rating-star far fa-star");
    istar1.dataset.star = "0";
    const istar2 = createHtmlElement("i", "rating-star far fa-star");
    istar2.dataset.star = "1";
    const istar3 = createHtmlElement("i", "rating-star far fa-star");
    istar3.dataset.star = "2";
    const istar4 = createHtmlElement("i", "rating-star far fa-star");
    istar4.dataset.star = "3";
    const istar5 = createHtmlElement("i", "rating-star far fa-star");
    istar5.dataset.star = "4";
    starBlock.append(istar1, istar2, istar3, istar4, istar5);
    const ratingStars = [...starBlock.getElementsByClassName("rating-star")];
    for(let i = 0; i< rate; i++){
        ratingStars[i].className = "rating-star fas fa-star";
    }
    blockNameRating.append(nameReview, starBlock);
    const blockTextReview = createHtmlElement('div', 'block-text-review','', review[1] );
    itemReviewWrapper.append(blockNameRating, blockTextReview);
    return itemReviewWrapper;
}

export default async function petsitterReview() {
    document.body.innerHTML = "";
    await headerPetsitter(document.body);
    renderPetsitReview();
    document.body.append(sectionPetsitReview);
    footerFun(document.body);
    return document.body;
  }