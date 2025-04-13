import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Home from "./pages/Home";
import Join from "./pages/Join";
import Trainers from "./components/Trainers";

function App() {
  return (
    <Router>  
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Services />
            <Trainers />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
