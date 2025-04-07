import React from "react";
import { Camera, Upload, Search, Award, Users, Shield } from "lucide-react";
import Face from '../assets/hero-section-face.jpg'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-700 to-black text-white pl-10 pr-10">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Camera className="h-8 w-8" />
          <span className="text-2xl font-bold">CelebClone</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <button className="hover:text-emerald-300 transition-colors">
            Product
          </button>
          <button className="hover:text-emerald-300 transition-colors">
            Technology
          </button>
          <button className="hover:text-emerald-300 transition-colors">
            About us
          </button>
        </div>

        <button className="bg-white text-emerald-900 px-4 py-2 rounded-full font-medium hover:bg-emerald-100 transition-colors">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Find your <br />
            celebrity <br />
            clone
          </h1>
          <p className="mt-6 text-lg text-emerald-100">
            Advanced AI technology that matches your face with your celebrity
            doppelgänger. Experience 99.7% matching accuracy with our
            state-of-the-art facial recognition system.
          </p>
          <div className="mt-10">
            <button className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 transition-colors py-3 px-6 rounded-full font-medium cursor-pointer">
              <Upload size={20} />
              Upload Your Photo
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="relative">
            <div className="w-100 h-64 md:w-120 md:h-120 mx-auto bg-emerald-700/50 rounded-lg border-2 border-emerald-600 flex items-center justify-center overflow-hidden">
              {/* Image will be imported from assets - path to be added later */}
              <img
                src={Face}
                alt="Face recognition demo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Face recognition points remain the same */}
          </div>

          {/* Face recognition points (decorative) */}
          <div className="absolute top-1/4 left-1/4 h-2 w-2 bg-emerald-300 rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 h-2 w-2 bg-emerald-300 rounded-full"></div>
          <div className="absolute top-1/2 left-1/6 h-2 w-2 bg-emerald-300 rounded-full"></div>
          <div className="absolute top-1/2 right-1/6 h-2 w-2 bg-emerald-300 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 h-2 w-2 bg-emerald-300 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 h-2 w-2 bg-emerald-300 rounded-full"></div>

          {/* Stats box */}
          <div className="absolute -bottom-6 right-4 bg-black/80 backdrop-blur p-4 rounded-lg">
            <p className="font-bold text-2xl">99.7% accuracy</p>
            <p className="text-sm text-emerald-300">
              Trained on 1M+ celebrity faces
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-12 grid grid-cols-3 gap-6 text-center">
        <div>
          <p className="text-4xl font-bold">10M+</p>
          <p className="text-emerald-300">users matched</p>
        </div>
        <div>
          <p className="text-4xl font-bold">100%</p>
          <p className="text-emerald-300">privacy protected</p>
        </div>
        <div>
          <p className="text-4xl font-bold">5,000+</p>
          <p className="text-emerald-300">celebrities in database</p>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-emerald-800/50 p-6 rounded-xl">
            <Upload className="h-12 w-12 text-emerald-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">Upload Your Photo</h3>
            <p className="text-emerald-100">
              Take a clear selfie or upload your best photo. Our system works
              with any angle.
            </p>
          </div>

          <div className="bg-emerald-800/50 p-6 rounded-xl">
            <Search className="h-12 w-12 text-emerald-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
            <p className="text-emerald-100">
              Our advanced algorithm maps 128 facial points to find your perfect
              celebrity match.
            </p>
          </div>

          <div className="bg-emerald-800/50 p-6 rounded-xl">
            <Award className="h-12 w-12 text-emerald-300 mb-4" />
            <h3 className="text-xl font-bold mb-2">Get Your Results</h3>
            <p className="text-emerald-100">
              See your top celebrity matches with similarity scores and share
              with friends.
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
              <span>100% secure data handling</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-emerald-300" />
              <span>Used by 10M+ people worldwide</span>
            </div>
            <div>
              <button className="bg-emerald-500 hover:bg-emerald-400 transition-colors py-3 px-6 rounded-full font-medium">
                Try Now - It's Free!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Camera className="h-6 w-6" />
            <span className="text-xl font-bold">CelebClone</span>
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
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
