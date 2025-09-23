import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Process from './pages/Process';
import Contact from './pages/Contact';
import SubscriptionCreators from './pages/SubscriptionCreators';
import SubscriptionPublicFigures from './pages/SubscriptionPublicFigures';
import SubscriptionIndividuals from './pages/SubscriptionIndividuals';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/process" element={<Process />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/subscription/creators" element={<SubscriptionCreators />} />
          <Route path="/subscription/public-figures" element={<SubscriptionPublicFigures />} />
          <Route path="/subscription/individuals" element={<SubscriptionIndividuals />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;