import React from 'react'

import Hero from './Hero/Hero';
import Discover from "./Discover/Discover";
import Card from "./Trending/Cardlist";
import Exclusive from "./Exclusive/Exclusive";
import Recent from './Recent/Recent';
import Explor from './Explor/Explor';
import Parking from './Parking/Parking';
import Footer from './Footer/Footer';






function Home() {

  return (
    <div>
     
      <Hero />
      <Discover />
      <Card />
      <Exclusive />
      <Recent />
      <Explor />
      <Parking />
      <Footer />
    </div>
  );
}

export default Home
