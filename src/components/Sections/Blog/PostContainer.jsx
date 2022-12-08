import React from "react";

const PostContainer = ({ children }) => {
  return (
    <div className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50 py-8">
        {children}
      </div>
    </div>
  );
};

export default PostContainer;
