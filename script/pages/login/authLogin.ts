import { createHtmlElement } from "../../utils";

const loginSection = createHtmlElement("section", "login-section");
function renderLoginPage() {
  loginSection.innerHTML = "";
  const loginLayout = createHtmlElement("div", "login-layout");
  loginSection.append(loginLayout);
  const loginBlockWrapper = createHtmlElement("div", "login-block-wrapper");
  loginLayout.append(loginBlockWrapper);
  const titleLogin = createHtmlElement("h1", "login-title", "", "Petsi");
  loginBlockWrapper.append(titleLogin);
  const textAfterTitleLogin = createHtmlElement(
    "div",
    "text-after-title-login",
    "",
    "Welcome back!"
  );
  loginBlockWrapper.append(textAfterTitleLogin);
  const formLogin = createHtmlElement(
    "form",
    "form-login",
    "form-login"
  ) as HTMLFormElement;
  loginBlockWrapper.append(formLogin);
  const inputLoginEmail = createHtmlElement(
    "input",
    "input-login-email input-login"
  ) as HTMLInputElement;
  const inputLoginPassword = createHtmlElement(
    "input",
    "input-login-password input-login"
  ) as HTMLInputElement;
  formLogin.append(inputLoginEmail);
  formLogin.append(inputLoginPassword);
  const emailTextError = createHtmlElement(
    "p",
    "email-text-error-login",
    "email-error",
    "Incorrect email format"
  );
  inputLoginEmail.after(emailTextError);
  const passwordTextError = createHtmlElement(
    "p",
    "password-text-error-login",
    "password-error",
    "Enter your password"
  );
  inputLoginPassword.after(passwordTextError);


  const btnLogin = createHtmlElement("button", "btn-login", "", "Log in");
  if (btnLogin instanceof HTMLButtonElement) {
    btnLogin.type = "submit";
  }
  formLogin.append(btnLogin);
  btnLogin.addEventListener("click", () => {
    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: `${inputLoginEmail.value}`,
        password: `${inputLoginPassword.value}`,
      }),
    };
    fetch(`http://localhost:5000/auth/login`, fetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("curr-user-id", `${data.id}`);
        console.log(localStorage.getItem("curr-user-id"));
      });
  });

  inputLoginEmail.type = "email";
  inputLoginEmail.name = "email";
  inputLoginEmail.placeholder = "E-mail";
  inputLoginEmail.setAttribute("required", "");
  inputLoginEmail.addEventListener("input", () => {
    if (
      inputLoginEmail.checkValidity() &&
      emailTextError.classList.contains("active")
    ) {
      emailTextError.classList.remove("active");
    }
  });
  btnLogin.addEventListener("click", () => {
    if (
      !inputLoginEmail.checkValidity() &&
      !emailTextError.classList.contains("active")
    ) {
      emailTextError.classList.add("active");
    } else if (
      inputLoginEmail.checkValidity() &&
      emailTextError.classList.contains("active")
    ) {
      emailTextError.classList.remove("active");
      inputLoginEmail.value = "";
    }
  });

  inputLoginPassword.type = "password";
  inputLoginPassword.name = "password";
  inputLoginPassword.setAttribute("required", "");
  inputLoginPassword.placeholder = "Password";
  inputLoginPassword.addEventListener("input", () => {
    if (
      inputLoginPassword.checkValidity() &&
      passwordTextError.classList.contains("active")
    ) {
      passwordTextError.classList.remove("active");
    }
  });
  btnLogin.addEventListener("click", () => {
    if (
      !inputLoginPassword.checkValidity() &&
      !passwordTextError.classList.contains("active")
    ) {
      passwordTextError.classList.add("active");
    } else if (
      inputLoginPassword.checkValidity() &&
      passwordTextError.classList.contains("active")
    ) {
      passwordTextError.classList.remove("active");
    }
  });

  const registText = createHtmlElement("div", "registration-text-login");
  registText.innerHTML =
    '<p>Would you like to join Petsi? <a class = "link-for-registr-in-login" href = "/auth/register/owner">Create an account</a></p>';
  loginBlockWrapper.append(registText);
  return loginSection;
}

export default function authLogin() {
  document.body.innerHTML = "";
  renderLoginPage();
  return document.body.append(loginSection);
  document.body.innerHTML = "";
  renderLoginPage();
  return document.body.append(loginSection);
}
