import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-transparent text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
          <p className="text-lg text-emerald-100">
            Feel free to use the form or drop us an Email
            <br />
            <strong>Especially if your celebrity looks nothing like you</strong>
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-emerald-300" />
              <span className="text-emerald-100">+212 65-60-22-270</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-emerald-300" />
              <span className="text-emerald-100">celebClone@celebClone.vercel-app.gmail.com</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-6 w-6 text-emerald-300 mt-1" />
              <span className="text-emerald-100">
                Al Akhawayn University <br />
                Lab 8b
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-emerald-100 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="First Name"
                className="block w-full px-3 py-2 bg-emerald-900/50 border border-emerald-700 rounded-md shadow-sm text-white placeholder-emerald-200/70 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-emerald-100 mb-1 sm:invisible"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
                className="block w-full px-3 py-2 bg-emerald-900/50 border border-emerald-700 rounded-md shadow-sm text-white placeholder-emerald-200/70 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-emerald-100 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              className="block w-full px-3 py-2 bg-emerald-900/50 border border-emerald-700 rounded-md shadow-sm text-white placeholder-emerald-200/70 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>

          {/* Phone Field */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-emerald-100 mb-1"
            >
              Phone (optional)
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="(+212) XX-XX-XX-XX"
              className="block w-full px-3 py-2 bg-emerald-900/50 border border-emerald-700 rounded-md shadow-sm text-white placeholder-emerald-200/70 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-emerald-100 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Type your message..."
              className="block w-full px-3 py-2 bg-emerald-900/50 border border-emerald-700 rounded-md shadow-sm text-white placeholder-emerald-200/70 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
