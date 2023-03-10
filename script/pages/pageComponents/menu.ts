import { createHtmlElement } from "../../utils";
import { getUser } from "../../commonFunction/getUser";

const sectionMenuField = createHtmlElement("div", "section-menu-field");

/*interface DataUser {
    firstName: string,
    lastName: string,
    city: string,
    email: string,
    password: string,
    phone: number,
    role: string,
    pets: object[];
}*/

function renderCommonMenu() {
  sectionMenuField.innerHTML = "";
  const sectionMenu = createHtmlElement("div", "section-menu");
  sectionMenuField.append(sectionMenu);
  const overlay = createHtmlElement("div", "overlay");
  document.body.append(overlay);
  overlay.addEventListener("click", () => {
    sectionMenuField.classList.remove("active");
    document.body.style.overflow = "";
    overlay.classList.remove("active");
  });
  const btnCreatAccMenuWrapper = createHtmlElement(
    "div",
    "btn-create-acc-menu-wrapper"
  );
  const btnCreatAccMenu = createHtmlElement(
    "button",
    "btn-create-acc-menu",
    "",
    "Create account"
  );
  sectionMenu.append(btnCreatAccMenuWrapper);
  btnCreatAccMenuWrapper.append(btnCreatAccMenu);
  btnCreatAccMenu.addEventListener("click", (event) => {
    event.preventDefault();
    history.pushState("", "", "/auth/register/owner");
    window.dispatchEvent(new Event("popstate"));
    sectionMenuField.classList.remove("active");
    document.body.style.overflow = "";
  });
  const block1 = createBlockMenu(
    "img/loupeDark2.svg",
    "Find a petsitter",
    "loupe-menu"
  );
  sectionMenu.append(block1);
  block1.addEventListener("click", () => {
    history.pushState("", "", "/search");
    window.dispatchEvent(new Event("popstate"));
    sectionMenuField.classList.remove("active");
    document.body.style.overflow = "";
  });
  const block2 = createBlockMenu("img/paw.svg", "Become a petsitter", "");
  sectionMenu.append(block2);
  block2.addEventListener("click", () => {
    history.pushState("", "", "/petsitter");
    window.dispatchEvent(new Event("popstate"));
    sectionMenuField.classList.remove("active");
    document.body.style.overflow = "";
  });
  const block3 = createBlockMenu("img/exitLogIn.svg", "Log in", "");
  sectionMenu.append(block3);
  block3.addEventListener("click", () => {
    history.pushState("", "", "/auth/login");
    window.dispatchEvent(new Event("popstate"));
    sectionMenuField.classList.remove("active");
    document.body.style.overflow = "";
  });
}

