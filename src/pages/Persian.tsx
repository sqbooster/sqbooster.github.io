import React from 'react';
import { Database, ArrowRight, Zap, Code, ArrowLeft, Download, Star, Github } from 'lucide-react';

const Persian: React.FC = () => {
  const features = [
    {
      icon: Database,
      title: 'پایگاه داده SQLite',
      description: 'ذخیره‌سازی قابل اعتماد و قابل حمل با سریال‌سازی خودکار JSON.'
    },
    {
      icon: Zap,
      title: 'سبک‌وزن',
      description: 'وابستگی‌های کمینه و بهینه‌سازی شده برای پروژه‌های کوچک تا متوسط.'
    },
    {
      icon: Code,
      title: 'API ساده',
      description: 'عملیات کلید-مقدار شهودی که مانند کار با دیکشنری است.'
    }
  ];

  const databases = [
    { name: 'SQLite', code: 'SQLiteDatabase("test.db")', description: 'پایگاه داده SQL فایل-محور' },
    { name: 'فایل JSON', code: 'JSONFileDatabase("test.json")', description: 'ذخیره‌سازی JSON قابل خواندن' },
    { name: 'فایل Pickle', code: 'PickleFileDatabase("test.pkl")', description: 'ذخیره‌سازی باینری اشیاء پایتون' },
    { name: 'Redis', code: 'RedisDatabase()', description: 'ذخیره‌ساز ساختار داده در حافظه' },
    { name: 'MongoDB', code: 'MongoDatabase()', description: 'پایگاه داده NoSQL مبتنی بر سند' },
    { name: 'PostgreSQL', code: 'PostgreSQLDatabase()', description: 'پایگاه داده SQL پیشرفته' }
  ];

  return (
    <div className="bg-gray-900 text-white" dir="rtl">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-bl from-gray-900 via-blue-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img 
                src="https://github.com/sqbooster/sqbooster.github.io/blob/main/assets/logo.jpeg?raw=true" 
                alt="لوگو sqbooster" 
                className="h-20 w-20 rounded-full shadow-2xl border-4 border-blue-400"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              sq<span className="text-blue-400">booster</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              کتابخانه سبک‌وزن پایتون برای ذخیره‌سازی کلید-مقدار مبتنی بر SQLite. 
              ساده، کارآمد، و قابل اعتماد.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://pypi.org/project/sqbooster/" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
              >
                <Download className="h-5 w-5 ml-2" />
                <span>نصب از PyPI</span>
              </a>
              <a 
                href="https://github.com/sqbooster/sqbooster" 
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors border border-gray-600"
              >
                <Github className="h-5 w-5 ml-2" />
                <span>مشاهده در GitHub</span>
              </a>
              <a
                href="/docs"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors border border-gray-600"
              >
                <ArrowRight className="h-5 w-5" />
                <span>مستندات</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">چرا sqbooster را انتخاب کنیم؟</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              ساخته شده برای توسعه‌دهندگانی که به ذخیره‌سازی قابل اعتماد بدون پیچیدگی نیاز دارند
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
            <h2 className="text-4xl font-bold text-white mb-4">شروع سریع</h2>
            <p className="text-xl text-gray-400">در چند ثانیه راه‌اندازی کنید</p>
          </div>
          
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">نصب</h3>
                <div className="bg-gray-900 p-4 rounded-lg border border-gray-600 mb-6" dir="ltr">
                  <code className="text-green-400 font-mono">pip install sqbooster</code>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6">استفاده پایه</h3>
                <div className="bg-gray-900 p-6 rounded-lg border border-gray-600 font-mono text-sm overflow-x-auto" dir="ltr">
                  <div className="text-blue-400">from sqbooster.databases import SQLiteDatabase</div>
                  <br />
                  <div className="text-green-400"># ایجاد نمونه پایگاه داده</div>
                  <div className="text-white">db = SQLiteDatabase(<span className="text-yellow-400">"my_data.db"</span>)</div>
                  <br />
                  <div className="text-green-400"># ذخیره داده</div>
                  <div className="text-white">db.write(<span className="text-yellow-400">"user:1"</span>, {'{'}name: "علی", age: 30{'}'})</div>
                  <br />
                  <div className="text-green-400"># بازیابی داده</div>
                  <div className="text-white">user = db.read(<span className="text-yellow-400">"user:1"</span>)</div>
                  <div className="text-white">print(user)  <span className="text-green-400"># {'{'}name: "علی", age: 30{'}'}</span></div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">پایگاه‌های داده پشتیبانی شده</h3>
                <div className="space-y-4">
                  {databases.map((db, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-600">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{db.name}</h4>
                        <span className="text-xs text-gray-400">{db.description}</span>
                      </div>
                      <code className="text-blue-400 text-sm" dir="ltr">{db.code}</code>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Detail */}
      <div className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">ویژگی‌های کلیدی</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">سریال‌سازی خودکار</h3>
              <p className="text-gray-300 mb-4">
                sqbooster به طور خودکار انواع داده‌های پیچیده پایتون را به JSON تبدیل می‌کند و بازیابی می‌کند.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• دیکشنری‌ها و لیست‌ها</li>
                <li>• اعداد و رشته‌ها</li>
                <li>• مقادیر بولین و None</li>
                <li>• ساختارهای تودرتو</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">عملکرد بالا</h3>
              <p className="text-gray-300 mb-4">
                بهینه‌سازی شده برای سرعت و کارایی در پروژه‌های مختلف.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• عملیات سریع خواندن/نوشتن</li>
                <li>• استفاده بهینه از حافظه</li>
                <li>• پشتیبانی از تراکنش‌ها</li>
                <li>• مدیریت خودکار اتصالات</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-l from-blue-900 to-purple-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">آماده شروع هستید؟</h2>
          <p className="text-xl text-gray-300 mb-8">
            به توسعه‌دهندگانی بپیوندید که به sqbooster برای نیازهای ذخیره‌سازی خود اعتماد می‌کنند
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://pypi.org/project/sqbooster/" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="h-5 w-5 ml-2" />
              <span>هم‌اکنون نصب کنید</span>
            </a>
            <a 
              href="https://github.com/sqbooster/sqbooster" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-white hover:text-blue-900 transition-colors"
            >
              <Star className="h-5 w-5 ml-2" />
              <span>ستاره دادن در GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Persian;