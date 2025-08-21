const Services = () => {
  return (
    <>
      <h1>Hello Services</h1>
      <section>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Our Team
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-purple-600">S</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Alice
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                Frontend Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                JavaScript & React
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">S</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Ben
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                Backend Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                NodeJs & MongoDB
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-cyan-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-cyan-600">S</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Charlse
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">DevOps</p>
              <p className="text-xs text-gray-500 text-center mt-1">Linux</p>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-lime-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-lime-600">S</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Den
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                Full-Stack
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                MERN Stack
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-emerald-600">S</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Ellie
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">Testing</p>
              <p className="text-xs text-gray-500 text-center mt-1">Android</p>
            </div>

            {/* Team Member 6 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg hover:translate-y-2 transition-all duration-300">
              <div className="w-24 h-24 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-green-600">S</span>
              </div>
              <h3 className="text-lg font-semibold text-center text-gray-800">
                Fiona
              </h3>
              <p className="text-sm text-gray-600 text-center mt-2">
                IOS Developer
              </p>
              <p className="text-xs text-gray-500 text-center mt-1">
                Flutter & React Native
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
