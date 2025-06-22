import React, { useState } from "react";
import {
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Users,
  Clock,
  DollarSign,
  Star,
  BookOpen,
  Globe,
  User,
  GraduationCap,
  Settings,
  FileText,
} from "lucide-react";

const TutorifyReg = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    username: "",
    password: "",
    full_name: "",
    email: "",
    date_of_birth: "",
    gender: "",
    address: "",
    profile_picture: null,

    // Step 2 - Professional Info
    highest_qualification: "",
    subjects_taught: "",
    teaching_experience: "",
    language_spoken: "",

    // Step 3 - Preferences
    teaching_mode: "",
    age_group: "",
    travel_preference: "",
    fee_range: "",

    // Step 4 - Additional Details
    bio: "",
    tagline: "",
    intro_video: null,
    resume: null,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileChange = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const stepInfo = [
    {
      icon: <User className="w-5 h-5" />,
      title: "Personal Info",
      desc: "Tell us about yourself",
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Qualifications",
      desc: "Your teaching background",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Preferences",
      desc: "How you like to teach",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Final Details",
      desc: "Complete your profile",
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-10 h-10 text-blue-400" />,
      title: "Flexible Earnings",
      description:
        "Set your own rates and earn up to $50/hour. Work as much or as little as you want.",
    },
    {
      icon: <Clock className="w-10 h-10 text-blue-400" />,
      title: "Complete Freedom",
      description:
        "Choose your schedule, teaching style, and students. Perfect work-life balance.",
    },

    {
      icon: <Star className="w-10 h-10 text-blue-400" />,
      title: "Growth & Support",
      description:
        "Access professional development, marketing support, and a thriving community.",
    },
  ];

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-blue-300 text-sm font-medium">
              Username
            </label>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange("username", e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
              placeholder="Your unique username"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
              placeholder="Create a strong password"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-blue-300 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              value={formData.full_name}
              onChange={(e) => handleInputChange("full_name", e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
              placeholder="Your full name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-blue-300 text-sm font-medium">
              Date of Birth
            </label>
            <input
              type="date"
              value={formData.date_of_birth}
              onChange={(e) =>
                handleInputChange("date_of_birth", e.target.value)
              }
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-blue-300 text-sm font-medium">
              Gender
            </label>
            <select
              value={formData.gender}
              onChange={(e) => handleInputChange("gender", e.target.value)}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-blue-300 text-sm font-medium">
            Address
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm resize-none"
            rows="3"
            placeholder="Your complete address"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-blue-300 text-sm font-medium">
            Profile Picture
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                handleFileChange("profile_picture", e.target.files[0])
              }
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600/80 file:text-white hover:file:bg-blue-600 file:transition-all"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-blue-300 text-sm font-medium">
            Highest Qualification
          </label>
          <select
            value={formData.highest_qualification}
            onChange={(e) =>
              handleInputChange("highest_qualification", e.target.value)
            }
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
          >
            <option value="">Select Qualification</option>
            <option value="bachelors">Bachelor's Degree</option>
            <option value="masters">Master's Degree</option>
            <option value="phd">PhD</option>
            <option value="diploma">Diploma</option>
            <option value="certification">Professional Certification</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-blue-300 text-sm font-medium">
            Teaching Experience
          </label>
          <select
            value={formData.teaching_experience}
            onChange={(e) =>
              handleInputChange("teaching_experience", e.target.value)
            }
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
          >
            <option value="">Select Experience</option>
            <option value="0-1">0-1 years</option>
            <option value="1-3">1-3 years</option>
            <option value="3-5">3-5 years</option>
            <option value="5-10">5-10 years</option>
            <option value="10+">10+ years</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-blue-300 text-sm font-medium">
          Subjects You Teach
        </label>
        <textarea
          value={formData.subjects_taught}
          onChange={(e) => handleInputChange("subjects_taught", e.target.value)}
          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm resize-none"
          rows="3"
          placeholder="Mathematics, Physics, Chemistry, English Literature..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-blue-300 text-sm font-medium">
          Languages You Speak
        </label>
        <input
          type="text"
          value={formData.language_spoken}
          onChange={(e) => handleInputChange("language_spoken", e.target.value)}
          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
          placeholder="English, Spanish, French, Mandarin..."
        />
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-blue-300 text-sm font-medium">
            Teaching Mode
          </label>
          <select
            value={formData.teaching_mode}
            onChange={(e) => handleInputChange("teaching_mode", e.target.value)}
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
          >
            <option value="">Select Mode</option>
            <option value="online">Online Only</option>
            <option value="offline">In-Person Only</option>
            <option value="hybrid">Both Online & In-Person</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-blue-300 text-sm font-medium">
            Preferred Age Group
          </label>
          <select
            value={formData.age_group}
            onChange={(e) => handleInputChange("age_group", e.target.value)}
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
          >
            <option value="">Select Age Group</option>
            <option value="elementary">Elementary (5-10 years)</option>
            <option value="middle">Middle School (11-13 years)</option>
            <option value="high">High School (14-18 years)</option>
            <option value="college">College (18+ years)</option>
            <option value="adult">Adult Learners</option>
            <option value="all">All Ages</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-blue-300 text-sm font-medium">
            Travel Preference
          </label>
          <select
            value={formData.travel_preference}
            onChange={(e) =>
              handleInputChange("travel_preference", e.target.value)
            }
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
          >
            <option value="">Select Preference</option>
            <option value="no-travel">No Travel Required</option>
            <option value="local">Local Area (within 10km)</option>
            <option value="city">Within City</option>
            <option value="flexible">Flexible with Travel</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-blue-300 text-sm font-medium">
            Hourly Rate Range
          </label>
          <select
            value={formData.fee_range}
            onChange={(e) => handleInputChange("fee_range", e.target.value)}
            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
          >
            <option value="">Select Rate Range</option>
            <option value="10-20">$10 - $20</option>
            <option value="20-35">$20 - $35</option>
            <option value="35-50">$35 - $50</option>
            <option value="50+">$50+</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-blue-300 text-sm font-medium">
          Your Teaching Tagline
        </label>
        <input
          type="text"
          value={formData.tagline}
          onChange={(e) => handleInputChange("tagline", e.target.value)}
          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm"
          placeholder="Making math fun and easy for everyone!"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-blue-300 text-sm font-medium">
          About You
        </label>
        <textarea
          value={formData.bio}
          onChange={(e) => handleInputChange("bio", e.target.value)}
          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 placeholder-slate-400 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm resize-none"
          rows="4"
          placeholder="Tell students about your teaching philosophy, experience, and what makes you unique..."
        />
      </div>

      <div className="space-y-2">
        <label className="block text-blue-300 text-sm font-medium">
          Introduction Video
        </label>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => handleFileChange("intro_video", e.target.files[0])}
          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600/80 file:text-white hover:file:bg-blue-600 file:transition-all"
        />
        <p className="text-slate-400 text-xs">
          A 30-60 second video introducing yourself to students
        </p>
      </div>

      <div className="space-y-2">
        <label className="block text-blue-300 text-sm font-medium">
          Resume/CV
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => handleFileChange("resume", e.target.files[0])}
          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-blue-100 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all backdrop-blur-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600/80 file:text-white hover:file:bg-blue-600 file:transition-all"
        />
        <p className="text-slate-400 text-xs">
          Upload in PDF, DOC, or DOCX format
        </p>
      </div>
    </div>
  );

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      case 4:
        return renderStep4();
      default:
        return renderStep1();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 shadow-xl">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent mb-4">
            Join Tutorify
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Transform lives through education. Join thousands of tutors making a
            difference worldwide.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Benefits Section */}
          <div className="xl:col-span-2 space-y-8">
            <div className="text-center xl:text-left">
              <h2 className="text-3xl font-bold text-blue-200 mb-3">
                Why Choose Us?
              </h2>
              <p className="text-slate-400">
                Join the future of online education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-blue-800/10 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-2xl" />
                  <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/60 transition-all duration-300 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl border border-blue-500/20">
                        {benefit.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-blue-200">
                            {benefit.title}
                          </h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Registration Form */}
          <div className="xl:col-span-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-3xl blur-xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
                {/* Enhanced Progress Bar */}
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-6">
                    {stepInfo.map((step, index) => (
                      <div
                        key={index + 1}
                        className="flex flex-col items-center space-y-2 flex-1"
                      >
                        <div
                          className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                            index + 1 <= currentStep
                              ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                              : "bg-slate-700/50 border border-slate-600/50 text-slate-400"
                          }`}
                        >
                          {index + 1 < currentStep ? (
                            <CheckCircle className="w-6 h-6" />
                          ) : (
                            step.icon
                          )}
                        </div>
                        <div className="text-center">
                          <p
                            className={`text-xs font-medium ${
                              index + 1 <= currentStep
                                ? "text-blue-300"
                                : "text-slate-500"
                            }`}
                          >
                            {step.title}
                          </p>
                          <p className="text-xs text-slate-500 hidden sm:block">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative">
                    <div className="w-full bg-slate-700/50 rounded-full h-1">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-1 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 4) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Form Content */}
                <div className="mb-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-blue-200 mb-2">
                      {stepInfo[currentStep - 1].title}
                    </h3>
                    <p className="text-slate-400">
                      {stepInfo[currentStep - 1].desc}
                    </p>
                  </div>
                  {getStepContent()}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all ${
                      currentStep === 1
                        ? "bg-slate-700/50 text-slate-500 cursor-not-allowed"
                        : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 border border-slate-600/50 hover:border-slate-500/50"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5 mr-2" />
                    Previous
                  </button>

                  {currentStep < 4 ? (
                    <button
                      onClick={nextStep}
                      className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-medium hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
                    >
                      Continue
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      className="flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl font-medium hover:from-green-700 hover:to-green-800 transition-all shadow-lg shadow-green-600/25 hover:shadow-xl hover:shadow-green-600/30"
                      onClick={() =>
                        alert(
                          "🎉 Welcome to Tutorify! Your registration is complete and under review."
                        )
                      }
                    >
                      Complete Registration
                      <CheckCircle className="w-5 h-5 ml-2" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorifyReg;
