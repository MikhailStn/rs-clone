import { IPetsitters1, IFilter } from "../utils/interface";

export async function filterItem(mas: IPetsitters1[], filter: IFilter) {
  //let result: IPetsitters1[] = mas;
  const result: IPetsitters1[] = mas; console.log(filter);

/*  result = result.filter((elem) => elem.petsitterData.services.servicesArr.includes(filter.type)); //.toLowerCase()));

  if (filter.city.length !== 0) {
    result = result.filter((elem) => elem.city.type.toLowerCase().includes(filter.city.toLowerCase()));
  }

/*
  if (filter.animal.length !== 0) {
    result = result.filter((elem) => elem.pets.includes(filter.animal));
  }
*/
/*
  switch (filter.type) {
    case "Accomodation":
      {
        if (filter.priceMax) {
          result = result.filter((elem) => +elem.petsitterData.services.hotel.price <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => +elem.petsitterData.services.hotel.price >= Number(filter.priceMin));
        }
        if (filter.animal.length) {
          result = result.filter((elem) => elem.petsitterData.services.hotel.animals.includes(filter.animal));
        }
      }
      break;

    case "Walk":
      {
        if (filter.priceMax) {
          result = result.filter((elem) => +elem.petsitterData.services.walking.price <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => +elem.petsitterData.services.walking.price >= Number(filter.priceMin));
        }
        if (!filter.animal.includes('dog')) {
          result = [];//------
        }
      }
      break;
    case "Home visits":
      {
        if (filter.priceMax) {
          result = result.filter((elem) => +elem.petsitterData.services.homevisits.price <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => +elem.petsitterData.services.homevisits.price >= Number(filter.priceMin));
        }
        if (filter.animal.length) {
          result = result.filter((elem) => elem.petsitterData.services.homevisits.animals.includes(filter.animal));
        }
      }
      break;
  }*/
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
