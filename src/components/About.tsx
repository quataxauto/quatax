import { useState, useEffect, useRef } from "react";
import { Target, Users, Zap } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <section
        id="about"
        ref={sectionRef}
        className="py-20 md:py-32 px-6 bg-[#FAFBFC] dark:bg-[#0F0F0F]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16 md:mb-20">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <h2
                className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-[#0D0D0D] dark:text-white mb-6"
                style={{
                  fontFamily: "Inter, system-ui, sans-serif",
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                }}
              >
                Who We Are
              </h2>
              <p className="text-lg md:text-xl text-[#555555] dark:text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed">
                QuataX is an AI automation company dedicated to helping
                businesses unlock efficiency through intelligent automation. Our
                mission is to make automation accessible to everyone — whether
                you run a small shop or a global enterprise.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] dark:text-white mb-4">
                    Transforming Workflows with AI
                  </h3>
                  <p className="text-lg text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                    We specialize in AI-driven solutions that streamline
                    workflows, eliminate repetitive tasks, and boost
                    productivity. From small businesses to enterprise
                    organizations, we make intelligent automation work for
                    everyone.
                  </p>
                </div>

                {/* Feature highlights */}
                <div className="space-y-6">
                  {[
                    {
                      icon: Target,
                      title: "Mission-Driven",
                      description:
                        "Making automation accessible and effective for businesses of all sizes.",
                    },
                    {
                      icon: Users,
                      title: "Expert Team",
                      description:
                        "Seasoned professionals with deep expertise in AI and automation technologies.",
                    },
                    {
                      icon: Zap,
                      title: "Results-Focused",
                      description:
                        "Delivering measurable improvements in efficiency, accuracy, and productivity.",
                    },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                        <feature.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-[#0D0D0D] dark:text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-[#666666] dark:text-[#B0B0B0] leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div
              className={`transition-all duration-700 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                {/* Main visual container */}
                <div className="relative rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] p-8 shadow-2xl overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                      <div className="w-4 h-4 bg-white/20 rounded-full absolute top-8 left-8"></div>
                      <div className="w-3 h-3 bg-white/15 rounded-full absolute top-16 right-12"></div>
                      <div className="w-5 h-5 bg-white/10 rounded-full absolute bottom-12 left-16"></div>
                      <div className="w-2 h-2 bg-white/25 rounded-full absolute bottom-8 right-8"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="text-center mb-8">
                      <h4 className="text-2xl font-bold text-white mb-4">
                        Our Impact
                      </h4>
                      <p className="text-white/90 text-lg">
                        Measurable results across industries
                      </p>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { number: "95%", label: "Efficiency Improvement" },
                        { number: "24/7", label: "Continuous Operation" },
                        { number: "99.9%", label: "System Reliability" },
                      ].map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                            {stat.number}
                          </div>
                          <div className="text-white/80 text-sm">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                </div>

                {/* Floating accent */}
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl shadow-lg transform rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
