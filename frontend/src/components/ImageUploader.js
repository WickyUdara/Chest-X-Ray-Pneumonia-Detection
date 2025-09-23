import React, { useState, useRef } from "react";
const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

const ImageUploader = ({ onAnalysisComplete }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError("");
    }
  };

  const handleRemoveFile = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragEvents = (e, dragging) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(dragging);
  };

  const handleDrop = (e) => {
    handleDragEvents(e, false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
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
    <div className="bg-white dark:bg-gray-800/50 p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto transition-colors">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="file-upload"
          onDragEnter={(e) => handleDragEvents(e, true)}
          onDragLeave={(e) => handleDragEvents(e, false)}
          onDragOver={(e) => handleDragEvents(e, true)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center w-full h-80 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
            isDragging
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
              : "border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400"
          }`}
        >
          <input
            type="file"
            id="file-upload"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/jpg, image/webp"
          />
          {file ? (
            <div className="text-center text-gray-800 dark:text-gray-200">
              <svg
                className="w-16 h-16 mx-auto text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <p className="font-semibold mt-4 text-lg">{file.name}</p>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="mt-2 text-sm text-red-600 hover:text-red-800 dark:hover:text-red-400 font-semibold"
              >
                Remove File
              </button>
            </div>
          ) : (
            <div className="text-center">
              <svg
                className="mx-auto h-16 w-16 text-blue-500 dark:text-blue-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M12 12v9m-4-4l4 4 4-4"
                ></path>
              </svg>
              <p className="text-2xl font-bold text-gray-700 dark:text-gray-200">
                Drag & Drop X-Ray Image
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                or click to browse files
              </p>
              <div className="mt-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <p className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Supported formats: PNG, JPG, JPEG, WEBP
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Maximum size: 10MB
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Chest X-Ray images only
                </p>
              </div>
            </div>
          )}
        </label>
        {error && (
          <p className="mt-4 text-sm text-red-600 text-center">{error}</p>
        )}
        <div className="mt-6">
          <button
            type="submit"
            disabled={isLoading || !file}
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? "Analyzing..." : "Analyze Image"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageUploader;
