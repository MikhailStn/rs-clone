import { IPetsitters, IFilter } from "../utils/interface";

export function filterItem(mas: IPetsitters[], filter: IFilter): IPetsitters[] { //что сорт и как
  let result: IPetsitters[] = mas;
  const hours = filter.hours.match(/\d/g)?.join('');
  console.log(hours);
  result = result.filter((elem) => elem.typeOfService.includes(filter.type));

  if (filter.animal.length !== 0) {
    result = result.filter((elem) => elem.animal.includes(filter.animal));
  }
  if (filter.city.length !== 0) {
    result = result.filter((elem) => elem.city.includes(filter.city[0].toUpperCase() + filter.city.slice(1).toLowerCase()));
  }
  switch (filter.type) {
    case "Accomodation":
      {
        if (filter.priceMax) {
          result = result.filter((elem) => elem.price1 <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => elem.price1 >= Number(filter.priceMin));
        }
      }
      break;

    case "Walk":
      {
        if (filter.priceMax) {
          result = result.filter((elem) => elem.price2 <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => elem.price2 >= Number(filter.priceMin));
        }
      }
      break;
    case "Home visits":
      {
        if (filter.priceMax) {
          result = result.filter((elem) => elem.price3 <= Number(filter.priceMax));
        }
        if (filter.priceMin) {
          result = result.filter((elem) => elem.price3 >= Number(filter.priceMin));
        }
      }
      break;
  }

  if (filter.dateFrom.length !== 0) {
    result = result.filter((elem) => {
      for (let i = 0; i < elem.availableDate.length; i++) {
        if (new Date(elem.availableDate[i].slice(0, 10)) <= new Date(filter.dateFrom) && new Date(elem.availableDate[i].slice(11)) >= new Date(filter.dateTo)) return elem;
      }
    });
  }
  return result;
}