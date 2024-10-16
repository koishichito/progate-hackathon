'use client'

import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Detail from "./detail/detail.js";
import Result from "./result/result.js";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  // 状態管理
  const [isOpen, setIsOpen] = useState(false)
  const [flavor, setFlavor] = useState('あっさり')
  const [cost, setCost] = useState('普通')
  const [time, setTime] = useState('30分以内')
  const [difficulty, setDifficulty] = useState('普通')

  // カテゴリーの定義
  const categories = [
    { title: '味', options: ['甘い', '辛い', 'あっさり', 'こってり'], state: flavor, setState: setFlavor },
    { title: '費用', options: ['安い', '高い'], state: cost, setState: setCost },
    { title: '時間', options: ['短い', '長い'], state: time, setState: setTime },
    { title: '難易度', options: ['簡単', '難しい'], state: difficulty, setState: setDifficulty }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl space-y-12">
        {/* ヘッダー */}
        <div className="text-center">
          <h1 className="text-9xl font-bold text-orange-600 mb-2">ryouri</h1>
          <p className="text-sm text-orange-800">あなたの料理の冒険が始まります</p>
        </div>
        <div className="space-y-4 w-full max-w-md mx-auto">
          {/* 検索バー */}
          <div className="flex items-center justify-center space-x-4">
            <div className="relative flex-grow">
              <input
                className="w-full pl-10 pr-4 py-2 text-base rounded-full border-2 border-orange-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:ring-opacity-50"
                placeholder="料理名や食材を検索..."
                type="search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button
              className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"
              aria-label="検索"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          {/* 詳細検索 */}
          <div className="w-full">
            <button
              className={`w-full flex justify-between items-center bg-orange-100 border-2 border-orange-300 text-orange-800 hover:bg-orange-200 hover:text-orange-900 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50 ${isOpen ? 'rounded-b-none' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="detailed-search"
            >
              詳細検索
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div id="detailed-search" className="bg-orange-50 p-6 rounded-b-lg shadow-md border-2 border-t-0 border-orange-200">
                <div className="grid grid-cols-2 gap-6">
                  {categories.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <p className="text-sm font-medium text-orange-800">{category.title}</p>
                      {category.options.map((option) => (
                        <label key={option} className="flex items-center space-x-2">
                          <input
                            type="radio"
                            name={category.title}
                            value={option}
                            checked={category.state === option}
                            onChange={() => category.setState(option)}
                            className="text-orange-500 focus:ring-orange-400"
                          />
                          <span className="text-orange-700">{option}</span>
                        </label>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* ナビゲーションリンク */}
        <div className="flex justify-around">
          <Link to="/result" className="text-orange-600 hover:text-orange-800">
            Resultページへ
          </Link>
          <Link to="/detail" className="text-orange-600 hover:text-orange-800">
            Detailページへ
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App;

// function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const handleChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log('Searching for:', searchTerm);
//     // ここに検索ロジックを追加することができます
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };

//   return (
//     <div className="home-container">
//       <div className="text-center">
//         <h1>ryouri</h1>
//         <p >あなたの料理の冒険が始まります</p>

//       </div>
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           placeholder="料理名や食材を検索..."
//           value={searchTerm}
//           onChange={handleChange}
//           className="search-input"
//         />
//         <button type="submit" className="search-button">
//           検索
//         </button>
//       </form>

//       <button onClick={toggleDropdown} style={{ marginTop: '20px' }}>
//         詳細検索
//       </button>

//       {isDropdownOpen && (
//         <div className="dropdown-menu">
//           <h2>詳細検索オプション</h2>
//           <label>
//             <input type="checkbox" /> オプション1
//           </label>
//           <br />
//           <label>
//             <input type="checkbox" /> オプション2
//           </label>
//           <br />
//           <label>
//             <input type="checkbox" /> オプション3
//           </label>
//           <br />
//           <button onClick={closeDropdown} style={{ marginTop: '10px' }}>
//             閉じる
//           </button>
//         </div>
//       )}

//       <div className="change_page">
//         <Link to="/result">Resultページへ</Link>
//       </div>
//       <div className="change_page">
//         <Link to="/detail">Detailページへ</Link>
//       </div>
//     </div>
//   );
// }