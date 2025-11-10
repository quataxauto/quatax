"use client";

import { useState, useEffect, useRef } from "react";
import { Bot } from "lucide-react";

// ✅ Import Logos (Important)
import openaiLogo from "../logos/openai.png";
import deepseekLogo from "../logos/deepseek.png";
import geminiLogo from "../logos/gemini.png";

import facebookLogo from "../logos/facebook.png";
import whatsappLogo from "../logos/whatsapp.png";
import instagramLogo from "../logos/instagram.png";
import telegramLogo from "../logos/telegram.png";

import calendarLogo from "../logos/calendar.png";
import sheetsLogo from "../logos/googlesheets.png";
import formsLogo from "../logos/googleforms.png";

import n8nLogo from "../logos/n8n.png";
import webhookLogo from "../logos/webhook.png";
import twilioLogo from "../logos/twillio.png";
import IILabs from "../logos/IILabs.png";
import CircleEllipsis from "../logos/CircleEllipsis.png";

export default function Tools() { // Renamed from tools to Tools for convention
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Set up Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only set to visible if it's intersecting and currently false
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Optional: Disconnect after first intersection if you only want it to run once
          // observer.unobserve(entry.target); 
        }
      },
      { threshold: 0.2 }
    );
    // Ensure sectionRef.current exists before observing
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    // Cleanup function
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, [isVisible]); // Added isVisible to deps, though generally not needed for one-time effects

  const tools = [
    {
      id: "openAI",
      icon: Bot,
      title: "Integrate Your Favorite Tools",
      description: "Make the most use of your favourite tools",
      features: [
        { name: "OpenAI", logo: openaiLogo },
        { name: "Facebook", logo: facebookLogo },
        { name: "Google Calendar", logo: calendarLogo },
        { name: "Gemini", logo: geminiLogo },
        { name: "WhatsApp", logo: whatsappLogo },
        { name: "Google Sheets", logo: sheetsLogo },
        { name: "DeepSeek", logo: deepseekLogo },
        { name: "Telegram", logo: telegramLogo },
        { name: "Google Forms", logo: formsLogo },
        { name: "N8N", logo: n8nLogo },
        { name: "Instagram", logo: instagramLogo },
        { name: "IILabs", logo: IILabs },
        { name: "Webhooks", logo: webhookLogo },
        { name: "Twilio", logo: twilioLogo },
        { name: "Much more", logo: CircleEllipsis },
      ],
    },
  ];

  return (
    <section
      id="tools"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-white dark:bg-[#121212]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20 transition-all duration-700">
          <h2 className="text-4xl md:text-[56px] font-bold text-[#0D0D0D] dark:text-white">
            Use your favourite{" "}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
              Tools
            </span>
          </h2>
          <p className="text-lg md:text-xl text-[#555] dark:text-[#C0C0C0] mt-4">
            Integrate favourite tools to make your work easier.
          </p>
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {tools.map((service, index) => {
            const Icon = service.icon;
            const hover = hoveredCard === service.id;

            return (
              <div
                key={service.id}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 120 + 200}ms` }}
              >
                <div
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-8 rounded-3xl border cursor-pointer h-full transition-all duration-300 ${
                    hover
                      ? "bg-gradient-to-br from-[#d0c5fc] to-[#8985ff] border-transparent shadow-2xl -translate-y-2"
                      : "bg-white dark:bg-[#1A1A1A] border-[#E0E0E0] dark:border-[#404040]"
                  }`}
                >
                  <div
                    className={`w-16 h-16 mb-6 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                      hover ? "bg-white/20 backdrop-blur-sm" : "bg-[#6366F1]/10"
                    }`}
                  >
                    <Icon size={32} className={hover ? "text-white" : "text-[#6366F1]"} />
                  </div>

                  <h3 className={`text-2xl font-bold mb-4 ${hover ? "text-white" : "text-[#0D0D0D]"}`}>
                    {service.title}
                  </h3>

                  <p className={`mb-6 leading-relaxed ${hover ? "text-white/90" : "text-[#666]"}`}>
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    {service.features.map((f) => (
                      <div
                        key={f.name}
                        // Adjusted width calculation for a cleaner 3-column layout based on an assumed 12-column grid or desired spacing.
                        className="flex items-center gap-3 w-[calc(33.333%-0.75rem)]" 
                      >
                        <img
                          src={f.logo}
                          alt={`${f.name} logo`} // Added alt text for accessibility
                          className={`w-6 h-6 transition-all duration-300 ${
                            hover ? "scale-110 opacity-90 " : "opacity-100"
                          }`}
                        />
                        <span className={hover ? "text-white/80" : "text-[#555]"}>{f.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}