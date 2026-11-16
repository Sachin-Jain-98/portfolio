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
              role: 'Senior Software Developer',
              duration: 'June/2022 – Present',
              location: 'Pune, India',
              bullets: [
                'Working as a Senior .NET Developer on core Trade Confirmation processing applications which are highly available and scalable. Migrated Windows Services to Micro-Services and built batch based Autosys Automations. Wrote SQL Procedures for Data Reports and Transactions. Built GitLab based and Nolio based Pipelines for deployment Automation- DevOps. Also worked with and guided the Support Team for Queries and Incidents with high Severity.',
                'Migration of the Trade Confirmation processing application from a WPF-based Windows service application to an event-driven Microservice developed on .NET Core and hosted on OpenShift container orchestrator. Delivered this in one-third of the original timeline using an agentic development life cycle, while delivering 300K+ lines of code with coding standard and proper comments and documentation, completing the migration in phases with complete SIT, UAT and managed PROD-Parallel Sign-offs, achieving operational efficiency with over 10 FTE benefits, with being SME for Deal based Trading feature.',
                'Integrated a Qwen-based AI model on the trade inbound-outbound matching side by working on prompt tuning based on ground truths and integrating SLM, LLM, and vLLM with fallbacks for faster response for AI models. Designed an automated system based on Camunda workflow orchestrator as upstream which helped us automate mailbox monitoring for third-party confirmation and used the AI model to link to outbound and generate matching results and matching scores, delivering 2 FTE benefits and 200k pound cost saving.',
                'Achieved recognition for successfully delivering the integration project to SaaS SMARTDX using REST API with a custom Wrapper Class to a legacy WPF front-end and windows service application, that achieves cost savings for Barclays and reduces Dependencies on decommissioned products.',
                'Achieved major cost savings milestone for the organisation by reducing the number of pages consumed by the existing architecture from SmartDX for Swift-based confirmation generation to about 90 percent, with savings in the ballpark of 1 million pounds per quarter. Also diversified the dependency by generating Swift confirmation and PDF confirmation for email and SMS-based confirmations sent to clients and counterparties based on both SmartDx vendor platform and from custom HTML Templates.',
                "Managed AWS hosted S3 services and Windows Services supporting mission-critical workloads. Also worked on WebSphereMQ for sending event-driven Swift messages and handling inbound ACK/NAKs. Also Optimized SQL stored procedures and improved performance of underlying service/worker's by adding indexes wherever necessary, using temp tables, datetime checks, and optimizing subqueries with the SQL Server Query Execution Planner.",
                'Lead end to end Migration of legacy TeamCity Nolio-based CI/CD to strategic GitLab-based CI/CD.',
                'Worked on major production milestone releases, owning the patch and full release end to end, supporting and guiding the team to follow the release lifecycle for any change request, managing downtime for production with support for post-implementation testing with users.',
                'Created custom regression test suites for faster AIDLC-based deliveries, ensuring to regress every single corner of existing workflow. Integrated SonarCube for code coverage and vulnerability scanning in my development life cycle with coverlet with report generation in cobertura format.',
                'Worked on unit and integration testing using regression test suites to simulate UAT and prod-like scenarios. Also Performed Documentation of features, evidences and other stuff which can help other developer understand the code quickly and efficiently.',
                'Worked closely with Operations for requirement gathering and PI planning. Also did effort estimation, story points, and handling scrums to deliver outcomes with sprint objectives set and met at the end.',
              ],
            },
            {
              company: 'Wipro Limited',
              role: 'Azure and Database Engineer (Project Engineer)',
              duration: 'September/2020 – May/2022',
              location: 'Hyderabad',
              bullets: [
                'Performed Azure Admin activities including subscription management and service scaling, horizontal and vertical, resulting in effective resource management for both compute and memory on cloud and cost efficiencies. I wrote SQL Server scripting to generate large reports for monitoring and fixing data errors and bug fixing and fixing database irregularities. I did deployment automation on Azure Pipeline and worked on Databricks Jobs to analyze large CSV datasets and create a Meta Data Dictionary. I worked on multiple applications with cross-team collaboration and created SQL Server jobs for multiple applications monitoring and maintenance.',
                'Managed multiple applications under the Microsoft portfolio of internal utility systems which multiple internal and external systems connected and rely upon, performed maintenance and activities which involved segregation of duties',
                'Worked as a ServiceNow admin and took ownership of change implementation of multiple releases with minimum or partial downtime.',
                'Performed Ad-hoc activities on different databases like MongoDB and SQL Server, and helped in debugging pipelines for Databricks and datalakes. Made sure DB snapshot we happening timely and archived properly for the retention period. Worked on maintenance jobs for SQL and other scheduled SQL jobs which helped in creating reporting results.',
                'I handled Sev1/P1 incident escalation, bringing different skill sets on the bridge to jointly ide',
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
