import logo from "./logo.svg";
import "./App.css";
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
  return (
    <>
      <div className="change_page">
        <Link to="/result">Resultページへ</Link>
      </div>
      <div className="change_page">
        <Link to="/detail">Detailページへ</Link>
      </div>
    </>
  );
}

export default App;
