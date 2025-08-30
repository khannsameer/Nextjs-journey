import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-50">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
        Loading...
      </h1>
    </div>
  );
};

export default loading;
