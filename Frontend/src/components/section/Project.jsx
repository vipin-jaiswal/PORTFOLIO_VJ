import React, { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const username = "vipin-jaiswal";

  // 👇 Exact repo names (case sensitive)
  const selectedProjects = [
    "AI-INVOICE-GENRETOR",
    "Multiple-Disease-Prediction" // 👈 agar exact name different ho to batana
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repoRequests = selectedProjects.map((repoName) =>
          fetch(`https://api.github.com/repos/${username}/${repoName}`)
            .then((res) => res.ok ? res.json() : null)
            .catch(() => null)
        );

        const results = await Promise.all(repoRequests);
        setRepos(results.filter(Boolean));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching repos:", error);
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen bg-slate-950 py-28"
    >
      <div className="container mx-auto max-w-6xl px-6">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            MY{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              PROJECTS
            </span>
          </h2>
        </div>

        {loading && (
          <p className="text-center text-gray-400">
            Loading projects...
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl
              hover:scale-105 hover:border-blue-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
              </h3>

              <p className="text-gray-400 mb-6">
                {repo.description || "No description available."}
              </p>

              <div className="flex justify-between items-center mb-6 text-sm">
                <span className="text-blue-400">
                  ⭐ {repo.stargazers_count}
                </span>

                {repo.language && (
                  <span className="text-gray-300">
                    {repo.language}
                  </span>
                )}
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700
                text-white rounded-full transition"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
