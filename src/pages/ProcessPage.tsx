import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Server, PenTool, CheckCircle, Rocket, GitCommit, Play, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function ProcessPage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('process.title', 'Expertise & Process')} - Better Websites</title>
        <meta name="description" content={t('process.subtitle', 'De l\'idée initiale jusqu\'à la mise en production...')} />
      </Helmet>

      <div className="relative min-h-screen bg-brand-bg text-brand-text pt-24 md:pt-32 px-4 md:px-8 pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('process.title', 'Notre Méthodologie')}</h1>
            <p className="text-xl text-brand-secondary max-w-3xl mx-auto">
              {t('process.subtitle', 'De l\'idée initiale jusqu\'à la mise en production, nous concevons des architectures robustes, des maquettes inspirantes, et des pipelines de déploiement sécurisés.')}
            </p>
          </motion.div>

          <div className="space-y-32">
            
            {/* Step 1: Architecture */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <div className="flex-1">
                <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-6">
                  <Server className="w-8 h-8 text-brand-accent" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{t('process.step1.title', '1. Conception de l\'Architecture')}</h2>
                <p className="text-lg text-brand-secondary leading-relaxed">
                  {t('process.step1.desc', 'Avant d\'écrire la moindre ligne de code, nous pensons l\'architecture technique...')}
                </p>
              </div>
              <div className="flex-1 glass-card p-8 rounded-3xl w-full">
                  <div className="flex flex-col gap-4">
                    <div className="p-4 bg-black/20 rounded-xl border border-white/10 flex justify-between items-center">
                       <span className="font-semibold text-sm">{t('process.step1.frontend', 'Frontend (React / Vite)')}</span>
                       <span className="text-xs text-brand-secondary">{t('process.step1.frontend_desc', 'UI / UX')}</span>
                    </div>
                    <div className="h-4 w-px bg-brand-secondary/30 mx-auto"></div>
                    <div className="p-4 bg-black/20 rounded-xl border border-white/10 flex justify-between items-center">
                       <span className="font-semibold text-sm">{t('process.step1.backend', 'Backend API / Edge Functions')}</span>
                       <span className="text-xs text-brand-secondary">{t('process.step1.backend_desc', 'Logique Métier')}</span>
                    </div>
                    <div className="h-4 w-px bg-brand-secondary/30 mx-auto"></div>
                    <div className="p-4 bg-black/20 rounded-xl border border-white/10 flex justify-between items-center">
                       <span className="font-semibold text-sm">{t('process.step1.db', 'Base de données (PostgreSQL)')}</span>
                       <span className="text-xs text-brand-secondary">{t('process.step1.db_desc', 'Stockage')}</span>
                    </div>
                 </div>
              </div>
            </motion.div>

            {/* Step 2: Maquettes & Moodboards */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col-reverse md:flex-row items-center gap-12"
            >
              <div className="flex-1 glass-card p-2 rounded-3xl w-full grid grid-cols-2 gap-2">
                 <div className="h-32 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-2xl"></div>
                 <div className="h-32 bg-gradient-to-bl from-brand-bg to-gray-300 rounded-2xl"></div>
                 <div className="col-span-2 h-40 bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600')" }}></div>
              </div>
              <div className="flex-1">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-6">
                  <PenTool className="w-8 h-8 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{t('process.step2.title', '2. Maquettes & Moodboards')}</h2>
                <p className="text-lg text-brand-secondary leading-relaxed">
                  {t('process.step2.desc', 'L\'identité visuelle est primordiale...')}
                </p>
              </div>
            </motion.div>

            {/* Step 3: Validation & Développement Pipeline */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center text-center gap-12"
            >
              <div className="max-w-3xl">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{t('process.step3.title', '3. Validation & Développement')}</h2>
                <p className="text-lg text-brand-secondary leading-relaxed">
                  {t('process.step3.desc', 'Une fois la maquette validée...')}
                </p>
              </div>
              
              <div className="w-full glass-card p-6 md:p-12 rounded-[2.5rem] text-left">
                <h3 className="text-white text-xl font-bold mb-8 flex items-center gap-3">
                  <Rocket className="text-brand-accent" /> {t('process.step3.pipeline', 'Exemple de Pipeline CI/CD')}
                </h3>
                
                <div className="flex flex-col md:flex-row gap-4 items-stretch justify-between relative">
                   {/* Line connecting steps */}
                   <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 z-0"></div>

                   {/* Step 1 */}
                   <div className="relative z-10 flex flex-col items-center">
                     <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                       <GitCommit className="text-white" />
                     </div>
                     <span className="text-white font-medium text-sm">{t('process.step3.commit', 'Commit')}</span>
                     <span className="text-gray-400 text-xs">{t('process.step3.commit_desc', 'Code Pushed')}</span>
                   </div>
                   
                   <ArrowRight className="md:hidden text-white/20 mx-auto my-2" />

                   {/* Step 2 */}
                   <div className="relative z-10 flex flex-col items-center">
                     <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(234,179,8,0.5)]">
                       <Play className="text-white" />
                     </div>
                     <span className="text-white font-medium text-sm">{t('process.step3.lint', 'Lint & Tests')}</span>
                     <span className="text-gray-400 text-xs">{t('process.step3.lint_desc', 'Jest / Cypress')}</span>
                   </div>

                   <ArrowRight className="md:hidden text-white/20 mx-auto my-2" />
                   
                   {/* Step 3 */}
                   <div className="relative z-10 flex flex-col items-center">
                     <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                       <Server className="text-white" />
                     </div>
                     <span className="text-white font-medium text-sm">{t('process.step3.build', 'Build')}</span>
                     <span className="text-gray-400 text-xs">{t('process.step3.build_desc', 'Vite / Next.js')}</span>
                   </div>

                   <ArrowRight className="md:hidden text-white/20 mx-auto my-2" />
                   
                   {/* Step 4 */}
                   <div className="relative z-10 flex flex-col items-center">
                     <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                       <Rocket className="text-white" />
                     </div>
                     <span className="text-white font-medium text-sm">{t('process.step3.deploy', 'Deploy')}</span>
                     <span className="text-gray-400 text-xs">{t('process.step3.deploy_desc', 'Vercel Edge')}</span>
                   </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  );
}
