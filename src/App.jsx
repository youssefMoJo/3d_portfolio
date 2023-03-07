import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero,
  Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        
        {/* The headers of the portfolio */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>

        {/* The body of the portfolio */}
        <About/>
        <Experience/>
        <Tech/> 
        <Works/>
        <Feedbacks/>

        {/* this section is for the stars */}
        <div className="relative z-0">
          <Contact/> 
          <StarsCanvas/> 
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
