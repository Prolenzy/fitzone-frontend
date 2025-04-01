import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <div className="card">  
        <Navbar />         
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
      </div>     
    </>
  )
}

export default App
