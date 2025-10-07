import React, { useState } from "react";
import { TbReload } from "react-icons/tb";

function Navbar({ onCategorySelect, onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = ["entertainment", "finance", "politics", "world"];

  const handleSearch = () => {
    if (searchTerm.trim()) onSearch(searchTerm);
  };

  return (
    <nav className="bg-[#f3faff] fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="max-w-[1180px] mx-auto flex justify-between items-center p-3">
        <a
          href="#"
          onClick={() => window.location.reload()}
          className="flex items-center"
        >
          <div className="w-28"><TbReload  size={40}/></div>
        </a>

        <ul className="flex gap-6 text-[#183b56] font-medium">
          {categories.map((cat) => (
            <li
              key={cat}
              onClick={() => onCategorySelect(cat)}
              className="cursor-pointer hover:text-blue-500 capitalize"
            >
              {cat}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="e.g. Science"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-[200px] border-2 border-[#bbd0e2] rounded px-3 py-1 text-sm"
          />
          <button
            onClick={handleSearch}
            className="bg-[#2294ed] text-white px-4 py-1 rounded hover:bg-[#1d69a3]"
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

