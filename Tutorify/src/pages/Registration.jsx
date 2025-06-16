import React, { useState } from "react";

const Register = () => {
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setFormStep((prev) => prev + 1);
  const prevStep = () => setFormStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-blue-200 text-sm font-medium">Step {formStep + 1} of 3</span>
            <span className="text-blue-200 text-sm">{Math.round(((formStep + 1) / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((formStep + 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {formStep === 0 && "Personal Information"}
              {formStep === 1 && "Security Details"}
              {formStep === 2 && "Contact Information"}
            </h2>
            <p className="text-blue-200 text-sm">
              {formStep === 0 && "Let's start with your basic information"}
              {formStep === 1 && "Set up your account security"}
              {formStep === 2 && "Almost done! Just a few more details"}
            </p>
          </div>

          <div className="space-y-6">
            {formStep === 0 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {formStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 px-6 py-3 bg-slate-600 text-white font-medium rounded-xl hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {formStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                {/* Summary Section */}
                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50">
                  <h3 className="text-white font-medium mb-3">Review Your Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Name:</span>
                      <span className="text-white">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Email:</span>
                      <span className="text-white">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Phone:</span>
                      <span className="text-white">{formData.phone}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 px-6 py-3 bg-slate-600 text-white font-medium rounded-xl hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-200"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Complete Registration ✓
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Step Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2].map((step) => (
              <div
                key={step}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  step <= formStep
                    ? 'bg-blue-500 shadow-lg shadow-blue-500/50'
                    : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Register;