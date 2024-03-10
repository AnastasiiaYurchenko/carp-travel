// import Head from 'next/head';
import Header from '@/components/header/header';
import Hero from '@/sections/hero/hero';
import About from '@/sections/about/about';
import Services from '@/sections/services/services';
import Career from '@/sections/career/career';
import CareerForm from '@/sections/career-form/career-form';
import Contacts from '@/sections/contacts/contacts';
import Gallery from '@/sections/gallery/gallery';

export default function Home() {
  return (
    <>
      {/* <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
      </Head> */}
      <Header />
      <main className="mx-auto">
        <Hero />
        <About />
        <Services />
        <Career />
        <CareerForm />
        <Gallery />
        <Contacts />
      </main>
    </>
  );
}
