import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HelpfulServices from './components/HelpfulServices';
import FormTest from './components/FormTest';

function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
    </>
  );
}

function App() {
  // Show form test component only in development
  const isDev = import.meta.env.DEV;

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/helpful-services" element={<HelpfulServices />} />
        </Routes>
        <Footer />
        {isDev && <FormTest />}
      </div>
    </Router>
  );
}

export default App;