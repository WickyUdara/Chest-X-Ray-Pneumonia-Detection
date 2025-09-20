import React from 'react';

const Hero = () => {
  const scrollToUpload = () => {
    document.getElementById('upload').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            AI-Powered <span className="text-blue-600">Pneumonia Detection</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Advanced deep learning technology to assist healthcare professionals 
            in early pneumonia detection from chest X-ray images.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600">96.4%</div>
              <div className="text-gray-600">Sensitivity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600">86%</div>
              <div className="text-gray-600">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600">&lt;30s</div>
              <div className="text-gray-600">Analysis Time</div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={scrollToUpload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
          >
            Start Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
