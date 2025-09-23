import React from 'react';

const Hero = () => {
  const scrollToUpload = () => {
    document.getElementById('upload').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Clean Background Image without Text */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url("https://user-gen-media-assets.s3.amazonaws.com/seedream_images/4e96bc31-fa77-4e3e-9c39-2f1a6fd2ccc1.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Gradient Overlay for Better Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-blue-600/20 to-indigo-800/40 z-10" />
      
      {/* Animated Floating Elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/30 rounded-full animate-bounce delay-100"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-400/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-purple-400/30 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-blue-300/50 rounded-full animate-ping delay-700"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            AI-Powered <span className="text-blue-600 drop-shadow-xl">Pneumonia Detection</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 mb-12 drop-shadow-lg max-w-3xl mx-auto leading-relaxed">
            Advanced deep learning technology to assist healthcare professionals 
            in early pneumonia detection from chest X-ray images.
          </p>
          
          {/* Enhanced Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[140px] border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">94%</div>
              <div className="text-blue-100 font-medium">Sensitivity</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[140px] border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">92%</div>
              <div className="text-blue-100 font-medium">Accuracy</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[140px] border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">&lt;30s</div>
              <div className="text-blue-100 font-medium">Analysis Time</div>
            </div>
          </div>
          
          {/* Enhanced CTA Button */}
          <div className="space-y-4">
            <button 
              onClick={scrollToUpload}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/50 transform hover:-translate-y-1 hover:scale-105 border border-blue-400/30"
            >
              <span className="flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Start Analysis
              </span>
            </button>
            <p className="text-blue-200/80 text-sm">
              Upload your chest X-ray for instant AI-powered analysis
            </p>
          </div>
        </div>
      </div>

      {/* Subtle animation wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-15">
        <svg className="w-full h-20 text-white/5" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
