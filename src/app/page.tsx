import Hero from '@/sections/hero/hero';
import Header from '@/components/header/header';
import About from '@/sections/about/about';
import Services from '@/sections/services/services';
import Head from 'next/head';

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
      </main>
    </>
  );
}
