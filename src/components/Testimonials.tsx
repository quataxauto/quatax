import { useState, useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
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

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "CEO, TechFlow Solutions",
      company: "Healthcare Technology",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      quote:
        "QuataX transformed our patient management system completely. What used to take our staff 4 hours daily now runs automatically in minutes. The ROI was immediate and substantial.",
      metrics: "75% time saved on admin tasks",
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Operations Director",
      company: "LogiCorp International",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      quote:
        "The automation solutions from QuataX revolutionized our supply chain. Real-time tracking, automated reporting, and predictive analytics have given us unprecedented visibility and control.",
      metrics: "40% improvement in delivery times",
    },
    {
      id: 3,
      name: "Emily Watson",
      title: "Founder & CMO",
      company: "GrowthLab Marketing",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      quote:
        "Our lead generation and email campaigns are now fully automated thanks to QuataX. We've tripled our qualified leads while reducing manual work by 80%. It's been a game-changer for our agency.",
      metrics: "300% increase in qualified leads",
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
        id="testimonials"
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
                What Our{" "}
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  Clients Say
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#555555] dark:text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed">
                See how businesses like yours have transformed their operations
                with AI automation.
              </p>
            </div>
          </div>

          {/* Testimonials grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className="relative p-8 rounded-3xl bg-white dark:bg-[#1A1A1A] border border-[#E0E0E0] dark:border-[#404040] shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Quote icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                      <Quote size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6 pt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-[#0D0D0D] dark:text-white text-lg leading-relaxed mb-6 font-medium">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Metrics */}
                  <div className="inline-flex items-center px-3 py-2 rounded-xl bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 border border-[#6366F1]/20 dark:border-[#8B5CF6]/30 mb-6">
                    <span className="text-sm font-semibold text-[#6366F1] dark:text-[#8B5CF6]">
                      📈 {testimonial.metrics}
                    </span>
                  </div>

                  {/* Author info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} profile`}
                      className="w-12 h-12 rounded-2xl object-cover"
                    />
                    <div>
                      <div className="font-bold text-[#0D0D0D] dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-[#666666] dark:text-[#B0B0B0]">
                        {testimonial.title}
                      </div>
                      <div className="text-xs text-[#6366F1] dark:text-[#8B5CF6] font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA section */}
          <div
            className={`text-center transition-all duration-700 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                Transform your business operations and see measurable results
                within weeks, not months.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-8 py-4 rounded-xl bg-white text-[#6366F1] font-semibold text-lg hover:bg-gray-50 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#6366F1] shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Your Free Consultation
                </button>

                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm">
                  <span className="text-white/90 text-sm">⚡ Quick setup</span>
                  <span className="text-white/60">•</span>
                  <span className="text-white/90 text-sm">
                    No long contracts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
