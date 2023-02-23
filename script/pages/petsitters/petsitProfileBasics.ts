import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { infoProfileText1 } from "../../utils/arrProfileInfoText";
import { infoProfileText2 } from "../../utils/arrProfileInfoText";
import { createServicesBlock } from "./petsitProfileServices";
import { createMyHomeBlock } from "./petsitProfileHouse";
import { createMyPetsBlock } from "../pageComponents/ownerPetsitPets";

const sectionPetsitProfileBasic = createHtmlElement(
  "section",
  "section-petsit-profile-basic"
);

interface PetsitterData {
  birth: string;
  gender: string;
  services: string[];
  address: string;
  avatarPath: string;
}

const fetchPetsitterData: PetsitterData = {
  birth: "",
  gender: "",
  services: [],
  address: "",
  avatarPath: "",
};

const qualificationsArr: string[] = [];

async function renderPetsitProfileBasic() {
  sectionPetsitProfileBasic.innerHTML = "";
  const sectionPetsitProfileBasicBlock = createHtmlElement(
    "div",
    "section-profile-basic-block"
  );
  sectionPetsitProfileBasic.append(sectionPetsitProfileBasicBlock);
  const profileTitleWrap = createHtmlElement("div", "profile-title-wrapper");
  sectionPetsitProfileBasicBlock.append(profileTitleWrap);
  const myProfileTitle = createHtmlElement(
    "h2",
    "my-profile-text-title",
    "",
    "My profile"
  );
  profileTitleWrap.append(myProfileTitle);
  const profileSelectButtonBlock = createHtmlElement(
    "div",
    "profile-select-btn-block"
  );
  sectionPetsitProfileBasicBlock.append(profileSelectButtonBlock);
  const btnCommonInfo = createHtmlElement(
    "div",
    "btn-profile-common-info btn-profile-select active",
    "",
    "Basic Information"
  );
  profileSelectButtonBlock.append(btnCommonInfo);
  btnCommonInfo.addEventListener("click", async () => {
    commonInfoBlock.innerHTML = "";
    const blockInfo = await createBasicInfoBlock();
    commonInfoBlock.append(blockInfo);
  });
  const btnPrice = createHtmlElement(
    "div",
    "btn-profile-price btn-profile-select",
    "",
    "Services & Price List"
  );
  profileSelectButtonBlock.append(btnPrice);
  btnPrice.addEventListener("click", async () => {
    commonInfoBlock.innerHTML = "";
    const serviceBlock = await createServicesBlock();
    commonInfoBlock.append(serviceBlock);
  });
  /*const btnPhotoGallery = createHtmlElement(
    "div",
    "btn-profile-photo-gallery btn-profile-select",
    "",
    "Photo Gallery"
  );
  profileSelectButtonBlock.append(btnPhotoGallery);*/
  const btnMyHome = createHtmlElement(
    "div",
    "btn-profile-my-home btn-profile-select",
    "",
    "My Home"
  );
  profileSelectButtonBlock.append(btnMyHome);
  btnMyHome.addEventListener("click", async () => {
    commonInfoBlock.innerHTML = "";
    const myHomeBlock = await createMyHomeBlock();
    commonInfoBlock.append(myHomeBlock);
  });
  const btnMyPets = createHtmlElement(
    "div",
    "btn-profile-my-pets btn-profile-select",
    "",
    "My Pets"
  );
  profileSelectButtonBlock.append(btnMyPets);
  btnMyPets.addEventListener("click", async () => {
    commonInfoBlock.innerHTML = "";
    const myPetsBlock = await createMyPetsBlock();
    commonInfoBlock.append(myPetsBlock);
  });
  profileSelectButtonBlock.addEventListener("click", (event) => {
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      target.classList.contains("btn-profile-select")
    ) {
      const allButtonSelect = document.querySelectorAll(".btn-profile-select");
      for (let i = 0; i < allButtonSelect.length; i++) {
        allButtonSelect[i].classList.remove("active");
      }
      target.classList.add("active");
    }
  });
  const commonInfoBlock = createHtmlElement("div", "common-info-block");
  sectionPetsitProfileBasicBlock.append(commonInfoBlock);
  const blockInfo = await createBasicInfoBlock();
  commonInfoBlock.append(blockInfo);
}

