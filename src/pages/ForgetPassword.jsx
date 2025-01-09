import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const ForgetPassword = () => {
  return (
    <>
      <Nav />
      <section className="bg-gray-50 dark:bg-customBlue min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full max-w-4xl">
          {/* Left Side - Image Section */}
          <div className="hidden md:block md:w-1/2 bg-cover bg-center">
            <img src="register.svg" alt="Forget Password" />
          </div>

          {/* Right Side - Form Section */}
          <div className="w-full md:w-1/2 p-6 sm:p-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Reset Your Password</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-6 text-center">
              Enter your registered email address, and we'll send you a link to reset your password.
            </p>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg p-2.5 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Send Reset Link
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 text-center">
              Remembered your password? <a href="/login" className="text-blue-600 dark:text-blue-400 hover:underline">Login here</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForgetPassword;
