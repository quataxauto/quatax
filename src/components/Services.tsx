import { useState, useEffect, useRef } from "react";
import { Bot, Workflow, BarChart3, Settings, Lightbulb } from "lucide-react";

// Define the structure for a Service object
interface Service {
  id: string;
  icon: typeof Bot; // Use typeof IconName for type safety
  title: string;
  description: string;
  features: string[];
}

// Data for all services
const services: Service[] = [
  {
    id: "process-automation",
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Convert repetitive tasks into automated workflows that save time and reduce human error.",
    features: ["Workflow Design", "Task Automation", "Process Optimization"],
  },
  {
    id: "ai-chatbots",
    icon: Bot,
    title: "AI Chatbots & Virtual Assistants",
    description:
      "Smart customer service that works 24/7, handling inquiries and support requests intelligently.",
    features: ["24/7 Support", "Natural Language", "Multi-platform"],
  },
  {
    id: "workflow-optimization",
    icon: Settings,
    title: "Workflow Optimization",
    description:
      "Improve speed, consistency, and accuracy of your existing business processes.",
    features: ["Performance Analysis", "Bottleneck Removal", "Efficiency Gains"],
  },
  {
    id: "data-analysis",
    icon: BarChart3,
    title: "Data Analysis & Reporting",
    description:
      "Turn data into real-time insights with automated reporting and intelligent analytics.",
    features: ["Real-time Analytics", "Custom Reports", "Predictive Insights"],
  },
  {
    id: "custom-solutions",
    icon: Lightbulb,
    title: "Custom AI Solutions",
    description:
      "Tailored automation for unique business needs and specialized industry requirements.",
    features: ["Custom Development", "Industry-specific", "Scalable Solutions"],
  },
];

