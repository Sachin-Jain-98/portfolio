import { ExternalLink, Code } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <span className="text-xs font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-2 py-1 rounded">
          {project.tech[0]}
        </span>
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-6 h-6 text-gray-400 hover:text-blue-600 transition-colors"
        >
          <ExternalLink />
        </a>
      </div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <Code className="w-3 h-3" /> {project.stars} stars
        </div>
        <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
          <span className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-full" />
          {project.forks} forks
        </div>
      </div>
    </article>
  );
}
