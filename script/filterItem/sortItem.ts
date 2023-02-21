import { IPetsitters1, IFilter } from "../utils/interface";

export async function filterItem(mas: IPetsitters1[], filter: IFilter) {
  let result: IPetsitters1[] = mas;

  console.log("filter-------    ", filter);
  
  if (filter.animal) {
    switch (filter.animal) {
      case "Small(up to 6 kg)": filter.animal = "cat"; break;
      case "Large(over 6 kg)": filter.animal = "cat"; break;
      case "Micro(up to 5 kg)": filter.animal = "dog"; break;
      case "Small(6 - 15 kg)": filter.animal = "dog"; break;
      case "Medium(16 - 25 kg)": filter.animal = "dog"; break;
      case "Large(26 - 35 kg)": filter.animal = "dog"; break;
      case "Giant(over 36 kg)": filter.animal = "dog"; break;
    }
  }
  result = result.filter((elem) => elem.petsitterData.services.servicesArr.includes(filter.type));

  if (filter.city.length !== 0) {
    result = result.filter((elem) => elem.city.toLowerCase().includes(filter.city.toLowerCase()));
  }

  switch (filter.type) {
    case "hotel":
      {
        if (filter.priceMax) {
          result = result.filter((elem) => +elem.petsitterData.services.hotel.price <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => +elem.petsitterData.services.hotel.price >= Number(filter.priceMin));
        }
        if (filter.animal.length) {
          result = result.filter((elem) => elem.petsitterData.services.hotel.animals.includes(filter.animal.toLowerCase()));
        }
      }
      break;

    case "walking":
      {
        console.log("999");
        if (filter.priceMax) {
          result = result.filter((elem) => +elem.petsitterData.services.walking.price <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => +elem.petsitterData.services.walking.price >= Number(filter.priceMin));
        }
        if (filter.animal.includes("cat")) {
          result = [];
        }
      }
      break;
    case "homevisits":
      {
        if (filter.priceMax) {
          result = result.filter((elem) => +elem.petsitterData.services.homevisits.price <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => +elem.petsitterData.services.homevisits.price >= Number(filter.priceMin));
        }
        if (filter.animal.length) {
          result = result.filter((elem) => elem.petsitterData.services.homevisits.animals.includes(filter.animal.toLowerCase()));
        }
      }
      break;
  }
  
  /*
  result = result.filter((elem) => elem.petsitterData.availableDates.includes({ //(filter.type));
  //if (elem.petsitterData.availableDates) {
    //for (let i = 0; i < elem.petsitterData.availableDates.length; i++) {
      //if (new Date(elem.petsitterData.availableDates[i].slice(0, 10)) <= new Date(filter.dateFrom) && new Date(elem.petsitterData.availableDates[i].slice(11)) >= new Date(filter.dateTo)) return elem;
*/

  const diapazonDate: string[] = [`${filter.dateFrom}`];
  const nDay1: Date = new Date(`${filter.dateFrom.slice(0, 4)}, ${+filter.dateFrom.slice(5, 7)}, ${+filter.dateFrom.slice(8)}`);
  const nDay2: Date = new Date(`${filter.dateTo.slice(0, 4)}, ${+filter.dateTo.slice(5, 7)}, ${+filter.dateTo.slice(8)}`);
  const b = +(nDay2.getTime() - nDay1.getTime()) / 60 / 60 / 24 / 1000;

  if (b > 0) {
    let q: Date = new Date(nDay1);

    for (let j = 0; j < b; j++) {
      q = new Date(q.setDate(q.getDate() + 1));
      const y = q.getFullYear();
      const m = q.getMonth() + 1 < 10 ? "0" + (+q.getMonth() + 1) : String(q.getMonth() + 1);
      const d = +q.getDate() < 10 ? "0" + q.getDate() : q.getDate();
      const nDay = `${y}-${m}-${d}`;
      diapazonDate.push(nDay);
    }
  }

  result = result.filter((elem) =>
    elem.petsitterData.availableDates.filter((el) => {//не отрабатывает
      //console.log("elem", elem, "el", el, `diapazonDate`, diapazonDate);
      if (!diapazonDate.includes(el)) {console.log("+++++++++++++++++++++++++", );
      return true;}
      //return false;
    })
  );

  console.log(`result------`, result);
  return result;
}
