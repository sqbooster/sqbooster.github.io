import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, Eye, Calendar, Code, Users, Activity } from 'lucide-react';

interface GitHubRepo {
  name: string;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  open_issues_count: number;
  default_branch: string;
  html_url: string;
}

const GitHubStats: React.FC = () => {
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [contributors, setContributors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        // Fetch repository data
        const repoResponse = await fetch('https://api.github.com/repos/sqbooster/sqbooster');
        if (!repoResponse.ok) {
          throw new Error('Failed to fetch GitHub repository data');
        }
        const repoData = await repoResponse.json();
        setRepo(repoData);

        // Fetch contributors data
        try {
          const contributorsResponse = await fetch('https://api.github.com/repos/sqbooster/sqbooster/contributors');
          if (contributorsResponse.ok) {
            const contributorsData = await contributorsResponse.json();
            setContributors(contributorsData.slice(0, 10)); // Top 10 contributors
          }
        } catch (err) {
          // Contributors fetch failed, but continue with repo data
          console.warn('Failed to fetch contributors:', err);
        }

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-400 mx-auto mb-8"></div>
            <h2 className="text-2xl font-semibold text-white">Loading GitHub Statistics...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-900 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-red-900 border border-red-700 rounded-xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Error Loading Data</h2>
              <p className="text-red-400">{error}</p>
              <p className="text-gray-400 mt-4">
                This might be due to GitHub API rate limits or the repository not being publicly accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const stats = [
    {
      icon: Star,
      label: 'Stars',
      value: repo?.stargazers_count || 0,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900'
    },
    {
      icon: GitFork,
      label: 'Forks',
      value: repo?.forks_count || 0,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900'
    },
    {
      icon: Eye,
      label: 'Watchers',
      value: repo?.watchers_count || 0,
      color: 'text-green-400',
      bgColor: 'bg-green-900'
    },
    {
      icon: Activity,
      label: 'Open Issues',
      value: repo?.open_issues_count || 0,
      color: 'text-red-400',
      bgColor: 'bg-red-900'
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800 p-4 rounded-full border-2 border-green-400">
              <Github className="h-12 w-12 text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            GitHub Statistics
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time statistics and information about sqbooster on GitHub
          </p>
          {repo && (
            <a 
              href={repo.html_url}
              className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold mt-6 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
            </a>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors">
                <div className={`inline-flex p-3 rounded-lg ${stat.bgColor} mb-4`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">{stat.label}</h3>
                <p className="text-2xl font-bold text-white">{stat.value.toLocaleString()}</p>
              </div>
            );
          })}
        </div>

        {/* Repository Information */}
        {repo && (
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Code className="h-6 w-6 mr-3 text-green-400" />
                Repository Details
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Full Name</h3>
                  <p className="text-white font-mono">{repo.full_name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Description</h3>
                  <p className="text-white">{repo.description}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Primary Language</h3>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                    {repo.language}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Default Branch</h3>
                  <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-mono">
                    {repo.default_branch}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Calendar className="h-6 w-6 mr-3 text-blue-400" />
                Timeline
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Created</h3>
                  <p className="text-white">{new Date(repo.created_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Last Updated</h3>
                  <p className="text-white">{new Date(repo.updated_at).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Days Since Creation</h3>
                  <p className="text-white">
                    {Math.floor((Date.now() - new Date(repo.created_at).getTime()) / (1000 * 60 * 60 * 24))} days
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contributors */}
        {contributors.length > 0 && (
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Users className="h-6 w-6 mr-3 text-purple-400" />
              Top Contributors
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {contributors.map((contributor, index) => (
                <div key={contributor.id} className="bg-gray-900 p-4 rounded-lg border border-gray-600 hover:border-purple-500 transition-colors">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={contributor.avatar_url} 
                      alt={contributor.login}
                      className="h-12 w-12 rounded-full border-2 border-purple-400"
                    />
                    <div>
                      <h3 className="text-white font-semibold">{contributor.login}</h3>
                      <p className="text-gray-400 text-sm">{contributor.contributions} contributions</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Badges */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-6">GitHub Badges</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg inline-block">
                <img 
                  src="https://img.shields.io/github/stars/sqbooster/sqbooster?style=social"
                  alt="GitHub stars"
                  className="h-6"
                />
              </div>
              <div className="bg-white p-4 rounded-lg inline-block ml-4">
                <img 
                  src="https://img.shields.io/github/forks/sqbooster/sqbooster?style=social"
                  alt="GitHub forks"
                  className="h-6"
                />
              </div>
              <div className="bg-white p-4 rounded-lg inline-block ml-4">
                <img 
                  src="https://img.shields.io/github/watchers/sqbooster/sqbooster?style=social"
                  alt="GitHub watchers"
                  className="h-6"
                />
              </div>
            </div>
            <p className="text-gray-200 mt-4">
              Add these badges to your README to show repository statistics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;