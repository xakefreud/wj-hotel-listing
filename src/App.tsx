import React, { useState } from "react";
import "./App.css";
import { hotels as allHotels, Hotel } from "./data/hotels";
import HotelCard from "./components/HotelCard";
import FilterSidebar from "./components/FilterSidebar";

function App() {

  const [nameFilter, setNameFilter] = useState("");
  const [starFilters, setStarFilters] = useState<number[]>([]);

  const toggleStarFilter = (rating: number) => {
    setStarFilters((prev) =>
      prev.includes(rating) ? prev.filter((r) => r !== rating) : [...prev, rating]
    );
  };

  const clearStarFilters = () => {
    setStarFilters([]);
  };

  const filteredHotels = allHotels.filter((hotel) => {
    const matchesName = hotel.name.toLowerCase().includes(nameFilter.toLowerCase());
    const matchesRating = starFilters.length === 0 || starFilters.includes(hotel.rating);
    return matchesName && matchesRating;
  })
    .sort((a, b) => a.price - b.price); // sort by price in ascending order;

  return (
    <>
      <div className="wrapper">
        {/*  Top Header */}
        <header className="header">
          <div className="logo">
            <img src="https://media.webjet.com.au/ui/images/webjet-logo-au-red.png" alt="Webjet Logo" />
          </div>

        </header>

        {/* Main Content */}
        <div className="container">
          <div className="main-panel">
            <div className="page-title">
              <h1>{filteredHotels.length} Hotels Available in Melbourne</h1>
            </div>
            <div className="content-panel">
              {/* Sidebar Filter */}
              <FilterSidebar
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                starFilters={starFilters}
                toggleStarFilter={toggleStarFilter}
                clearStarFilters={clearStarFilters}
              />

              {/* Hotel Listings */}
              <main className="hotel-list">
                {filteredHotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </main>
            </div>
          </div>


          {/* Right Ad Banner */}
          <aside className="ad-banner">
            <img src="ad-banner.jpg" alt="Ad Banner" />
          </aside>

        </div>
      </div>

    </>
  );
}

export default App;
