import React, { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // ここに検索ロジックを実装
    console.log('Searching for:', searchTerm);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#FFF5E6',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '48px',
        fontWeight: 'bold',
        color: '#FF6B35',
        marginBottom: '24px'
      }}>
        ryouri
      </h1>
      <form onSubmit={handleSearch} style={{
        display: 'flex',
        width: '100%',
        maxWidth: '400px'
      }}>
        <input
          type="text"
          placeholder="料理を検索..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #FF6B35',
            borderRadius: '4px 0 0 4px',
            outline: 'none'
          }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#FF6B35',
          color: 'white',
          border: 'none',
          borderRadius: '0 4px 4px 0',
          cursor: 'pointer'
        }}>
          検索
        </button>
      </form>
    </div>
  );
};