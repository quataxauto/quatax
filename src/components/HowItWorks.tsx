import { useState, useEffect, useRef } from "react";
import { MessageCircle, PenTool, Link, HeadphonesIcon } from "lucide-react";

export default function HowItWorks() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate steps sequentially
          const stepTimers = [
            setTimeout(() => setActiveStep(1), 500),
            setTimeout(() => setActiveStep(2), 1000),
            setTimeout(() => setActiveStep(3), 1500),
            setTimeout(() => setActiveStep(4), 2000),
          ];

          return () => stepTimers.forEach(clearTimeout);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      id: 1,
      icon: MessageCircle,
      title: "Consultation",
      description: "We understand your goals",
      details:
        "We start with a comprehensive discussion to understand your business processes, pain points, and automation goals.",
    },
    {
      id: 2,
      icon: PenTool,
      title: "Design & Planning",
      description: "We build your custom automation plan",
      details:
        "Our experts design a tailored automation strategy that fits your specific needs and business requirements.",
    },
    {
      id: 3,
      icon: Link,
      title: "Integration",
      description: "We connect and automate your systems",
      details:
        "We implement and integrate the automation solutions seamlessly into your existing business infrastructure.",
    },
    {
      id: 4,
      icon: HeadphonesIcon,
      title: "Ongoing Support",
      description: "Continuous optimization and maintenance",
      details:
        "We provide ongoing support, monitoring, and optimization to ensure your automation continues to deliver results.",
    },
  ];

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        id="how-it-works"
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
                How We Automate{" "}
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  Your Business
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#555555] dark:text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed">
                Our proven 4-step process ensures seamless automation
                implementation tailored to your business needs.
              </p>
            </div>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#E0E0E0] via-[#6366F1] to-[#8B5CF6] dark:from-[#404040] dark:via-[#6366F1] dark:to-[#8B5CF6] rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full transition-all duration-2000 ease-out"
                  style={{
                    width: isVisible ? `${(activeStep / 4) * 100}%` : "0%",
                  }}
                />
              </div>

              {/* Steps */}
              <div className="grid grid-cols-4 gap-8">
                {steps.map((step, index) => {
                  const IconComponent = step.icon;
                  const isActive = activeStep >= step.id;
                  const delay = index * 200;

                  return (
                    <div
                      key={step.id}
                      className={`relative transition-all duration-700 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-8"
                      }`}
                      style={{ transitionDelay: `${delay}ms` }}
                    >
                      {/* Step number and icon */}
                      <div className="relative mb-8">
                        <div
                          className={`
                            w-20 h-20 mx-auto rounded-2xl flex items-center justify-center transition-all duration-500
                            ${
                              isActive
                                ? "bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] shadow-lg transform scale-110"
                                : "bg-white dark:bg-[#1A1A1A] border-2 border-[#E0E0E0] dark:border-[#404040]"
                            }
                          `}
                        >
                          <IconComponent
                            size={32}
                            strokeWidth={1.5}
                            className={`transition-all duration-500 ${
                              isActive
                                ? "text-white"
                                : "text-[#6366F1] dark:text-[#8B5CF6]"
                            }`}
                          />
                        </div>

                        {/* Step number */}
                        <div
                          className={`
                            absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500
                            ${
                              isActive
                                ? "bg-white text-[#6366F1] shadow-md"
                                : "bg-[#E0E0E0] dark:bg-[#404040] text-[#666666] dark:text-[#B0B0B0]"
                            }
                          `}
                        >
                          {step.id}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3
                          className={`
                            text-xl md:text-2xl font-bold mb-3 transition-all duration-500
                            ${isActive ? "text-[#6366F1] dark:text-[#8B5CF6]" : "text-[#0D0D0D] dark:text-white"}
                          `}
                        >
                          {step.title}
                        </h3>
                        <p className="text-[#666666] dark:text-[#B0B0B0] text-base font-medium mb-4">
                          {step.description}
                        </p>
                        <p className="text-[#555555] dark:text-[#C0C0C0] text-sm leading-relaxed">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet Steps */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep >= step.id;

              return (
                <div
                  key={step.id}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-start gap-6 p-6 rounded-3xl bg-white dark:bg-[#1A1A1A] border border-[#E0E0E0] dark:border-[#404040] shadow-lg">
                    {/* Icon and number */}
                    <div className="flex-shrink-0 relative">
                      <div
                        className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                          ${
                            isActive
                              ? "bg-gradient-to-br from-[#6366F1] to-[#8B5CF6]"
                              : "bg-[#F8FAFC] dark:bg-[#262626] border border-[#E0E0E0] dark:border-[#404040]"
                          }
                        `}
                      >
                        <IconComponent
                          size={24}
                          strokeWidth={1.5}
                          className={`transition-all duration-500 ${
                            isActive
                              ? "text-white"
                              : "text-[#6366F1] dark:text-[#8B5CF6]"
                          }`}
                        />
                      </div>

                      {/* Step number */}
                      <div
                        className={`
                          absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500
                          ${
                            isActive
                              ? "bg-white text-[#6366F1] shadow-md"
                              : "bg-[#E0E0E0] dark:bg-[#404040] text-[#666666] dark:text-[#B0B0B0]"
                          }
                        `}
                      >
                        {step.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`
                          text-xl font-bold mb-2 transition-all duration-500
                          ${isActive ? "text-[#6366F1] dark:text-[#8B5CF6]" : "text-[#0D0D0D] dark:text-white"}
                        `}
                      >
                        {step.title}
                      </h3>
                      <p className="text-[#666666] dark:text-[#B0B0B0] font-medium mb-3">
                        {step.description}
                      </p>
                      <p className="text-[#555555] dark:text-[#C0C0C0] text-sm leading-relaxed">
                        {step.details}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to action */}
          <div
            className={`text-center mt-16 transition-all duration-700 delay-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="cursor-pointer px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5856EB] hover:to-[#7C3AED] text-white font-semibold text-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Automation Journey
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
