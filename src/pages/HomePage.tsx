import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { SeoSection } from '../components/SeoSection';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Better Websites - Web Agency | SEO & Architecture</title>
        <meta name="description" content="We build modern, elegant, glassmorphic websites. Expert in referencement (SEO), architecture, and top-tier user experiences." />
        <meta name="keywords" content="web agency, website development, SEO, referencing, architecture, react, vite, modern design, glassmorphism" />
        <meta property="og:title" content="Better Websites - Web Agency" />
        <meta property="og:description" content="Elevate your brand with extraordinary web experiences." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <main>
        <Hero />
        <SeoSection />
      </main>
    </>
  );
}
