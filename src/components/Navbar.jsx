import { useState } from 'react';
import { Menu, X, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { contact } from '../data/content';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              SJ
            </div>
            <span className="text-xl font-bold dark:text-white">Sachin Jain</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {s.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <Github className="w-5 h-5" />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <button
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-6xl mx-auto px-4 py-4 space-y-4">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {s.label}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <a href={contact.email} className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <Mail className="w-5 h-5" /> {contact.email}
              </a>
              <a href={`tel:${contact.phone}`} className="flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg">
                <Phone className="w-5 h-5" /> {contact.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
