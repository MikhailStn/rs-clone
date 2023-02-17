import { IPetsitters1, IFilter } from "../utils/interface";

export async function filterItem(mas: IPetsitters1[], filter: IFilter) {
  let result: IPetsitters1[] = mas;
  //console.log("filter-------    ", filter);
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
  if (filter.dateFrom.length !== 0) {
    result = result.filter((elem) => {
      if (elem.petsitterData.availableDates) {
        for (let i = 0; i < elem.petsitterData.availableDates.length; i++) {
          if (new Date(elem.petsitterData.availableDates[i].slice(0, 10)) <= new Date(filter.dateFrom) && new Date(elem.petsitterData.availableDates[i].slice(11)) >= new Date(filter.dateTo)) return elem;
        }
      }
    });
  }*/
  return result;
}
