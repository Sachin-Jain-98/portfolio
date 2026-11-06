import Navbar from './Navbar';
import { contact } from '../data/content';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-4">{children}</main>
      <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()} Sachin Jain. Built with React, Vite & Tailwind CSS.
          </div>
          <div className="flex gap-4">
            <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
            <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
            <a href={contact.email} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
