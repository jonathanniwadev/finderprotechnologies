import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoShowcase.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import ExperienceSection from "./sections/Experience.jsx";
import Experience from "./sections/Experience.jsx";
import {TechnicolorShader} from "three/examples/jsm/shaders/TechnicolorShader.js";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Terms from "./sections/Terms.jsx";


const App = () => {
    return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
       <LogoShowcase />
        <FeatureCards />
      <Experience />
      <Testimonials />
      <Contact />
      <Terms />
      <Footer />


    </>

    )
}
export default App
