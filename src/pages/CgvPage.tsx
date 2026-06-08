import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function CgvPage() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('legal.cgv.title', 'Conditions Générales de Vente (CGV)')} - Better Websites</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="relative min-h-screen bg-brand-bg text-brand-text pt-24 md:pt-32 px-4 md:px-8 pb-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-secondary hover:text-brand-primary mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> {t('legal.back', 'Retour à l\'accueil')}
          </Link>
          
          <div className="glass-card p-6 md:p-12 rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">{t('legal.cgv.title', 'Conditions Générales de Vente (CGV)')}</h1>
            
            <div className="space-y-8 text-brand-secondary leading-relaxed">
              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.cgv.s1_title', '1. Objet')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.cgv.s1_desc', 'Les présentes Conditions Générales de Vente régissent les relations contractuelles entre Rémi Puigsech, Entreprise Individuelle (SIREN: 990551582) située à CAMPAGNE, et tout client professionnel ou particulier souhaitant bénéficier des services de création de sites web, de référencement (SEO) et de déploiement.') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.cgv.s2_title', '2. Prestations')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.cgv.s2_desc', 'L\'entreprise Rémi Puigsech propose des prestations de développement web sur mesure. Les détails de chaque prestation sont définis dans un devis préalablement accepté par le client.') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.cgv.s3_title', '3. Tarifs et Modalités de paiement')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.cgv.s3_desc', 'Les prix sont indiqués en euros. Conformément au régime fiscal applicable, la TVA peut être ou ne pas être applicable (franchise en base de TVA selon la législation). Le paiement s\'effectue selon les conditions définies sur le devis (généralement 30 jours date de facture).') }} />
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.cgv.s4_title', '4. Délais de livraison')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.cgv.s4_desc', 'Les délais de livraison sont donnés à titre indicatif. Tout retard ne saurait justifier l\'annulation de la commande ou donner lieu à des pénalités, sauf stipulation contraire expresse.') }} />
              </section>
              
              <section>
                <h2 className="text-xl font-bold text-brand-primary mb-3">{t('legal.cgv.s5_title', '5. Litiges')}</h2>
                <p dangerouslySetInnerHTML={{ __html: t('legal.cgv.s5_desc', 'En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux compétents seront ceux du ressort du siège social de l\'entreprise Rémi Puigsech.') }} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
