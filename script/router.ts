import petsAddShowPage from "./pages/commonPages/petsAdd";
import petsitters from "./pages/petsitters/petsitters";
import authLogin from "./pages/login/authLogin";
//import searchShowPage from "./pages/commonPages/search";
import errorShowPage from "./pages/404Page/errorPage";
import authRegister from "./pages/login/authRegistration";
import authPetsitterForm from "./pages/login/authForm";
import { mainOwner } from "./pages/commonPages/main-owner";
import petsitterProfileBasic from "./pages/petsitters/petsitProfileBasics";
import ownerPets from "./pages/owners/ownerPets";
import petsitProfileServiceEdit from "./pages/petsitters/petsitProfileServiceEdit";
import { petsittersCalendar } from "./pages/petsitters/petsittersCalendar";
import { searchShowPage } from "./pages/commonPages/search";
import { createOrdersPage } from "./pages/commonPages/ordersPage";
import { createOrderItemPage } from "./pages/commonPages/orderItemPage";
import petsitterPerson from "./pages/petsitters/petsitPersonPage";



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
      path: "/owner/pets",
      template: ownerPets,
    },
    {
      path: "/owner/orders/n",
      template: createOrderItemPage,
    },
    {
      path: "/owner/orders",
      template: createOrdersPage,
    },
    {
      path: "/petsitter/orders/n",
      template: createOrderItemPage,
    },
    {
      path: "/petsitter/orders",
      template: createOrdersPage,
    },
    {
      path: "/petsitter/n",
      template: petsitterPerson,
    },
    {
      path: "/petsitter/profile/services/edit/accommodation",
      template: petsitProfileServiceEdit,
    },
    {
      path: "/petsitter/profile/services/edit/walk",
      template: petsitProfileServiceEdit,
    },
    {
      path: "/petsitter/profile/services/edit/drop-in",
      template: petsitProfileServiceEdit,
    },
    {
      path: "/petsitter/profile/basics",
      template: petsitterProfileBasic,
    },
    {
      path: "/petsitter/calendar",
      template: petsittersCalendar,/******* */
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
      template: mainOwner,
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

  window.addEventListener("DOMContentLoaded", renderUI);
};
