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
        image: "https://hotelimages.webjet.com.au/lodging/1000000/850000/845400/845390/e394a620_z.jpg"
    },
    {
        id: 2,
        name: "Crowne Plaza Melbourne",
        rating: 3,
        roomType: "Standard Room, Non Smoking",
        price: 449,
        image: "https://hotelimages.webjet.com.au/lodging/1000000/570000/564500/564404/3398b9cd_z.jpg"
    },
    {
        id: 3,
        name: "Novotel Melbourne on Collins",
        rating: 2,
        roomType: "Deluxe King Room",
        price: 401,
        image: "https://hotelimages.webjet.com.au/hotels/1000000/850000/845400/845390/0259fb01_z.jpg"
    },
    {
        id: 4,
        name: "Beatiful Hotel",
        rating: 5,
        roomType: "Deluxe King Room",
        price: 305,
        image: "https://hotelimages.webjet.com.au/hotels/1000000/460000/451200/451160/a1830e51_z.jpg"
    },
    {
        id: 5,
        name: "ABC Hotel",
        rating: 1,
        roomType: "Delux Room",
        price: 280,
        image: "https://hotelimages.webjet.com.au/lodging/1000000/30000/23800/23775/0a626b13_z.jpg"
    }
];