// --- Optimized Card Component for Smoother Hover ---
const ServiceCard = ({ service, index, isVisible }: { service: Service, index: number, isVisible: boolean }) => {
    const IconComponent = service.icon;
    
    // We use relative positioning for the inner content wrapper
    // to correctly position the absolute overlay elements.
    return (
        <div
            className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 100 + 300}ms` }}
        >
            <div
                className={`
                    relative group p-8 rounded-3xl border transition-all duration-300 cursor-pointer h-full
                    
                    /* Default State */
                    bg-white dark:bg-[#1A1A1A] border-[#E0E0E0] dark:border-[#404040] shadow-lg
                    
                    /* Hover State (The magic for 60fps) */
                    hover:bg-gradient-to-br hover:from-[#6366F1] hover:to-[#8B5CF6] 
                    hover:border-transparent hover:shadow-2xl hover:transform hover:-translate-y-2
                    hover:shadow-lg hover:shadow-[#6366F1]/40 dark:hover:shadow-[#8B5CF6]/40
                `}
            >
                {/* CONTENT CONTAINER 
                    We wrap all the content in one relative div to handle the absolute positioning 
                    of the "white" text and icons on hover.
                */}
                <div className="relative z-10">

                    {/* ICON CONTAINER */}
                    <div className="relative w-16 h-16 mb-6">
                        {/* 1. Base Icon (Default State Color) */}
                        <div
                            className={`
                                absolute w-full h-full rounded-2xl flex items-center justify-center transition-all duration-300
                                bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 
                                group-hover:bg-white/20 group-hover:backdrop-blur-sm
                            `}
                        >
                            <IconComponent
                                size={32}
                                strokeWidth={1.5}
                                className="text-[#6366F1] dark:text-[#8B5CF6]"
                            />
                        </div>

                        {/* 2. Hover Icon (White Opacity Overlay) */}
                        <div
                            className={`
                                absolute inset-0 w-full h-full rounded-2xl flex items-center justify-center transition-opacity duration-300 
                                opacity-0 group-hover:opacity-100
                            `}
                        >
                            <IconComponent
                                size={32}
                                strokeWidth={1.5}
                                className="text-white"
                            />
                        </div>
                    </div>


                    {/* TITLE */}
                    <h3
                        className="text-xl md:text-2xl font-bold mb-4 relative"
                    >
                        {/* 1. Base Title (Default State Color) */}
                        <span className="relative z-10 transition-opacity duration-300 text-[#0D0D0D] dark:text-white opacity-100 group-hover:opacity-0">
                            {service.title}
                        </span>
                        {/* 2. Hover Title (White Opacity Overlay) */}
                        <span className="absolute inset-0 z-20 transition-opacity duration-300 text-white opacity-0 group-hover:opacity-100">
                            {service.title}
                        </span>
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                        className="text-base leading-relaxed mb-6 relative"
                    >
                        {/* 1. Base Description (Default State Color) */}
                        <span className="relative z-10 transition-opacity duration-300 text-[#666666] dark:text-[#B0B0B0] opacity-100 group-hover:opacity-0">
                            {service.description}
                        </span>
                        {/* 2. Hover Description (White Opacity Overlay) */}
                        <span className="absolute inset-0 z-20 transition-opacity duration-300 text-white/90 opacity-0 group-hover:opacity-100">
                            {service.description}
                        </span>
                    </p>

                    {/* FEATURES LIST */}
                    <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 relative">
                                {/* Bullet Point */}
                                <div className={`
                                    w-2 h-2 rounded-full transition-all duration-300
                                    bg-[#6366F1] dark:bg-[#8B5CF6]
                                    group-hover:bg-white/80
                                `}/>
                                
                                {/* Feature Text */}
                                <span className="text-sm font-medium relative">
                                    {/* 1. Base Feature Text (Default State Color) */}
                                    <span className="relative z-10 transition-opacity duration-300 text-[#555555] dark:text-[#C0C0C0] opacity-100 group-hover:opacity-0">
                                        {feature}
                                    </span>
                                    {/* 2. Hover Feature Text (White Opacity Overlay) */}
                                    <span className="absolute inset-0 z-20 transition-opacity duration-300 text-white/80 opacity-0 group-hover:opacity-100">
                                        {feature}
                                    </span>
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Hover effect decoration (already efficient) */}
                    <div
                        className={`
                            absolute inset-0 rounded-3xl transition-opacity duration-300 pointer-events-none
                            opacity-0 group-hover:opacity-100 
                        `}
                    />
                </div>
            </div>
        </div>
    );
};

// --- Main Component ---
export default function Services() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Intersection Observer for fade-in effect
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
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
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                rel="stylesheet"
            />

            <section
                id="services"
                ref={sectionRef}
                className="py-20 md:py-32 px-6 bg-white dark:bg-[#121212]"
                style={{ fontFamily: "Inter, system-ui, sans-serif" }}
            >
                <div className="max-w-[1200px] mx-auto">
                    {/* Section heading */}
                    <div className="text-center mb-16 md:mb-20">
                        <div
                            className={`transition-all duration-700 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                        >
                            <h2
                                className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-[#0D0D0D] dark:text-white mb-6"
                                style={{
                                    fontWeight: "700",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                Our AI Automation{" "}
                                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                                    Services
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-[#555555] dark:text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed">
                                Comprehensive automation solutions designed to transform your business
                                operations and drive efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Services grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={service.id} service={service} index={index} isVisible={isVisible} />
                        ))}
                    </div>

                    {/* Call to action */}
                    <div
                        className={`text-center mt-16 transition-all duration-700 delay-700 ${
                            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                        }`}
                    >
                        <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#6366F1]/5 to-[#8B5CF6]/5 border border-[#6366F1]/20 dark:border-[#8B5CF6]/30">
                            <span className=" text-[#666666] dark:text-[#B0B0B0] font-medium">
                                Need something custom?
                            </span>
                            <button
                                onClick={() => {
                                    const element = document.querySelector("#contact");
                                    if (element) {
                                        element.scrollIntoView({ behavior: "smooth" });
                                    }
                                }}
                                className="cursor-pointer text-[#6366F1] dark:text-[#8B5CF6] font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 rounded-lg px-2 py-1"
                            >
                                Let&apos;s talk →
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}