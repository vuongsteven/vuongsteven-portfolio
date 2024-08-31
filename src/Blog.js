import React from 'react';

function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 p-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-800">My Blog</h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-6 mb-6 transition duration-300 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-indigo-600">Blog Post Title</h3>
          <p className="text-gray-600 mt-2">Date: June 1, 2023</p>
          <p className="mt-4 text-gray-700">
            This is a short excerpt or summary of your blog post. You can add more content here...
            This is a short excerpt or summary of your blog post. You can add more content here...
            This is a short excerpt or summary of your blog post. You can add more content here...
            This is a short excerpt or summary of your blog post. You can add more content here...
            ViewThis is a short excerpt or summary of your blog post. You can add more content here...
            This is a short excerpt or summary of your blog post. You can add more content here...
          </p>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 mt-4 inline-block">Read More</a>
        </div>
        {/* Add more blog post entries here */}
      </div>
    </div>
  );
}

export default Blog;
