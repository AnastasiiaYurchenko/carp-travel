import Head from 'next/head';
import Header from '@/components/header/header';
import Hero from '@/sections/hero/hero';
import About from '@/sections/about/about';
import Services from '@/sections/services/services';
import Career from '@/sections/career/career';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto">
        <Hero />
        <About />
        <Services />
        <Career />
      </main>
    </>
  );
}
