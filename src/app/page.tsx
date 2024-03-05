import Hero from '@/sections/hero/hero';
import Header from '@/components/header/header';
import About from '@/sections/about/about';
import Services from '@/sections/services/services';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto">
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
}
