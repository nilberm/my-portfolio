'use client';

import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import SectionSubtitle from '../ui/SectionSubtitle';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent! (Demo)');
    }, 1000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('nilber.mota@example.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-100 via-light-bg to-blue-50 dark:from-slate-800 dark:via-dark-bg dark:to-blue-900/30"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Have a project in mind, a question, or just want to say hi? Let’s build something great together!
        </SectionSubtitle>

        <div className="max-w-xl mx-auto bg-white dark:bg-dark-card p-6 rounded-xl shadow-md border border-light-border dark:border-dark-border">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-3 py-2 text-slate-900 dark:text-white"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-3 py-2 text-slate-900 dark:text-white"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                required
                className="w-full rounded-md border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 px-3 py-2 text-slate-900 dark:text-white"
              />
            </div>
            <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md font-medium">
              Send Message
            </button>
          </form>
          {status && <p className="text-center mt-4 text-green-600 dark:text-green-400">{status}</p>}
        </div>

        <div className="text-center mt-10">
          <p className="text-slate-600 dark:text-slate-400 mb-2">Or connect directly:</p>
          <div className="flex justify-center space-x-6">
            <a href="https://linkedin.com/in/nilbermota" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <span>🔗</span>
            </a>
            <a href="https://github.com/nilbermota" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <span>💻</span>
            </a>
            <button onClick={copyEmail} className="relative" aria-label="Copy Email">
              📧
              {copied && (
                <span className="absolute bottom-full mb-2 bg-slate-800 text-white text-xs rounded-md px-2 py-1">
                  Email Copied!
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
