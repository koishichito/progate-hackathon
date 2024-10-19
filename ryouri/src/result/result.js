import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import illust from "../image/teriyaki.png";
import { search } from "../utils/search";
import {recipes} from "../data/data";
import {menuFilter} from "../utils/filter";

function Result() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    taste: {
      甘い: false,
      辛い: false,
      あっさり: false,
      こってり: false,
    },
    isCheap: {
      安い: false,
      高い: false,
    },
    isShort: {
      短い: false,
      長い: false,
    },
    isEasy: {
      簡単: false,
      難しい: false,
    },
    mealType: {
      主食: false,
      主菜: false,
      副菜: false,
      汁物: false,
    },
    cuisine: {
      和食: false,
      洋食: false,
      中華: false,
      イタリアン: false,
    },
  });

  // const recipes = [
  //   {
  //     id: 1,
  //     name: "鶏の照り焼き",
  //     taste: "light",
  //     isCheap: true,
  //     isShort: true,
  //     isEasy: true,
  //     image: illust,
  //     ingredients: [
  //       { name: "鶏もも肉", amount: "400g" },
  //       { name: "醤油", amount: "大さじ2" },
  //       { name: "みりん", amount: "大さじ2" },
  //       { name: "酒", amount: "大さじ1" },
  //       { name: "砂糖", amount: "大さじ1" },
  //     ],
  //     tags: ["和食", "メイン", "簡単"],
  //     steps: [
  //       "鶏肉を一口大に切ります。",
  //       "醤油、みりん、酒、砂糖を混ぜて調味料を作ります。",
  //       "フライパンで鶏肉を両面焼きます。",
  //       "調味料を加え、煮詰めながら照りを出します。",
  //       "鶏肉に味がなじんだら完成です。",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "ハンバーグ",
  //     taste: "rich",
  //     isCheap: true,
  //     isShort: false,
  //     isEasy: true,
  //     image: illust,
  //     ingredients: [
  //       { name: "牛ひき肉", amount: "300g" },
  //       { name: "玉ねぎ", amount: "1個" },
  //       { name: "パン粉", amount: "1/2カップ" },
  //       { name: "牛乳", amount: "大さじ2" },
  //       { name: "卵", amount: "1個" },
  //       { name: "塩", amount: "小さじ1/2" },
  //       { name: "コショウ", amount: "少々" },
  //     ],
  //     tags: ["洋食", "メイン", "簡単"],
  //     steps: [
  //       "玉ねぎをみじん切りにして、炒めて冷まします。",
  //       "ボウルにひき肉、玉ねぎ、パン粉、牛乳、卵、塩、コショウを入れて混ぜます。",
  //       "混ぜたタネを手で形を整えて、フライパンで焼きます。",
  //       "両面に焼き色がついたら、蓋をして弱火で火を通します。",
  //       "ソースをかけて完成です。",
  //     ],
  //   },
  // ];

  const [menus, setMenus] = useState(recipes);

  const handleSearch = (e) => {
    e.preventDefault();
    setMenus(search(menus, searchQuery));
    console.log("Searching for:", searchQuery, "with filters:", filters);
  };

  const [torioFilters, setTorioFilters] = useState({taste:null,isCheap:null,isShort:null,isEasy:null,mealType:null,cuisine:null})
  // const meal=menuFilter(menus,filters.taste,filters.isCheap,filters.isShort,filters.isEasy,filters.mealType,filters.cuisine)

  const handleFilterChange = (category, filterName) => {
    setFilters((prev) => ({
      ...prev,
      [category]: {
        ...Object.keys(prev[category]).reduce((acc, key) => {
          acc[key] = key === filterName;
          return acc;
        }, {}),
      },
    }));
    console.log("filtersの中身",filters)
  };

  const handleLinkClick = (recipe) => {
    console.log(recipe); // ここでrecipeを確認
  };

  const renderFilterSection = (category, title) => (
    <div className="mb-4 flex flex-col items-center">
      {" "}
      {/* 中央揃えのためにflex-colとitems-centerを追加 */}
      <h4 className="font-medium text-sm mb-2">{title}</h4>
      <div className="flex flex-wrap gap-4">
        {" "}
        {/* フレックスボックスで1行に並べる */}
        {Object.entries(filters[category]).map(([key, value]) => {
          console.log("key",key)
          console.log("value",value)
              return(
                  <div key={key} className="flex items-center space-x-2">
                    <input
                        type="radio"
                        name={category}
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
              )
            }
        )}
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
              onClick={() => setIsFilterOpen(!isFilterOpen)} // 開閉状態をトグル
              className="bg-white hover:bg-gray-100 text-gray-800 px-4 py-2 rounded-md border border-gray-300 flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              フィルター
            </button>
          </form>
          {isFilterOpen && ( // フィルターセクションを表示
            <div className="mt-4 p-4 bg-gray-100 rounded-md">
              {renderFilterSection("taste", "味")}
              <hr className="my-2 border-gray-200" />
              {renderFilterSection("isCheap", "費用")}
              <hr className="my-2 border-gray-200" />
              {renderFilterSection("isShort", "時間")}
              <hr className="my-2 border-gray-200" />
              {renderFilterSection("isEasy", "難易度")}
              <hr className="my-2 border-gray-200" />
              {renderFilterSection("mealType", "食事タイプ")}
              <hr className="my-2 border-gray-200" />
              {renderFilterSection("cuisine", "料理のジャンル")}
            </div>
          )}
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-amber-800">検索結果</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {menus.map((recipe) => (
            <Link
              to={{
                pathname: `/detail/${recipe.id}`,
                state: { recipe },
              }}
              key={recipe.id}
              onClick={() => handleLinkClick(recipe)}
              className="group"
            >
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
    </div>
  );
}

export default Result;