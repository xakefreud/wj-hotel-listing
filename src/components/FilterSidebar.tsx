import React, { useState } from "react";

interface FilterProps {
    nameFilter: string;
    setNameFilter: (name: string) => void;
    starFilters: number[];
    toggleStarFilter: (rating: number) => void;
    clearStarFilters: () => void;
}

const FilterSidebar: React.FC<FilterProps> = ({
    nameFilter,
    setNameFilter,
    starFilters,
    toggleStarFilter,
    clearStarFilters,
}) => {
    const isAllSelected = starFilters.length === 0;
    const [inputValue, setInputValue] = useState(nameFilter);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setNameFilter(inputValue);
    };

    return (
        <aside className="sidebar">
            <h2>Filter Results</h2>

            <div className="filter-section">
                <h4>Hotel Name</h4>
                <form onSubmit={handleSubmit} style={{ display: "flex", gap: "5px" }}>
                    <input
                        type="text"
                        placeholder="Enter Hotel Name"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button type="submit">Go</button>
                </form>
            </div>

            <div className="filter-section">
                <h4>Quality Rating</h4>
                <label>
                    <input
                        type="checkbox"
                        checked={isAllSelected}
                        onChange={clearStarFilters}
                    />{" "}
                    All
                </label>
                {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating}>
                        <input
                            type="checkbox"
                            checked={starFilters.includes(rating)}
                            onChange={() => toggleStarFilter(rating)}
                        />{" "}
                        <span className="stars">{"◆".repeat(rating)}</span>
                    </label>
                ))}
            </div>
        </aside>
    );
};

export default FilterSidebar;
