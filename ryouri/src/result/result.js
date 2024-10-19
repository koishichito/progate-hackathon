"use client";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import illust from "../image/照り焼き.png";

function Result() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [flavor, setFlavor] = useState(false);
  const [cost, setCost] = useState(false);
  const [time, setTime] = useState(false);
  const [difficulty, setDifficulty] = useState(false);

  const [filters, setFilters] = useState({
    dietaryRestrictions: {
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
    },
    mealType: {
      breakfast: false,
      lunch: false,
      dinner: false,
      snack: false,
    },
    cuisine: {
      japanese: false,
      italian: false,
      chinese: false,
      indian: false,
    },
    cookingTime: {
      under15: false,
      under30: false,
      under60: false,
    },
  });

  const categories = [
    { title: '味', options: ['甘い', '辛い', 'あっさり', 'こってり'], state: flavor, setState: setFlavor },
    { title: '費用', options: ['安い', '高い'], state: cost, setState: setCost },
    { title: '時間', options: ['短い', '長い'], state: time, setState: setTime },
    { title: '難易度', options: ['簡単', '難しい'], state: difficulty, setState: setDifficulty }
  ];

  const recipes = [
    { id: 1, name: "鶏の照り焼き", image: illust },
    { id: 2, name: "サーモンの塩焼き", image: illust },
    { id: 3, name: "野菜炒め", image: illust },
    { id: 4, name: "カレーライス", image: illust },
    { id: 5, name: "パスタカルボナーラ", image: illust },
    { id: 6, name: "ハンバーグ", image: illust },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery, "with filters:", filters);
  };

  const handleFilterChange = (category, filterName) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [filterName]: !prev[category][filterName],
      },
    }));
  };

  const renderFilterSection = (category, title) => (
    <div>
      <h4 className="font-medium text-sm mb-2">{title}</h4>
      <div className="grid grid-cols-2 gap-2">
        {Object.entries(filters[category]).map(([key, value]) => (
          <div key={key} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`${category}-${key}`}
              checked={value}
              onChange={() => handleFilterChange(category, key)}
              className="rounded border-gray-300 text-amber-500 focus:ring-amber-500"
            />
            <label
              htmlFor={`${category}-${key}`}
              className="text-sm leading-none"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="search"
              placeholder="レシピを検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-md flex items-center"
            >
              <Search className="h-4 w-4 mr-2" />
              検索
            </button>
            <button
              type="button"
              onClick={() => setIsFilterOpen(true)}
              className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              フィルター
            </button>
          </form>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-amber-800">検索結果</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {recipes.map((recipe) => (
            <Link to={`/detail/${recipe.id}`} key={recipe.id} className="group">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-gray-800 group-hover:text-amber-600">
                    {recipe.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium text-lg">フィルター</h3>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              {renderFilterSection("dietaryRestrictions", "食事制限")}
              <hr className="my-2 border-gray-200" />
              {renderFilterSection("mealType", "食事タイプ")}
              <hr className="my-2 border-gray-200" />
              {renderFilterSection("cuisine", "料理のジャンル")}
              <hr className="my-2 border-gray-200" />
              {renderFilterSection("cookingTime", "調理時間")}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
