import React, { useState, useEffect } from 'react';


const LandingPage = () => {
  
  const [email, setEmail] = useState("")
  const [isVerifyopen, setisVerifyopen] = useState(false)
  const [error, setError] = useState("")
  
  
  const [isLoaded, setIsLoaded] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [mousePosX, setMousePosX] = useState(0);
  const [mousePosY, setMousePosY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);

    

    const handleMouseMove = (e) => {
      setMousePosX(e.clientX);
      setMousePosY(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  

  const subjects = [
    { name: 'Mathematics', icon: '🔢' },
    { name: 'Science', icon: '🧪' },
    { name: 'Literature', icon: '📚' },
    { name: 'Languages', icon: '🗣️' },
    { name: 'History', icon: '🏛️' },
    { name: 'Arts', icon: '🎨' },
    { name: 'Music', icon: '🎵' },
    { name: 'Programming', icon: '💻' },
  ];



  const handleBookNow = () => {
    setShowModal(true);
  };

  
  

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-amber-50 to-blue-500">
      {/* Floating geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#3735ca] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-[#4b48fa] rounded-lg opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-36 h-36 bg-blue-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>

        {/* Interactive cursor effect */}
        <div
          className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-blue-500 to-purple-900 opacity-10 blur-3xl transition-all duration-300 ease-out"
          style={{
            left: mousePosX - 128,
            top: mousePosY - 128,
            transform: `translate(${(mousePosX - window.innerWidth / 2) * -0.02}px, ${(mousePosY - window.innerHeight / 2) * -0.02}px)`,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-1000 backdrop-blur-md ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
                Tutorify
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#" className="text-blue-800 hover:text-white transition-colors duration-300">
                  How It Works
                </a>
                <a href="#" className="text-blue-800 hover:text-white transition-colors duration-300">
                  Subjects
                </a>
                <a href="#" className="text-blue-800 hover:text-white transition-colors duration-300">
                  Pricing
                </a>
                <a href="#" className="text-blue-800 hover:text-white transition-colors duration-300">
                  For Tutors
                </a>

              </div>
            </div>
            <div className="flex items-center space-x-4">

              <button className="px-6 py-2 rounded-3xl text-white bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 hover: cursor-pointer" >
                Get Started !
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-28 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className={`transition-all duration-1000 max-w-3xl ${isLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                <span className="block">Learn Anything,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
                  Anytime, Anywhere
                </span>
              </h1>
              <span className="mt-6 text-xl bg-gradient-to-r text-blue-800 bg-clip-text  ">
                Achieve your academic goals with personalized 1-on-1 sessions.
              </span>
              <div className="mt-10 flex justify-center space-x-4">
                <button
                  
                  className="px-8 py-4 rounded-lg text-white bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-500 hover:to-blue-800 font-bold shadow-lg hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300"
                >
                  Book A Tutor Now
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>




      {/* How It Works Section */}
      <div className="py-20 bg-gradient-to-t from-white to-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">How " Tutorify " Works</h2>
            <p className="mt-4 text-lg text-gray-800">Get the help you need in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔍',
                title: 'Find Your Tutor',
                description: 'Browse our network of expert tutors or get instantly matched with the perfect tutor for your subject and learning style.',
              },
              {
                icon: '📅',
                title: 'Schedule a Session',
                description: 'Book an immediate session or schedule for later. Our tutors are available 24/7, ready to help whenever you need it.',
              },
              {
                icon: '🚀',
                title: 'Learn & Succeed',
                description: 'Connect via our interactive learning platform. Share documents, collaborate on problems, and ace your coursework.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-8 transform hover:scale-105 transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-800 flex items-center justify-center text-white text-3xl mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-600 mb-4">{step.title}</h3>
                <p className="text-gray-800">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subjects Section */}
      <div className="py-20 bg-gradient-to-l from-white to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Explore Our Subjects</h2>
            <p className="mt-4 text-lg text-gray-800">Expert tutors available in over 50 subjects</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 hover:bg-white/10 transition-all duration-300 cursor-pointer ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center">
                  <span className="text-4xl mr-4">{subject.icon}</span>
                  <h3 className="text-xl font-bold text-gray-800">{subject.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 rounded-lg text-black bg-opacity-20 bg-white hover:bg-opacity-30 font-bold transition-all duration-300">
              View All Subjects
            </button>
          </div>
        </div>
      </div>

      

      


      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-800 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-lg text-white mb-8">
                Join thousands of students already using Tutorify to achieve their academic goals, master difficult subjects, and boost their confidence.
              </p>
              <div className="sm:flex sm:space-x-4">
                <button
                  
                  className="w-full sm:w-auto mb-4 sm:mb-0 px-8 py-4 rounded-lg bg-white text-blue-600 font-bold shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  Book Your First Session
                </button>
                <button className="w-full sm:w-auto px-8 py-4 rounded-lg text-blue-600 bg-opacity-20 bg-white hover:bg-opacity-30 font-bold transition-all duration-300 hover:scale-105 hover:cursor-pointer">
                  Become a Tutor
                </button>
              </div>
            </div>
            <div className="mt-12 lg:mt-0 relative">

              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl transform hover:-rotate-3 transition-all duration-500 hover:cursor-pointer">
                <div className="flex items-center">
                  <div className="flex -space-x-2 mr-4">
                    <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">A+</div>
                  </div>
                  <div>
                    <p className="font-bold text-purple-600">97% satisfaction rate</p>
                    <p className="text-sm text-gray-600">Based on 10,000+ sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-800 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Tutorify</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Our Tutors
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Students</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Tutors</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Become a Tutor
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Tutor Requirements
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-white transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-white hover:text-white transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-white transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-white text-center">© 2025 Tutorify, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Book Now Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div
            className="bg-gradient-to-br from-indigo-900 to-purple-800 rounded-xl shadow-2xl p-8 max-w-md w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Book Your Tutor</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-300 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Subject</label>
                <select className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500">
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>Literature</option>
                  <option>Languages</option>
                  <option>History</option>
                  <option>Programming</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">When do you need help?</label>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-gray-600 transition-colors duration-300">
                    Right Now
                  </button>
                  <button className="p-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-gray-600 transition-colors duration-300">
                    Schedule Later
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-300 mb-2">What do you need help with?</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-white/10 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  rows="3"
                  placeholder="Describe what you're working on..."
                ></textarea>
              </div>
            </div>

            <div className="mt-8">
              <button
                className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:from-pink-600 hover:to-purple-600 transition-all duration-300"
              >
                Find Tutors Now
              </button>
              <p className="text-gray-400 text-center text-sm mt-4">
                By continuing, you agree to our Terms of Service
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;