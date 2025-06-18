import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();

  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fullname: "",
    birthdate: "",
    gender: "",
    student_email: "",
    address: "",
    phone_number: "",

    parent_name: "",
    parent_email: "",
    parent_phone_number: "",
    other_phone_number: "",

    school_details: "",
    current_grade: "",
    subjects_of_interest: "",

    preferred_tutor_mode: "",
    language_preferences: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setFormStep((prev) => prev + 1);
  const prevStep = () => setFormStep((prev) => prev - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);

      const response = await fetch(
        "http://127.0.0.1:8000/api/register_student/",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", data.access);
        console.log("Registered Successfully");
        alert("Successfully registered");

        setTimeout(() => {
          navigate("/home/");
        }, 1000);
      } else {
        alert("Backend error");
        console.log("error" + data.errors);
      }
    } catch (error) {
      console.log("Error is " + error);
    }
  };

  const totalSteps = 6;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4">
      <div className="w-full max-w-md">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-blue-200 text-sm font-medium">
              Step {formStep + 1} of {totalSteps}
            </span>
            <span className="text-blue-200 text-sm">
              {Math.round(((formStep + 1) / totalSteps) * 100)}%
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${((formStep + 1) / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {formStep === 0 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                )}
                {formStep === 1 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                )}
                {formStep === 2 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                )}
                {formStep === 3 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                )}
                {formStep === 4 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                )}
                {formStep === 5 && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                )}
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {formStep === 0 && "Account Setup"}
              {formStep === 1 && "Personal Details"}
              {formStep === 2 && "Contact Information"}
              {formStep === 3 && "Parent/Guardian Info"}
              {formStep === 4 && "Academic Details"}
              {formStep === 5 && "Preferences"}
            </h2>
            <p className="text-blue-200 text-sm">
              {formStep === 0 && "Create your account credentials"}
              {formStep === 1 && "Tell us about yourself"}
              {formStep === 2 && "How can we reach you?"}
              {formStep === 3 && "Parent/Guardian contact details"}
              {formStep === 4 && "Your academic information"}
              {formStep === 5 && "Set your learning preferences"}
            </p>
          </div>

          <div className="space-y-6">
            {/* Step 0: Account Setup */}
            {formStep === 0 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Password
                  </label>
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
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
                  >
                    Continue →
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-slate-400 text-sm">
                    Have an account?{" "}
                    <Link
                      to="/login/"
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            )}

            {/* Step 1: Personal Details */}
            {formStep === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Enter your full name"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Birth Date
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    value={formData.birthdate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
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

            {/* Step 2: Contact Information */}
            {formStep === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Student Email
                  </label>
                  <input
                    type="email"
                    name="student_email"
                    placeholder="Enter your email address"
                    value={formData.student_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Address
                  </label>
                  <textarea
                    name="address"
                    placeholder="Enter your full address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Enter your phone number"
                    value={formData.phone_number}
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

            {/* Step 3: Parent/Guardian Info */}
            {formStep === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Parent/Guardian Name
                  </label>
                  <input
                    type="text"
                    name="parent_name"
                    placeholder="Enter parent/guardian name"
                    value={formData.parent_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Parent Email
                  </label>
                  <input
                    type="email"
                    name="parent_email"
                    placeholder="Enter parent email address"
                    value={formData.parent_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Parent Phone Number
                  </label>
                  <input
                    type="tel"
                    name="parent_phone_number"
                    placeholder="Enter parent phone number"
                    value={formData.parent_phone_number}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Alternative Phone Number
                  </label>
                  <input
                    type="tel"
                    name="other_phone_number"
                    placeholder="Enter alternative phone number (optional)"
                    value={formData.other_phone_number}
                    onChange={handleChange}
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

            {/* Step 4: Academic Details */}
            {formStep === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    School Details
                  </label>
                  <input
                    type="text"
                    name="school_details"
                    placeholder="Enter your school name and details"
                    value={formData.school_details}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Current Grade
                  </label>
                  <select
                    name="current_grade"
                    value={formData.current_grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select your current grade</option>
                    <option value="grade_1">Grade 1</option>
                    <option value="grade_2">Grade 2</option>
                    <option value="grade_3">Grade 3</option>
                    <option value="grade_4">Grade 4</option>
                    <option value="grade_5">Grade 5</option>
                    <option value="grade_6">Grade 6</option>
                    <option value="grade_7">Grade 7</option>
                    <option value="grade_8">Grade 8</option>
                    <option value="grade_9">Grade 9</option>
                    <option value="grade_10">Grade 10</option>
                    <option value="grade_11">Grade 11</option>
                    <option value="grade_12">Grade 12</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Subjects of Interest
                  </label>
                  <textarea
                    name="subjects_of_interest"
                    placeholder="List the subjects you're interested in learning"
                    value={formData.subjects_of_interest}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
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

            {/* Step 5: Preferences */}
            {formStep === 5 && (
              <div className="space-y-6 animate-fade-in">
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Preferred Tutor Mode
                  </label>
                  <select
                    name="preferred_tutor_mode"
                    value={formData.preferred_tutor_mode}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select preferred mode</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline/In-person</option>
                    <option value="hybrid">Hybrid (Both)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-blue-200 text-sm font-medium">
                    Language Preferences
                  </label>
                  <input
                    type="text"
                    name="language_preferences"
                    placeholder="Enter preferred languages (e.g., English, Hindi, etc.)"
                    value={formData.language_preferences}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Summary Section */}
                <div className="bg-slate-700/30 rounded-xl p-4 border border-slate-600/50">
                  <h3 className="text-white font-medium mb-3">
                    Review Your Information
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Username:</span>
                      <span className="text-white">{formData.username}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Full Name:</span>
                      <span className="text-white">{formData.fullname}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Email:</span>
                      <span className="text-white">
                        {formData.student_email}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Grade:</span>
                      <span className="text-white">
                        {formData.current_grade}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Tutor Mode:</span>
                      <span className="text-white">
                        {formData.preferred_tutor_mode}
                      </span>
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
            {Array.from({ length: totalSteps }, (_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= formStep
                    ? "bg-blue-500 shadow-lg shadow-blue-500/50"
                    : "bg-slate-600"
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
