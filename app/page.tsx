'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

import LoadingScreen from '@/components/ui/LoadingScreen';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Services from '@/components/sections/Services';
import Experience from '@/components/sections/Experience';
import GitHubStats from '@/components/sections/GitHubStats';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <CustomCursor />
      <LoadingScreen onComplete={() => setLoaded(true)} />

      {loaded && (
        <main className="min-h-screen bg-dark-950">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Experience />
          <GitHubStats />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
