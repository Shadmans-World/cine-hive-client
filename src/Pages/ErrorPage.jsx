import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-extrabold text-red-500">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600">
        The page you are looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="mt-6 px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default ErrorPage;
