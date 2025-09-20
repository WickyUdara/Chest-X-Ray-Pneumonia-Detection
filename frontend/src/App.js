import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Upload from "./components/Upload";
import Results from "./components/Results";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [uploaderKey, setUploaderKey] = useState(Date.now()); // Add a key state

  const handleAnalysisComplete = (analysisResult) => {
    setAnalysisResult(analysisResult);
  };

  // This function will be passed to the Results component to reset the view
  const handleReset = () => {
    setAnalysisResult(null);
    setUploaderKey(Date.now()); // Update the key to force re-mount
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      {/* Conditionally render Uploader or Results */}
      {!analysisResult ? (
        <Upload
          key={uploaderKey} // Pass the key here
          setAnalysisResult={setAnalysisResult}
          isAnalyzing={isAnalyzing}
          setIsAnalyzing={setIsAnalyzing}
          onAnalysisComplete={handleAnalysisComplete}
        />
      ) : (
        <Results result={analysisResult} onReset={handleReset} />
      )}
      <About />
      <Footer />
    </div>
  );
}

export default App;
