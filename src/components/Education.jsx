export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Academic background and qualifications.
          </p>
        </div>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold dark:text-white">Bachelor of Technology in Computer Science</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">Engineering College, India</p>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">2016 – 2020</span>
            </div>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1 shrink-0" />
                CGPA: 8.5/10
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-1 shrink-0" />
                Relevant coursework: Data Structures, Algorithms, Database Systems, Web Technologies
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
