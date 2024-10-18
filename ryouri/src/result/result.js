import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Result() {
  const name = "検索結果";

  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>

      <div className="back">
        <Link to="/">戻る</Link>
      </div>
    </>
  );
}

export default Result;
