export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Software engineer passionate about building clean, efficient, and user-centered digital experiences.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 shadow-sm">
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            I'm Sachin Jain, a Senior .NET Developer at Barclays with experience building scalable web
            applications and microservices. I focus on creating reliable, maintainable software using
            modern technologies like C#, .NET, Azure, React, and Node.js.
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            I enjoy turning complex problems into simple, beautiful solutions and am always eager to learn
            new tools and technologies. When I'm not coding, you can find me exploring open-source projects
            or contributing to the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
