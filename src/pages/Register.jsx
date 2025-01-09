import React, { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Register = () => {
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [hiringManager, setHiringManager] = useState("");
  const [branchLocation, setBranchLocation] = useState("");
  const [address, setAddress] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  // Check password strength
  const checkPasswordStrength = (pwd) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumPasswordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (strongPasswordRegex.test(pwd)) {
      return 'Strong';
    } else if (mediumPasswordRegex.test(pwd)) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setPasswordStrength(checkPasswordStrength(pwd));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Nav />
      <section className="bg-customBlue dark:bg-customBlue min-h-screen flex items-center justify-center">
        
        <div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full max-w-4xl">
          {/* Left Side - Image Section */}
          <div className="hidden md:block md:w-1/2 bg-cover bg-center">
            <img src="register.svg" alt="register" />
          </div>

          {/* Right Side - Form Section */}
          <div className="w-full md:w-1/2 p-6 sm:p-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Create an Account</h1>
            <div className="overflow-y-auto mb-5" style={{ maxHeight: '60vh' }}>
            <form className="space-y-4 mr-2">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Enter your company name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Hiring Manager */}
              <div>
                <label htmlFor="hiringManager" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hiring Manager</label>
                <input
                  type="text"
                  id="hiringManager"
                  placeholder="Enter hiring manager's name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={hiringManager}
                  onChange={(e) => setHiringManager(e.target.value)}
                  required
                />
              </div>

              {/* Branch Location */}
              <div>
                <label htmlFor="branchLocation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Branch Location</label>
                <input
                  type="text"
                  id="branchLocation"
                  placeholder="Enter branch location"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={branchLocation}
                  onChange={(e) => setBranchLocation(e.target.value)}
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <textarea
                  id="address"
                  placeholder="Enter address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>

              {/* Organization ID */}
              <div>
                <label htmlFor="organizationId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Organization ID</label>
                <input
                  type="text"
                  id="organizationId"
                  placeholder="Enter organization ID"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={organizationId}
                  onChange={(e) => setOrganizationId(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                <p
                  className={`text-sm mt-1 ${
                    passwordStrength === 'Strong'
                      ? 'text-green-600'
                      : passwordStrength === 'Medium'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {passwordStrength && `Password Strength: ${passwordStrength}`}
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
            </form>
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  I agree to the <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
			<p className="mt-4 text-sm text-gray-500 dark:text-gray-300 text-center">
              Already have an account? <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
