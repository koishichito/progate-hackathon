import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Result() {
  const location = useLocation();
  const searchResults = location.state?.results || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-red-100 p-8">
      <h1 className="text-3xl font-bold text-orange-800 mb-6">検索結果</h1>
      {searchResults.length > 0 ? (
        <ul className="space-y-4">
          {searchResults.map((recipe, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold text-orange-700">{recipe.name}</h2>
              <p className="text-gray-600">タグ: {recipe.tags}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-orange-800">検索結果がありません。</p>
      )}
      <Link to="/" className="mt-8 inline-block text-orange-600 hover:text-orange-800">
        トップページに戻る
      </Link>
    </div>
  );
}

export default Result;
