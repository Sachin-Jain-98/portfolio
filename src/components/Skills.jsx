import { Code, Laptop, Database, Server, Layout } from 'lucide-react';
import { skills } from '../data/content';

const categories = [
  {
    title: 'Languages & Frameworks',
    icon: <Code className="w-5 h-5" />,
    items: skills['languages-frameworks'],
  },
  {
    title: 'Databases',
    icon: <Database className="w-5 h-5" />,
    items: skills.databases,
  },
  {
    title: 'Cloud & DevOps',
    icon: <Server className="w-5 h-5" />,
    items: skills['cloud-devops'],
  },
  {
    title: 'Tools',
    icon: <Laptop className="w-5 h-5" />,
    items: skills.tools,
  },
  {
    title: 'Architecture',
    icon: <Layout className="w-5 h-5" />,
    items: skills.architecture,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I work with, drawn from my resume and hands-on projects.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-semibold dark:text-white">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-sm rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
