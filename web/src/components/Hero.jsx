import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Camera, Code, FileText } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] bg-gradient-to-b from-emerald-900 to-black text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            PCA Image Classifier
            <span className="block text-emerald-400 mt-2">
              Powered by Machine Learning
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl text-lg md:text-xl text-gray-300">
            Transform your images with our advanced PCA-based classification
            system. Experience the power of machine learning in image processing
            and analysis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => navigate("/code")}
              className="group flex items-center gap-2 px-8 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Camera className="w-5 h-5" />
              <span>Try It Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/about")}
              className="group flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Code className="w-5 h-5" />
              <span>Learn More</span>
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Camera className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Image Processing</h3>
              <p className="text-gray-400">
                Advanced image processing capabilities powered by PCA
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Code className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-400">
                State-of-the-art classification algorithms
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <FileText className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Detailed Analysis</h3>
              <p className="text-gray-400">
                Comprehensive results and insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