async function createBasicInfoBlock() {
  const basicInfoBlock = createHtmlElement("div", "basic-info-block");
  const photoPetsitBlock = createHtmlElement(
    "div",
    "photo-profile-petsit-block"
  );
  basicInfoBlock.append(photoPetsitBlock);

  const tempTitle = createHtmlElement("h4", "title-photo-profile-block");
  tempTitle.textContent = "Photo";
  const photoTextProfileBlock = createHtmlElement(
    "div",
    "photo-text-profile-block"
  );
  photoPetsitBlock.append(tempTitle, photoTextProfileBlock);
  const photoContainer = createHtmlElement(
    "div",
    "photo-container profile-photo-container"
  );
  photoContainer.setAttribute(
    "style",
    "background-image: url('../img/icons/photo.png')"
  );
  const btnAddPhoto = createHtmlElement(
    "input",
    "button-add-photo"
  ) as HTMLInputElement;
  btnAddPhoto.type = "file";
  btnAddPhoto.accept = ".png,.jpg,.jpeg";
  btnAddPhoto.id = "photo";
  const handleUpload = () => {
    if (btnAddPhoto.files) {
      const formData = new FormData();
      formData.append("image", btnAddPhoto.files[0], btnAddPhoto.files[0].name);
      const fetchData = {
        method: "POST",
        body: formData,
      };
      fetch(`https://rs-clone-api-production-3ab8.up.railway.app/auth/register/add-photo`, fetchData)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          photoContainer.setAttribute(
            "style",
            `background-image: url('https://rs-clone-api-production-3ab8.up.railway.app/${data.filePath}'); background-blend-mode:normal`
          );
          fetchPetsitterData.avatarPath = `https://rs-clone-api-production-3ab8.up.railway.app/${data.filePath}`;
        });
      return btnAddPhoto.files[0];
    }
  };
  btnAddPhoto.onchange = handleUpload;
  const btnAddPhotoLabel = createHtmlElement(
    "label",
    "label-add-photo"
  ) as HTMLLabelElement;
  btnAddPhotoLabel.setAttribute("for", "photo");
  btnAddPhotoLabel.textContent = "Add photo";
  photoContainer.append(btnAddPhoto, btnAddPhotoLabel);

  const textPhotoProfile = createHtmlElement(
    "div",
    "text-photo-profile",
    "",
    "A profile photo allows other members of the Petsi community to get to know you. It is especially important for your relationship with customers, as it will make it easier for you to get to know each other when you first meet."
  );
  photoTextProfileBlock.append(photoContainer, textPhotoProfile);

  const aboutMeBlock = createHtmlElement("div", "profile-about-me-block");
  basicInfoBlock.append(aboutMeBlock);
  const aboutMeTitle = createHtmlElement(
    "h2",
    "profile-about-me-title",
    "",
    "About me"
  );
  aboutMeBlock.append(aboutMeTitle);
  const mottoInput = createHtmlElement(
    "textarea",
    "input-motto-profile input-text-profile",
    "input-motto-profile"
  ) as HTMLTextAreaElement;
  mottoInput.placeholder = "Motto";
  mottoInput.maxLength = 100;
  mottoInput.wrap = "soft";
  aboutMeBlock.append(mottoInput);

  const countMotto = createHtmlElement(
    "div",
    "count-motto-profile",
    "",
    `0/100`
  );
  aboutMeBlock.append(countMotto);
  mottoInput.addEventListener("input", () => {
    countMotto.innerHTML = "";
    countMotto.innerHTML = `${mottoInput.value.length}/100`;
  });

  const mottoText = createHtmlElement(
    "div",
    "motto-profile-text",
    "",
    "A motto is a brief description of what is most important to you.  We'll display it in the search results so that in addition to your picture it can draw the client's attention to your services"
  );
  aboutMeBlock.append(mottoText);

  const blockText1 = createTextInputInfoBlock(
    "Make yourself known to carers",
    "In min. 300 characters introduce yourself",
    "Write a few sentences about yourself that will make caregivers choose you. Below are our hints:",
    infoProfileText1,
    "petsit-about-text"
  );
  aboutMeBlock.append(blockText1);

  const blockText2 = createTextInputInfoBlock(
    "What sets me apart?",
    "Enter your special skills or experience here. If you can, boast about your training or courses, present your experience with difficult dogs, e.g. shelter dogs, tell about additional animal-related activities.",
    "Make yourself even better known:",
    infoProfileText2,
    "petsit-advantages"
  );
  aboutMeBlock.append(blockText2);

  const qualificationBlock = createHtmlElement(
    "fieldset",
    "additional-qualification-block text-profile-medium"
  );
  qualificationBlock.innerHTML =
    "<legend class = 'text-profile-medium'>Choose your additional qualification:</legend>";
  aboutMeBlock.append(qualificationBlock);

  const checkboxQualify1 = createHtmlElement("div", "checkbox-div");
  checkboxQualify1.innerHTML =
    '<input type="checkbox" id="behaviorist" name="behaviorist"><label for="behaviorist">Behaviorist</label>';
  qualificationBlock.append(checkboxQualify1);

  const checkboxQualify2 = createHtmlElement("div", "checkbox-div");
  checkboxQualify2.innerHTML =
    '<input type="checkbox" id="petsit-course" name="petsit-course"><label for="petsit-course">Completed petsitter course</label>';
  qualificationBlock.append(checkboxQualify2);

  const checkboxQualify3 = createHtmlElement("div", "checkbox-div");
  checkboxQualify3.innerHTML =
    '<input type="checkbox" id="veterinary-technician" name="veterinary-technician"><label for="veterinary-technician">Veterinary technician</label>';
  qualificationBlock.append(checkboxQualify3);

  const checkboxQualify4 = createHtmlElement("div", "checkbox-div");
  checkboxQualify4.innerHTML =
    '<input type="checkbox" id="first-aid-course" name="first-aid-course"><label for="first-aid-course">Completed first aid course</label>';
  qualificationBlock.append(checkboxQualify4);

  setTimeout(() => {
    const behaviorist = document.getElementById(
      "behaviorist"
    ) as HTMLInputElement;
    const course = document.getElementById("petsit-course") as HTMLInputElement;
    const veterinary = document.getElementById(
      "veterinary-technician"
    ) as HTMLInputElement;
    const firstAidCource = document.getElementById(
      "first-aid-course"
    ) as HTMLInputElement;
    behaviorist.addEventListener("input", () => {
      if (behaviorist.checked) {
        qualificationsArr.push("Behaviorist");
      } else {
        const index = qualificationsArr.indexOf("behaviorist");
        qualificationsArr.splice(index, 1);
      }
    });
    course.addEventListener("input", () => {
      if (course.checked) {
        qualificationsArr.push("Petsit-course");
      } else {
        const index = qualificationsArr.indexOf("petsit-course");
        qualificationsArr.splice(index, 1);
      }
    });
    veterinary.addEventListener("input", () => {
      if (veterinary.checked) {
        qualificationsArr.push("Veterinary-technician");
      } else {
        const index = qualificationsArr.indexOf("veterinary-technician");
        qualificationsArr.splice(index, 1);
      }
    });
    firstAidCource.addEventListener("input", () => {
      if (firstAidCource.checked) {
        qualificationsArr.push("First-aid-course");
      } else {
        const index = qualificationsArr.indexOf("first-aid-course");
        qualificationsArr.splice(index, 1);
      }
    });
  }, 100);

  const btnSave = createHtmlElement(
    "button",
    "btn-profile-save",
    "btn-save-basic-info",
    "Save"
  );
  btnSave.addEventListener("click", () => {
    const blockTextArea = document.getElementById(
      "petsit-about-text"
    ) as HTMLTextAreaElement;
    const textAreaProfile = document.getElementById(
      "petsit-advantages"
    ) as HTMLTextAreaElement;
    const fetchData = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        _id: `${localStorage.getItem("curr-user-id")}`,
        avatarPath: fetchPetsitterData.avatarPath,
        aboutMe: mottoInput.value,
        carers: blockTextArea.value,
        skills: textAreaProfile.value,
        qualifications: qualificationsArr,
      }),
    };
    fetch(`https://rs-clone-api-production-3ab8.up.railway.app/petsitter/add-data`, fetchData)
      .then((response) => {
        return response.json();
      })
      .then(() => {
        const p = createHtmlElement("p", "comment-saved-settings");
        p.textContent = "Settings saved";
        aboutMeBlock.append(p);
        setTimeout(() => {
          location.reload();
        }, 2000);
      });
  });
  aboutMeBlock.append(btnSave);
  return basicInfoBlock;
}

