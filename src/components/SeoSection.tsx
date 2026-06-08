import { motion } from 'framer-motion';
import { Search, Globe, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function SeoSection() {
  const { t } = useTranslation();

  const features = [
    {
      icon: Globe,
      title: t('seo.features.f1.title', 'Global Visibility'),
      description: t('seo.features.f1.desc', 'We ensure your site ranks high on global search engines, attracting worldwide traffic.')
    },
    {
      icon: Search,
      title: t('seo.features.f2.title', 'Keyword Optimization'),
      description: t('seo.features.f2.desc', 'Deep analysis and integration of keywords that matter to your business.')
    },
    {
      icon: TrendingUp,
      title: t('seo.features.f3.title', 'Traffic Growth'),
      description: t('seo.features.f3.desc', 'Sustainable organic traffic growth with proven, white-hat SEO strategies.')
    }
  ];

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 z-10 bg-brand-bg">
      <div className="max-w-6xl mx-auto pl-0 md:pl-24">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('seo.title', 'Referencing (SEO)')}</h2>
          <p className="text-lg md:text-xl text-brand-secondary max-w-2xl">
            {t('seo.desc', 'A beautiful website is useless if no one can find it. We build SEO directly into the architecture of your site, ensuring maximum visibility and organic growth.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/20 flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-brand-text">{feature.title}</h3>
              <p className="text-brand-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
