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
