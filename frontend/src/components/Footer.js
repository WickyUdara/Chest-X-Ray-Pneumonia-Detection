import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 11c0-3.517 3.054-4 5.5-4 2.446 0 4.5 2.054 4.5 4.5s-2.054 4.5-4.5 4.5c-2.446 0-5.5-.483-5.5-4zM6 11c0-3.517 3.054-4 5.5-4 2.446 0 4.5 2.054 4.5 4.5s-2.054 4.5-4.5 4.5C8.054 15.5 6 14.517 6 11z"
                  ></path>
                </svg>
              </div>
              <span className="text-2xl font-bold">AI Pneumonia X-ray Analyzer</span>
            </div>
            <p className="text-gray-400 text-sm">
              AI-powered medical imaging analysis to assist healthcare
              professionals in pneumonia detection.
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-start-3">
            <h3 className="text-lg font-semibold mb-4 tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:imethudara@gmail.com"
                  className="hover:text-blue-400"
                >
                  imethudara@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Pneumonia X-ray Analyzer. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Made with ❤️ for healthcare professionals
            </p>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-8 p-4 bg-yellow-900 bg-opacity-30 border border-yellow-600 rounded-lg">
          <p className="text-yellow-200 text-xs">
            <strong>Medical Disclaimer:</strong> This AI tool is designed to
            assist healthcare professionals and should not replace professional
            medical diagnosis. Results are for informational purposes only.
            Always consult with a qualified healthcare provider for medical
            advice, diagnosis, and treatment decisions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
