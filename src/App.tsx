// src/App.tsx
import React, { useState } from "react";
import "./App.css";
import { hotels as allHotels, Hotel } from "./data/hotels";
import HotelCard from "./components/HotelCard";

function App() {


  return (
    <>
      <div className="wrapper">
        {/*  Top Header */}
        <header className="header">
          <div className="logo">
            <img src="https://media.webjet.com.au/ui/images/webjet-logo-au-red.png" alt="Webjet Logo" />
          </div>
          {/* <button id="menuToggle" className="hamburger">&#9776;</button> */}
        </header>

        {/* Main Content */}
        <div className="container">
          <div className="main-panel">
            <div className="page-title">
              <h1>550 Hotels Available in Melbourne</h1>
            </div>
            <div className="content-panel">
              {/* Sidebar Filter */}
              <aside className="sidebar" id="sidebar">
                <h2>Filter Results</h2>

                <div className="filter-section">
                  <h4>Hotel Name</h4>
                  <div className="search-form-box">
                    <input type="text" placeholder="Enter Hotel Name" />
                    <button>Go</button>
                  </div>

                </div>

                <div className="filter-section">
                  <h4>Quality Rating</h4>
                  <label><input type="checkbox" checked /> All</label><br />
                  <label><input type="checkbox" /> <span className="stars">◆◆◆◆◆</span></label><br />
                  <label><input type="checkbox" /> <span className="stars">◆◆◆◆</span></label><br />
                  <label><input type="checkbox" /> <span className="stars">◆◆◆</span></label><br />
                  <label><input type="checkbox" /> <span className="stars">◆◆</span></label><br />
                  <label><input type="checkbox" /> <span className="stars">◆</span></label>
                </div>
              </aside>

              {/* Hotel Listings */}
              <main className="hotel-list">
                {/* Hotel Card 1 */}
                <div className="hotel-card">
                  <img src="https://hotelimages.webjet.com.au/lodging/1000000/850000/845400/845390/e394a620_z.jpg" alt="Oaks on William" />
                  <div className="hotel-info">
                    <h3>Oaks on William</h3>
                    <div className="stars">◆◆◆◆</div>
                    <div className="room-type"><strong>Room type:</strong> Studio Apartment (No Housekeeping)</div>
                  </div>
                  <div className="price">$282</div>
                </div>

                {/* Hotel Card 2 */}
                <div className="hotel-card">
                  <img src="https://hotelimages.webjet.com.au/lodging/1000000/570000/564500/564404/3398b9cd_z.jpg" alt="Crowne Plaza Melbourne" />
                  <div className="hotel-info">
                    <h3>Crowne Plaza Melbourne</h3>
                    <div className="stars">◆◆◆</div>
                    <div className="room-type"><strong>Room type:</strong> Standard Room, Non Smoking</div>
                  </div>
                  <div className="price">$449</div>
                </div>

                {/* Hotel Card 3 */}
                <div className="hotel-card">
                  <img src="https://hotelimages.webjet.com.au/hotels/1000000/850000/845400/845390/0259fb01_z.jpg" alt="Novotel Melbourne on Collins" />
                  <div className="hotel-info">
                    <h3>Novotel Melbourne on Collins</h3>
                    <div className="stars">◆◆</div>
                    <div className="room-type"><strong>Room type:</strong> Deluxe King Room</div>
                  </div>
                  <div className="price">$401</div>
                </div>
              </main>
            </div>
          </div>


          {/* Right Ad Banner */}
          <aside className="ad-banner">
            <img src="https://via.placeholder.com/160x600?text=Ad+Banner" alt="Ad Banner" />
          </aside>

        </div>


        {/* Mobile Sidebar Toggle Script */}
        {/* <script>
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");

    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  </script> */}
      </div>

    </>
  );
}

export default App;
