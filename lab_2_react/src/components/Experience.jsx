function Experience() {
    return (
        <section>
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 pb-2 mb-4">
                Experience
            </h2>
            <article className="bg-blue-50 dark:bg-slate-700 border-l-4 border-blue-500 dark:border-blue-400 p-5 rounded-r-lg shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                        Intrainnuity — DevOps / Junior Infrastructure Engineer
                    </h3>
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-300 bg-blue-100 dark:bg-slate-600 px-2 py-1 rounded">
                        September 2024 - present
                    </span>
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 mb-3">
                    Designed and maintained robust CI/CD pipelines, automated cloud infrastructure deployment, and integrated comprehensive monitoring solutions for the MarketReveal ecosystem — a high-traffic marketplace data aggregation platform.
                </p>

                <div className="mb-3 text-slate-700 dark:text-slate-400 text-sm">
                    <strong className="text-slate-900 dark:text-white block mb-1">Key Responsibilities & Achievements:</strong>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Configured and managed infrastructure monitoring dashboards using <strong>Grafana</strong> and Prometheus, reducing incident response times.</li>
                        <li>Built and optimized automated CI/CD workflows using GitHub Actions and Docker-compose for seamless microservice deployment.</li>
                        <li>Maintained cloud resources within <strong>Azure</strong> services, ensuring high availability and secure network configurations.</li>
                        <li>Assisted in setting up <strong>Apache Kafka</strong> event streaming clusters to handle high-throughput real-time scraping data.</li>
                        <li>Containerized Python and Node.js backend microservices using Docker, streamlining local and production environments.</li>
                    </ul>
                </div>

                <p className="text-sm text-slate-700 dark:text-slate-400 mb-2">
                    <strong className="text-slate-900 dark:text-white">Tech Stack:</strong> Docker, Docker-compose, Azure, Grafana, Prometheus, Apache Kafka, GitHub Actions, Linux (Ubuntu), Bash scripting, Git, Jira, SCRUM.
                </p>
                
            </article>
        </section>
    );
}

export default Experience;