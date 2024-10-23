
import './App.css'
import About from './components/About'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='bg-black h-full px-12 py-6 font-lufga'>
      <Navbar/>
      <HeroSection/>
      <About/>
    </div>
  )
}

export default App
