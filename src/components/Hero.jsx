import { Mail, Phone, Linkedin, Github, ArrowRight } from 'lucide-react';
import { contact } from '../data/content';
import profile from '../assets/profile.jpg';

export default function Hero() {
  return (
    <section className="pt-20 pb-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-700 dark:text-blue-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 dark:bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>
        <img
          src={profile}
          alt="Sachin Jain"
          className="w-24 h-24 md:w-36 md:h-36 rounded-full mb-6 block mx-auto object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white tracking-tight">
          Sachin Jain
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Software Engineer building scalable web applications with React, Node.js, and Java.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-colors flex items-center gap-2"
          >
            View Projects <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="px-8 py-4 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium text-lg transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" /> Contact Me
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-12">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href={`tel:${contact.phone}`}
            className="p-3 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-600 dark:text-gray-300"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
