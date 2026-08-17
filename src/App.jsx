import React from "react";
import Lineup from "./components/Lineup/Lineup";
import Header from "./components/Header/Header";
import HeroPage from "./components/HeroPage/HeroPage";
import WhySection from "./components/WhySection/WhySection";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <HeroPage />
      <WhySection />
      <Lineup />
      <Footer />
    </div>
  );
};

export default App;
