import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Send, MapPin, Mail, Github, Linkedin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwvkgdzz");

  return (
    <main
      className="pt-20 lg:pt-[0rem] bg-[#04081A]
 text-white min-h-screen"
    >
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop me a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a href="mailto:kumarsrimathi4@gmail.com" className="text-gray-400 hover:text-purple-400 transition-colors">kumarsrimathi4@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Harur, Dharmapuri, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gray-500/10 p-3 rounded-lg">
                    <Github className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">GitHub</h3>
                    <a href="https://github.com/SrimathiKumar01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">github.com/SrimathiKumar01</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">LinkedIn</h3>
                    <a href="https://www.linkedin.com/in/srimathi-kumar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">linkedin.com/in/srimathi-kumar</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              {state.succeeded ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    <div>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        rows="4"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-gray-700 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      ></textarea>
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