async function renderRoleMenu() {
  sectionMenuField.innerHTML = "";
  const user = await getUser();
  const userInfo = user.item;
  const sectionMenu = createHtmlElement("div", "section-menu");
  sectionMenuField.append(sectionMenu);
  const overlay = createHtmlElement("div", "overlay");
  document.body.append(overlay);
  /*if(window.location.pathname === '/' || window.location.pathname === '/search'){
        overlay.style.display = 'block';
    }else{
        overlay.style.display = 'none';
    }*/
  overlay.addEventListener("click", () => {
    sectionMenuField.classList.remove("active");
    document.body.style.overflow = "";
    overlay.classList.remove("active");
  });
  const roleBlockIdentity = createHtmlElement(
    "div",
    "role-block-menu-identity"
  );
  sectionMenu.append(roleBlockIdentity);
  const imgRoleWrapper = createHtmlElement("div", "img-menu-role-wrapper");
  roleBlockIdentity.append(imgRoleWrapper);
  const imgRoleMenu = new Image();
  if (userInfo.avatarPath === "" || userInfo.avatarPath === undefined) {
    imgRoleMenu.src = "img/personLogo.svg";
  } else {
    imgRoleMenu.src = userInfo.avatarPath;
    imgRoleMenu.style.width = "100%";
    imgRoleMenu.style.height = "100%";
    imgRoleMenu.style.objectFit = "cover";
    imgRoleMenu.style.borderRadius = "50%";
  }
  imgRoleMenu.className = "img-role-menu";
  imgRoleWrapper.append(imgRoleMenu);
  const roleTextWrapMenu = createHtmlElement("div", "role-text-wrapper-menu");
  roleBlockIdentity.append(roleTextWrapMenu);
  const textNameMenuRole = createHtmlElement(
    "div",
    "text-name-menu-role",
    "",
    `${userInfo.firstName} ${userInfo.lastName}`
  );
  roleTextWrapMenu.append(textNameMenuRole);
  const emailTextMenuRole = createHtmlElement(
    "div",
    "text-email-menu-role",
    "",
    `${userInfo.email}`
  );
  roleTextWrapMenu.append(emailTextMenuRole);

  const block4 = createBlockMenu("img/order.svg", "My orders");
  sectionMenu.append(block4);
  block4.addEventListener("click", () => {
    userInfo.role === "OWNER"
      ? history.pushState("", "", "/owner/orders")
      : history.pushState("", "", "/petsitter/orders");
    window.dispatchEvent(new Event("popstate"));
    document.body.style.overflow = "";
    sectionMenuField.classList.remove("active");
  });
  /*const block5 = createBlockMenu('img/giftRecommend.svg', 'Recommend and get 10 BYN', 'recommend-logo-menu');
    sectionMenu.append(block5);
    block5.addEventListener('click', () => {
        history.pushState("", "", "/invite");
        window.dispatchEvent(new Event("popstate"));
        document.body.style.overflow = '';
    })*/

  if (userInfo.role === "OWNER") {
    const block6 = createBlockMenu(
      "img/loupeDark2.svg",
      "Find a petsitter",
      "loupe-menu"
    );
    sectionMenu.append(block6);
    block6.addEventListener("click", () => {
      history.pushState("", "", "");
      window.dispatchEvent(new Event("popstate"));
      document.body.style.overflow = "";
      sectionMenuField.classList.remove("active");
    });
    const block7 = createBlockMenu("img/paw.svg", "My pets");
    sectionMenu.append(block7);
    block7.addEventListener("click", () => {
      history.pushState("", "", "/owner/pets");
      window.dispatchEvent(new Event("popstate"));
      document.body.style.overflow = "";
      sectionMenuField.classList.remove("active");
    });
  }

  if (userInfo.role === "PETSITTER") {
    const block8 = createBlockMenu("img/calendar2.svg", "My calendar");
    sectionMenu.append(block8);
    block8.addEventListener("click", () => {
      history.pushState("", "", "/petsitter/calendar");
      window.dispatchEvent(new Event("popstate"));
      document.body.style.overflow = "";
      sectionMenuField.classList.remove("active");
    });
    const block9 = createBlockMenu("img/profileLogo2.svg", "My Profile");
    sectionMenu.append(block9);
    block9.addEventListener("click", () => {
      history.pushState("", "", "/petsitter/profile/basics");
      window.dispatchEvent(new Event("popstate"));
      document.body.style.overflow = "";
      sectionMenuField.classList.remove("active");
    });
    const block10 = createBlockMenu("img/star.svg", "My reviews");
    sectionMenu.append(block10);
    block10.addEventListener("click", () => {
      history.pushState("", "", "/petsitter/reviews/");
      window.dispatchEvent(new Event("popstate"));
      document.body.style.overflow = "";
      sectionMenuField.classList.remove("active");
    });
  }

  const block11 = createBlockMenu("img/tool.svg", "Account settings");
  sectionMenu.append(block11);
  block11.addEventListener("click", () => {
    userInfo.role === "OWNER"
      ? history.pushState("", "", "/owner/settings/personal-data")
      : history.pushState("", "", "/petsitter/settings/personal-data");
    window.dispatchEvent(new Event("popstate"));
    document.body.style.overflow = "";
    sectionMenuField.classList.remove("active");
  });

  const btnLogOut = createHtmlElement(
    "button",
    "btn-log-out-menu",
    "btn-log-out-menu",
    "Log Out"
  );
  sectionMenu.append(btnLogOut);
  btnLogOut.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.clear();
    sectionMenuField.classList.remove("active");
    document.body.style.overflow = "";
    history.pushState("", "", "");
    window.dispatchEvent(new Event("popstate"));
  });

  return sectionMenu;
}

export function createBlockMenu(src: string, text: string, className?: string) {
  const blockMenuWrapper = createHtmlElement("div", "block-menu-wrapper");
  const blockSvg = new Image();
  blockSvg.src = src;
  blockSvg.className = `block-menu-svg ${className}`;
  blockMenuWrapper.append(blockSvg);
  const textBlockMenu = createHtmlElement(
    "div",
    "text-block-menu",
    "",
    `${text}`
  );
  blockMenuWrapper.append(textBlockMenu);
  return blockMenuWrapper;
}

export async function createMenu() {
  if (!localStorage.getItem("curr-user-id")) {
    sectionMenuField.innerHTML = "";
    renderCommonMenu();
    return sectionMenuField;
  } else {
    sectionMenuField.innerHTML = "";
    renderRoleMenu();
    return sectionMenuField;
  }
}
