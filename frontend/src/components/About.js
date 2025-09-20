import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            About Our Technology
          </h2>

          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">How It Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">1. Upload Image</h4>
                <p className="text-gray-600">Upload a chest X-ray image in PNG, JPG, or JPEG format</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">2. AI Analysis</h4>
                <p className="text-gray-600">Our deep learning model analyzes the image for signs of pneumonia</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">3. Get Results</h4>
                <p className="text-gray-600">Receive instant results with confidence levels and detailed analysis</p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Key Features</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">High Accuracy</h4>
                <p className="text-sm text-gray-600">96.4% sensitivity and 86% overall accuracy</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Fast Analysis</h4>
                <p className="text-sm text-gray-600">Results in under 30 seconds</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Secure & Private</h4>
                <p className="text-sm text-gray-600">Images processed locally with no data storage</p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Healthcare Support</h4>
                <p className="text-sm text-gray-600">Assists healthcare professionals in diagnosis</p>
              </div>
            </div>
          </div>

          {/* About Pneumonia */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">About Pneumonia Detection</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">What is Pneumonia?</h4>
                <p className="text-gray-600 mb-4">
                  Pneumonia is a respiratory infection that affects the lungs, causing inflammation 
                  in the air sacs. Early detection through chest X-ray imaging is crucial for 
                  effective treatment and improved patient outcomes.
                </p>
                <p className="text-gray-600">
                  Traditional diagnosis relies on radiologist interpretation, which can be 
                  time-consuming and subject to variability. AI assistance helps standardize 
                  and accelerate the diagnostic process.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3">Our AI Technology</h4>
                <p className="text-gray-600 mb-4">
                  Our deep learning model was trained on thousands of chest X-ray images to 
                  identify patterns associated with pneumonia. The model uses advanced 
                  convolutional neural networks to analyze medical images with high precision.
                </p>
                <p className="text-gray-600">
                  The system provides confidence levels and detailed analysis to support 
                  healthcare professionals in making informed diagnostic decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
