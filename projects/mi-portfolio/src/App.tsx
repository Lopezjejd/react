import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'

function App() {


  return (
    <>
        <Header />
    <main className='bg-fondo text-texto-base h-screen'>
    
      <Hero />
    </main>
      
    </>
  )
}

export default App
