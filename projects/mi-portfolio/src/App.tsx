import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
function App() {


  return (
    < >
        <Header />
    <main className='bg-fondo text-texto-base '>
    
      <Hero />
      <Skills />
    </main>
      
    </>
  )
}

export default App
