export interface ILocalisationForm {
    setLocalisationAuto: () => void,
    setLocalisationManual: (coordinates: Coordinates) => void,
    isLoading: Boolean
}

export interface IMap {
    localisation: Coordinates,
    restaurantList: Restaurant[]
}

export interface IRestaurantTable {
    restaurantList: Restaurant[]
}

export type Coordinates = { lat: number, lng: number }

export type RestaurantTableElement = {title: string,
    address: string,
    phone: string,
    distance: number
}

export type Categorie = {
    id: number, 
    name: string, 
    primary: boolean
}

export type Restaurant = {      
    title: string,
    address: {
        label: string,
        countryName: string,
        state: string,
        city: string,
        street: string,
        postalCode: number,
        houseNumber: number,
    },
    position: { lat: number, lng: number },
    access: { lat: number, lng: number }[],
    distance: number,
    categories: Categorie[],
    contacts: 
        {
            phone: { value: string, categories: Categorie[] }[],
            fax: { value: string, categories: Categorie[] }[],
            www: { value: string, categories: Categorie[] }[],
        }[]
    openingHours: 
        {
            text: string[],
            isOpen: boolean,
            structured: { start: string, duration: string, recurrence: string }[]
        }[]
}