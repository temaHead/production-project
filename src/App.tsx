import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext, useState } from "react";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/UseTheme";
import { classNames } from "./helpers/classNames/className";

function App() {
  const { theme, togleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={togleTheme}>togle</button>
      <Link to={"/"}>main</Link>
      <Link to={"/about"}>about</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
