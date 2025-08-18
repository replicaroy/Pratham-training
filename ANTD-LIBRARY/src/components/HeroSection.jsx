const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Have a Question?</h1>
        <p className="text-lg mb-8 italic">
          If you have any question you can ask below or enter what you are looking for!
        </p>
        <div className="flex max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Type your search terms here"
            className="flex-1 px-4 py-3 text-gray-900 rounded-l-lg focus:outline-none bg-white"
          />
          <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-r-lg transition-colors">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;