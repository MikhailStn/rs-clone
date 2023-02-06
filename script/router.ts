import petsAddShowPage from "./pages/commonPages/petsAdd";
import petsitters from "./pages/petsitters/petsitters";
import authLogin from "./pages/login/authLogin";
import searchShowPage from "./pages/commonPages/search";
import mainShowPage from "./pages/commonPages/main";
import errorShowPage from "./pages/404Page/errorPage";
import authRegister from "./pages/login/authRegistration";
import authPetsitterForm from "./pages/login/authForm";

export const router = () => {
  type Rout = {
    path: string;
    template: () => void;
  };
  const routes: Rout[] = [
    {
      path: "404",
      template: errorShowPage,
    },
    {
      path: "/auth/login",
      template: authLogin,
    },
    {
      path: "/auth/register/petsitter",
      template: authRegister,
    },
    {
      path: "/auth/register/owner",
      template: authRegister,
    },
    {
      path: "/petsitter",
      template: petsitters,
    },
    {
      path: "/pets/add",
      template: petsAddShowPage,
    },
    {
      path: "/search",
      template: searchShowPage,
    },
    {
      path: "/auth/register/form",
      template: authPetsitterForm,
    },
    {
      path: "/",
      template: mainShowPage,
    },
  ];

  function router(link: HTMLAnchorElement) {
    const { href } = link;

    history.pushState("", "", href);

    window.dispatchEvent(new Event("popstate"));
  }

  document.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      event.preventDefault();
      router(event.target);
    }

    const { parentElement } = event.target as HTMLLinkElement;

    if (parentElement instanceof HTMLAnchorElement) {
      event.preventDefault();
      router(parentElement);
    }
  });

  const renderUI = () => {
    const route = routes.find((route) => window.location.pathname.includes(route.path));

    if (route) {
      route.template();
    } else {
      routes[0].template();
    }
  };

  window.addEventListener("popstate", renderUI);

  window.addEventListener("DOMContentLoaded", renderUI);
};
