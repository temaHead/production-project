import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/className";
import { useTheme } from "./providers";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
