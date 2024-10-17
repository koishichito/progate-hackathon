import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App from "../App.js";

function Detail() {
  return (
    <>
      <div>
        <h1>カレーライス</h1>
      </div>

      <div className="back">
        <Link to="/">戻る</Link>
      </div>
    </>
  );
}

export default Detail;
