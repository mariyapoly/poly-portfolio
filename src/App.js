
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider";
import About from "./Pages/About/About";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Pages/Share/Footer/Footer";
import Header from "./Pages/Share/Header/Header";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
