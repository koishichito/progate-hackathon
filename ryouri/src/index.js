import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-200 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-6xl font-bold text-orange-600 mb-2">ryouri</h1>
        <p className="text-xl text-orange-800">あなたの料理の冒険が始まります</p>
      </div>
      <div className="w-full max-w-md">
        <form onSubmit={(e) => e.preventDefault()} className="relative">
          <Input
            type="search"
            placeholder="料理や食材を検索..."
            className="w-full pl-4 pr-10 py-2 rounded-full border-2 border-orange-300 focus:border-orange-500 focus:ring focus:ring-orange-200 focus:ring-opacity-50"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-1 top-1 rounded-full bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            <Search className="h-4 w-4 text-white" />
            <span className="sr-only">検索</span>
          </Button>
        </form>
      </div>
    </div>
  )
}


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