function createTextInputInfoBlock(
  text1: string,
  text2: string,
  text3: string,
  arrayText: string[],
  idInput: string
) {
  const blockTextInputInfo = createHtmlElement("div", "block-text-input-info");
  const textDiv1 = createHtmlElement(
    "div",
    "text-profile-medium",
    "",
    `${text1}`
  );
  blockTextInputInfo.append(textDiv1);
  const textDiv2 = createHtmlElement("div", "text-profile", "", `${text2}`);
  blockTextInputInfo.append(textDiv2);
  const inputTextWrapper = createHtmlElement("div", "input-text-block-wrapper");
  blockTextInputInfo.append(inputTextWrapper);
  const blockTextarea = createHtmlElement(
    "textarea",
    "input-text-profile textarea-profile-block",
    `${idInput}`
  ) as HTMLTextAreaElement;
  inputTextWrapper.append(blockTextarea);
  blockTextarea.maxLength = 300;
  const textBlockWrapper = createHtmlElement(
    "div",
    "text-block-profile-wrapper"
  );
  inputTextWrapper.append(textBlockWrapper);
  const text3Wrapper = createHtmlElement("div", "text-3-wrapper-profile");
  textBlockWrapper.append(text3Wrapper);
  const imgInfo = new Image();
  imgInfo.src = "img/iCharacter.svg";
  text3Wrapper.append(imgInfo);
  const textDiv3 = createHtmlElement(
    "ul",
    "text-profile-medium",
    "",
    `${text3}`
  );
  text3Wrapper.append(textDiv3);
  arrayText.forEach((elem) => {
    const text3Elem = createHtmlElement(
      "li",
      "text-profile text-profile-li",
      "",
      `* ${elem}`
    );
    textBlockWrapper.append(text3Elem);
  });

  return blockTextInputInfo;
}

export default async function petsitterProfileBasic() {
  document.body.innerHTML = "";
  await headerPetsitter(document.body);
  renderPetsitProfileBasic();
  document.body.append(sectionPetsitProfileBasic);
  footerFun(document.body);
  return document.body;
}