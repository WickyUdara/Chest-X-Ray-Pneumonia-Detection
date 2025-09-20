import React from "react";

// Helper function to format file size
const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

const Results = ({ result, onReset }) => {
  if (!result) {
    return null;
  }

  const { predicted_class, confidence, interpretation, file_size } = result;
  const confidencePercentage = (confidence * 100).toFixed(2);

  const isPneumonia = predicted_class === "PNEUMONIA";

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-auto animate-fade-in">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Analysis Results
      </h2>

      <div className="flex flex-col items-center text-center mb-6">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center ${
            isPneumonia ? "bg-red-100" : "bg-green-100"
          } mb-4`}
        >
          <svg
            className={`w-8 h-8 ${
              isPneumonia ? "text-red-500" : "text-green-500"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isPneumonia ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            )}
          </svg>
        </div>
        <p className="text-lg text-gray-600">
          The AI model indicates this chest X-ray shows{" "}
          {isPneumonia ? (
            <span className="font-bold text-red-600">signs of pneumonia</span>
          ) : (
            <span className="font-bold text-green-600">
              no signs of pneumonia
            </span>
          )}
          .
        </p>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-lg font-medium text-gray-700">
            Confidence Level
          </span>
          <span
            className={`text-lg font-bold ${
              isPneumonia ? "text-red-600" : "text-green-600"
            }`}
          >
            {confidencePercentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className={`${
              isPneumonia ? "bg-red-500" : "bg-green-500"
            } h-4 rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${confidencePercentage}%` }}
          ></div>
        </div>
        <p className="text-right text-gray-600 mt-1">{interpretation}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Analysis Details
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Model Version: 1.0.0</li>
            <li>• Analysis Time: &lt;30 seconds</li>
            <li>• Image Size: {formatBytes(file_size)}</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Confidence Scale
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 90-100%: Very High Confidence</li>
            <li>• 80-89%: High Confidence</li>
            <li>• 70-79%: Moderate Confidence</li>
            <li>• &lt;70%: Low Confidence</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onReset}
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
        >
          Analyze Another Image
        </button>
        <button
          onClick={() => window.print()}
          className="bg-gray-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors duration-300 w-full sm:w-auto"
        >
          Print Results
        </button>
      </div>
    </div>
  );
};

export default Results;
