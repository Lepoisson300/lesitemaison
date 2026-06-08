import { motion } from 'framer-motion';
import { Rocket, Zap, ShieldCheck } from 'lucide-react';

export function DeploymentSection() {
  return (
    <section className="relative py-32 px-8 z-10 bg-brand-primary text-brand-bg overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto pl-24 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h2 className="text-5xl font-bold mb-6">Seamless Deployment</h2>
          <p className="text-xl text-brand-bg/70 mb-12">
            We handle the heavy lifting of getting your site live. With our modern CI/CD pipelines, your platform will be fast, secure, and always up to date.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-accent/20 rounded-full">
                <Rocket className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Zero Downtime</h4>
                <p className="text-sm text-brand-bg/60">Push updates without interrupting your users.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-accent/20 rounded-full">
                <Zap className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Edge Performance</h4>
                <p className="text-sm text-brand-bg/60">Deployed globally to the edge for lightning-fast speeds.</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-3 bg-brand-accent/20 rounded-full">
                <ShieldCheck className="text-brand-accent w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg">Enterprise Security</h4>
                <p className="text-sm text-brand-bg/60">Built-in DDoS protection and automated SSL.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex-1 relative"
        >
          <div className="glass-card-dark p-8 rounded-3xl border border-white/10 shadow-2xl relative">
            <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="font-mono text-sm text-green-400">
              <p>~ $ git push origin main</p>
              <p className="text-gray-400">Enumerating objects: 15, done.</p>
              <p className="text-gray-400">Counting objects: 100% (15/15), done.</p>
              <p className="text-gray-400">Writing objects: 100% (8/8), 1.2 KiB, done.</p>
              <p className="mt-4 text-blue-400">⚡ Deploying to production...</p>
              <p className="text-gray-400">Building assets...</p>
              <p className="text-gray-400">Uploading to edge network...</p>
              <p className="mt-4 text-green-400">✅ Deployment successful! Live in 1.2s</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
