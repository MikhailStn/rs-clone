export interface IPetsitters {
  id: number;
  name: string;
  city: string;
  stars: number;
  price1: number;
  price2: number;
  price3: number;
  level: string;
  description?: string;
  animal: string[];
  availableDate: string[];
  photo: string;
  typeOfService: string[];
}

export interface IFilter {
  type: string;
  animal: string;
  city: string;
  dateFrom: string;
  dateTo: string;
  priceMin: string;
  priceMax: string;
  hours: string;
}

export interface IPetsitters1 {
  _id: string;
  firstName: string;
  lastName: { type: string; required: true };
  city:string;
  email: { type: string; unique: true; required: true };
  password: { type: string; required: true };
  phone: { type: number; required: true };
  role: { type: string; require: true };
  pets: string[];//--------
  avatarPath: { type: string };
  gender: string;
  petsitterData: {
    birth: { type: string };
    services: {
      servicesArr: string[];
      hotel: {
        active: string;
        animals: string[];
        price: { type: string };
      };
      walking: {
        active: string;
        serviceArea: { type: string };
        kindOfDogs: string[];
        ageOfDogs: string[];
        genderOfDogs: string[];
        price: { type: string };
      };
      homevisits: {
        active: string;
        serviceArea: { type: string };
        animals: string[];
        price: { type: string };
      };
      training: {
        active: string;
        price: { type: string };
      };
    };
    address: { type: string };
    aboutMe: { type: string };
    carers: { type: string };
    skills: { type: string };
    typeOfHome: { type: string };
    qualifications: [];
    homeConditions: [];
    tenatsAtHome: [];
    otherAnimals: [];
    level: { type: string };
    rate: { type: string };
    availableDates: string[];
    prices: [];//--------
    reviews: [];
  };
}
