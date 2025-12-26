import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VerifySteps from '@/components/VerifySteps';
import Timeline from '@/components/Timeline';
import Benefits from '@/components/Benefits';
import Shortform from '@/components/Shortform';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <VerifySteps />
      <Timeline />
      <Benefits />
      <Shortform />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
