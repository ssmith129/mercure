import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import CoreIssues from './components/CoreIssues';
import Services from './components/Services';
import CareTeam from './components/CareTeam';
import Approach from './components/Approach';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Mission />
      <CoreIssues />
      <Services />
      <CareTeam />
      <Approach />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;