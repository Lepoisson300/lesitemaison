import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity1 = useTransform(scrollY, [0, 300], [1, 0]);
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-24 md:pt-20 pb-24 md:pb-10 px-4 md:px-8">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: y1 }}
      >
        <img
          src="/hero_bg.png"
          alt="Futuristic Glassmorphic Architecture"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg/80" />
      </motion.div>

      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex gap-4 w-full max-w-5xl px-8"
      >
        <div className="flex-1" />
        <div className="flex items-center gap-6 glass-card px-8 py-4 rounded-full flex-2 justify-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{t('hero.service', 'Service')}</span>
            <span className="text-sm text-brand-secondary">{t('hero.web_dev', 'Web Dev')}</span>
          </div>
          <div className="w-px h-6 bg-brand-secondary/20" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold">{t('hero.goal', 'Goal')}</span>
            <span className="text-sm text-brand-secondary">{t('hero.better_sites', 'Better Sites')}</span>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <Link to="/contact" className="glass-card px-8 py-4 rounded-full flex items-center gap-2 font-medium hover:bg-white/10 transition-all text-brand-text">
            {t('hero.contact_btn', 'Contact')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>

      {/* Main Title */}
      <div className="relative z-10 text-center max-w-6xl mx-auto mt-0 md:mt-[-10vh] flex-1 flex flex-col justify-center">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-5xl md:text-[6rem] leading-[1.1] md:leading-[1.1] font-bold tracking-tight text-white drop-shadow-xl mix-blend-overlay"
          style={{ opacity: opacity1 }}
          dangerouslySetInnerHTML={{ __html: t('hero.main_title', 'Better Websites <br /> For Everyone') }}
        />
      </div>

      {/* Floating Info Cards */}
      <div className="w-full max-w-6xl px-4 md:px-12 z-20 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 mt-12 md:mt-0 md:absolute md:bottom-12 md:left-1/2 md:-translate-x-1/2">
        {/* Left Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card p-6 md:p-8 rounded-[2rem] rounded-bl-[4rem] max-w-md w-full shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 bg-brand-primary text-brand-bg rounded-bl-3xl">
            <ArrowRight className="w-6 h-6 -rotate-45" />
          </div>
          <h2 className="text-2xl font-bold mb-4 pr-12">{t('hero.card1_title', 'Elevate Your Brand')}</h2>
          <p className="text-brand-secondary leading-relaxed mb-8">
            {t('hero.card1_desc', 'Our agency connects you with extraordinary web experiences. Start your journey to discovering the perfect digital match for your activity.')}
          </p>
          <div className="flex items-end gap-6">
            <div>
              <div className="text-4xl font-bold">100%</div>
              <div className="text-sm font-medium text-brand-secondary mt-1">{t('hero.satisfaction', 'Satisfaction')}</div>
            </div>
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-bg bg-brand-secondary/30 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Avatar" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="glass-card p-6 md:p-8 rounded-[2rem] rounded-br-[4rem] max-w-sm w-full shadow-2xl relative overflow-hidden hidden md:block"
        >
          <h3 className="text-xl font-bold mb-2">{t('hero.card2_title', 'Modern Architecture')}</h3>
          <div className="flex items-center gap-2 text-sm text-brand-secondary mb-4">
            <MapPin className="w-4 h-4" /> {t('hero.card2_subtitle', 'Global Reach, Local Impact')}
          </div>
          <p className="text-sm leading-relaxed mb-6">
            {t('hero.card2_desc', 'This futuristic approach seamlessly blends into the digital environment, offering a flowing space with panoramic technical views. Its innovative design makes it a perfect luxury gateway.')}
          </p>
          <div className="flex gap-4 text-xs font-semibold text-brand-secondary">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-accent"></span> SEO</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-brand-primary"></span> Speed</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Design</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
