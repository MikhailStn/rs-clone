import { createHtmlElement } from "../../utils";
import { getUser } from "../../commonFunction/getUser";
import { updateValues } from "./petsitProfileServiceEdit";

export async function createServicesBlock() {
  const servicesArr: string[] = [];
  const user = await getUser();
  const userInfo = user.item;
  console.log("userInfo", userInfo);
  const basicServiceBlock = createHtmlElement("div", "basic-info-block");
  const serviceBlockTitle = createHtmlElement(
    "h3",
    "title-photo-profile-block",
    "",
    "Manage the services you provide"
  );
  basicServiceBlock.append(serviceBlockTitle);
  const text1Service = createHtmlElement(
    "div",
    "text-service",
    "",
    "Here you can manage the services you provide. You can enable, disable or edit them at any time. We encourage you to manage your offerings accordingly."
  );
  const text2Service = createHtmlElement(
    "div",
    "text-service",
    "",
    "Remember that payment for all services provided should be accepted only through the platform. Billing caregivers outside of the platform is against the terms and conditions and will result in account deactivation."
  );
  basicServiceBlock.append(text1Service, text2Service);
  const blockService1 = await createBlockService(
    "https://petsy.pl/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FACCOMMODATION.829018b2.jpg&w=640&q=75",
    "Accommodation",
    "A service in which you take your pet under your roof for a specified period of time. You can also add an additional paid transportation option as part of the settings.",
    "accommodation"
  );
  basicServiceBlock.append(blockService1);
  const blockService2 = await createBlockService(
    "https://petsy.pl/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FWALK.b64f0e8b.jpg&w=640&q=75",
    "Walking",
    "Dog walking service at the owner's place of residence",
    "walking"
  );
  basicServiceBlock.append(blockService2);
  const blockService3 = await createBlockService(
    "https://petsy.pl/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FDROP_IN.79191e46.jpg&w=640&q=75",
    "Home visits",
    "30-minute visits to the owner's home to play with the animals, serve food, take a quick walk or clean the litter box.",
    "home-visits"
  );
  basicServiceBlock.append(blockService3);
  setTimeout(() => {
    const inputs = document.querySelectorAll(".switch-service");
    const user = localStorage.getItem("curr-user-id");
    const fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        _id: user,
      }),
    };
    fetch(`http://localhost:5000/auth/user`, fetchData)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.petsitterData.services.hotel.active == "true") {
          inputs[0].firstElementChild?.setAttribute("checked", "true");
          servicesArr.push("hotel");
        }
        inputs[0].firstElementChild?.addEventListener("click", () => {
          if (inputs[0].firstElementChild?.getAttribute("checked")) {
            const i = servicesArr.indexOf("hotel");
            servicesArr.splice(i, 1);
            inputs[0].firstElementChild?.removeAttribute("checked");
            const fetchData1 = {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                _id: localStorage.getItem("curr-user-id"),
                active_hotel: "false",
                servicesArr: servicesArr,
              }),
            };
            fetch(`http://localhost:5000/petsitter/add-data`, fetchData1)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
              });
          } else if (!inputs[0].firstElementChild?.getAttribute("checked")) {
            servicesArr.push("hotel");
            inputs[0].firstElementChild?.setAttribute("checked", "true");
            const fetchData2 = {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                _id: localStorage.getItem("curr-user-id"),
                active_hotel: "true",
                servicesArr: servicesArr,
              }),
            };
            fetch(`http://localhost:5000/petsitter/add-data`, fetchData2)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
              });
          }
        });
        if (data.petsitterData.services.walking.active == "true") {
          inputs[1].firstElementChild?.setAttribute("checked", "true");
          servicesArr.push("walking");
        }
        inputs[1].firstElementChild?.addEventListener("click", () => {
          if (inputs[1].firstElementChild?.getAttribute("checked")) {
            const i = servicesArr.indexOf("walking");
            servicesArr.splice(i, 1);
            inputs[1].firstElementChild?.removeAttribute("checked");
            const fetchData1 = {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                _id: localStorage.getItem("curr-user-id"),
                active_walking: "false",
                servicesArr: servicesArr,
              }),
            };
            fetch(`http://localhost:5000/petsitter/add-data`, fetchData1)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
              });
          } else if (!inputs[1].firstElementChild?.getAttribute("checked")) {
            servicesArr.push("walking");
            inputs[1].firstElementChild?.setAttribute("checked", "true");
            const fetchData2 = {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                _id: localStorage.getItem("curr-user-id"),
                active_walking: "true",
                servicesArr: servicesArr,
              }),
            };
            fetch(`http://localhost:5000/petsitter/add-data`, fetchData2)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
              });
          }
        });
        if (data.petsitterData.services.homevisits.active == "true") {
          inputs[2].firstElementChild?.setAttribute("checked", "true");
          servicesArr.push("homevisits");
          console.log(servicesArr)
        }
        inputs[2].firstElementChild?.addEventListener("click", () => {
          if (inputs[2].firstElementChild?.getAttribute("checked")) {
            const i = servicesArr.indexOf("homevisits");
            servicesArr.splice(i, 1);
            console.log(servicesArr)
            inputs[2].firstElementChild?.removeAttribute("checked");
            const fetchData1 = {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                _id: localStorage.getItem("curr-user-id"),
                active_homevisits: "false",
                servicesArr: servicesArr,
              }),
            };
            fetch(`http://localhost:5000/petsitter/add-data`, fetchData1)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
              });
          } else if (!inputs[2].firstElementChild?.getAttribute("checked")) {
            servicesArr.push("homevisits");
            inputs[2].firstElementChild?.setAttribute("checked", "true");
            const fetchData2 = {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                _id: localStorage.getItem("curr-user-id"),
                active_homevisits: "true",
                servicesArr: servicesArr,
              }),
            };
            fetch(`http://localhost:5000/petsitter/add-data`, fetchData2)
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                console.log(data);
              });
          }
        });
      });
  }, 100);

  blockService1.addEventListener("click", (event: Event) => {
    if (
      event.target &&
      event.target instanceof HTMLButtonElement &&
      event.target.id === "btn-accommodation"
    ) {
      history.pushState(
        "",
        "",
        "/petsitter/profile/services/edit/accommodation"
      );
      window.dispatchEvent(new Event("popstate"));
      updateValues();
    }
  });
  blockService2.addEventListener("click", (event: Event) => {
    if (
      event.target &&
      event.target instanceof HTMLButtonElement &&
      event.target.id === "btn-walking"
    ) {
      history.pushState("", "", "/petsitter/profile/services/edit/walk");
      window.dispatchEvent(new Event("popstate"));
      updateValues();
    }
  });

  blockService3.addEventListener("click", (event: Event) => {
    if (
      event.target &&
      event.target instanceof HTMLButtonElement &&
      event.target.id === "btn-home-visits"
    ) {
      history.pushState("", "", "/petsitter/profile/services/edit/drop-in");
      window.dispatchEvent(new Event("popstate"));
      updateValues();
    }
  });

  return basicServiceBlock;
}

