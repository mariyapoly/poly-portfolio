
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AboutMe from "./Pages/AboutMe/AboutMe";
import Blog from "./Pages/Blog/Blog/Blog";
import ContactMe from "./Pages/ContactMe/ContactMe";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Footer from "./Pages/Share/Footer/Footer";
import Header from "./Pages/Share/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/blog" element={<Blog />} />
        { /*
        <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App;
