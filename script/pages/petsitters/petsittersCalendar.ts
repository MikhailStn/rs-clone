import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";

export function petsittersCalendar(): void {
  let m = new Date().getMonth();
  let y = new Date().getFullYear();
  document.body.innerHTML = "";

  headerPetsitter(document.body); //проверка на хозяина и услугу
  const sectionPetsitCalendar = createHtmlElement("section", "section-petsit-profile-basic");
  document.body.append(sectionPetsitCalendar);
  const sectionPetsitCalendarBlock = createHtmlElement("div", "section-profile-basic-block");
  sectionPetsitCalendar.append(sectionPetsitCalendarBlock);
  const profileTitleWrap = createHtmlElement("div", "profile-title-wrapper");
  sectionPetsitCalendarBlock.append(profileTitleWrap);
  const myProfileTitle = createHtmlElement("h2", "my-profile-text-title", "", "My calendar");
  profileTitleWrap.append(myProfileTitle);

  const blockCalendars = createHtmlElement("div", "block-calendars");

  const leftCalendarBlock = createHtmlElement("div", "block-calendar ");
  const leftCalendarBlockTop = createHtmlElement("div", "block-calendar-top ");
  const titleLeft = createHtmlElement("h2", "my-profile-text-title ", "", "Work days");
  const titleHint = createHtmlElement("p", "tooltip", "", "?");
  const hint = createHtmlElement("span", "tooltiptext", "", "Mark the days when you want to relax");
  const divMonth = createHtmlElement("div", "block-Month");
  const divYear = createHtmlElement("div", "block-Year");
  const preMonth = createHtmlElement("span", "preMonth", "preMonth", "‹");
  const month = createHtmlElement("p", "", "workMonth", `${nameMonth(m)}`);
  const nextMonth = createHtmlElement("span", "nextMonth", "nextMonth", "›");
  const preYear = createHtmlElement("span", "preYear", "preYear", "‹");
  const year = createHtmlElement("p", "", "", `${y}`);
  const nextYear = createHtmlElement("span", "nextYear", "nextYear", "›");

  const leftCalendar = createHtmlElement("div");
  createCalendar(leftCalendar, 2023, 2);
  const btnLeftCalendar = createHtmlElement("button", "rectangle", "", "SAVE");

  const rightCalendarBlock = createHtmlElement("div", "block-calendar");
  const rightCalendarBlockTop = createHtmlElement("div", "block-calendar-top ");
  const titleRight = createHtmlElement("h2", "my-profile-text-title", "", "Booked days");

  sectionPetsitCalendar.append(blockCalendars);
  blockCalendars.append(leftCalendarBlock);
  blockCalendars.append(rightCalendarBlock);
  leftCalendarBlock.append(leftCalendarBlockTop);
  rightCalendarBlock.append(rightCalendarBlockTop);
  leftCalendarBlockTop.append(titleLeft);
  rightCalendarBlockTop.append(titleRight);
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
  //rightCalendarBlockTop.append(titleRight);
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
      } else tag.classList.add("noActive");
    }
  });

  btnLeftCalendar.addEventListener("click", () => {
    const d = document.getElementsByClassName("noActive");
    for (let i = 0; i < d.length; i++) {
        const month = m < 10 ? "0" + m : String(m);
        const day = Number(d[i].innerHTML) < 10 ? "0" + d[i].innerHTML : String(d[i].innerHTML);
      //console.log("Y-", year.innerHTML, "M-", month, "D-", day);
      const value = year.innerHTML + "-" + month + "-" + day;
      console.log("Value-", value);

    }
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
}

function nameMonth(n: number) {
  const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return Months[n];
}






function createCalendar(elem: HTMLElement, year: number, month: number): void {
  const mon = month - 1; // месяцы в JS идут от 0 до 11
  const day = new Date(year, mon); // полная запись дня
  let table = "<table><tr><th>Mon</th><th>Tues</th><th>Wed</th><th>Thurs</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>";

  // пробелы для первого ряда
  // с понедельника до первого дня месяца
  // * * * 1  2  3  4
  for (let i = 0; i < getDay1(day); i++) {
    //
    table += "<td></td>";
  }

  // <td> ячейки календаря с датами
  while (day.getMonth() == mon) {
    table += "<td>" + day.getDate() + "</td>";

    if (getDay1(day) % 7 == 6) {
      // вс, последний день - перевод строки
      table += "</tr><tr>";
    }

    day.setDate(day.getDate() + 1);
  }

  // добить таблицу пустыми ячейками, если нужно
  // 29 30 31 * * * *
  if (getDay1(day) != 0) {
    for (let i = getDay1(day); i < 7; i++) {
      table += "<td></td>";
    }
  }

  // закрыть таблицу
  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay1(date: Date) {
  // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}
