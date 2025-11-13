import { useState, useEffect, useRef } from "react";
import {
  ShoppingCart, Heart, CreditCard, Home, Truck, Megaphone,
  GraduationCap, Building, Factory, Utensils, Shield, Car,
} from "lucide-react";

// Define the structure for an Industry object
interface Industry {
  id: string;
  icon: typeof ShoppingCart; // Use typeof IconName for type safety
  name: string;
  description: string;
  examples: string[];
}

// Data for all industries (renamed to INDUSTRY_DATA for clarity)
const INDUSTRY_DATA: Industry[] = [
  {
    id: "retail",
    icon: ShoppingCart,
    name: "Retail",
    description: "Inventory management, customer service, and sales automation",
    examples: ["Order processing", "Inventory tracking", "Customer support"],
  },
  {
    id: "healthcare",
    icon: Heart,
    name: "Healthcare",
    description:
      "Patient management, appointment scheduling, and medical record automation",
    examples: ["Appointment booking", "Patient records", "Billing automation"],
  },
  {
    id: "finance",
    icon: CreditCard,
    name: "Finance",
    description: "Transaction processing, compliance monitoring, and reporting automation",
    examples: ["Transaction processing", "Risk assessment", "Compliance reports"],
  },
  {
    id: "realestate",
    icon: Home,
    name: "Real Estate",
    description:
      "Lead management, property listings, and client communication automation",
    examples: ["Lead nurturing", "Property management", "Document processing"],
  },
  {
    id: "logistics",
    icon: Truck,
    name: "Logistics",
    description: "Supply chain optimization, tracking, and delivery automation",
    examples: ["Route optimization", "Shipment tracking", "Warehouse management"],
  },
  {
    id: "marketing",
    icon: Megaphone,
    name: "Marketing",
    description: "Campaign management, lead generation, and content automation",
    examples: ["Email campaigns", "Social media", "Lead scoring"],
  },
  {
    id: "education",
    icon: GraduationCap,
    name: "Education",
    description: "Student management, grading, and administrative automation",
    examples: ["Student enrollment", "Grade processing", "Schedule management"],
  },
  {
    id: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description:
      "Production scheduling, quality control, and supply chain automation",
    examples: ["Production planning", "Quality checks", "Inventory control"],
  },
  {
    id: "hospitality",
    icon: Utensils,
    name: "Hospitality",
    description: "Booking management, customer service, and operations automation",
    examples: ["Reservation system", "Guest services", "Housekeeping"],
  },
  {
    id: "legal",
    icon: Shield,
    name: "Legal",
    description: "Document management, case tracking, and compliance automation",
    examples: ["Document review", "Case management", "Billing automation"],
  },
  {
    id: "automotive",
    icon: Car,
    name: "Automotive",
    description: "Service scheduling, inventory management, and customer automation",
    examples: ["Service booking", "Parts ordering", "Customer follow-up"],
  },
  {
    id: "construction",
    icon: Building,
    name: "Construction",
    description: "Project management, resource allocation, and safety automation",
    examples: ["Project tracking", "Resource planning", "Safety compliance"],
  },
];

interface IndustryCardProps {
  industry: Industry;
  index: number;
  isVisible: boolean;
}

