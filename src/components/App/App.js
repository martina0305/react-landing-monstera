import React from 'react';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';
import CardsContainer from '../CardsContainer/CardsContainer';
import Newsletter from '../Newsletter/Newsletter';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <CardsContainer />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
