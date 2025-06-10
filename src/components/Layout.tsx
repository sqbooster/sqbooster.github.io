import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, Github, BarChart3, User, Globe } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Database },
    { name: 'Developer', href: '/developer', icon: User },
    { name: 'PyPI Stats', href: '/pypi-stats', icon: BarChart3 },
    { name: 'GitHub Stats', href: '/github-stats', icon: Github },
    { name: 'Persian', href: '/persian', icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="https://github.com/sqbooster/sqbooster.github.io/blob/main/assets/logo.jpeg?raw=true" 
                alt="sqbooster logo" 
                className="h-8 w-8 rounded-full"
              />
              <Link to="/" className="text-xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
                sqbooster
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors ${
                        isActive
                          ? 'bg-gray-700 text-blue-400'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="md:hidden">
              <button className="text-gray-400 hover:text-white">
                <span className="sr-only">Open main menu</span>
                <div className="block h-6 w-6">
                  <div className="space-y-1">
                    <div className="w-6 h-0.5 bg-gray-400"></div>
                    <div className="w-6 h-0.5 bg-gray-400"></div>
                    <div className="w-6 h-0.5 bg-gray-400"></div>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-colors ${
                    isActive
                      ? 'bg-gray-700 text-blue-400'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 mt-20">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://github.com/sqbooster/sqbooster.github.io/blob/main/assets/logo.jpeg?raw=true" 
                alt="sqbooster logo" 
                className="h-6 w-6 rounded-full"
              />
              <span className="text-gray-400">sqbooster © 2024</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/sqbooster/sqbooster" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://pypi.org/project/sqbooster/" className="text-gray-400 hover:text-white transition-colors">
                <BarChart3 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;