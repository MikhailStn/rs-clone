import { createHtmlElement } from "../../utils";
//import { getUser } from "../../commonFunction/getUser";
import { getUserFromId } from "../../commonFunction/getUser";

//не уверена как правильно по id. функция на  95 строке
export async function petsittersCalendar(tagParent: HTMLElement, id: string) {
  const User = await getUserFromId(id);
  const userInfo = User.item;
  console.log("userInfo", userInfo);

  let m = new Date().getMonth();
  let y = new Date().getFullYear();

  const leftCalendarBlock = createHtmlElement(
    "div",
    "block-calendar calendar-petsit-item-page"
  );
  const leftCalendarBlockTop = createHtmlElement("div", "block-calendar-top ");
  const titleLeft = createHtmlElement(
    "h2",
    "my-profile-text-title ",
    "",
    "Work days"
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

  tagParent.append(leftCalendarBlock);
  leftCalendarBlock.append(leftCalendarBlockTop);
  leftCalendarBlockTop.append(titleLeft);
  leftCalendarBlockTop.append(divMonth);
  divMonth.append(preMonth);
  divMonth.append(month);
  divMonth.append(nextMonth);
  leftCalendarBlockTop.append(divYear);
  divYear.append(preYear);
  divYear.append(year);
  divYear.append(nextYear);
  leftCalendarBlock.append(leftCalendar);

  /*function noActiveBox(tag: HTMLElement) {
    if (tag.classList.contains("noActive")) {
      tag.classList.remove("noActive");
      tag.classList.add("activeDay");
    } else if (tag.classList.contains("activeDay")) {
      tag.classList.add("noActive");
      tag.classList.remove("activeDay");
    }
  }*/

  /*leftCalendarBlock.addEventListener("click", (e) => {

    if (e.target && e.target instanceof HTMLElement) {
      const target = e.target;
      if (target.tagName != "TD") return;
      noActiveBox(target);
    }
  
  });*/

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
    if (e.target && e.target instanceof HTMLElement) {
      const target = e.target;
      if (target.tagName == "SPAN") {
        createCalendar(leftCalendar, y, m);
        changeWorkDay(userInfo.petsitterData.availableDates); //получение с сервера выходных дней и отметить в календаре
        //console.log("*****", await userInfo.petsitterData.availableDates);
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
      ); // !==`${y}-${month}`);

      Array.prototype.forEach.call(allTD, function (e) {
        for (let i = 0; i < redDate.length; i++) {
          if (+e.innerHTML === +redDate[i].slice(8))
            e.setAttribute("class", "noActive");
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
  const mon = month;
  const day = new Date(year, mon);
  let table =
    "<table><tr><th>Mon</th><th>Tues</th><th>Wed</th><th>Thurs</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>";

  for (let i = 0; i < getDay1(day); i++) {
    table += "<td></td>";
  }
  while (day.getMonth() == mon) {
    table += "<td class='activeDay'>" + day.getDate() + "</td>";

    if (getDay1(day) % 7 == 6) {
      table += "</tr><tr>";
    }
    day.setDate(day.getDate() + 1);
  }
  if (getDay1(day) != 0) {
    for (let i = getDay1(day); i < 7; i++) {
      table += "<td></td>";
    }
  }
  table += "</tr></table>"; // закрыть таблицу
  elem.innerHTML = table;
}

function getDay1(date: Date) {
  let day = date.getDay();
  if (day == 0) day = 7;
  return day - 1;
}
