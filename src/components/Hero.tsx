import { useState, useEffect } from "react";
import { ChevronRight, Sparkles, Zap, MessagesSquare, Headset } from "lucide-react"; // Removed trailing comma

// 1. Define the interface for the floating elements state
interface FloatingElement {
  id: number;
  delay: number;
  duration: number;
  x: number;
  y: number;
}

// 2. Define the interface for the tmatm array (Best Sellers)
interface TmatmItem {
  title: string;
  status: string;
  icon: React.ElementType;
}

export default function Hero() {
  const [animationsVisible, setAnimationsVisible] = useState(false);
  // 3. Correctly type the state for floating elements
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsVisible(true);
    }, 300);

    const elements: FloatingElement[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      delay: i * 0.5,
      duration: 3 + (i % 3),
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    // This now correctly sets the state with the defined type
    setFloatingElements(elements); 

    return () => clearTimeout(timer);
  }, []);

  // 4. Explicitly type the tmatm array
  const tmatm: TmatmItem[] = [
    {
      title: "AI Chat Bot",
      status: "In Your Site or App",
      icon: MessagesSquare,
    },
    {
      title: "AI Customer Service",
      status: "Handle Your Clients Well",
      icon: Headset,
    },
    {
      title: "AI Humanised Calls",
      status: "Never Miss A Call",
      icon: MessagesSquare,
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <section
        id="home"
        className="relative pt-24 pb-20 md:pt-32 md:pb-32 px-6 bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] dark:from-[#0F0F23] dark:via-[#1A1A1A] dark:to-[#0A0A0A] overflow-hidden"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {floatingElements.map((element) => (
            <div
              key={element.id}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full opacity-20"
              style={{
                left: `${element.x}%`,
                top: `${element.y}%`,
                animation: `float ${element.duration}s ease-in-out infinite`,
                animationDelay: `${element.delay}s`,
              }}
            />
          ))}

          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#6366F1]/5 to-[#8B5CF6]/5 dark:from-[#6366F1]/10 dark:to-[#8B5CF6]/10" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#6366F1]/10 via-transparent to-transparent dark:from-[#8B5CF6]/15" />
        </div>

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <div
              className={`transition-all duration-700 ${
                animationsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 border border-[#6366F1]/20 dark:border-[#8B5CF6]/30 mb-6">
                <Sparkles
                  size={16}
                  className="text-[#6366F1] dark:text-[#8B5CF6]"
                />
                <span className="text-sm font-medium text-[#6366F1] dark:text-[#8B5CF6]">
                  AI-Powered Automation
                </span>
              </div>

              <h1 className="text-4xl md:text-[72px] leading-tight md:leading-[1.1] text-[#0D0D0D] dark:text-white mb-6 max-w-5xl mx-auto font-bold">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  AI Automation
                </span>
              </h1>
            </div>

            <p
              className={`transition-all duration-700 delay-200 text-lg md:text-xl text-[#555555] dark:text-[#C0C0C0] mb-8 max-w-3xl mx-auto leading-relaxed ${
                animationsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              At QuataX, we help businesses of any size turn complex workflows
              into intelligent, automated systems.
            </p>

            <div
              className={`flex flex-col sm:flex-row justify-center items-center gap-4 mb-16 transition-all duration-700 delay-400 ${
                animationsVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={scrollToContact}
                className="cursor-pointer group px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-semibold text-lg hover:scale-105 transition-all shadow-lg"
              >
                <span className="cursor-pointer flex items-center gap-2">
                  Get Started
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={scrollToContact}
                className="cursor-pointer group flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#262626] border dark:border-[#404040] rounded-xl hover:border-[#6366F1] transition-all shadow-md"
              >
                <span className="cursor-pointer text-[#0D0D0D] dark:text-white font-semibold text-lg">
                  Book Free Consultation
                </span>
              </button>
            </div>
          </div>

          <div
            className={`relative max-w-[1000px] mx-auto transition-all duration-1000 delay-600 ${
              animationsVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative rounded-3xl border bg-white dark:bg-[#1A1A1A] p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-4xl font-bold text-[#0D0D0D] dark:text-white mb-1">
                    AI Automation{" "}
                    <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">Best sellers</span>
                  </h3>
                  <p className="text-sm text-[#666] dark:text-[#AAA]">
                    The most services our clients ask for
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {tmatm.map((item, index) => (
                  <div key={index} className="p-6 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] dark:from-[#262626] dark:to-[#1E1E1E] border dark:border-[#404040]/50">
                    <div className="flex justify-center items-center mb-4">
                      <item.icon size={35} className="text-[#6366F1] dark:text-[#8B5CF6]" />
                    </div>

                    <div className="flex items-center gap-3">

                      <div>
                        <h4 className="text-2xl font-semibold text-[#0D0D0D] dark:text-white">
                          {item.title}
                        </h4>
                        <span className="text-xs text-[#6366F1] dark:text-[#8B5CF6] font-medium">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute -bottom-4 -left-4 bg-[#6366F1] text-white px-4 py-3 rounded-2xl text-sm font-semibold shadow-lg">
                <div className="flex items-center gap-2">
                  <Zap size={16} />
                  95% Efficiency Gain
                </div>
              </div>

            <div
              className="absolute -top-4 -right-4 bg-[#000000] text-white px-4 py-3 rounded-2xl text-xl shadow-lg"
              style={{ fontFamily: "'Stack Sans Notch', sans-serif", fontWeight: 700 , fontStyle: "normal" }}
            >
            20% OFF NOW🔥
            </div>


            </div>
          </div>
        </div>

        {/* 5. Removed 'jsx global' to fix TS2322 error */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
        `}</style>
      </section>
    </>
  );
}