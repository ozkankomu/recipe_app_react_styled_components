import { GlobalStyles } from "./styles/Global.styled";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import PrivateRouter from "./pages/PrivateRouter";
import Details from "./pages/details/Details";
import Navbar from "./components/Navbar";
import About from "./pages/about/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyles />
      <Routes>
        <Route
          path="/recipe_app_react_styled_components"
          element={<Login />}
        ></Route>
        <Route path="/" element={<Login />} />
        <Route path="/details" element={<Details />} />

        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
