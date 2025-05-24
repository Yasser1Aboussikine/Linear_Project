import React from "react";
import {
  Users,
  Cpu,
  Target,
  Scale,
  Linkedin,
  Github,
  Mail,
} from "lucide-react";
import Header from "../components/Header";

// Placeholder data for team members (replace with actual data and image paths)
const teamMembers = [
  {
    name: "Yasser Aboussikine",
    role: "Software Dev",
    image: "/path/to/abderrahmane.jpg", // Replace with actual image path
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Ikram Ghala",
    role: "Software Dev",
    image: "/path/to/aymane.jpg", // Replace with actual image path
    linkedin: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Ismail Boukaidi Laghzaoui",
    role: "Emotional Support",
    image: "/path/to/ihab.jpg", // Replace with actual image path
    linkedin: "#",
    github: "#",
    email: "#",
  },
];

// Updated SocialLink component to include hover effect with text
const SocialLink = ({ href, icon: Icon, name }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center text-lime-300 hover:text-lime-100 transition-colors duration-200 ease-in-out"
    aria-label={name} // Add aria-label for accessibility
  >
    <Icon size={20} />
    {/* Text label appears on hover */}
    <span className="ml-2 opacity-0 group-hover:opacity-100 max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out text-sm">
      {name}
    </span>
  </a>
);

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-700 to-black text-white px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="max-w-4xl mx-auto pt-12 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-emerald-100">
          About PCA Image Classification
        </h1>

        {/* Mission Section */}
        <section className="mb-16 text-center">
          <Target className="h-16 w-16 text-emerald-300 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-emerald-100 leading-relaxed">
            To enhance image classification efficiency by transforming
            high-dimensional image data into lower-dimensional representations
            using Principal Component Analysis (PCA). Our goal is to achieve
            accurate recognition while minimizing computational complexity.
          </p>
        </section>

        {/* Technology Section */}
        <section className="mb-16 bg-emerald-900/30 p-8 rounded-lg shadow-lg">
          <Cpu className="h-16 w-16 text-emerald-300 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-center mb-6">
            The Technology Behind Our Solution
          </h2>
          <p className="text-lg text-emerald-100 leading-relaxed mb-4">
            Our system utilizes Principal Component Analysis (PCA) to reduce the
            dimensionality of high-level feature vectors extracted from
            ResNet50. The implementation achieves 92.4% classification accuracy
            while significantly reducing computational requirements.
          </p>
          <ul className="list-disc list-inside text-emerald-100 space-y-2">
            <li>
              <span className="font-semibold text-emerald-300">
                ResNet50 Feature Extraction:
              </span>{" "}
              Extracting high-level features from images.
            </li>
            <li>
              <span className="font-semibold text-emerald-300">
                PCA Dimensionality Reduction:
              </span>{" "}
              Transforming 2000+ dimensional features into 400 principal
              components.
            </li>
            <li>
              <span className="font-semibold text-emerald-300">
                Logistic Regression:
              </span>{" "}
              Efficient classification using the reduced feature space.
            </li>
            <li>
              <span className="font-semibold text-emerald-300">
                VGGFace2 Dataset:
              </span>{" "}
              Trained on a subset of 10 identities with up to 200 images per
              person.
            </li>
          </ul>
        </section>

        {/* Values/Ethics Section */}
        <section className="mb-16 text-center">
          <Scale className="h-16 w-16 text-emerald-300 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-emerald-200">
                Efficiency
              </h3>
              <p className="text-emerald-100">
                Reduced computational complexity through dimensionality
                reduction.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-emerald-200">
                Accuracy
              </h3>
              <p className="text-emerald-100">
                92.4% classification accuracy with optimized feature space.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-emerald-200">
                Scalability
              </h3>
              <p className="text-emerald-100">
                Efficient processing of high-dimensional image data.
              </p>
            </div>
          </div>
        </section>

        {/* Team Spotlight Section - Reduced gap */}
        {/*<section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-lime-400 text-transparent bg-clip-text">
            Team Spotlight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center justify-center">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {member.image === "/path/to/placeholder.png" ? (
                  <div className="w-32 h-32 rounded-full bg-gray-600 flex items-center justify-center mb-4 border-4 border-lime-400/50">
                    <Users size={64} className="text-gray-400" />
                  </div>
                ) : (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-lime-400/50 shadow-lg"
                  />
                )}
                <h3 className="text-xl font-semibold text-emerald-100 mt-2">
                  {member.name}
                </h3>
                <span className="inline-block mt-2 mb-3 px-4 py-1 text-sm font-medium text-emerald-900 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full">
                  {member.role}
                </span>
                <div className="flex space-x-3 mt-2">
                  <SocialLink
                    href={member.linkedin}
                    icon={Linkedin}
                    name="LinkedIn"
                  />
                  <SocialLink
                    href={member.github}
                    icon={Github}
                    name="GitHub"
                  />
                  <SocialLink href={member.email} icon={Mail} name="Mail" />
                </div>
              </div>
            ))}
          </div>
        </section>*/}
      </div>
    </div>
  );
};

export default AboutUs;
