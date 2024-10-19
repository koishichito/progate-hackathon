import {Link } from "react-router-dom";
import {useEffect, useState} from "react";
import { Search, Filter } from "lucide-react";
import { search } from "../utils/search";
import {recipes} from "../data/data";
import React from "react";
import {menuFilter} from "../utils/filter";

function Result() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [taste, setTaste] = useState(null);
  const [isCheap, setIsCheap] = useState(null);
  const [isShort, setIsShort] = useState(null);
  const [isEasy, setIsEasy] = useState(null);
  const [mealType, setMealType] = useState(null);
  const [cuisine, setCuisine] = useState(null);



  const FilterInput = ({ name, id,state, setState, tag }) => (
      <div className="flex items-center space-x-2">
        <input
            type="radio"
            name={name}
            id={id}
            value={id}
            checked={id===state}
            onChange={(e) => setState(e.target.value)}
            className="rounded border-gray-300 text-amber-500 focus:ring-amber-500"
        />
        <label htmlFor={id} className="text-sm leading-none">
          {tag}
        </label>
      </div>
  );

  const FilterSection = ({ title, name, options,state, setState }) => (
      <div className="mb-4 flex flex-col items-center">
        <h4 className="font-medium text-sm mb-2">{title}</h4>
        <div className="flex flex-wrap gap-4">
          {options.map(({ id, tag }) => (
              <FilterInput
                  key={id}
                  name={name}
                  id={id}
                  state={state}
                  setState={setState}
                  tag={tag}
              />
          ))}
        </div>
      </div>
  );


  const filterSections = [
    {
      title: '味',
      name: 'taste',
      options: [
        { id: 'sweet', tag: '甘い' },
        { id: 'spicy', tag: '辛い' },
        { id: 'light', tag: 'あっさり' },
        { id: 'rich', tag: 'こってり' },
      ],
      state:taste,
      setState: setTaste,
    },
    {
      title: '費用',
      name: 'isCheap',
      options: [
        { id: 'cheap', tag: '安い' },
        { id: 'expensive', tag: '高い' },
      ],
      state:isCheap,
      setState: setIsCheap,
    },
    {
      title: '時間',
      name: 'isShort',
      options: [
        { id: 'short', tag: '短い' },
        { id: 'long', tag: '長い' },
      ],
      state:isShort,
      setState: setIsShort,
    },
    {
      title: '難易度',
      name: 'isEasy',
      options: [
        { id: 'easy', tag: '簡単' },
        { id: 'difficult', tag: '難しい' },
      ],
      state:isEasy,
      setState: setIsEasy,
    },
    {
      title: '食事タイプ',
      name: 'mealType',
      options: [
        { id: 'staple', tag: '主食' },
        { id: 'main', tag: '主菜' },
        { id: 'side', tag: '副菜' },
        { id: 'soup', tag: '汁物' },
      ],
      state:mealType,
      setState: setMealType,
    },
    {
      title: '料理のジャンル',
      name: 'cuisine',
      options: [
        { id: 'japanese', tag: '和食' },
        { id: 'western', tag: '洋食' },
        { id: 'chinese', tag: '中華' },
        { id: 'italian', tag: 'イタリアン' },
      ],
      state:cuisine,
      setState: setCuisine,
    },
  ];

  const [menus, setMenus] = useState(recipes);
  useEffect(() => {
    const filteredMenus=menuFilter(recipes,taste,isCheap,isShort,isEasy,mealType,cuisine)
    setMenus(filteredMenus)
  }, [taste,isCheap,isShort,isEasy,mealType,cuisine]);
  const handleSearch = (e) => {
    e.preventDefault();
    setMenus(search(menus, searchQuery));
    console.log("Searching for:", searchQuery, "with filters:", );
  };

  const handleLinkClick = (recipe) => {
    console.log(recipe); // ここでrecipeを確認
  };


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
              {filterSections.map((section, index) => (
                  <React.Fragment key={section.name}>
                    <FilterSection {...section} />
                    {index < filterSections.length - 1 && (
                        <hr className="my-2 border-gray-200" />
                    )}
                  </React.Fragment>
              ))}
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