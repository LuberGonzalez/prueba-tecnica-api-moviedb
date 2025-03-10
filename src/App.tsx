import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Search from "./pages/Search/Search";

const ROUTES = {
  FAVORITES: {
    path: "/",
    element: <Home />,
  },
  HOME: {
    path: "/favorites",
    element: <Favorites />,
  },
  SEARCH: {
    path: "/search",
    element: <Search />,
  },
};

function App() {
  return (
    <div className="main-container">
      <Header />
      <Router>
        <Routes>
          {Object.values(ROUTES).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
