import React from 'react';
import { Database, Zap, Code, ArrowRight, Download, Star, Github } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'SQLite Backend',
      description: 'Reliable and portable database storage with automatic JSON serialization.'
    },
    {
      icon: Zap,
      title: 'Lightweight',
      description: 'Minimal dependencies and optimized for performance in small to medium projects.'
    },
    {
      icon: Code,
      title: 'Simple API',
      description: 'Intuitive key-value operations that feel like working with a dictionary.'
    }
  ];

  const databases = [
    { name: 'SQLite', code: 'SQLiteDatabase("test.db")', description: 'File-based SQL database' },
    { name: 'JSON File', code: 'JSONFileDatabase("test.json")', description: 'Human-readable JSON storage' },
    { name: 'Pickle File', code: 'PickleFileDatabase("test.pkl")', description: 'Binary Python object storage' },
    { name: 'Redis', code: 'RedisDatabase()', description: 'In-memory data structure store' },
    { name: 'MongoDB', code: 'MongoDatabase()', description: 'NoSQL document database' },
    { name: 'PostgreSQL', code: 'PostgreSQLDatabase()', description: 'Advanced SQL database' }
  ];

  return (
    <div className="bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="https://github.com/sqbooster/sqbooster.github.io/blob/main/assets/logo.jpeg?raw=true" 
                alt="sqbooster logo" 
                className="h-20 w-20 rounded-full shadow-2xl border-4 border-blue-400"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              sq<span className="text-blue-400">booster</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A lightweight Python library for SQLite-based key-value storage. 
              Simple, efficient, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://pypi.org/project/sqbooster/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Install from PyPI</span>
              </a>
              <a 
                href="https://github.com/sqbooster/sqbooster" 
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors border border-gray-600"
              >
                <Github className="h-5 w-5" />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose sqbooster?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Built for developers who need reliable storage without the complexity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Quick Start</h2>
            <p className="text-xl text-gray-400">Get up and running in seconds</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Installation</h3>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600 mb-6">
                  <code className="text-green-400 font-mono">pip install sqbooster</code>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6">Basic Usage</h3>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-600 font-mono text-sm overflow-x-auto">
                  <div className="text-blue-400">from sqbooster.databases import SQLiteDatabase</div>
                  <br />
                  <div className="text-green-400"># Create database instance</div>
                  <div className="text-white">db = SQLiteDatabase(<span className="text-yellow-400">"my_data.db"</span>)</div>
                  <br />
                  <div className="text-green-400"># Store data</div>
                  <div className="text-white">db.write(<span className="text-yellow-400">"user:1"</span>, {'{'}name: <span className="text-yellow-400">"Alice"</span>, age: 30{'}'})</div>
                  <br />
                  <div className="text-green-400"># Retrieve data</div>
                  <div className="text-white">user = db.read(<span className="text-yellow-400">"user:1"</span>)</div>
                  <div className="text-white">print(user)  <span className="text-green-400"># {'{'}name: "Alice", age: 30{'}'}</span></div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Supported Databases</h3>
                <div className="space-y-4">
                  {databases.map((db, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{db.name}</h4>
                        <span className="text-xs text-gray-400">{db.description}</span>
                      </div>
                      <code className="text-blue-400 text-sm">{db.code}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join developers who trust sqbooster for their storage needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://pypi.org/project/sqbooster/" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <span>Install Now</span>
              <ArrowRight className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/sqbooster/sqbooster" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white hover:text-blue-900 transition-colors"
            >
              <Star className="h-5 w-5" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;