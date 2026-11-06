import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { contact } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            {[
              {
                icon: <Mail className="w-6 h-6" />,
                label: 'Email',
                value: contact.email,
                href: `mailto:${contact.email}`,
              },
              {
                icon: <Phone className="w-6 h-6" />,
                label: 'Phone',
                value: contact.phone,
                href: `tel:${contact.phone}`,
              },
              {
                icon: <Linkedin className="w-6 h-6" />,
                label: 'LinkedIn',
                value: 'Sachin Jain',
                href: contact.linkedin,
              },
              {
                icon: <Github className="w-6 h-6" />,
                label: 'GitHub',
                value: 'Sachin-Jain-98',
                href: contact.github,
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
              >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                  <p className="font-medium text-gray-900 dark:text-white">{item.value}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 ml-auto" />
              </a>
            ))}
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold mb-6 dark:text-white">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                onClick={() => {
                  window.location.href = `mailto:${contact.email}?subject=Portfolio Inquiry`;
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
