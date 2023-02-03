import { createHtmlElement } from "../../utils";

const loginSection = createHtmlElement('section', 'login-section');

function renderLoginPage(){
  loginSection.innerHTML = '';
  const loginLayout = createHtmlElement('div', 'login-layout');
  loginSection.append(loginLayout);
  const loginBlockWrapper = createHtmlElement('div', 'login-block-wrapper');
  loginLayout.append(loginBlockWrapper);
  const titleLogin = createHtmlElement('h1', 'login-title', '', 'Petsy');
  loginBlockWrapper.append(titleLogin);
  const textAfterTitleLogin = createHtmlElement('div', 'text-after-title-login','', 'Welcome back!');
  loginBlockWrapper.append(textAfterTitleLogin);
  const inputLoginEmail = createHtmlElement('input', 'input-login-email input-login');
  const inputLoginPassword = createHtmlElement('input', 'input-login-password input-login');
  loginBlockWrapper.append(inputLoginEmail);
  loginBlockWrapper.append(inputLoginPassword);
  const emailTextError = createHtmlElement('p', 'email-text-error-login', '', 'Incorrect email format');
  inputLoginEmail.after(emailTextError);
  const passwordTextError = createHtmlElement('p', 'password-text-error-login', '', 'Enter your password');
  inputLoginPassword.after(passwordTextError);
  const btnLogin = createHtmlElement('button', 'btn-login', '', 'Log in');
  if(btnLogin instanceof HTMLButtonElement){
    btnLogin.type = 'submit';
  }
  loginBlockWrapper.append(btnLogin);
  if(inputLoginEmail instanceof HTMLInputElement){
    inputLoginEmail.type = 'email';
    inputLoginEmail.placeholder = 'E-mail';
    inputLoginEmail.setAttribute("required", "");
    btnLogin.addEventListener('click', ()=>{
        if(!inputLoginEmail.checkValidity() && !emailTextError.classList.contains('active')){
            emailTextError.classList.add('active');
        }else if(inputLoginEmail.checkValidity() && emailTextError.classList.contains('active')){
            emailTextError.classList.remove('active');
            inputLoginEmail.value = '';
        }
      })
    }
    if(inputLoginPassword instanceof HTMLInputElement){
      inputLoginPassword.type = 'text';
      inputLoginPassword.setAttribute("required", "");
      inputLoginPassword.placeholder = 'Password';
      btnLogin.addEventListener('click', ()=>{
          if(!inputLoginPassword.checkValidity() && !passwordTextError.classList.contains('active')){
            passwordTextError.classList.add('active');
          }else if(inputLoginPassword.checkValidity() && passwordTextError.classList.contains('active')){
            passwordTextError.classList.remove('active');
          }
      })
    }
  const registText = createHtmlElement('div', 'registration-text-login');
  registText.innerHTML = '<p>Would you like to join Petsy? <a class = "link-for-registr-in-login" href = "/auth/register/owner">Create an account</a></p>';
  loginBlockWrapper.append(registText);
  return loginSection;
}


export default function authLogin() {
  document.body.innerHTML = ''
    renderLoginPage();
    return document.body.append(loginSection);

}
