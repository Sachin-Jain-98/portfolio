export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Professional journey and key achievements.
          </p>
        </div>
        <div className="space-y-12 relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />
          {[
            {
              company: 'Barclays',
              role: 'Software Engineer',
              duration: '2022 – Present',
              location: 'Pune, India',
              bullets: [
                'Developed and maintained microservices using Java Spring Boot and React',
                'Collaborated with cross-functional teams in agile environments',
                'Optimized database queries, improving application performance by 30%',
                'Mentored junior developers and conducted code reviews',
              ],
            },
            {
              company: 'Tech Solutions',
              role: 'Software Developer',
              duration: '2020 – 2022',
              location: 'Udaipur, India',
              bullets: [
                'Built responsive web applications using React, HTML5, CSS3, JavaScript',
                'Integrated RESTful APIs and third-party services',
                'Designed and maintained SQL database models',
                'Participated in daily standups and sprint planning',
              ],
            },
          ].map((job, idx) => (
            <div key={idx} className="relative pl-12">
              <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 border-2 border-white dark:border-gray-900" />
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold dark:text-white">{job.company}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{job.role}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                  {job.duration}
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{job.location}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {job.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1.5 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
