import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function LegalPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('legal.mentions.title', 'Mentions Légales')} - Better Websites</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="relative min-h-screen bg-brand-bg text-brand-text pt-24 md:pt-32 px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t('legal.back', 'Retour à l\'accueil')}
          </Link>
          
          <div className="glass-card p-6 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('legal.mentions.title', 'Mentions Légales')}</h1>
            
            <div className="space-y-8 text-brand-secondary leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.mentions.s1_title', '1. Éditeur du site')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.mentions.s1_desc', 'Le présent site est édité par :<br/><strong>Rémi Puigsech</strong><br/>Statut : Entreprise Individuelle (EI)<br/>Adresse : CAMPAGNE<br/>SIREN : 990551582<br/>Email : contact@remipuigsech.fr') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.mentions.s2_title', '2. Directeur de la publication')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.mentions.s2_desc', 'Le Directeur de la publication est Monsieur Rémi Puigsech.') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.mentions.s3_title', '3. Hébergement')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.mentions.s3_desc', 'Le site est hébergé par Vercel Inc.<br/>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.mentions.s4_title', '4. Propriété intellectuelle')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.mentions.s4_desc', 'L\'ensemble de ce site relève de la législation française et internationale sur le droit d\'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.') }} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
