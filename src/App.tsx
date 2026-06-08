import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navigation } from './components/Navigation';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProcessPage } from './pages/ProcessPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { CgvPage } from './pages/CgvPage';
import { ConfidentialityPage } from './pages/ConfidentialityPage';

function App() {
  const { t } = useTranslation();

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-x-hidden selection:bg-brand-accent selection:text-white pb-20 md:pb-0 flex flex-col">
          <Navigation />
          
          <main className="flex-1">
            <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            <Route path="/mentions-legales" element={<LegalPage />} />
            <Route path="/cgv" element={<CgvPage />} />
            <Route path="/confidentialite" element={<ConfidentialityPage />} />
            </Routes>
          </main>

          <footer className="py-12 px-8 text-center border-t border-white/10 mt-auto bg-black/40 backdrop-blur-md relative z-20">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-brand-secondary font-medium">© {new Date().getFullYear()} Rémi Puigsech (EI). {t('footer.copyright', 'Tous droits réservés.')}</p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-brand-secondary">
                <Link to="/mentions-legales" className="hover:text-brand-primary transition-colors">{t('footer.legal', 'Mentions Légales')}</Link>
                <Link to="/cgv" className="hover:text-brand-primary transition-colors">{t('footer.cgv', 'CGV')}</Link>
                <Link to="/confidentialite" className="hover:text-brand-primary transition-colors">{t('footer.confidentiality', 'Politique de Confidentialité')}</Link>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