// --- Card Component with Original Opacity Swap Logic ---
const IndustryCard = ({ industry, index, isVisible }: IndustryCardProps) => {
  const IconComponent = industry.icon;

  // Base card styling
  const cardBaseClasses = `
    relative group p-6 rounded-3xl border transition-all duration-300 cursor-pointer h-full
    bg-white dark:bg-[#1A1A1A] border-[#E0E0E0] dark:border-[#404040] shadow-md
    hover:bg-gradient-to-br hover:from-[#6366F1] hover:to-[#8B5CF6] 
    hover:border-transparent hover:shadow-2xl hover:transform hover:-translate-y-2
    hover:shadow-lg hover:shadow-[#6366F1]/40 dark:hover:shadow-[#8B5CF6]/40
  `;

  // Entrance animation staging
  const animationClasses = `transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;
  
  // Staggered animation effect
  const delayStyle = { transitionDelay: `${index * 50 + 300}ms` };

  return (
    <div
      className={animationClasses}
      style={delayStyle}
    >
      <div className={cardBaseClasses}>
        {/* CONTENT CONTAINER: Added relative z-10 for layering */}
        <div className="relative z-10">

          {/* ICON CONTAINER (Original Opacity Swap Logic) */}
          <div className="relative w-12 h-12 mb-4">
            {/* 1. Base Icon (Default State Color) */}
            <div
              className={`
                absolute w-full h-full rounded-2xl flex items-center justify-center transition-all duration-300
                bg-gradient-to-br from-[#6366F1]/10 to-[#8B5CF6]/10 
                group-hover:bg-white/20 group-hover:backdrop-blur-sm
              `}
            >
              <IconComponent
                size={24}
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
                size={24}
                strokeWidth={1.5}
                className="text-white"
              />
            </div>
          </div>


          {/* NAME (Original Opacity Swap Logic) */}
          <h3
            className="text-lg font-bold mb-2 relative"
          >
            {/* 1. Base Title (Default State Color) */}
            <span className="relative z-10 transition-opacity duration-300 text-[#0D0D0D] dark:text-white opacity-100 group-hover:opacity-0">
              {industry.name}
            </span>
            {/* 2. Hover Title (White Opacity Overlay) */}
            <span className="absolute inset-0 z-20 transition-opacity duration-300 text-white opacity-0 group-hover:opacity-100">
              {industry.name}
            </span>
          </h3>

          {/* DESCRIPTION (Original Opacity Swap Logic) */}
          <p
            className="text-sm leading-relaxed mb-4 relative"
          >
            {/* 1. Base Description (Default State Color) */}
            <span className="relative z-10 transition-opacity duration-300 text-[#666666] dark:text-[#B0B0B0] opacity-100 group-hover:opacity-0">
              {industry.description}
            </span>
            {/* 2. Hover Description (White Opacity Overlay) */}
            <span className="absolute inset-0 z-20 transition-opacity duration-300 text-white/90 opacity-0 group-hover:opacity-100">
              {industry.description}
            </span>
          </p>

          {/* EXAMPLES LIST (Original Opacity Swap Logic) */}
          <div className="space-y-1">
            {industry.examples.slice(0, 2).map((example, exampleIndex) => (
              <div
                key={exampleIndex}
                className="flex items-center gap-2"
              >
                {/* Bullet Point */}
                <div
                  className={`
                    w-1.5 h-1.5 rounded-full transition-all duration-300
                    bg-[#6366F1] dark:bg-[#8B5CF6]
                    group-hover:bg-white/80
                  `}
                />

                {/* Feature Text */}
                <span className="text-xs font-medium relative">
                  {/* 1. Base Text */}
                  <span className="relative z-10 transition-opacity duration-300 text-[#555555] dark:text-[#C0C0C0] opacity-100 group-hover:opacity-0">
                    {example}
                  </span>
                  {/* 2. Hover Text */}
                  <span className="absolute inset-0 z-20 transition-opacity duration-300 text-white/80 opacity-0 group-hover:opacity-100">
                    {example}
                  </span>
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};


// --- Main Component ---
export default function Industries() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const headerAnimationClasses = `transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;
  
  const ctaAnimationClasses = `text-center transition-all duration-700 delay-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`;


  return (
    <>
      {/* ⚠️ Original external font link is kept here */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      <section
        id="industries"
        ref={sectionRef}
        className="py-20 md:py-32 px-6 bg-white dark:bg-[#121212]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16 md:mb-20">
            <div
              className={headerAnimationClasses}
            >
              <h2
                className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-[#0D0D0D] dark:text-white mb-6"
                style={{
                  fontWeight: "700",
                  letterSpacing: "-0.02em",
                }}
              >
                Automation for{" "}
                <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h2>
              <p className="text-lg md:text-xl text-[#555555] dark:text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed mb-8">
                No matter your field, QuataX can automate it. We serve businesses across
                diverse industries with tailored automation solutions.
              </p>
            </div>
          </div>

          {/* Industries grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {INDUSTRY_DATA.map((industry, index) => (
              <IndustryCard key={industry.id} industry={industry} index={index} isVisible={isVisible} />
            ))}
          </div>

          {/* Bottom section (Call to Action) */}
          <div
            className={ctaAnimationClasses}
          >
            <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] dark:from-[#1A1A1A] dark:to-[#262626] border border-[#E0E0E0] dark:border-[#404040]">
              <h3 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] dark:text-white mb-4">
                Don&apos;t see your industry?
              </h3>
              <p className="text-[#666666] dark:text-[#B0B0B0] text-lg mb-6 leading-relaxed">
                We create custom automation solutions for any business vertical. Every
                industry has unique processes that can benefit from AI automation.
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="cursor-pointer px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5856EB] hover:to-[#7C3AED] text-white font-semibold text-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Discuss Your Industry
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}