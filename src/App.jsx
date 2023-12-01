
import './styles/index.css';
import './styles/features.css';
import Navbar from './common/Navbar/Navbar';
import InformationSection from './components/Information/InformationSection';
import Footer from './common/Footer/Footer';
import Banner from './components/Banner/Banner';
import { useState } from 'react';

const App = () => {

  return (
    <>
      <Navbar />
      <Banner/>
      <InformationSection/>
      <Footer/>
    </>
  );
}

export default App
