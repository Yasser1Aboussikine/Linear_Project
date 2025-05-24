import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Camera,
  Upload,
  Search,
  Award,
  Users,
  Shield,
  Cpu,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";
import Face from "../assets/hero-section-face.jpg";
import BackgroundEffects from "../components/BackgroundEffects";
import ContactUs from "../components/ContactUs";
import Header from "../components/Header";


const Home = () => {
  const navigate = useNavigate();
  const Counter = ({ end, duration = 5000 }) => {
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 9);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count.toLocaleString()}</span>;
};

const handleNavClick = (path) => {
  navigate(path);
  setIsMenuOpen(false);
};

const ScanLine = () => {
  return (
    <motion.div
      className="absolute left-0 w-full h-2 bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent shadow-lg shadow-emerald-300/40"
      animate={{
        top: ["0%", "100%"],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-700 to-black text-white pl-10 pr-10 overflow-y-auto">
      <Header />

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center relative">
        {/* Background Effects */}
        <BackgroundEffects />

        {/* Main Content */}
        <div className="relative" style={{ zIndex: 1 }}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            PCA-Based <br />
            Image <br />
            Classification
          </h1>
          <p className="mt-6 text-lg text-emerald-100">
            Advanced Principal Component Analysis (PCA) technology that
            transforms high-dimensional image data into lower-dimensional
            representations while preserving essential features. Experience
            92.4% classification accuracy with our state-of-the-art
            dimensionality reduction system.
          </p>
          <div className="mt-10">
            <button
              onClick={() => handleNavClick("/code")}
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 transition-colors py-3 px-6 rounded-full font-medium cursor-pointer"
            >
              <Code size={20} />
              Explore Code
            </button>
          </div>
        </div>

        <div className="relative" style={{ zIndex: 1 }}>
          {/* Add scan line effect to the face container */}
          <div className="relative overflow-hidden">
            <ScanLine />
            <motion.div className="relative">
              <motion.div
                className="w-full max-w-md h-auto md:max-w-lg mx-auto bg-emerald-700/30 rounded-lg border-2 border-emerald-600 flex items-center justify-center overflow-hidden"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={Face}
                  alt="Face recognition demo"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Stats box */}
          <div className="absolute -bottom-6 right-4 bg-black/80 backdrop-blur p-4 rounded-lg">
            <p className="font-bold text-2xl">
              <Counter end={92.4} duration={3000} />% accuracy
            </p>
            <p className="text-sm text-emerald-300">
              Trained on VGGFace2 dataset
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 text-center">
        <div className="mb-6 md:mb-0">
          <p className="text-4xl font-bold">
            <Counter end={2000} />+
          </p>
          <p className="text-emerald-300">dimensions reduced</p>
        </div>
        <div className="mb-6 md:mb-0">
          <p className="text-4xl font-bold">
            <Counter end={400} />
          </p>
          <p className="text-emerald-300">principal components</p>
        </div>
        <div>
          <p className="text-4xl font-bold">
            <Counter end={10} />
          </p>
          <p className="text-emerald-300">classes supported</p>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">
          Project Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-emerald-800/50 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-emerald-800/70 hover:scale-105 hover:shadow-xl hover:shadow-emerald-900/20 hover:z-10">
            <Search className="h-12 w-12 text-emerald-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">Feature Extraction</h3>
            <p className="text-emerald-100">
              Using ResNet50 to extract high-level features from images,
              transforming them into a 2000+ dimensional feature space.
            </p>
          </div>

          <div className="bg-emerald-800/50 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-emerald-800/70 hover:scale-105 hover:shadow-xl hover:shadow-emerald-900/20 hover:z-10">
            <Cpu className="h-12 w-12 text-emerald-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">PCA Analysis</h3>
            <p className="text-emerald-100">
              Our advanced PCA algorithm reduces dimensionality while preserving
              the most important features for classification.
            </p>
          </div>

          <div className="bg-emerald-800/50 p-6 rounded-xl cursor-pointer transition-all duration-300 hover:bg-emerald-800/70 hover:scale-105 hover:shadow-xl hover:shadow-emerald-900/20 hover:z-10">
            <Award className="h-12 w-12 text-emerald-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">Classification</h3>
            <p className="text-emerald-100">
              Logistic regression classifier achieves 92.4% accuracy on the
              VGGFace2 dataset with 10 distinct identities.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-emerald-950/50 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Shield className="text-emerald-300" />
              <span>ResNet50 Feature Extraction</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-emerald-300" />
              <span>400 Principal Components</span>
            </div>
            <div>
              <button
                onClick={() => handleNavClick("/code")}
                className="bg-emerald-500 hover:bg-emerald-400 transition-colors py-3 px-6 rounded-full font-medium"
              >
                View Code
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Contact Us Section */}
      <ContactUs />

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6" />
            <span className="text-xl font-bold">PCA Image Classifier</span>
          </div>

          <div className="text-sm text-emerald-300">
            © 2025 CelebClone. All rights reserved.
          </div>

          <div className="flex gap-4">
            <button className="h-8 w-8 rounded-full bg-emerald-800 flex items-center justify-center">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </button>
            <button className="h-8 w-8 rounded-full bg-emerald-800 flex items-center justify-center">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4z" />
              </svg>
            </button>
            <button className="h-8 w-8 rounded-full bg-emerald-800 flex items-center justify-center">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