async function createBlockService(
  src: string,
  text1: string,
  text2: string,
  className: string
) {
  const serviceItemBlock = createHtmlElement(
    "div",
    `service-item-block-profile ${className}-service`
  );
  const imgServiceBlock = createHtmlElement("div", "img-service-block");
  serviceItemBlock.append(imgServiceBlock);
  const imgItemService = createHtmlElement(
    "img",
    "img-service-item"
  ) as HTMLImageElement;
  imgServiceBlock.append(imgItemService);
  imgItemService.src = src;
  imgItemService.alt = "Pets";
  const textItemServiceBlock = createHtmlElement(
    "div",
    `text-item-service-block ${className}-service`
  );
  serviceItemBlock.append(textItemServiceBlock);
  const text1Div = createHtmlElement(
    "h3",
    "title-photo-profile-block",
    "",
    text1
  );
  textItemServiceBlock.append(text1Div);
  const text2Div = createHtmlElement("div", "text-service", "", text2);
  textItemServiceBlock.append(text2Div);
  const btnServiceBlock = createHtmlElement("div", "btn-service-block");
  serviceItemBlock.append(btnServiceBlock);
  const labelInputCheckboxService = createHtmlElement(
    "label",
    "switch-service"
  );
  const inputCheckboxService = createHtmlElement("input") as HTMLInputElement;
  inputCheckboxService.type = "checkbox";
  inputCheckboxService.name = className;
  const inputSpanService = createHtmlElement(
    "span",
    "slider-service round-slider"
  );
  btnServiceBlock.append(labelInputCheckboxService);
  labelInputCheckboxService.append(inputCheckboxService, inputSpanService);
  const btnEditService = createHtmlElement(
    "button",
    "btn-edit-service",
    `btn-${className}`,
    "Edit"
  );
  btnServiceBlock.append(btnEditService);

  return serviceItemBlock;
}
