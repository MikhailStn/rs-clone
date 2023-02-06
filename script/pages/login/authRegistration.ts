import { createHtmlElement } from "../../utils";
import { footerFun } from "../pageComponents/footer";
import { header } from "../pageComponents/headers";

const registrationSection = createHtmlElement('section', 'registration-section');

function renderRegistrPage(role: string) {
  registrationSection.innerHTML = '';
  const regitrBlockWrapper = createHtmlElement('div', 'registration-block-wrapper');
  registrationSection.append(regitrBlockWrapper);
  const imageRegistWrap = createHtmlElement('div', 'img-registration-wrapper');
  const imgRegitration = createHtmlElement('img', 'img-registration');
  if (imgRegitration instanceof HTMLImageElement) {
    role === 'owner' ? imgRegitration.src = 'https://petsy.pl/_next/image/?url=%2Fimages%2Fregister_owner.jpg&w=1920&q=75' : imgRegitration.src = 'https://petsy.pl/_next/image/?url=%2Fimages%2Fregister_petsitter.jpg&w=1920&q=75';
    role === 'owner' ? imgRegitration.alt = 'girl with cat' : imgRegitration.alt = 'white dog';
  }
  regitrBlockWrapper.append(imageRegistWrap);
  imageRegistWrap.append(imgRegitration);
  const blockInputsAndText = createHtmlElement('div', 'block-inputs-text-registration');
  regitrBlockWrapper.append(blockInputsAndText);
  const linkOnMain = createHtmlElement('a', 'link-on-main-from-registration', '', 'Back to home page');
  blockInputsAndText.append(linkOnMain);
  const textForRegistrRole = createHtmlElement('h1', 'text-for-registration-role');
  role === 'owner' ? textForRegistrRole.innerHTML = 'Time for you and the best care for your pet' : textForRegistrRole.innerHTML = 'Become a petsitter. Earn by spending time among animals';
  blockInputsAndText.append(textForRegistrRole);
  const textRegistrLike = createHtmlElement('div', 'text-registration-as', '', 'Register as:');
  blockInputsAndText.append(textRegistrLike);
  const blockLinkRole = createHtmlElement('div', 'block-link-role-registration');
  blockInputsAndText.append(blockLinkRole);
  const linkOwner = createHtmlElement('a', '', '', 'Pet owner');
  role === 'owner' ? linkOwner.className = 'link-owner-registration active' : linkOwner.className = 'link-owner-registration';
  blockLinkRole.append(linkOwner);
  const linkPetsit = createHtmlElement('a', 'link-petsitter-registration', '', 'Petsitter');
  role === 'owner' ? linkPetsit.className = 'link-petsitter-registration' : linkPetsit.className = 'link-petsitter-registration active';
  blockLinkRole.append(linkPetsit);
  if (linkPetsit instanceof HTMLAnchorElement && linkOwner instanceof HTMLAnchorElement && linkOnMain instanceof HTMLAnchorElement) {
    linkOnMain.href = '/';
    linkPetsit.href = '/auth/register/petsitter';
    linkOwner.href = '/auth/register/owner';
  }
  const formRegistration = createHtmlElement('form','registration-form', `registation-form-${role}`);
  blockInputsAndText.append(formRegistration);
  const inputPlaceOfLive = createHtmlElement('input', 'input-place-of-live input-registration', 'city');
  const dataListCity = createHtmlElement('datalist','','city-variable') as HTMLDListElement;
  dataListCity.innerHTML= '<option value="Minsk"></option><option value="Brest"></option><option value="Vitebsk"></option><option value="Grodno"></option><option value="Gomel"></option><option value="Mogilev"></option>';
  const placeTextError = createHtmlElement('p', 'city-text-error-registration text-error-registration', 'city-error', 'Enter city from list');
  formRegistration.append(inputPlaceOfLive);
  inputPlaceOfLive.after(dataListCity);
  inputPlaceOfLive.after(placeTextError);
  if (inputPlaceOfLive instanceof HTMLInputElement) {
    inputPlaceOfLive.type = 'text';
    inputPlaceOfLive.name = 'af2Km9q';
    inputPlaceOfLive.placeholder = 'City';
    inputPlaceOfLive.pattern = "[Mm]insk|[Bb]rest|[Vv]itebsk|[Gg]rodno|[Gg]omel|[Mm]ogilev";
    inputPlaceOfLive.setAttribute("list", "city-variable");
    inputPlaceOfLive.setAttribute("autocomplete","off");
    inputPlaceOfLive.setAttribute("required", "");
  }
  inputPlaceOfLive.addEventListener('input', checkValidity);
  const blockNameInputs = createHtmlElement('div', 'block-names-inputs');
  formRegistration.append(blockNameInputs);
  const inputFirstName = createHtmlElement('input', 'input-firstname input-registration', 'firstname');
  const firstNameTextError = createHtmlElement('p', 'first-name-text-error-registration text-error-registration', 'first-name-error', 'Enter your name');
  blockNameInputs.append(inputFirstName);
  inputFirstName.after(firstNameTextError);
  if (inputFirstName instanceof HTMLInputElement) {
    inputFirstName.type = 'text';
    inputFirstName.placeholder = 'Firstname';
    inputFirstName.name = 'firstname';
    inputFirstName.setAttribute("required", "");
  }
  inputFirstName.addEventListener('input', checkValidity);
  const inputLastName = createHtmlElement('input', 'input-lastname input-registration', 'lastname');
  const lastNameTextError = createHtmlElement('p', 'last-name-text-error-registration text-error-registration', 'last-name-error', 'Enter your lastname');
  blockNameInputs.append(inputLastName);
  inputLastName.after(lastNameTextError);
  if (inputLastName instanceof HTMLInputElement) {
    inputLastName.type = 'text';
    inputLastName.placeholder = 'Lastname';
    inputLastName.name = 'lastname';
    inputLastName.setAttribute("required", "");
  }
  inputLastName.addEventListener('input', checkValidity);
  const inputNumber = createHtmlElement('input', 'input-phone-number input-registration', 'phone-number');
  const phoneTextError = createHtmlElement('p', 'phone-text-error-registration text-error-registration', 'phone-error', 'Enter your correct phone');
  formRegistration.append(inputNumber);
  inputNumber.after(phoneTextError);
  if (inputNumber instanceof HTMLInputElement) {
    inputNumber.type = 'text';
    inputNumber.placeholder = 'Phone number without "+"';
    inputNumber.name = 'phone';
    inputNumber.pattern = "^[0-9]{9,}$";
    inputNumber.setAttribute("required", "");
  }
  inputNumber.addEventListener('input', checkValidity);
  const emailInput = createHtmlElement('input', 'input-email-registration input-registration', 'email');
  const emailTextError = createHtmlElement('p', 'email-error-registration text-error-registration', 'email-error-registration', 'Enter your correct email');
  formRegistration.append(emailInput);
  emailInput.after(emailTextError);
  if (emailInput instanceof HTMLInputElement) {
    emailInput.type = 'email';
    emailInput.placeholder = 'E-mail';
    emailInput.name = 'email';
    emailInput.setAttribute("required", "");
  }
  emailInput.addEventListener('input', checkValidity);
  const inputPassword = createHtmlElement('input', 'input-password-registration input-registration', 'password') as HTMLInputElement;
  const passwordTextError = createHtmlElement('p', 'password-error-registration text-error-registration', 'password-error-registration', 'Your password must be 4 to 10 characters long');
  formRegistration.append(inputPassword);
  inputPassword.after(passwordTextError);
  if (inputPassword instanceof HTMLInputElement) {
    inputPassword.type = 'password';
    inputPassword.placeholder = 'Password';
    inputPassword.name = 'password';
    inputPassword.pattern = "^(.){4,10}$";
    inputPassword.setAttribute("required", "");
  }
  inputPassword.addEventListener('input', checkValidity);
  const inputSecondPassword = createHtmlElement('input', 'input-repeat-password-registration input-registration', 'repeat-password');
  const secondPasswordTextError = createHtmlElement('p', 'sec-passw-error-registration text-error-registration active', 'second-password-error', 'Your passwords don\'t match!');
  formRegistration.append(inputSecondPassword);
  inputSecondPassword.after(secondPasswordTextError);
  const btnRegistration = createHtmlElement('button', 'btn-registration', `btn-registration-${role}`) as HTMLButtonElement;
  if (inputSecondPassword instanceof HTMLInputElement) {
    inputSecondPassword.type = 'password';
    inputSecondPassword.placeholder = 'Repeat password';
    inputSecondPassword.name = 'repeatPassword';
    inputSecondPassword.pattern = "^(.){4,10}$";
    inputSecondPassword.setAttribute("required", "");
    btnRegistration.addEventListener('click',(event)=>{
      if(inputPassword.value !== inputSecondPassword.value){
        event.preventDefault();
        secondPasswordTextError.classList.remove("active");
      }else{
        secondPasswordTextError.classList.add("active");
      }
    })
    inputSecondPassword.addEventListener('input',()=>{
      if(inputPassword.value !== inputSecondPassword.value){
        secondPasswordTextError.classList.remove("active");
      }else{
        secondPasswordTextError.classList.add("active");
      }
    })
  }
  role === "owner" ? (
    btnRegistration.innerHTML = 'Register as a pet owner',
    btnRegistration.id = "registration-pet-owner") : (
    btnRegistration.innerHTML = 'Register as a petsitter',
    btnRegistration.id = 'registration-petsitter');
  formRegistration.append(btnRegistration);
  if (btnRegistration instanceof HTMLButtonElement) {
    btnRegistration.type = 'submit';
    btnRegistration.disabled = true;
  }
  formRegistration.addEventListener('input', (event)=>{
    checkValidityForm(event, btnRegistration);
  });

  const textQuestion = createHtmlElement('div', 'text-question-registration');
  textQuestion.innerHTML = '<p>Already have an account on Petsi?<a class="link-sign-in-registration" href = "/auth/login">Sign in</a></p>';
  blockInputsAndText.append(textQuestion);
}

function checkValidity(event: Event) {
  const input = event.target;
    if(input instanceof HTMLInputElement && !input.checkValidity()){
      if(input.nextElementSibling)input.nextElementSibling.classList.add('active');
    }else if(input instanceof HTMLInputElement){
      if(input.nextElementSibling)input.nextElementSibling.classList.remove('active');
    }
}
function checkValidityForm(event: Event, button:HTMLButtonElement) {
  if(event.target && event.target instanceof HTMLInputElement){
    const formNode = event.target.form;
    if(formNode){
    const isValid = formNode.checkValidity();
    button.disabled = !isValid;
  }
}
}


export default function authRegister() {
    document.body.innerHTML = '';
    header(document.body);
    const path = window.location.pathname;
    const role = path.split('/')[3];
    renderRegistrPage(role);
    document.body.append(registrationSection);
    footerFun(document.body);
    return document.body;
  }

