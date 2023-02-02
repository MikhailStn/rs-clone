import { createElementWithClass } from "./utils";
import petsAddShowPage from "./pages/commonPages/petsAdd";
import petsitters from "./pages/petsitters/petsitters";
import authLogin from "./pages/login/authLogin";
import authRegPetsit from "./pages/login/authRegPetsit";
import searchShowPage from "./pages/commonPages/search";
import mainShowPage from "./pages/commonPages/main";

export const test = () => {
  const div = createElementWithClass("div", "container");
  div.textContent = "Rs clone";
  const h1 = createElementWithClass("h1", "h1");
  h1.textContent = "This is our work";
  document.body.append(h1);
  document.body.append(div);

  type Rout = {
    path: string;
    template: () => void;
  };
  const routes: Rout[] = [
    {
      path: "/auth/login",
      template: authLogin,
    },
    {
      path: "/auth/register/petsitter",
      template: authRegPetsit,
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
      path: "/",
      template: mainShowPage,
    },
  ];

  function router(link: HTMLAnchorElement) {
    const { href } = link;
    /*localStorage.setItem("idOfProduct", id);
    if (isNaN(Number(id))) {*/
    history.pushState("", "", href);
    /*} else {
    history.pushState("", "", `${href}/${id}`);
    }*/
    console.log("route!!!!");
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
  //const regex = /(http[s]?:\/\/)?([^\/\s]+\/)([^\/\s]+\/)(.*)/;
  //const regex2 = /(\d+)*/;

  //let m: RegExpExecArray | null;

  /*const renderUI = () => {
    const url = window.location.pathname;
    console.log("renderUI !!!!");
    //let route = routes.find((route) => window.location.pathname.includes(route.path));
    if (url === "/auth/login") {
      routes[0].template();
    } else if (url === "/auth/register/petsitter") {
      routes[1].template();
    } else if (url === "/petsitter") {
      routes[2].template();
    } else if (url === "/pets/add") {
      routes[3].template();
    } else if (url === "/search") {
      routes[4].template();
    } else if (url === "/" || url === "//") {
      routes[5].template();
    } else {
      routes[0].template();
    }

    /*if (route) {
      route.template();
  } else {
      routes[0].template();
  }
  };*/

  const renderUI = () => {
    const route = routes.find((route) =>
      window.location.pathname.includes(route.path)
    );

    if (route) {
      route.template();
    } else {
      routes[0].template();
    }
  };

  window.addEventListener("popstate", renderUI);

  window.addEventListener("DOMContentLoaded", function () {
    const route = routes.find(
      (route) => route.path == window.location.pathname
    );
    if (route) {
      const html = route.template();
    }
  });
};
