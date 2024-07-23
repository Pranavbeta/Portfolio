import './App.css'
import About from './components/About'
import ContactFrom from './components/ContactFrom'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App=()=>{
  return (
    <main className="overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </main>

  )
}

export default App
