
export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Developer, Web Designer, Problem Solver
          </h2>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:gap-24">
            {/* Left side - decorative element */}
            <div className="relative hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-sm">
                {/* Animated decorative elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-56 h-56 bg-gradient-to-br from-purple-500/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
                
                {/* Center icon */}
                <div className="relative z-10 flex items-center justify-center h-64">
                  <div className="p-8 rounded-full bg-gradient-to-br from-blue-500/10 to-teal-400/10 border border-blue-500/20">
                    <svg className="w-24 h-24 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - text content */}
            <div className="relative space-y-4">
              <p className="text-white text-lg leading-relaxed">
                I am a B.Tech IT student passionate about coding and technology. I am currently learning Java and exploring SQL and PostgreSQL, with a keen interest in solving logical problems and building practical projects.{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
                  My goal is to work in a top product-based company
                </span>
                , where I can grow my skills and contribute to impactful solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Apart from coding, I love watching web series, playing Badminton, and listening to music.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gradient-to-b from-blue-400 to-teal-400 border-blue-400 pl-4">
                  <p className="text-gray-300 italic">
                    "I am motivated, curious, and always eager to learn new things in the world of technology. I believe in continuous learning and pushing boundaries to create something meaningful."
                  </p>

                  <div className="mt-6 space-y-2">
                    <cite className="block font-semibold text-white not-italic">
                      Srimathi Kumar
                    </cite>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">B.Tech Information Technology</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


