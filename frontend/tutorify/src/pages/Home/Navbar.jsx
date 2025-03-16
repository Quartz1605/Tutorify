import React, { useState, useEffect } from 'react';

const ClassyNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-gradient-to-r from-blue-300 bg-blue-700"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">
              Tutorify
            </span>
          </div>

          {/* Center: Search bar */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="relative w-112 ">
              <input
                type="text"
                placeholder="Search for tutors"
                className="w-full pl-10 pr-4 py-2 rounded-md text-sm outline-none border border-white text-white"
                
              />
              <div className="absolute left-3 top-2.5 text-blue-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Navigation and Profile */}
          <div className="flex items-center space-x-12">
            
            <div className="text-white text-[15px] cursor-pointer hover:text-gray-300">Find a Tutor</div>
            <div className="text-white text-[15px] cursor-pointer hover:text-gray-300">Pricing</div>
            <div className="text-white text-[15px] cursor-pointer hover:text-gray-300">Contact Us</div>
            
            
            

            {/* Profile Image */}
            <div className="flex items-center">
              <div
                className={`h-8 w-8 rounded-full overflow-hidden border-2 ${isScrolled ? "border-blue-800" : "border-white"
                  }`}
              >
                <img src="https://preview.redd.it/henry-cavill-vs-brad-pitt-young-who-do-you-find-more-v0-lurxrhcji3mb1.jpg?width=640&crop=smart&auto=webp&s=7676b8c0ae4911ddf0bf53bf0bb2b8d5daab10ef" alt="Profile" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default ClassyNavbar;