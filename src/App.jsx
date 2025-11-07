import { useState } from 'react'
import NavBar from './components/navbar'
import './App.css';
import NewArrivals from './components/NewArrivals';
import InstagramSection from './components/InstagramSection';
import UltimateSale from './components/UltimateSale';
import Deals from './components/Deals';
import PeakyBlinders from './components/PeakyBlinders';
import Testimonial from './components/Testimonial';
import SubsribeSection from './components/SubscribeSection';
import FootSection from './components/FootSection';


function App() {

  return (
    <div>
        <header>
          <NavBar />
        </header>
        <main>
          <UltimateSale />
          <Deals />
          <NewArrivals />
          <PeakyBlinders />
          <InstagramSection />
          <Testimonial />
          <SubsribeSection />
        </main>
        <footer>
          <FootSection />
        </footer>
    </div>
  )
}

export default App
