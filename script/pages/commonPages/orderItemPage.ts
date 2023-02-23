import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { createChat } from "./createChat";
import { OrderPreview } from "./ordersPage";
import { getUser } from "../../commonFunction/getUser";
import { getUserFromId } from "../../commonFunction/getUser";

// orders = [{numberOrders: 123456, city:'Minsk', status: 'rejected', service: 'accomodation', period: '1 day', dates: '20 febr - 21 febr', pet: ['cat', 'Masia'], ownerOrPetsitterId: '63eb4b2a8759fea28d255766'}];

const sectionOrderItem = createHtmlElement('section', 'section-order-item');


async function renderOrderItemPage(id: string) { 
    console.log(id);
    const user = await getUser();
    const curUserInfo = (user).item;
    sectionOrderItem.innerHTML = '';
    const sectionItemOrdersBlock = createHtmlElement('div', 'section-item-orders-block');
    sectionOrderItem.append(sectionItemOrdersBlock);
    // Функция поиска заказа по номеру заказа
    fetch(`http://localhost:5000/order/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        numberOfOrder: id,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then(async(data) => {
        console.log(data); // ЗАКАЗ
        const comeBackDiv = createHtmlElement('div', 'come-back-order-div');
        comeBackDiv.innerHTML = '<span>←</span> Return to orders';
        sectionItemOrdersBlock.append(comeBackDiv);
        comeBackDiv.addEventListener('click', ()=>{
          if(curUserInfo.role === "OWNER"){
              history.pushState('','','/owner/orders'); 
              window.dispatchEvent(new Event("popstate"));
           }else{
              history.pushState('','','/petsitter/orders'); 
              window.dispatchEvent(new Event("popstate"));
           }
        });
        const orderItemInfoBlock = createHtmlElement('div', 'order-item-info-block');
        sectionItemOrdersBlock.append(orderItemInfoBlock);
        const blockCommonInfo = await createBlockCommoninfo(data);
        const blockPriceOrder = createHtmlElement('div', 'block-price-order');
        blockPriceOrder.append(await createBlockPriceOrder(data));
        const userBlock = createHtmlElement('div', 'user-info-block-order');
        userBlock.append(await createUserBlock(data));
        const chatBlock = createHtmlElement('div', 'chat-block-order');
        chatBlock.append(createChat(data))
        orderItemInfoBlock.append(blockCommonInfo, blockPriceOrder, userBlock, chatBlock);
    });
}

async function createBlockCommoninfo(data: OrderPreview) {
    const blockCommonInfo = createHtmlElement('div','block-common-info-order');
    const block1 = await createBlockItemInfoOrder('img/iCharacterGrey.svg', `Service type: ${data.service}`);
    const block2 = await createBlockItemInfoOrder('img/calendar2Grey.svg', `Deadline: ${data.dates.join(` - `)}`); 
    const block3 = await createBlockItemInfoOrder('img/geoloc.svg', `${data.city}`); 
    const blockImgPet = createHtmlElement('div', 'block-img-svg-pet-order-item');
    const imgPetSvg = new Image();
    imgPetSvg.className = 'svg-pet-order-info';
    imgPetSvg.src = 'img/paw.svg';
    
    const petText = createHtmlElement('div', 'pet-text-order','',`${data.pet}`);
    blockImgPet.append(imgPetSvg, petText);

    /*const moreInfoPetBlock = createHtmlElement('div', 'more-info-pet-block');
    const nameBtnPetBlock = createHtmlElement('div', 'name-btn-pet-block');
    const namePet = createHtmlElement('div', "name-pet-more-info",'', data.pet); //данные с сервера! поменять когда они будут добавлены в заказ!
    const btnToggleInfo = createHtmlElement('div','btn-toggle-info', '', '⌄');
    nameBtnPetBlock.append(namePet, btnToggleInfo);
    const commonInfoPetBlock = createHtmlElement('div', 'common-info-Pet-block');
    moreInfoPetBlock.append(nameBtnPetBlock, commonInfoPetBlock);*/
    blockCommonInfo.append(block1, block2,block3,blockImgPet);
    return blockCommonInfo;
}

async function createBlockItemInfoOrder(src: string, text: string, className?: string) {
    const blockInfoWrapper = createHtmlElement('div', 'block-info-order-wrapper');
    const blockSvg = new Image();
    blockSvg.src = src;
    blockSvg.className = `block-info-order-svg ${className}`;
    blockInfoWrapper.append(blockSvg);
    const textBlockMenu = createHtmlElement('div', 'text-block-info-order', '', `${text}`);
    blockInfoWrapper.append(textBlockMenu);
    return blockInfoWrapper;
}

async function createBlockPriceOrder(data: OrderPreview) {
  const priceOrderBlockWrapper = createHtmlElement('div', 'price-order-block-wrapper');
  const priceTotal = createHtmlElement('h4', 'price-order-title','','Order price');
  const blockCostModule = createHtmlElement('div', 'block-cost-module');
  const nameServiceInPrice = createHtmlElement('div', 'name-service-in-price','', data.service);
  const pricePerDay = createHtmlElement('div','price-per-day-order');
  const numberOfTotalPrice = createHtmlElement('div', 'number-of-total-price');
  let dayOfService: number;
  if(data.dates.length === 1){
     dayOfService = 1;
     pricePerDay.textContent = `${dayOfService} x ${data.pricePerDay} byn`;
     numberOfTotalPrice.textContent = `${data.pricePerDay} byn`;
  }else{
    const from = new Date(data.dates[0]);
    const to = new Date(data.dates[1]);
    const timeDiff = Math.abs(to.getTime() - from.getTime());
    const diffInDays = Math.ceil((timeDiff) / (1000 * 60 * 60 * 24));
    pricePerDay.textContent = `${diffInDays} x ${data.pricePerDay} byn`;
    const totalPrice = diffInDays * Number(data.pricePerDay);
    numberOfTotalPrice.textContent = `${totalPrice} byn`;
  }
  
  blockCostModule.append(nameServiceInPrice, pricePerDay);
  const blockTotalrice = createHtmlElement('div', 'total-price-order-item-block');
  const totalPriceOrder = createHtmlElement('div', 'total-price-order-item-title', '', 'Total price');
  blockTotalrice.append(totalPriceOrder, numberOfTotalPrice);
  priceOrderBlockWrapper.append(priceTotal, blockCostModule, blockTotalrice);
  return priceOrderBlockWrapper;
  }

async function createUserBlock(data: OrderPreview) {
  const userBlockWrapper = createHtmlElement('div', 'user-block-wrapper');
  const user = await getUser();
  const curUserInfo = (user).item;
  const titleUserInfo = createHtmlElement('h3', 'user-info-title-item-order');
  curUserInfo.role === "OWNER"? titleUserInfo.textContent = "The service will be provided by:" : titleUserInfo.textContent = "Pet owner:";
  userBlockWrapper.append(titleUserInfo);
  const nameUserBlock = createHtmlElement('div', 'name-user-order-info-block');
  userBlockWrapper.append(nameUserBlock);
  if(curUserInfo.role === "OWNER"){
    const petsitId = data.petsitterId;
    const user = await getUserFromId(petsitId);
    const petsitInfo = (user).item;
    console.log('petsitInfo', petsitInfo);
    const petsitPhpotoBlock = createHtmlElement('img', 'img-petsit-order-info-item') as HTMLImageElement;
    if(petsitInfo.avatarPath === '' || petsitInfo.avatarPath === undefined){
      petsitPhpotoBlock.src = 'img/personLogo.svg';
      }else{
        petsitPhpotoBlock.src = petsitInfo.avatarPath;
      }
    const nameOfPetsitter = createHtmlElement('div', 'name-of-petsitter-order-item','', data.nameOfPetsitter);
    nameOfPetsitter.setAttribute("style", "margin-top:-20px")
    const linkViewProfile = createHtmlElement(
      "div",
      "link-view-profile-order",
      "",
      "View profile"
    );
    linkViewProfile.setAttribute("style", "margin-left:60px; margin-top:-40px")
    linkViewProfile.addEventListener('click', ()=>{
              history.pushState('','',`/petsitter/n/${petsitId}`); 
              window.dispatchEvent(new Event("popstate"));
    })
    nameUserBlock.append(petsitPhpotoBlock, nameOfPetsitter);
    const starRateBlock = createHtmlElement('div', 'stars-rate-block');
    const sendReviwBlockTitle = createHtmlElement('div', 'send-review-and-rating', '', 'Here you can evaluate the work of the petsitter and write a review.');
    const starBlock = createHtmlElement('div', 'star-block-item-order rating');
    let mark = 0
    const istar1 = createHtmlElement('i', 'rating-star far fa-star');
    istar1.dataset.star = '0';
    istar1.addEventListener("click", () => {
      mark = 1
    })
    const istar2 = createHtmlElement('i', 'rating-star far fa-star');
    istar2.dataset.star = '1';
    istar2.addEventListener("click", () => {
      mark = 2
    })
    const istar3 = createHtmlElement('i', 'rating-star far fa-star');
    istar3.dataset.star = '2';
    istar3.addEventListener("click", () => {
      mark = 3
    })
    const istar4 = createHtmlElement('i', 'rating-star far fa-star');
    istar4.dataset.star = '3';
    istar4.addEventListener("click", () => {
      mark = 4
    })
    const istar5 = createHtmlElement('i', 'rating-star far fa-star');
    istar5.dataset.star = '4';
    istar5.addEventListener("click", () => {
      mark = 5
    })
    starBlock.append(istar1, istar2, istar3, istar4, istar5);
    const ratingBlock = createHtmlElement('div', 'rating-block');
    const ratingTitle = createHtmlElement('div', 'rating-order-title','', 'Your rating of petsitter is:  ');
    const ratingCount = createHtmlElement('div', 'rating-count','','  0');
    ratingBlock.append(ratingTitle, ratingCount);
   
   let i: number;
   starBlock.addEventListener('click',(event: Event)=>{
        const ratingStars = [...starBlock.getElementsByClassName("rating-star")];
        const starsLength = ratingStars.length;
        if(event.target && event.target instanceof HTMLElement && event.target.classList.contains('rating-star')){
          i = Number(event.target.dataset.star);
         if (event.target.className === "rating-star far fa-star") {
          ratingCount.textContent = `${i+1}`;

            for (i; i >= 0; --i){ 
              ratingStars[i].className = "rating-star fas fa-star";
            }
         } else {
          ratingCount.textContent = `${i}`;
            for (i; i < starsLength; ++i) ratingStars[i].className = "rating-star far fa-star";
         }
        }
      })

     const inputReview = createHtmlElement('textarea', 'input-petsitter-review','input-review') as HTMLTextAreaElement;
     inputReview.placeholder='Leave your review here';
     const btnSaveRateReview = createHtmlElement('button', 'btn-save-rate-review', 'btn-save-review','Save Review and Rate');
     btnSaveRateReview.addEventListener("click", () => {
      if (mark == 0 || inputReview.value == '') {
        const p = createHtmlElement("p", "warning");
        p.textContent = "Please, set star and fill the review field";
        const userBlock = document.querySelector(".user-info-block-order") as HTMLDivElement
        userBlock.append(p)
        setTimeout(() => {
          userBlock.removeChild(p)
        }, 2000)
      } else {
        fetch(`http://localhost:5000/petsitter/add-data`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            _id: data.petsitterId,
            review: [
              `${data.nameOfOwner}`,
              `${inputReview.value}`,
              mark
            ]
          }),
        })
        .then((response) => {return response.json()}).then(() => {
          const p = createHtmlElement("p", "warning");
          p.textContent = "Review saved";
          p.setAttribute("style", "color:green; padding-left:130px")
          const userBlock = document.querySelector(".user-info-block-order") as HTMLDivElement
          userBlock.append(p)
          inputReview.value = ''
          setTimeout(() => {
            userBlock.removeChild(p)
          }, 2000)
        })
      }
     })
     starRateBlock.append(starBlock, ratingBlock);
      userBlockWrapper.append(linkViewProfile, sendReviwBlockTitle,starRateBlock, inputReview, btnSaveRateReview);
    }
    if(curUserInfo.role === "PETSITTER"){
      const ownerId = data.ownerId;
      const user = await getUserFromId(ownerId);
      const ownerInfo = (user).item;
      console.log('ownerInfo', ownerInfo);
      const ownerPhpotoBlock = createHtmlElement('img', 'img-petsit-order-info-item') as HTMLImageElement;
      if(ownerInfo.avatarPath === '' || ownerInfo.avatarPath === undefined){
        ownerPhpotoBlock.src = 'img/personLogo.svg';
        }else{
          ownerPhpotoBlock.src = ownerInfo.avatarPath;
        }
      const nameOfOwner = createHtmlElement('div', 'name-of-petsitter-order-item','', data.nameOfOwner);
      nameOfOwner.setAttribute("style", "margin-top:-20px")
      const linkViewProfile = createHtmlElement(
        "div",
        "link-view-profile-order",
        "",
        "View profile"
      );
      linkViewProfile.setAttribute("style", "margin-left:60px; margin-top:-40px")
      linkViewProfile.addEventListener('click', ()=>{
                history.pushState('','',`/owner/n/${ownerId}`); 
                window.dispatchEvent(new Event("popstate"));
      })
      nameUserBlock.append(ownerPhpotoBlock, nameOfOwner);
      userBlockWrapper.append(linkViewProfile);
    }
 
  return userBlockWrapper;  
}

export async function createOrderItemPage(){ 
    const numberOfOrder = window.location.href.substring(window.location.href.length - 6) // ПОЛУЧЕНИЕ ID ЗАКАЗА
    document.body.innerHTML = "";
    await headerPetsitter(document.body);
    await renderOrderItemPage(numberOfOrder); 
    document.body.append(sectionOrderItem);
    footerFun(document.body);
    return document.body;
}