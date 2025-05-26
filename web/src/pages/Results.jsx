import React from "react";
import { BarChart, PieChart, LineChart, Award } from "lucide-react";
import Header from "../components/Header";

const Results = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-700 to-black text-white px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-4xl mx-auto pt-12 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-emerald-100">
          Project Results
        </h1>

        {/* Overall Performance */}
        <section className="mb-16 bg-emerald-900/30 p-8 rounded-lg shadow-lg">
          <Award className="h-16 w-16 text-emerald-300 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-center mb-6">
            Overall Performance
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-emerald-200 mb-2">
                92.4%
              </h3>
              <p className="text-emerald-100">Classification Accuracy</p>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-emerald-200 mb-2">400</h3>
              <p className="text-emerald-100">Principal Components</p>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-emerald-200 mb-2">10</h3>
              <p className="text-emerald-100">Classes</p>
            </div>
          </div>
        </section>

        {/* Dimensionality Reduction Impact */}
        <section className="mb-16 bg-emerald-900/30 p-8 rounded-lg shadow-lg">
          <BarChart className="h-16 w-16 text-emerald-300 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-center mb-6">
            Dimensionality Reduction Impact
          </h2>
          <div className="space-y-4">
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-200 mb-2">
                Feature Space Reduction
              </h3>
              <p className="text-emerald-100">
                Successfully reduced the feature space from 2000+ dimensions to
                400 principal components while maintaining 92.4% classification
                accuracy.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-200 mb-2">
                Computational Efficiency
              </h3>
              <p className="text-emerald-100">
                Achieved significant reduction in computational complexity and
                memory requirements through PCA dimensionality reduction.
              </p>
            </div>
          </div>
        </section>

        {/* Classification Results */}
        <section className="mb-16 bg-emerald-900/30 p-8 rounded-lg shadow-lg">
          <PieChart className="h-16 w-16 text-emerald-300 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-center mb-6">
            Classification Results
          </h2>
          <div className="space-y-4">
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-200 mb-2">
                Model Performance
              </h3>
              <p className="text-emerald-100">
                Logistic Regression classifier achieved high accuracy across all
                10 classes in the VGGFace2 dataset subset.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-200 mb-2">
                Training Efficiency
              </h3>
              <p className="text-emerald-100">
                Reduced training time and memory usage while maintaining high
                classification accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* Future Improvements */}
        <section className="bg-emerald-900/30 p-8 rounded-lg shadow-lg">
          <LineChart className="h-16 w-16 text-emerald-300 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-center mb-6">
            Future Improvements
          </h2>
          <div className="space-y-4">
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-emerald-200 mb-2">
                Potential Enhancements
              </h3>
              <ul className="list-disc list-inside text-emerald-100 space-y-2">
                <li>
                  Experiment with different numbers of principal components
                </li>
                <li>Test with larger datasets and more classes</li>
                <li>Explore alternative classification algorithms</li>
                <li>Implement real-time processing capabilities</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Results;
