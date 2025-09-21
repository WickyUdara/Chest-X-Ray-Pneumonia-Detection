import React, { useState } from "react";
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

const ImageUploader = ({ onAnalysisComplete }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image file first.");
      return;
    }

    setIsLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "An unknown error occurred.");
      }

      const data = await response.json();
      onAnalysisComplete(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
        Upload X-Ray Image
      </h2>
      <p className="text-center text-gray-600 mb-6">
        Get an instant AI-powered analysis.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition-colors">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/jpg"
          />
          <label htmlFor="file-upload" className="cursor-pointer">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="mt-2 text-blue-600 font-semibold">
              {file ? file.name : "Click to upload a file"}
            </p>
            <p className="text-xs text-gray-500">PNG, JPG, JPEG up to 10MB</p>
          </label>
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
        )}
        <div className="mt-6">
          <button
            type="submit"
            disabled={isLoading || !file}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Analyzing..." : "Analyze Image"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageUploader;
