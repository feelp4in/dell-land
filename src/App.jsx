import React from 'react';
import Lineup from './components/Lineup/Lineup';
import Header from './components/Header/Header';
import HeroPage from './components/HeroPage/HeroPage';

const App = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <Lineup />
    </div>
  )
}

export default App