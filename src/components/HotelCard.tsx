// src/components/HotelCard.tsx
import React from "react";
import { Hotel } from "../data/hotels";

const HotelCard: React.FC<{ hotel: Hotel }> = ({ hotel }) => {
    return (
        <div className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <div className="stars">{"◆".repeat(hotel.rating)}</div>
                <div className="room-type">
                    <strong>Room type:</strong> {hotel.roomType}
                </div>
            </div>
            <div className="price">${hotel.price}</div>
        </div>
    );
};

export default HotelCard;
