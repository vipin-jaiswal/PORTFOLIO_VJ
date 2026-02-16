import React, { useEffect, useState } from "react";

const username = "vipin-jaiswal";

const selectedProjects = [
  "AI-INVOICE-GENRETOR",
  "Multiple-Disease-Prediction",
];

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const responses = await Promise.all(
          selectedProjects.map((repo) =>
            fetch(`https://api.github.com/repos/${username}/${repo}`)
          )
        );

        const data = await Promise.all(
          responses.map((res) => {
            if (!res.ok) throw new Error("Failed to fetch repository");
            return res.json();
          })
        );

        // Sort by stars (optional improvement)
        const sortedRepos = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );

        setRepos(sortedRepos);
      } catch (err) {
        console.error(err);
        setError("Failed to load projects. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-slate-950 py-28">
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

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-400 animate-pulse">
            Loading projects...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-red-400">
            {error}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {!loading &&
            !error &&
            repos.map((repo) => (
              <div
                key={repo.id}
                className="group bg-slate-900 border border-slate-800 
                p-8 rounded-3xl transition-all duration-300 
                hover:-translate-y-2 hover:border-blue-500 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                {/* Project Name */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {repo.name.replace(/[-_]/g, " ")}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 min-h-[60px]">
                  {repo.description || "No description available."}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-center mb-6 text-sm">
                  <span className="text-blue-400">
                    ⭐ {repo.stargazers_count}
                  </span>

                  {repo.language && (
                    <span className="px-3 py-1 bg-slate-800 rounded-full text-gray-300">
                      {repo.language}
                    </span>
                  )}
                </div>

                {/* Button */}
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 
                  text-white rounded-full transition duration-300"
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
