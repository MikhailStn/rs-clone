import { createHtmlElement, createInputElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUser } from "../../commonFunction/getUser";

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
    address: userInfo.petsitterData.address,
    birth: userInfo.petsitterData.birth,
    role: userInfo.role,
    gender: userInfo.petsitterData.gender,
    avatarPath: userInfo.avatarPath,
  };
  console.log("objData", objData);

  document.body.innerHTML = "";

  headerPetsitter(document.body);
  const sectionSettings = createHtmlElement("section", "section-petsit-profile-basic");
  document.body.append(sectionSettings);
  const sectionSettingsBlock = createHtmlElement("div", "section-profile-basic-block");
  sectionSettings.append(sectionSettingsBlock);
  const profileTitleWrap = createHtmlElement("div", "profile-title-wrapper");
  sectionSettingsBlock.append(profileTitleWrap);
  const myProfileTitle = createHtmlElement("h2", "my-profile-text-title", "", "Account settings");
  profileTitleWrap.append(myProfileTitle);

  /*можно без него
  const profileTitleWrap2 = createHtmlElement("div", "profile-title-wrapper");
  sectionPetsitCalendarBlock.append(profileTitleWrap2);
  const changeSettings = createHtmlElement("h3", "my-profile-text-title", "", "changeSettings");
  profileTitleWrap2.append(changeSettings);
  можно без него*/

  const divSettings = createHtmlElement("div", "left-right-settings");
  const divLeftSettings = createHtmlElement("div", "left-settings");
  const divRightSettings = createHtmlElement("div", "right-settings");
  sectionSettingsBlock.append(divSettings);
  divSettings.append(divLeftSettings);
  divSettings.append(divRightSettings);

  const title1 = createHtmlElement("h3", "title-child-settings", "", "Personal data");
  divLeftSettings.append(title1);

  const divOldEmail = createHtmlElement("div", "old-date-settings");
  const container1 = createHtmlElement("div", "container"); //, "active-container-set container1");
  const divInfo1 = createHtmlElement("div", "");
  const titleOldEmail = createHtmlElement("p", "", "", "E-mail");
  const dateOldEmail = createHtmlElement("p", "", "", `${objData.email ? objData.email : ""}`); //-----------------
  const divBtn1 = createHtmlElement("div", "", "", "");
  const btnOldEmail = createHtmlElement("button", "btnSetChange ", "", "change");
  divLeftSettings.append(divOldEmail);
  divOldEmail.append(container1);
  container1.append(divInfo1);
  container1.append(divBtn1);
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
    fieldEmail.value = `${objData.email ? objData.email : ""}`; //-----------------
    const text = createHtmlElement("p", "", "", "The change of the e-mail address must be confirmed by entering the current account password.");
    const title2 = createHtmlElement("p", "", "", "Current password");
    const fieldPassword = createInputElement("password", "");
    fieldPassword.value = ``; //`********`; //-----------------
    const blockButtons = createHtmlElement("div", "btns-settings");
    const save = createHtmlElement("button", "btnSetChange", "", "Save"); //btnSetChange
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

    /*
    save.addEventListener('click', ()=>{

    //  if(fieldPassword.value ==)
      const fetchData = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("curr-user-id"),
          //email:
          //password:
        }),
      };
      fetch(`http://localhost:5000/petsitter/add-data`, fetchData).then((response) => {
        return response.json();
      });
    });
*/

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
  const dateOldPassword = createHtmlElement("p", "", "", "****");//-----------------
  const divBtn2 = createHtmlElement("div", "", "", "");
  const btnOldPassword = createHtmlElement("button", "btnSetChange", "", "change");
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

    const container22 = createHtmlElement("div", "");
    const titleMain2 = createHtmlElement("p", "title-main", "", "Change Password");
    const title21 = createHtmlElement("p", "", "", "Current password");
    const fieldPassword1 = createInputElement("password", ""); //-----------------
    const title22 = createHtmlElement("p", "", "", "A new password");
    const fieldPassword2 = createInputElement("password", "");//-----------------
    const title23 = createHtmlElement("p", "", "", "Repeat password");
    const fieldPassword3 = createInputElement("password", "");//-----------------
    const blockButtons2 = createHtmlElement("div", "btns-settings");
    const save2 = createHtmlElement("button", "btnSetChange", "", "Save"); //btnSetChange
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

    /*
    save2.addEventListener('click', ()=>{
      //if(fieldPassword1==)
      //if(fieldPassword2 == fieldPassword3)
      const fetchData = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("curr-user-id"),
          //email:
          //password:
        }),
      };
      fetch(`http://localhost:5000/petsitter/add-data`, fetchData).then((response) => {
        return response.json();
      });
    });
*/

    cancel2.addEventListener("click", () => {
      container12.style.display = "flex";
      container22.style.display = "none";
      divOldPassword.style.backgroundColor = "#fff";
    });
  });

  const divOldName = createHtmlElement("div", "old-date-settings");
  const divInfo3 = createHtmlElement("div", "first-child");
  const titleOldName = createHtmlElement("p", "", "", "First name and last name");
  const divInputName = createHtmlElement("div", "div-input-text");
  const inputName = createInputElement("text", "first-child"); //-----------------
  inputName.value = `${objData.firstName ? objData.firstName : ""} ${objData.lastName ? objData.lastName : ""} `;
  const divBtn3 = createHtmlElement("div", "", "", "");
  const btnOldName = createHtmlElement("button", "btnSetChange", "", "change");
  divLeftSettings.append(divOldName);
  divOldName.append(divInfo3);
  divOldName.append(divBtn3);
  divInfo3.append(titleOldName);
  divInfo3.append(divInputName);
  divInputName.append(inputName);
  divBtn3.append(btnOldName);

  if (objData.role == "PETSITTER") {
    const divOldSex = createHtmlElement("div", "old-date-settings block-sex"); /*у петса*/ //-----------------
    const divInfo4 = createHtmlElement("div", "");
    const titleOldSex = createHtmlElement("p", "", "", "Sex");
    const formSex = createHtmlElement("form", "form-sex-settings", "", "");
    const divForMan = createHtmlElement("div", "div-input-radio");
    const secMan = createInputElement("radio", "", "Male"); /**/
    secMan.setAttribute("name", "sex");
    const labelMan = createHtmlElement("label", "", "", "Man");
    labelMan.setAttribute("for", "Male");
    const divForWoman = createHtmlElement("div", "div-input-radio");
    const secWoman = createInputElement("radio", "", "Female"); /**/
    secWoman.setAttribute("name", "sex");
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
    const titleOldDateOfBirth = createHtmlElement("p", "", "", "Date of birth"); /*у петса*/
    const divInputDate = createHtmlElement("div", "div-input-date");
    const inputDateOfBirth = createInputElement("date", "");
    inputDateOfBirth.value = `${objData.birth ? objData.birth : ""}`; //-----------------
    divLeftSettings.append(divOldDateOfBirth);
    divOldDateOfBirth.append(divInfo5);
    divInfo5.append(titleOldDateOfBirth);
    divInfo5.append(divInputDate);
    divInputDate.append(inputDateOfBirth);

    divOldDateOfBirth.addEventListener("change", () => {
      objData.birth = inputDateOfBirth.value;
    });
  }

  const title2 = createHtmlElement("h3", "title-child-settings", "", "Contact details");
  divLeftSettings.append(title2);

  const divOldNumber = createHtmlElement("div", "old-date-settings");
  const divInfo6 = createHtmlElement("div", "first-child");
  const titleOldNumber = createHtmlElement("p", "", "", "Phone number");
  const divInputNumber = createHtmlElement("div", "div-input-text");
  const inputNumber = createInputElement("text", "");
  inputNumber.value = `${objData.phone ? objData.phone : ""}`; //-----------------
  divLeftSettings.append(divOldNumber);
  divOldNumber.append(divInfo6);
  divInfo6.append(titleOldNumber);
  divInfo6.append(divInputNumber);
  divInputNumber.append(inputNumber);

  const divOldAdress = createHtmlElement("div", "old-date-settings");
  const divInfo7 = createHtmlElement("div", "first-child");
  const titleOldAdress = createHtmlElement("p", "", "", "Adress");
  const divInputAdress = createHtmlElement("div", "div-input-text");
  const inputAdress = createInputElement("text", "");
  inputAdress.value = `${objData.address ? objData.address : ""}`; //-----------------
  divLeftSettings.append(divOldAdress);
  divOldAdress.append(divInfo7);
  divInfo7.append(titleOldAdress);
  divInfo7.append(divInputAdress);
  divInputAdress.append(inputAdress);

  const divOldCity = createHtmlElement("div", "old-date-settings");
  const divInfo8 = createHtmlElement("div", "first-child");
  const titleOldCity = createHtmlElement("p", "", "", "City");
  const divInputCity = createHtmlElement("div", "div-input-text");
  const inputCity = createInputElement("text", "first-child");
  inputCity.value = `${objData.city ? objData.city : ""}`; //-----------------
  divLeftSettings.append(divOldCity);
  divOldCity.append(divInfo8);
  divInfo8.append(titleOldCity);
  divInfo8.append(divInputCity);
  divInputCity.append(inputCity);

  const btnSave = createHtmlElement("button", "rectangle", "", "Save");
  divLeftSettings.append(btnSave);

  const blockMessage = createHtmlElement("div", "text-block-profile-wrapper");
  const blockMessagediv = createHtmlElement("div", "text-3-wrapper-profile");
  const imgMessage = new Image();
  imgMessage.src = "img/iCharacter.svg";
  const divTextMessage = createHtmlElement("div", "");
  const titleMessage = createHtmlElement("div", "text-profile-medium", "", "What information is shared with others?");
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

  footerFun(document.body);

  btnSave.addEventListener("click", () => {
    objData.firstName = inputName.value.replace(/ +/g, " ").trim().split(" ")[0];
    objData.lastName = inputName.value.replace(/ +/g, " ").trim().split(" ")[1];
    objData.phone = +inputNumber.value;

    if (objData.role == "PETSITTER") {
      //PETSITTER
      const fetchData = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          _id: localStorage.getItem("curr-user-id"),
          address: inputAdress.value,
          city: inputCity.value,
          phone: objData.phone,
          //email:
          //password:
          firstName: objData.firstName,
          lastName: objData.lastName,
          birth: objData.birth,
          gender: objData.gender,
          //photo
        }),
      };
      fetch(`http://localhost:5000/petsitter/add-data`, fetchData).then((response) => {
        return response.json();
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
        body: JSON.stringify({
          _id: localStorage.getItem("curr-user-id"),
          address: inputAdress.value,
          city: inputCity.value, //-
          phone: objData.phone,
          //email:
          //password:
          firstName: objData.firstName,
          lastName: objData.lastName,
          //birth: objData.birth,
          //gender: objData.gender,
          //photo
        }),
      };
      fetch(`http://localhost:5000/petsitter/add-data`, fetchData).then((response) => {
        return response.json();
      });
    }
  });

  return document.body;
}
/*-------------------------------------------------------*/
