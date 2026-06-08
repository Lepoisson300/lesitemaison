import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function PortfolioSection() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: t('portfolio.projects.p1.title', 'ApexTrade Platform'),
      category: t('portfolio.projects.p1.category', 'Fintech Dashboard'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 2,
      title: t('portfolio.projects.p2.title', 'Serenity Spa'),
      category: t('portfolio.projects.p2.category', 'E-commerce & Booking'),
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 3,
      title: t('portfolio.projects.p3.title', 'Lunar Oasis'),
      category: t('portfolio.projects.p3.category', 'Real Estate Landing'),
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('portfolio.title', 'Notre Travail')}</h2>
          <p className="text-lg md:text-xl text-brand-secondary max-w-2xl">
            {t('portfolio.subtitle', 'Découvrez quelques-unes des expériences web extraordinaires que nous avons créées. Architectures modernes, déploiements rapides et design parfait au pixel près.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-brand-accent font-medium text-sm mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <button className="flex items-center gap-2 text-sm font-semibold text-white bg-white/20 hover:bg-white/30 backdrop-blur-md px-4 py-2 rounded-full transition-colors">
                    {t('portfolio.view_project', 'Voir le Projet')} <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
