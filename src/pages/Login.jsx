import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Nav />
      <section className="bg-customBlue dark:bg-customBlue min-h-screen flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center justify-center bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full max-w-4xl">
          {/* Left Side - Image Section */}
          <div className="hidden md:block md:w-1/2 bg-cover bg-center">
            <img src="login.svg" alt="login" />
          </div>

          {/* Right Side - Form Section */}
          <div className="w-full md:w-1/2 p-6 sm:p-12">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">Welcome Back!</h1>
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
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:ring-offset-gray-800"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-500 dark:text-gray-300">Remember me</label>
                </div>
                <a href="/forget-password" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white rounded-lg p-2.5 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-300 text-center">
              Don’t have an account? <a href="/register" className="text-blue-600 dark:text-blue-400 hover:underline">Register here</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
