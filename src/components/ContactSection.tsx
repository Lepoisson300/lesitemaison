import { useState } from 'react';
import { Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export function ContactSection() {
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setIsSuccess(false);

    // Bundle the name into the message since the backend expects visitorEmail, subject, and message
    const combinedMessage = `
Name: ${formData.name}

Message:
${formData.message}
    `.trim();

    try {
      const response = await fetch("https://medglass-backend.onrender.com/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          visitorEmail: formData.email,
          subject: `New Contact Request from ${formData.name}`,
          message: combinedMessage,
        }),
      });

      if (!response.ok) {
        throw new Error("Network error");
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Submission error:", error);
      setErrorMsg(t('contact.form.error', 'An error occurred while sending your message. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 md:py-32 px-4 md:px-8 z-10 bg-brand-bg overflow-hidden flex justify-center items-center">

      {/* ANIMATED LUXURY BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Gold/Accent Orb */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-1/4 w-[50vw] h-[50vw] bg-amber-500/10 rounded-full blur-[120px]"
        />
        {/* Deep Blue/Purple Orb */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 -right-1/4 w-[45vw] h-[45vw] bg-indigo-500/10 rounded-full blur-[120px]"
        />
        {/* Subtle Center Glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-brand-primary/5 rounded-full blur-[100px]"
        />
      </div>

      {/* FOREGROUND CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl mx-auto glass-card rounded-[3rem] p-6 md:p-16 border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
            {t('contact.title', 'Ready to begin?')}
          </h2>
          <p className="text-brand-secondary text-lg max-w-2xl mx-auto">
            {t('contact.subtitle', 'Let\'s discuss how we can bring your vision to life. Fill out the form below and we will get back to you within 24 hours.')}
          </p>
        </div>

        {/* FEEDBACK MESSAGES */}
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-green-500/10 text-green-400 rounded-xl border border-green-500/20 text-center font-medium backdrop-blur-sm"
          >
            {t('contact.form.success', 'Your message has been sent successfully!')}
          </motion.div>
        )}

        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 bg-red-500/10 text-red-400 rounded-xl border border-red-500/20 text-center font-medium backdrop-blur-sm"
          >
            {errorMsg}
          </motion.div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-secondary">{t('contact.form.name', 'Name')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-brand-secondary/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all text-white placeholder-white/30 backdrop-blur-sm"
                placeholder={t('contact.form.name_placeholder', 'John Doe')}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-brand-secondary">{t('contact.form.email', 'Email')}</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/40 border border-brand-secondary/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all text-white placeholder-white/30 backdrop-blur-sm"
                placeholder={t('contact.form.email_placeholder', 'john@example.com')}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-brand-secondary">{t('contact.form.message', 'Message')}</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full bg-black/40 border border-brand-secondary/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all resize-none text-white placeholder-white/30 backdrop-blur-sm"
              placeholder={t('contact.form.message_placeholder', 'Tell us about your project...')}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-primary text-brand-bg font-semibold rounded-xl py-4 flex items-center justify-center gap-2 hover:bg-brand-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            {isSubmitting ? t('contact.form.submitting', 'Sending...') : (
              <>
                {t('contact.form.submit', 'Send Message')} <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}