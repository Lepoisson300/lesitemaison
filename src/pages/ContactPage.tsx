import { Helmet } from 'react-helmet-async';
import { ContactSection } from '../components/ContactSection';
import { useTranslation } from 'react-i18next';

export function ContactPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('nav.contact', 'Contactez-Nous')} - Better Websites</title>
        <meta name="description" content="Démarrez votre projet avec nous." />
      </Helmet>
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  );
}
