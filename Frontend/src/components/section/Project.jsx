import React, { useEffect, useState } from "react";
import { siteData } from "../../data/siteData";

const username = siteData.projects.github.username;
const selectedRepos = siteData.projects.github.selectedRepos;

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [lightOn] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  // Mouse follow glow (same as other sections)
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!lightOn) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [lightOn]);

  useEffect(() => {
    if (lightOn) {
      setPosition({ x: 75, y: 40 });
    }
  }, [lightOn]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`,
          { signal: controller.signal }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const allRepos = await response.json();

        const visibleRepos = allRepos.filter((repo) => !repo.fork && !repo.archived);
        const reposToShow = selectedRepos.length
          ? visibleRepos.filter((repo) => selectedRepos.includes(repo.name))
          : visibleRepos;

        setRepos(reposToShow);
      } catch (err) {
        if (err.name === "AbortError") return;
        console.error(err);
        setError(siteData.projects.errorText);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    fetchRepos();
    return () => controller.abort();
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-slate-950 py-28 overflow-hidden"
    >

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-blue-950" />

      {/* Dotted Grid */}
      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(96,165,250,0.25)_1.2px,transparent_1.2px)]
        bg-size-[32px_32px]"
      />

      {/* Subtle Mouse Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${position.x}% ${position.y}%,
            rgba(59,130,246,0.07),
            transparent 55%
          )`,
        }}
      />

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {siteData.projects.heading}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              {siteData.projects.headingHighlight}
            </span>
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center text-gray-400 animate-pulse">
            {siteData.projects.loadingText}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="text-center text-red-400">
            {error}
          </div>
        )}

        {/* Infinite projects marquee */}
        <div className="marquee-mask overflow-hidden py-6">
          {!loading &&
            !error &&
            repos.length > 0 && (
              <div className="marquee-track project-marquee-track flex w-max gap-6 hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
              {[...repos, ...repos].map((repo, index) => {
                const isDuplicate = index >= repos.length;

                return (
              <div
                key={`${repo.id}-${index}`}
                aria-hidden={isDuplicate}
                className="group bg-slate-900 border border-slate-800 
                p-8 rounded-3xl w-80 transition-all duration-300 
                hover:-translate-y-2 hover:border-blue-500 
                hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
              >
                <h3 className="text-2xl font-bold text-white mb-4">
                  {repo.name.replace(/[-_]/g, " ")}
                </h3>

                <p className="text-gray-400 mb-6 h-24 line-clamp-4">
                  {repo.description || siteData.projects.emptyDescription}
                </p>

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

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={isDuplicate ? -1 : undefined}
                  className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 
                  text-white rounded-full transition duration-300"
                >
                  {siteData.projects.ctaText}
                </a>
              </div>
                );
              })}
              </div>
            )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
