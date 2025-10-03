
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Technologies } from './components/Technologies'
import ProjectsCarousel from './components/ProjectsCarousel'
import Skills from './components/Skills'
function App() {


  return (
    < >
        <Header />
    <main className='bg-fondo text-texto-base scroll-smooth'>
    
      <Hero />
      <Technologies />
      <ProjectsCarousel />
      <Skills />
    </main>
      
    </>
  )
}

export default App
