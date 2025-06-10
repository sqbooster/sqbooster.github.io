import React, { useState, useEffect } from 'react';
import { BarChart3, Download, TrendingUp, Package, Calendar, Globe } from 'lucide-react';

interface PyPIData {
  info: {
    name: string;
    version: string;
    summary: string;
    author: string;
    author_email: string;
    home_page: string;
    license: string;
    keywords: string;
    classifiers: string[];
  };
  releases: Record<string, any>;
  urls: Array<{
    filename: string;
    upload_time: string;
    size: number;
  }>;
}

const PyPIStats: React.FC = () => {
  const [data, setData] = useState<PyPIData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPyPIData = async () => {
      try {
        const response = await fetch('https://pypi.org/pypi/sqbooster/json');
        if (!response.ok) {
          throw new Error('Failed to fetch PyPI data');
        }
        const pypiData = await response.json();
        setData(pypiData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchPyPIData();
  }, []);

  if (loading) {
    return (
      <div className="bg-gray-900 min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-400 mx-auto mb-8"></div>
            <h2 className="text-2xl font-semibold text-white">Loading PyPI Statistics...</h2>
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
            </div>
          </div>
        </div>
      </div>
    );
  }

  const releases = Object.keys(data?.releases || {});
  const latestVersion = data?.info.version || 'Unknown';
  const totalReleases = releases.length;

  const stats = [
    {
      icon: Package,
      label: 'Current Version',
      value: latestVersion,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900'
    },
    {
      icon: TrendingUp,
      label: 'Total Releases',
      value: totalReleases.toString(),
      color: 'text-green-400',
      bgColor: 'bg-green-900'
    },
    {
      icon: Calendar,
      label: 'Latest Upload',
      value: data?.urls[0]?.upload_time ? new Date(data.urls[0].upload_time).toLocaleDateString() : 'Unknown',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900'
    },
    {
      icon: Globe,
      label: 'License',
      value: data?.info.license?.split('\n').slice(0,3).join('\n') || 'MIT',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900'
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="bg-orange-600 p-4 rounded-full">
              <BarChart3 className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PyPI Statistics
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time statistics and information about sqbooster on the Python Package Index
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                <div className={`inline-flex p-3 rounded-lg ${stat.bgColor} mb-4`}>
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">{stat.label}</h3>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Package Information */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Package className="h-6 w-6 mr-3 text-blue-400" />
              Package Information
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Name</h3>
                <p className="text-white font-mono">{data?.info.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Summary</h3>
                <p className="text-white">{data?.info.summary}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Author</h3>
                <p className="text-white">{data?.info.author}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-1">Keywords</h3>
                <p className="text-white">{data?.info.keywords || 'python, sqlite, database, storage'}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Download className="h-6 w-6 mr-3 text-green-400" />
              Installation
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Install via pip</h3>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                  <code className="text-green-400 font-mono">pip install sqbooster</code>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Install specific version</h3>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                  <code className="text-green-400 font-mono">pip install sqbooster=={latestVersion}</code>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-400 mb-2">Upgrade to latest</h3>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                  <code className="text-green-400 font-mono">pip install --upgrade sqbooster</code>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Classifiers */}
        {data?.info.classifiers && (
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Package Classifiers</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {data.info.classifiers.map((classifier, index) => (
                <div key={index} className="bg-gray-900 p-3 rounded-lg border border-gray-600">
                  <span className="text-gray-300 text-sm">{classifier}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PyPI Badge */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-white mb-4">PyPI Badge</h2>
            <div className="bg-white p-4 rounded-lg inline-block mb-4">
              <img 
                src={`https://img.shields.io/pypi/v/sqbooster.svg`}
                alt="PyPI version"
                className="h-6"
              />
            </div>
            <p className="text-gray-200">
              Add this badge to your README to show the current version
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PyPIStats;