import { Helmet } from 'react-helmet-async';
import { PortfolioSection } from '../components/PortfolioSection';
import { useTranslation } from 'react-i18next';

export function PortfolioPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('nav.portfolio', 'Portfolio')} - Better Websites</title>
        <meta name="description" content="Découvrez nos travaux et réalisations." />
      </Helmet>
      <div className="pt-20">
        <PortfolioSection />
      </div>
    </>
  );
}
