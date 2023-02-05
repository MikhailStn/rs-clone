import { createHtmlElement } from "../../utils";
const registrationSection = createHtmlElement(
  "section",
  "registration-section"
);

function renderRegistrPage(role: string) {
  registrationSection.innerHTML = "";
  const regitrBlockWrapper = createHtmlElement(
    "div",
    "registration-block-wrapper"
  );
  registrationSection.append(regitrBlockWrapper);
  const imageRegistWrap = createHtmlElement("div", "img-registration-wrapper");
  const imgRegitration = createHtmlElement("img", "img-registration");
  if (imgRegitration instanceof HTMLImageElement) {
    role === "owner"
      ? (imgRegitration.src =
          "https://petsy.pl/_next/image/?url=%2Fimages%2Fregister_owner.jpg&w=1920&q=75")
      : (imgRegitration.src =
          "https://petsy.pl/_next/image/?url=%2Fimages%2Fregister_petsitter.jpg&w=1920&q=75");
  }
  regitrBlockWrapper.append(imageRegistWrap);
  imageRegistWrap.append(imgRegitration);
  const blockInputsAndText = createHtmlElement(
    "div",
    "block-inputs-text-registration"
  );
  regitrBlockWrapper.append(blockInputsAndText);
  const linkOnMain = createHtmlElement(
    "a",
    "link-on-main-from-registration",
    "",
    "Back to home page"
  );
  blockInputsAndText.append(linkOnMain);
  const textForRegistrRole = createHtmlElement(
    "h1",
    "text-for-registration-role"
  );
  role === "owner"
    ? (textForRegistrRole.innerHTML =
        "Time for you and the best care for your pet")
    : (textForRegistrRole.innerHTML =
        "Become a petsitter. Earn by spending time among animals");
  blockInputsAndText.append(textForRegistrRole);
  const textRegistrLike = createHtmlElement(
    "div",
    "text-registration-as",
    "",
    "Register as:"
  );
  blockInputsAndText.append(textRegistrLike);
  const blockLinkRole = createHtmlElement(
    "div",
    "block-link-role-registration"
  );
  blockInputsAndText.append(blockLinkRole);
  const linkOwner = createHtmlElement("a", "", "", "Pet owner");
  role === "owner"
    ? (linkOwner.className = "link-owner-registration active")
    : (linkOwner.className = "link-owner-registration");
  blockLinkRole.append(linkOwner);
  const linkPetsit = createHtmlElement(
    "a",
    "link-petsitter-registration",
    "",
    "Petsitter"
  );
  role === "owner"
    ? (linkPetsit.className = "link-petsitter-registration")
    : (linkPetsit.className = "link-petsitter-registration active");
  blockLinkRole.append(linkPetsit);
  if (
    linkPetsit instanceof HTMLAnchorElement &&
    linkOwner instanceof HTMLAnchorElement &&
    linkOnMain instanceof HTMLAnchorElement
  ) {
    linkOnMain.href = "/";
    linkPetsit.href = "/auth/register/petsitter";
    linkOwner.href = "/auth/register/owner";
  }
  const inputPlaceOfLive = createHtmlElement(
    "input",
    "input-place-of-live input-registration",
    "city"
  ) as HTMLInputElement;
  blockInputsAndText.append(inputPlaceOfLive);
  if (inputPlaceOfLive instanceof HTMLInputElement) {
    inputPlaceOfLive.type = "text";
    inputPlaceOfLive.placeholder = "City";
  }
  const blockNameInputs = createHtmlElement("div", "block-names-inputs");
  blockInputsAndText.append(blockNameInputs);
  const inputFirstName = createHtmlElement(
    "input",
    "input-firstname input-registration",
    "firstname"
  ) as HTMLInputElement;
  blockNameInputs.append(inputFirstName);
  if (inputFirstName instanceof HTMLInputElement) {
    inputFirstName.type = "text";
    inputFirstName.placeholder = "Firstname";
  }
  const inputLastName = createHtmlElement(
    "input",
    "input-lastname input-registration",
    "lastname"
  ) as HTMLInputElement;
  blockNameInputs.append(inputLastName);
  if (inputLastName instanceof HTMLInputElement) {
    inputLastName.type = "text";
    inputLastName.placeholder = "Lastname";
  }
  const inputNumber = createHtmlElement(
    "input",
    "input-phone-number input-registration",
    "phone-number"
  ) as HTMLInputElement;
  blockInputsAndText.append(inputNumber);
  if (inputNumber instanceof HTMLInputElement) {
    inputNumber.type = "text";
    inputNumber.placeholder = "Phone number";
  }
  const emailInput = createHtmlElement(
    "input",
    "input-email-registration input-registration",
    "email"
  ) as HTMLInputElement;
  blockInputsAndText.append(emailInput);
  if (emailInput instanceof HTMLInputElement) {
    emailInput.type = "email";
    emailInput.placeholder = "E-mail";
  }
  const inputPassword = createHtmlElement(
    "input",
    "input-password-registration input-registration",
    "password"
  ) as HTMLInputElement;
  blockInputsAndText.append(inputPassword);
  if (inputPassword instanceof HTMLInputElement) {
    inputPassword.type = "text";
    inputPassword.placeholder = "Password";
  }
  const inputSecondPassword = createHtmlElement(
    "input",
    "input-repeat-password-registration input-registration",
    "repeat-password"
  ) as HTMLInputElement;
  blockInputsAndText.append(inputSecondPassword);
  if (inputSecondPassword instanceof HTMLInputElement) {
    inputSecondPassword.type = "text";
    inputSecondPassword.placeholder = "Repeat password";
  }
  const btnRegistration = createHtmlElement(
    "button",
    "btn-registration",
    "",
    "Register as a pet owner"
  );
  role === "owner"
    ? ((btnRegistration.innerHTML = "Register as a pet owner"),
      (btnRegistration.id = "registration-pet-owner"))
    : ((btnRegistration.innerHTML = "Register as a petsitter"),
      (btnRegistration.id = "registration-petsitter"));
  blockInputsAndText.append(btnRegistration);
  if (btnRegistration instanceof HTMLButtonElement) {
    btnRegistration.type = "submit";
  }
  btnRegistration.addEventListener("click", () => {
    let link = "";
    let role = "";
    if (btnRegistration.id == "registration-pet-owner") {
      link = "http://localhost:5000/auth/register/owner";
      role = "OWNER";
    } else if (btnRegistration.id == "registration-petsitter") {
      link = "http://localhost:5000/auth/register/petsitter";
      role = "PETSITTER";
    }
    if (inputPassword.value == inputSecondPassword.value) {
      const fecthData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          firstName: `${inputFirstName.value}`,
          lastName: `${inputLastName.value}`,
          city: `${inputPlaceOfLive.value}`,
          email: `${emailInput.value}`,
          password: `${inputPassword.value}`,
          phone: Number(inputNumber.value),
          role: role,
          pets: [],
        }),
      };
      fetch(`${link}`, fecthData)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          localStorage.setItem("curr-user-id", `${data.id}`)
          console.log(localStorage.getItem("curr-user-id"));
        });
    } else {
      console.log("Пароли не совпадают");
    }
  });
  const textQuestion = createHtmlElement("div", "text-question-registration");
  textQuestion.innerHTML =
    '<p>Already have an account on Petsy?<a class="link-sign-in-registration" href = "/auth/login">Sign in</a></p>';
  blockInputsAndText.append(textQuestion);
}

export default function authRegister() {
  const main = document.querySelector(".main");
  if (main) {
    console.log(window.location.pathname);
    const path = window.location.pathname;
    const role = path.split("/")[3];
    main.innerHTML = "";
    renderRegistrPage(role);
    return main?.append(registrationSection);
  }
}
