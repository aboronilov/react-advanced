import { Route, Routes } from "react-router-dom";
import "./index.scss";
import { Link } from "react-router-dom";
import { AboutPageAsync, MainPageAsync } from "./pages";
import { Suspense } from "react";

const App = () => {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
