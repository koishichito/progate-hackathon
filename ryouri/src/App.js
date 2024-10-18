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
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // ここに検索ロジックを追加することができます
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <div className="home-container">
      <div className="text-center">
        <h1>ryouri</h1>
        <p >あなたの料理の冒険が始まります</p>

      </div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="料理名や食材を検索..."
          value={searchTerm}
          onChange={handleChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          検索
        </button>
      </form>

      <button onClick={toggleDropdown} style={{ marginTop: '20px' }}>
        詳細検索
      </button>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <h2>詳細検索オプション</h2>
          <label>
            <input type="checkbox" /> オプション1
          </label>
          <br />
          <label>
            <input type="checkbox" /> オプション2
          </label>
          <br />
          <label>
            <input type="checkbox" /> オプション3
          </label>
          <br />
          <button onClick={closeDropdown} style={{ marginTop: '10px' }}>
            閉じる
          </button>
        </div>
      )}

      <div className="change_page">
        <Link to="/result">Resultページへ</Link>
      </div>
      <div className="change_page">
        <Link to="/detail">Detailページへ</Link>
      </div>
    </div>
  );
}

export default App;