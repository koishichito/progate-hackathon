import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App from "../App.js";
import curry from "../image/カレーライス.png";

function Detail() {
  const name = "カレーライス";
  const image = "";

  return (
    <>
      <div>
        <h1>{name}</h1>
        <img src={curry} />
      </div>

      <div className="back">
        <Link to="/">戻る</Link>
      </div>
    </>
  );
}

export default Detail;
