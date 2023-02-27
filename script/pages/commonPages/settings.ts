import { createHtmlElement, createInputElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUser } from "../../commonFunction/getUser";
import { createSplashScreen, removeSplashScreen } from "./splashScreen";

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

const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isEmail = (value: string) => {
  if (regEmail.test(value)) {
    return true;
  } else {
    return false;
  }
};

const regNum = /^\+?\d+$/;

function isPhone(str: string) {
  if (regNum.test(str)) {
    return true;
  } else {
    return false;
  }
}

export async function settingsPerson() {
  const User = await getUser();
  const userInfo = User.item;

  const objData = {
    email: userInfo.email,
    password: userInfo.password,
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    phone: userInfo.phone,
    city: userInfo.city,
    address: userInfo.address,
    birth: userInfo.birth,
    role: userInfo.role,
    gender: userInfo.gender,
    avatarPath: userInfo.avatarPath,
  };

  document.body.innerHTML = "";

  headerPetsitter(document.body);
  const sectionSettings = createHtmlElement(
    "section",
    "section-petsit-profile-basic"
  );
  document.body.append(sectionSettings);
  const sectionSettingsBlock = createHtmlElement(
    "div",
    "section-profile-basic-block forMediaPad"
  );
  sectionSettings.append(sectionSettingsBlock);
  const profileTitleWrap = createHtmlElement("div", "profile-title-wrapper");
  sectionSettingsBlock.append(profileTitleWrap);
  const myProfileTitle = createHtmlElement(
    "h2",
    "my-profile-text-title",
    "",
    "Account settings"
  );
  profileTitleWrap.append(myProfileTitle);
  const divSettings = createHtmlElement("div", "left-right-settings");
  const divLeftSettings = createHtmlElement("div", "left-settings");
  const divRightSettings = createHtmlElement("div", "right-settings");
  sectionSettingsBlock.append(divSettings);
  divSettings.append(divLeftSettings);
  divSettings.append(divRightSettings);

  const title1 = createHtmlElement(
    "h3",
    "title-child-settings",
    "",
    "Personal data"
  );
  divLeftSettings.append(title1);

  const divOldEmail = createHtmlElement("div", "old-date-settings");
  const container1 = createHtmlElement("div", "container email-container");
  const divInfo1 = createHtmlElement("div", "");
  const titleOldEmail = createHtmlElement("p", "", "", "E-mail");
  const dateOldEmail = createHtmlElement(
    "p",
    "",
    "",
    `${objData.email ? objData.email : ""}`
  );
  const divBtn1 = createHtmlElement("div", "", "", "");
  const btnOldEmail = createHtmlElement(
    "button",
    "btnSetChange ",
    "",
    "Change"
  );
  const inputEm = createInputElement("email", "settings-input");
  inputEm.value = `${objData.email}`;
  inputEm.addEventListener("input", () => {
    if (isEmail(inputEm.value)) {
      inputEm.removeAttribute("style");
      objData.email = inputEm.value;
    } else {
      inputEm.setAttribute("style", "border:1px solid red");
    }
  });
  divLeftSettings.append(divOldEmail);
  divOldEmail.append(container1);
  container1.append(inputEm);
  divInfo1.append(titleOldEmail);
  divInfo1.append(dateOldEmail);
  divBtn1.append(btnOldEmail);

  btnOldEmail.addEventListener("click", () => {
    container1.style.display = "none";
    divOldEmail.style.backgroundColor = "rgb(232, 244, 253)";

    const container2 = createHtmlElement("div", "");
    const titleMain = createHtmlElement("p", "title-main", "", "Change email");
    const title1 = createHtmlElement("p", "", "", "E-mail");
    const fieldEmail = createInputElement("email", "");
    fieldEmail.value = `${objData.email ? objData.email : ""}`;
    const text = createHtmlElement(
      "p",
      "",
      "",
      "The change of the e-mail address must be confirmed by entering the current account password."
    );
    const title2 = createHtmlElement("p", "", "", "Current password");
    const fieldPassword = createInputElement("password", "");
    fieldPassword.value = ``;
    const blockButtons = createHtmlElement("div", "btns-settings");
    const save = createHtmlElement("button", "btnSetChange", "", "Save");
    const cancel = createHtmlElement("button", " btnSetChange", "", "Cancel");
    divOldEmail.append(container2);
    container2.append(titleMain);
    container2.append(title1);
    container2.append(fieldEmail);
    container2.append(text);
    container2.append(title2);
    container2.append(fieldPassword);
    container2.append(blockButtons);
    blockButtons.append(save);
    blockButtons.append(cancel);

    cancel.addEventListener("click", () => {
      container1.style.display = "flex";
      container2.style.display = "none";
      divOldEmail.style.backgroundColor = "#fff";
    });
  });

  const divOldPassword = createHtmlElement("div", "old-date-settings");
  const container12 = createHtmlElement("div", "container");
  const divInfo2 = createHtmlElement("div", "");
  const titleOldPassword = createHtmlElement("p", "", "", "Current password");
  const dateOldPassword = createHtmlElement("p", "", "", "****"); //-----------------
  const divBtn2 = createHtmlElement("div", "", "", "");
  const btnOldPassword = createHtmlElement(
    "button",
    "btnSetChange",
    "",
    "Change"
  );
  divLeftSettings.append(divOldPassword);
  divOldPassword.append(container12);
  container12.append(divInfo2);
  container12.append(divBtn2);
  divInfo2.append(titleOldPassword);
  divInfo2.append(dateOldPassword);
  divBtn2.append(btnOldPassword);

  btnOldPassword.addEventListener("click", () => {
    container12.style.display = "none";
    divOldPassword.style.backgroundColor = "rgb(232, 244, 253)";

    const container22 = createHtmlElement("div", "password-container");
    const titleMain2 = createHtmlElement(
      "p",
      "title-main",
      "",
      "Change Password"
    );
    const title21 = createHtmlElement("p", "", "", "Current password");
    const fieldPassword1 = createInputElement("password", "password-input"); //-----------------
    const title22 = createHtmlElement("p", "", "", "A new password");
    const fieldPassword2 = createInputElement("password", "password-input"); //-----------------
    const title23 = createHtmlElement("p", "", "", "Repeat password");
    const fieldPassword3 = createInputElement("password", "password-input"); //-----------------
    const blockButtons2 = createHtmlElement("div", "btns-settings");
    const save2 = createHtmlElement("button", "btnSetChange", "", "Save"); //btnSetChange
    save2.addEventListener("click", () => {
      if (fieldPassword2.value.length < 4 || fieldPassword2.value.length > 10) {
        const p = createHtmlElement("p", "warning-password");
        p.textContent =
          "New password length should be more than 4 and less than 10 characters";
        p.setAttribute("style", "color:red");
        container22.append(p);
        setTimeout(() => {
          container22.removeChild(p);
        }, 2000);
        return;
      }
      if (fieldPassword2.value != fieldPassword3.value) {
        const p = createHtmlElement("p", "warning-password");
        p.textContent = "Error: new passwords do not match";
        p.setAttribute("style", "color:red");
        container22.append(p);
        setTimeout(() => {
          container22.removeChild(p);
        }, 2000);
        return;
      }
      createSplashScreen()
      fetch(
        `https://rs-clone-api-production-3ab8.up.railway.app/check-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            _id: localStorage.getItem("curr-user-id"),
            currPassword: fieldPassword1.value,
          }),
        }
      )
        .then((response) => {
          removeSplashScreen()
          return response.json();
        })
        .then((data) => {
          if (data.message == "Incorrect Password") {
            const p = createHtmlElement("p", "warning-password");
            p.textContent = "Incorrect current password";
            p.setAttribute("style", "color:red");
            container22.append(p);
            setTimeout(() => {
              container22.removeChild(p);
            }, 2000);
            return;
          } else {
            const p = createHtmlElement("p", "warning-password");
            p.textContent =
              "New password accepted. Press button 'Save' below to save changes";
            p.setAttribute("style", "color:green");
            container22.append(p);
            objData.password = fieldPassword2.value;
            setTimeout(() => {
              container12.style.display = "flex";
              container22.style.display = "none";
              divOldPassword.style.backgroundColor = "#fff";
              container22.removeChild(p);
            }, 3000);
          }
        });
    });
    const cancel2 = createHtmlElement("button", " btnSetChange", "", "Cancel");
    divOldPassword.append(container22);
    container22.append(titleMain2);
    container22.append(title21);
    container22.append(fieldPassword1);
    container22.append(title22);
    container22.append(fieldPassword2);
    container22.append(title23);
    container22.append(fieldPassword3);
    container22.append(blockButtons2);
    blockButtons2.append(save2);
    blockButtons2.append(cancel2);

    cancel2.addEventListener("click", () => {
      container12.style.display = "flex";
      container22.style.display = "none";
      divOldPassword.style.backgroundColor = "#fff";
    });
  });

  const divOldName = createHtmlElement("div", "old-date-settings");
  const divInfo3 = createHtmlElement("div", "first-child");
  const titleOldName = createHtmlElement(
    "p",
    "",
    "",
    "First name and last name"
  );
  const divInputName = createHtmlElement("div", "div-input-text");
  const inputName = createInputElement("text", "first-child settings-input"); //-----------------
  inputName.value = `${objData.firstName ? objData.firstName : ""} ${
    objData.lastName ? objData.lastName : ""
  } `;
  inputName.addEventListener("input", () => {
    const arr = inputName.value.split(" ");
    if (arr.length != 2 || arr[1] == "") {
      inputName.setAttribute("style", "border:1px solid red");
    } else {
      inputName.removeAttribute("style");
      objData.firstName = arr[0];
      objData.lastName = arr[1];
    }
  });
  const divBtn3 = createHtmlElement("div", "", "", "");
  divLeftSettings.append(divOldName);
  divOldName.append(divInfo3);
  divOldName.append(divBtn3);
  divInfo3.append(titleOldName);
  divInfo3.append(divInputName);
  divInputName.append(inputName);

  if (objData.role == "PETSITTER") {
    const divOldSex = createHtmlElement("div", "old-date-settings block-sex");
    const divInfo4 = createHtmlElement("div", "");
    const titleOldSex = createHtmlElement("p", "", "", "Sex");
    const formSex = createHtmlElement("form", "form-sex-settings", "", "");
    const divForMan = createHtmlElement("div", "div-input-radio");
    const secMan = createInputElement("radio", "", "Male"); /**/
    secMan.addEventListener("click", () => {
      objData.gender = "Male";
    });
    secMan.setAttribute("name", "sex");
    const labelMan = createHtmlElement("label", "", "", "Man");
    labelMan.setAttribute("for", "Male");
    const divForWoman = createHtmlElement("div", "div-input-radio");
    const secWoman = createInputElement("radio", "", "Female"); /**/
    secWoman.setAttribute("name", "sex");
    secWoman.addEventListener("click", () => {
      objData.gender = "Female";
    });
    const labelWoman = createHtmlElement("label", "", "", "Woman");
    labelWoman.setAttribute("for", "Female");
    divLeftSettings.append(divOldSex);
    divOldSex.append(divInfo4);
    divInfo4.append(titleOldSex);
    divInfo4.append(formSex);
    formSex.append(divForMan);
    divForMan.append(secMan);
    divForMan.append(labelMan);
    formSex.append(divForWoman);
    divForWoman.append(secWoman);
    divForWoman.append(labelWoman);

    const changeGender = divOldSex.querySelectorAll("input");
    for (let i = 0; i < changeGender.length; i++) {
      if (objData.gender == changeGender[i].id) {
        changeGender[i].checked = true;
      }
    }

    divOldSex.addEventListener("change", () => {
      for (let i = 0; i < changeGender.length; i++) {
        if (changeGender[i].checked) {
          objData.gender = String(changeGender[i].id);
        }
      }
    });

    const divOldDateOfBirth = createHtmlElement("div", "old-date-settings");
    const divInfo5 = createHtmlElement("div", "first-child");
    const titleOldDateOfBirth = createHtmlElement("p", "", "", "Date of birth");
    const divInputDate = createHtmlElement("div", "div-input-date");
    const inputDateOfBirth = createInputElement("date", "settings-input");
    inputDateOfBirth.value = `${objData.birth ? objData.birth : ""}`;
    divLeftSettings.append(divOldDateOfBirth);
    divOldDateOfBirth.append(divInfo5);
    divInfo5.append(titleOldDateOfBirth);
    divInfo5.append(divInputDate);
    divInputDate.append(inputDateOfBirth);

    divOldDateOfBirth.addEventListener("change", () => {
      objData.birth = inputDateOfBirth.value;
    });
  }

  const title2 = createHtmlElement(
    "h3",
    "title-child-settings",
    "",
    "Contact details"
  );
  divLeftSettings.append(title2);

  const divOldNumber = createHtmlElement("div", "old-date-settings");
  const divInfo6 = createHtmlElement("div", "first-child");
  const titleOldNumber = createHtmlElement("p", "", "", "Phone number");
  const divInputNumber = createHtmlElement("div", "div-input-text");
  const inputNumber = createInputElement("text", "settings-input");
  inputNumber.value = `+${objData.phone ? objData.phone : ""}`;
  inputNumber.addEventListener("input", () => {
    if (
      isPhone(inputNumber.value) &&
      inputNumber.value.length > 6 &&
      inputNumber.value.length < 15
    ) {
      inputNumber.removeAttribute("style");
      objData.phone = inputNumber.value;
    } else {
      inputNumber.setAttribute("style", "border:1px solid red");
    }
  });
  divLeftSettings.append(divOldNumber);
  divOldNumber.append(divInfo6);
  divInfo6.append(titleOldNumber);
  divInfo6.append(divInputNumber);
  divInputNumber.append(inputNumber);

  const divOldAdress = createHtmlElement("div", "old-date-settings");
  const divInfo7 = createHtmlElement("div", "first-child");
  const titleOldAdress = createHtmlElement("p", "", "", "Address");
  const divInputAdress = createHtmlElement("div", "div-input-text");
  const inputAdress = createInputElement("text", "settings-input");
  inputAdress.addEventListener("input", () => {
    if (
      inputAdress.value.split(" ").length < 2 ||
      inputAdress.value.split(" ")[1] == ""
    ) {
      inputAdress.setAttribute("style", "border:1px solid red");
    } else {
      inputAdress.removeAttribute("style");
      objData.address = inputAdress.value;
    }
  });
  inputAdress.value = `${objData.address ? objData.address : ""}`;
  divLeftSettings.append(divOldAdress);
  divOldAdress.append(divInfo7);
  divInfo7.append(titleOldAdress);
  divInfo7.append(divInputAdress);
  divInputAdress.append(inputAdress);

  const divOldCity = createHtmlElement("div", "old-date-settings");
  const divInfo8 = createHtmlElement("div", "first-child");
  const titleOldCity = createHtmlElement("p", "", "", "City");
  const divInputCity = createHtmlElement("div", "div-input-text");
  const inputCity = createInputElement("text", "first-child settings-input");
  inputCity.value = `${objData.city ? objData.city : ""}`;
  inputCity.addEventListener("input", () => {
    if (inputCity.value.length < 3) {
      inputCity.setAttribute("style", "border:1px solid red");
    } else {
      inputCity.removeAttribute("style");
      objData.city = inputCity.value;
    }
  });
  divLeftSettings.append(divOldCity);
  divOldCity.append(divInfo8);
  divInfo8.append(titleOldCity);
  divInfo8.append(divInputCity);
  divInputCity.append(inputCity);

  /*-------------------------------------------------------------*/
  const tempTitle = createHtmlElement(
    "p",
    "title-photo-profile-block",
    "",
    "Photo"
  );
  const photoTextProfileBlock = createHtmlElement(
    "div",
    "photo-text-profile-block"
  );
  divLeftSettings.append(tempTitle, photoTextProfileBlock);
  const photoContainer = createHtmlElement(
    "div",
    "photo-container profile-photo-container"
  );
  photoContainer.setAttribute(
    "style",
    `background-image: url('${objData.avatarPath}'); background-blend-mode:normal`
  );
  const divBtnsPhotos = createHtmlElement("div", "btns-add-remove-container");
  const btnAddPhoto = createHtmlElement(
    "input",
    "button-add-photo"
  ) as HTMLInputElement;
  const btnRemovePhoto = createHtmlElement(
    "button",
    "button-remove-photo"
  ) as HTMLInputElement;
  btnRemovePhoto.textContent = "Remove";
  btnRemovePhoto.addEventListener("click", () => {
    btnAddPhoto.files = null;
    if (objData.gender == "Male") {
      photoContainer.setAttribute(
        "style",
        `background-image: url('img/images/manDog.jpg'); background-blend-mode:normal`
      );
      objData.avatarPath = "";
    } else {
      photoContainer.setAttribute(
        "style",
        `background-image: url('img/images/dogHaveFive.jpg'); background-blend-mode:normal`
      );
      objData.avatarPath = "";
    }
  });
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
      fetch(
        `https://rs-clone-api-production-3ab8.up.railway.app/auth/register/add-photo`,
        fetchData
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          photoContainer.setAttribute(
            "style",
            `background-image: url('https://rs-clone-api-production-3ab8.up.railway.app/${data.filePath}'); background-blend-mode:normal`
          );
          fetchPetsitterData.avatarPath = `https://rs-clone-api-production-3ab8.up.railway.app/${data.filePath}`;
          objData.avatarPath = `https://rs-clone-api-production-3ab8.up.railway.app/${data.filePath}`;
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
  divBtnsPhotos.append(btnAddPhoto, btnAddPhotoLabel, btnRemovePhoto);
  photoContainer.append(divBtnsPhotos);
  photoTextProfileBlock.append(photoContainer);
  /*-------------------------------------------------------------*/

  const btnSave = createHtmlElement("button", "rectangle", "", "Save");
  divLeftSettings.append(btnSave);

  const blockMessage = createHtmlElement("div", "text-block-profile-wrapper");
  const blockMessagediv = createHtmlElement("div", "text-3-wrapper-profile");
  const imgMessage = new Image();
  imgMessage.src = "img/iCharacter.svg";
  const divTextMessage = createHtmlElement("div", "");
  const titleMessage = createHtmlElement(
    "div",
    "text-profile-medium",
    "",
    "What information is shared with others?"
  );
  const textMessage = createHtmlElement(
    "div",
    "text-profile text-profile-li",
    "",
    "Petsy provides contact information (exact address) to petsitters who will provide you with the service of walking or pet care along with transport. This information is provided after confirming the service, i.e. after you have paid for it."
  );
  divRightSettings.append(blockMessage);
  blockMessage.append(blockMessagediv);
  blockMessagediv.append(imgMessage);
  blockMessagediv.append(divTextMessage);
  divTextMessage.append(titleMessage);
  divTextMessage.append(textMessage);
  const p1 = createHtmlElement("p", "settings-changes-successfuly");
  p1.textContent = "Changes saved!";
  divLeftSettings.append(p1);

  footerFun(document.body);

  btnSave.addEventListener("click", () => {
    let newData = {};

    if (objData.password.length > 12) {
      newData = {
        _id: localStorage.getItem("curr-user-id"),
        address: objData.address,
        city: objData.city,
        phone: objData.phone,
        email: objData.email,
        firstName: objData.firstName,
        lastName: objData.lastName,
        birth: objData.birth,
        gender: objData.gender,
        avatarPath: objData.avatarPath,
      };
    } else {
      newData = {
        _id: localStorage.getItem("curr-user-id"),
        address: objData.address,
        city: objData.city,
        phone: objData.phone,
        email: objData.email,
        password: objData.password,
        firstName: objData.firstName,
        lastName: objData.lastName,
        birth: objData.birth,
        gender: objData.gender,
        avatarPath: objData.avatarPath,
      };
    }

    if (objData.role == "PETSITTER") {
      //PETSITTER
      const fetchData = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(newData),
      };
      fetch(
        `https://rs-clone-api-production-3ab8.up.railway.app/petsitter/add-data`,
        fetchData
      )
        .then((response) => {
          return response.json();
        })
        .then(() => {
          p1.setAttribute("style", "opacity:1");
          setTimeout(() => {
            location.reload();
          }, 2000);
        });
    }

    if (objData.role == "OWNER") {
      //OWNER
      const fetchData = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(newData),
      };
      fetch(
        `https://rs-clone-api-production-3ab8.up.railway.app/petsitter/add-data`,
        fetchData
      )
        .then((response) => {
          return response.json();
        })
        .then(() => {
          p1.setAttribute("style", "opacity:1");
          setTimeout(() => {
            location.reload();
          }, 2000);
        });
    }
  });

  return document.body;
}
/*-------------------------------------------------------*/
