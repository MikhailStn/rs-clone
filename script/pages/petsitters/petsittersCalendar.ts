import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";
import { getUser } from "../../commonFunction/getUser";
import {
  createSplashScreen,
  removeSplashScreen,
} from "../commonPages/splashScreen";

export async function petsittersCalendar() {
  const User = await getUser();
  const userInfo = User.item;
  const availableDates = User.item.petsitterData.availableDates;
  let m = new Date().getMonth();
  let y = new Date().getFullYear();
  document.body.innerHTML = "";

  headerPetsitter(document.body);
  const sectionPetsitCalendar = createHtmlElement(
    "section",
    "section-petsit-profile-basic"
  );
  document.body.append(sectionPetsitCalendar);
  const sectionPetsitCalendarBlock = createHtmlElement(
    "div",
    "section-profile-basic-block"
  );
  sectionPetsitCalendar.append(sectionPetsitCalendarBlock);
  const profileTitleWrap = createHtmlElement("div", "profile-title-wrapper");
  sectionPetsitCalendarBlock.append(profileTitleWrap);
  const myProfileTitle = createHtmlElement(
    "h2",
    "my-profile-text-title",
    "",
    "My calendar"
  );
  profileTitleWrap.append(myProfileTitle);

  const blockCalendars = createHtmlElement("div", "block-calendars");

  const leftCalendarBlock = createHtmlElement("div", "block-calendar ");
  const leftCalendarBlockTop = createHtmlElement("div", "block-calendar-top ");
  const titleLeft = createHtmlElement(
    "h2",
    "my-profile-text-title ",
    "",
    "Work days"
  );
  const titleHint = createHtmlElement("p", "tooltip", "", "?");
  const hint = createHtmlElement(
    "span",
    "tooltiptext",
    "",
    "Mark the days when you want to relax"
  );
  const divMonth = createHtmlElement("div", "block-Month");
  const divYear = createHtmlElement("div", "block-Year");
  const preMonth = createHtmlElement("span", "preMonth", "preMonth", "‹");
  const month = createHtmlElement("p", "", "workMonth", `${nameMonth(m)}`);
  const nextMonth = createHtmlElement("span", "nextMonth", "nextMonth", "›");
  const preYear = createHtmlElement("span", "preYear", "preYear", "‹");
  const year = createHtmlElement("p", "", "", `${y}`);
  const nextYear = createHtmlElement("span", "nextYear", "nextYear", "›");

  const leftCalendar = createHtmlElement("div");
  createCalendar(leftCalendar, y, m);
  const btnLeftCalendar = createHtmlElement("button", "rectangle", "", "SAVE");
  sectionPetsitCalendar.append(blockCalendars);
  blockCalendars.append(leftCalendarBlock);
  leftCalendarBlock.append(leftCalendarBlockTop);
  leftCalendarBlockTop.append(titleLeft);
  leftCalendarBlockTop.append(titleHint);
  titleHint.append(hint);
  leftCalendarBlockTop.append(divMonth);
  divMonth.append(preMonth);
  divMonth.append(month);
  divMonth.append(nextMonth);
  leftCalendarBlockTop.append(divYear);
  divYear.append(preYear);
  divYear.append(year);
  divYear.append(nextYear);
  leftCalendarBlock.append(leftCalendar);
  leftCalendarBlock.append(btnLeftCalendar);

  footerFun(document.body);

  leftCalendarBlock.addEventListener("click", (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      const target = e.target;
      if (target.tagName != "TD") return;
      noActiveBox(target);
    }
    function noActiveBox(tag: HTMLElement) {
      if (tag.classList.contains("noActive")) {
        tag.classList.remove("noActive");
        tag.classList.add("activeDay");
      } else if (tag.classList.contains("activeDay")) {
        tag.classList.add("noActive");
        tag.classList.remove("activeDay");
      }
    }
  });

  btnLeftCalendar.addEventListener("click", () => {
    const fetchData = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        _id: localStorage.getItem("curr-user-id"),
        availableDates: availableDates,
      }),
    };
    createSplashScreen();
    setTimeout(removeSplashScreen, 1000);
    fetch(
      `https://rs-clone-api-production-3ab8.up.railway.app/petsitter/add-data`,
      fetchData
    ).then((response) => {
      return response.json();
    });
  });

  preMonth.addEventListener("click", () => {
    m--;
    if (m == -1) m = 11;
    month.innerHTML = `${nameMonth(m)}`;
  });
  nextMonth.addEventListener("click", () => {
    m++;
    if (m == 12) m = 0;
    month.innerHTML = `${nameMonth(m)}`;
  });

  preYear.addEventListener("click", () => {
    y--;
    if (y == new Date().getFullYear() - 2) y = new Date().getFullYear() - 1;
    if (y == new Date().getFullYear() - 1) preYear.style.visibility = "hidden";
    year.innerHTML = `${y}`;
    nextYear.style.visibility = "visible";
  });
  nextYear.addEventListener("click", () => {
    y++;
    if (y == new Date().getFullYear() + 2) y = new Date().getFullYear() + 1;
    if (y == new Date().getFullYear() + 1) nextYear.style.visibility = "hidden";
    year.innerHTML = `${y}`;
    preYear.style.visibility = "visible";
  });

  leftCalendarBlockTop.addEventListener("click", async (e) => {
    const User = await getUser();
    removeSplashScreen()
    const userInfo = User.item;
    if (e.target && e.target instanceof HTMLElement) {
      const target = e.target;
      if (target.tagName == "SPAN") {
        createCalendar(leftCalendar, y, m);
        changeWorkDay(userInfo.petsitterData.availableDates);
      }
    }
  });

  // ф-ция получение с сервера выходных дней
  async function changeWorkDay(mas: string[]) {
    if (mas) {
      const allTD = leftCalendarBlock.getElementsByTagName("TD");
      const month = m + 1 < 10 ? "0" + (+m + 1) : String(m + 1);
      const redDate = mas.filter(
        (el) =>
          el.slice(0, 4).includes(String(y)) &&
          el.slice(5, 7).includes(String(month))
      );
      Array.prototype.forEach.call(allTD, function (e) {
        for (let i = 0; i < redDate.length; i++) {
          if (+e.innerHTML === +redDate[i].slice(8))
            e.setAttribute("class", "table-element noActive");
        }
      });
    }
    const allTD = document.querySelectorAll(".table-element");
    for (let i = 0; i < allTD.length; i++) {
      allTD[i].addEventListener("click", () => {
        if (allTD[i].classList.contains("noActive")) {
          const month = m + 1 < 10 ? "0" + (+m + 1) : String(m + 1);
          const day = Number(allTD[i].innerHTML) < 10 ? "0" + allTD[i].innerHTML : String(allTD[i].innerHTML);
          const currentDate = `${y}-${month}-${day}`
          const index = availableDates.indexOf(currentDate);
          availableDates.splice(index, 1)
        } else {
          const month = m + 1 < 10 ? "0" + (+m + 1) : String(m + 1);
          const day = Number(allTD[i].innerHTML) < 10 ? "0" + allTD[i].innerHTML : String(allTD[i].innerHTML);
          const currentDate = `${y}-${month}-${day}`
          availableDates.push(currentDate)
        }
      });
    }
  }
  changeWorkDay(userInfo.petsitterData.availableDates);

  return document.body;
}
/*-------------------------------------------------------*/

function nameMonth(n: number) {
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return Months[n];
}

function createCalendar(elem: HTMLElement, year: number, month: number): void {
  const mon = month; //- 1; // месяцы в JS идут от 0 до 11
  const day = new Date(year, mon); // полная запись дня
  let table =
    "<table><tr><th>Mon</th><th>Tues</th><th>Wed</th><th>Thurs</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>";

  // пробелы для 1го ряда с пн до 1го дня месяца * * * 1  2  3  4
  for (let i = 0; i < getDay1(day); i++) {
    table += "<td></td>";
  }
  // <td> ячейки календаря с датами
  while (day.getMonth() == mon) {
    table += "<td class='table-element activeDay'>" + day.getDate() + "</td>";

    if (getDay1(day) % 7 == 6) {
      // вс, последний день - перевод строки
      table += "</tr><tr>";
    }
    day.setDate(day.getDate() + 1);
  }
  // добить таблицу пустыми ячейками, если нужно 29 30 31 * * * *
  if (getDay1(day) != 0) {
    for (let i = getDay1(day); i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>"; // закрыть таблицу
  elem.innerHTML = table;
}

function getDay1(date: Date) {
  // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}
