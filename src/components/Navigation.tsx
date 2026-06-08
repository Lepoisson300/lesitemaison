import { Home, Lightbulb, LayoutGrid, MessageSquare, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Navigation() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navItems = [
    { path: '/', icon: Home, title: t('nav.home') },
    { path: '/process', icon: Lightbulb, title: t('nav.process') },
    { path: '/portfolio', icon: LayoutGrid, title: t('nav.portfolio') },
    { path: '/contact', icon: MessageSquare, title: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('fr') ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed md:left-4 md:top-1/2 md:bottom-auto md:-translate-y-1/2 bottom-4 left-1/2 -translate-x-1/2 md:translate-x-0 z-50 flex md:flex-col flex-row gap-4 bg-black/40 backdrop-blur-xl p-3 md:rounded-full rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/10 w-[90%] md:w-auto justify-between md:justify-start">
      <div className="flex md:flex-col flex-row gap-2 md:gap-4 w-full justify-around items-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            title={item.title}
            className={`p-3 rounded-full transition-all duration-300 flex-shrink-0 ${location.pathname === item.path
                ? 'bg-brand-primary text-black shadow-lg md:scale-110 scale-105'
                : 'text-brand-secondary hover:bg-black/5 md:hover:scale-105'
              }`}
          >
            <item.icon className="w-5 h-5" />
          </Link>
        ))}
        <div className="w-px h-6 md:h-px md:w-6 bg-brand-secondary/30 hidden md:block"></div>
        <button
          onClick={toggleLanguage}
          title="Change Language"
          className="p-3 rounded-full transition-all duration-300 flex-shrink-0 text-brand-secondary hover:bg-black/5 md:hover:scale-105 flex flex-col items-center justify-center font-bold text-xs"
        >
          <Globe className="w-4 h-4 mb-0.5" />
          {t('nav.lang_toggle')}
        </button>
      </div>
    </nav>
  );
}
