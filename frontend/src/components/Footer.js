import React from 'react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">About iTunes Search</h3>
            <p className="text-gray-300">
              Search and discover content from iTunes and the Apple Books Store. 
              Find your favorite music, movies, TV shows, audiobooks, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/khuthadzo-liremi-668b94158" target="_blank" 
                   rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  My LinkedIn
                </a>
              </li>
              <li>
                <a href="#favorites" className="text-gray-300 hover:text-white transition-colors">
                  Favorites
                </a>
              </li>
              <li>
                <a href="https://www.apple.com/itunes/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="text-gray-300 hover:text-white transition-colors">
                  iTunes Store
                </a>
              </li>
            </ul>
          </div>

          {/* Media Types */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Media Types</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Music</li>
              <li className="text-gray-300">Movies</li>
              <li className="text-gray-300">TV Shows</li>
              <li className="text-gray-300">Podcasts</li>
              <li className="text-gray-300">Books</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} iTunes Search App. All rights reserved.  by Khuthadzo liremi @_khuthi
            </div>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

