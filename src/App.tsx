import React from 'react';
import { ConfigProvider } from 'antd';
import themeConfig from './theme/themeConfig';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Placeholder imports for now
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <ConfigProvider theme={themeConfig}>
      <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default App;
