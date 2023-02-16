import { createHtmlElement } from "../../utils";
import { headerPetsitter } from "../pageComponents/headers";
import { footerFun } from "../pageComponents/footer";

export function petsittersCalendar(): void {
  let m = new Date().getMonth();
  let y = new Date().getFullYear();
  let noActvDay: string[];
  document.body.innerHTML = "";
  const masDate: string[] = [];

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
  createCalendar(leftCalendar, y, m);
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
        tag.classList.add("activeDay");
      } else if (tag.classList.contains("activeDay")) {
        tag.classList.add("noActive");
        tag.classList.remove("activeDay");
      }
    }
  });

  btnLeftCalendar.addEventListener("click", () => {
    const d = document.getElementsByClassName("noActive");
    for (let i = 0; i < d.length; i++) {
      const month = m + 1 < 10 ? "0" + (+m + 1) : String(m + 1);
      const day = Number(d[i].innerHTML) < 10 ? "0" + d[i].innerHTML : String(d[i].innerHTML);
      const value = year.innerHTML + "-" + month + "-" + day;
      masDate.push(value);
      console.log("------", masDate);
      const masUnic = new Set(masDate);
      const newM = Array.from(masUnic);
      noActvDay = newM.sort((a, b) => (a > b ? 1 : -1));
      console.log("noActvDay-", noActvDay); //сортированные даты
      changeWorkDay(noActvDay);//-----------
    }
  });

  preMonth.addEventListener("click", () => {
    m--;
    if (m == -1) m = 11;
    month.innerHTML = `${nameMonth(m)}`;
    changeWorkDay(noActvDay); //-----------
  });
  nextMonth.addEventListener("click", () => {
    m++;
    if (m == 12) m = 0;
    month.innerHTML = `${nameMonth(m)}`;
    changeWorkDay(noActvDay);//-----------
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

  leftCalendarBlockTop.addEventListener("click", (e) => {
    if (e.target && e.target instanceof HTMLElement) {
      const target = e.target;
      if (target.tagName == "SPAN") {
        delNoActive();
        createCalendar(leftCalendar, y, m);
      }
    }
  });

  function delNoActive() {
    const y = leftCalendarBlock.getElementsByTagName("td");
    for (let i = 0; i < y.length; i++) {
      y[i].classList.remove("noActive");
    }
  }

  function changeWorkDay(mas: string[]) {
    if (mas) {
      //const allTD = leftCalendarBlock.getElementsByTagName("TD");
      //console.log("+++=", allTD);
      //console.log("y=", y, "m=", m + 1);
      const month = m + 1 < 10 ? "0" + (+m + 1) : String(m + 1);
      //const qwe = mas.filter(el => el !==`${y}-${month}`);
      const qwe = mas.filter((el) => el.slice(0, 4).includes(String(y)) && el.slice(5, 7).includes(String(month))); // !==`${y}-${month}`);
      console.log("qwe**=", qwe);
      //console.log("qwe**1=", qwe[0].slice(8));
      //const noActiveTD = allTD.filter(el => qwe.map(e=>e.slice(8).includes(el.innerHTML)));
    /*  for (let i = 0; i < allTD.length; i++) {
        for (let j = 0; j < qwe.length; j++) {
          //console.log("+allTD[i].innerHTML**1=", typeof(+allTD[i].innerHTML));
          //console.log("qwe**1=", +qwe[j].slice(8));
          if (+allTD[i].innerHTML == +qwe[j].slice(8)) {
            allTD[i].className = "noActive";
          //  console.log("innerHTML**=", +allTD[i].innerHTML, "=  qwe=", qwe[j].slice(8));
          //allTD[i].classList.remove("activeDay");
          //console.log("**=", allTD[i]);
          //allTD[i].classList.add("noActive");
          allTD[i].className = "noActive";
        }
        }
      }*/
    }
    //return qwe;
  }
}
/*----------------------*/

function nameMonth(n: number) {
  const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return Months[n];
}

function createCalendar(elem: HTMLElement, year: number, month: number): void {
  const mon = month; //- 1; // месяцы в JS идут от 0 до 11
  const day = new Date(year, mon); // полная запись дня
  let table = "<table><tr><th>Mon</th><th>Tues</th><th>Wed</th><th>Thurs</th><th>Fri</th><th>Sat</th><th>Sun</th></tr><tr>";

  // пробелы для 1го ряда с пн до 1го дня месяца
  // * * * 1  2  3  4
  for (let i = 0; i < getDay1(day); i++) {
    table += "<td></td>";
  }
  // <td> ячейки календаря с датами
  while (day.getMonth() == mon) {
    table += "<td class='activeDay'>" + day.getDate() + "</td>";

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
  table += "</tr></table>";  // закрыть таблицу
  elem.innerHTML = table;
}

function getDay1(date: Date) {
  // получить номер дня недели, от 0 (пн) до 6 (вс)
  let day = date.getDay();
  if (day == 0) day = 7; // сделать воскресенье (0) последним днем
  return day - 1;
}
