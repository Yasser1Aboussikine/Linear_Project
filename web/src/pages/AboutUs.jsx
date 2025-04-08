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
    <div className="min-h-screen bg-gradient-to-b from-emerald-700 to-black text-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-emerald-100">
          About CelebClone
        </h1>

        {/* Mission Section */}
        <section className="mb-16 text-center">
          <Target className="h-16 w-16 text-emerald-300 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-emerald-100 leading-relaxed">
            To bring a bit of fun and magic into people's lives by connecting
            them with their celebrity look-alikes using cutting-edge AI
            technology. We believe everyone deserves a moment in the spotlight,
            even if it's just discovering which star shares their features!
            <br /> <br />
            <strong>JK it's just a Linear Algebra Project</strong>
          </p>
        </section>

        {/* Technology Section */}
        <section className="mb-16 bg-emerald-900/30 p-8 rounded-lg shadow-lg">
          <Cpu className="h-16 w-16 text-emerald-300 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-center mb-6">
            The Technology Behind the Magic
          </h2>
          <p className="text-lg text-emerald-100 leading-relaxed mb-4">
            CelebClone utilizes a sophisticated facial recognition algorithm
            trained on a massive dataset of over 5,000 celebrity images and
            millions of user-submitted photos. Our system analyzes 128 key
            facial landmarks to ensure high accuracy.
          </p>
          <ul className="list-disc list-inside text-emerald-100 space-y-2">
            <li>
              <span className="font-semibold text-emerald-300">
                Deep Learning Models:
              </span>{" "}
              Powering the core facial feature extraction.
            </li>
            <li>
              <span className="font-semibold text-emerald-300">
                Vector Similarity Search:
              </span>{" "}
              Efficiently comparing facial embeddings to find the closest
              matches.
            </li>
            <li>
              <span className="font-semibold text-emerald-300">
                Continuous Training:
              </span>{" "}
              Our models are constantly updated to improve accuracy and expand
              our celebrity database.
            </li>
            <li>
              <span className="font-semibold text-emerald-300">
                Privacy Focused:
              </span>{" "}
              We prioritize user privacy. Photos are processed securely and
              never stored long-term without explicit consent.
            </li>
          </ul>
        </section>

        {/* Values/Ethics Section */}
        <section className="mb-16 text-center">
          <Scale className="h-16 w-16 text-emerald-300 mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-emerald-200">
                Fun & Entertainment
              </h3>
              <p className="text-emerald-100">
                We aim to provide a lighthearted and enjoyable experience.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-emerald-200">
                Accuracy & Improvement
              </h3>
              <p className="text-emerald-100">
                Striving for the best possible matches through continuous
                learning.
              </p>
            </div>
            <div className="bg-emerald-800/50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-2 text-emerald-200">
                Privacy & Security
              </h3>
              <p className="text-emerald-100">
                Your data's safety is paramount in our processes.
              </p>
            </div>
          </div>
        </section>

        {/* Team Spotlight Section */}
        <section className="py-12">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-lime-400 text-transparent bg-clip-text">
            Team Spotlight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center justify-center">
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
                <div className="flex space-x-4 mt-2">
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
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
