export interface Hotel {
    id: number;
    name: string;
    rating: number;
    roomType: string;
    price: number;
    image: string;
}

export const hotels: Hotel[] = [
    {
        id: 1,
        name: "Oaks on William",
        rating: 4,
        roomType: "Studio Apartment (No Housekeeping)",
        price: 282,
        image: "https://via.placeholder.com/200x150"
    },
    {
        id: 2,
        name: "Crowne Plaza Melbourne",
        rating: 3,
        roomType: "Standard Room, Non Smoking",
        price: 449,
        image: "https://via.placeholder.com/200x150"
    },
    {
        id: 3,
        name: "Novotel Melbourne on Collins",
        rating: 2,
        roomType: "Deluxe King Room",
        price: 401,
        image: "https://via.placeholder.com/200x150"
    }
];
