import "./App.css";
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Detail from "./detail/detail.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* ホームコンポーネント */}
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    // ここに検索ロジックを追加することができます
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif'
    }}>
    <h1 style={{ marginBottom: '20px' }}>Cook</h1>
    <form onSubmit={handleSearch} style={{ display: 'flex', width: '100%', maxWidth: '400px' }}>
      <input
        type="text"
        placeholder="検索ワードを入力..."
        value={searchTerm}
        onChange={handleChange}
        style={{
          flex: 1,
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px 0 0 4px',
          outline: 'none'
        }}
      />
      <button type="submit" style={{
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '0 4px 4px 0',
        cursor: 'pointer'
      }}>
        検索
      </button>
    </form>
    {searchTerm && (
      <div style={{ marginTop: '20px' }}>
        <h2>検索結果:</h2>
        <p>{searchTerm}</p>
      </div>
    )}
    <div className="change_page">
      <Link to="/detail">Detailページへ</Link>
    </div>
    </div>
  );
}

export default App;

