import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function ConfidentialityPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('legal.conf.title', 'Politique de Confidentialité')} - Better Websites</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="relative min-h-screen bg-brand-bg text-brand-text pt-24 md:pt-32 px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t('legal.back', 'Retour à l\'accueil')}
          </Link>
          
          <div className="glass-card p-6 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('legal.privacy.title', 'Politique de Confidentialité')}</h1>
            
            <div className="space-y-8 text-brand-secondary leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.conf.s1_title', '1. Collecte des données personnelles')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.conf.s1_desc', 'Dans le cadre de l\'utilisation de nos formulaires de contact, nous collectons les données suivantes : Nom, Prénom, et Adresse Email. Ces données sont utilisées exclusivement dans le but de répondre à vos demandes de prestation ou de partenariat.') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.conf.s2_title', '2. Traitement et Hébergement')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.conf.s2_desc', 'Le traitement de ces données est réalisé par Rémi Puigsech (EI). Elles sont conservées pour une durée maximale de 3 ans après notre dernier contact. Le site étant hébergé par Vercel, certaines données techniques (adresses IP) peuvent être collectées à des fins de sécurité.') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.conf.s3_title', '3. Vos droits')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.conf.s3_desc', 'Conformément à la réglementation RGPD, vous disposez d\'un droit d\'accès, de rectification, d\'effacement et de portabilité de vos données. Pour exercer ce droit, vous pouvez nous contacter à l\'adresse suivante : contact@remipuigsech.fr.') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.conf.s4_title', '4. Cookies')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.conf.s4_desc', 'Notre site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie de suivi publicitaire n\'est déposé sans votre consentement préalable.') }} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
