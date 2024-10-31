import Head from 'next/head';
import Navbar from "@/components/Navbar/Navbar";
import LandingSection from "@/components/LandingSection/LandingSection";
import ProductSection from "@/components/ProductSection";
import Incentives from "@/components/Incentives";
import Contact from "@/components/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cakes n Cookie{"'"}s</title>
        <meta name="description" content="Responsive cake shop landing page" />
        <meta
          name='keywords'
          content='Chirag, Bhalotia,codes, Full Stack Developer,html, css, cake ,shop, landing ,page, responsive, website, cakes n cookies, example page'
        />
        <meta name='language' content='EN' />
        <meta name='author' content='Chirag Bhalotia' />
        <meta name='publisher' content='Chirag Bhalotia' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"bg-pink-50"}>
        <Navbar />
        <LandingSection />
        <ProductSection />
        <Incentives />
        <Contact />
        <a
          href="https://wa.me/918767986326"
          className="fixed bottom-4 right-4 bg-green-500 text-white p-5 rounded-full shadow-lg flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: '60px', height: '60px' }}
        >
          <FontAwesomeIcon icon={faWhatsapp} style={{ fontSize: '24px' }} />
        </a>
      </main>
    </div>
  );
}
