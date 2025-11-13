"use client";

import { useState, useEffect, useRef } from "react";
import LogoOrbit from "./LogoOrbit";
import quataxLogo from "@/logos/orbit.jpg";

// ✅ Import Logos
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

export default function Tools() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.disconnect();
    };
  }, []);

  const features = [
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
  ];

  return (
    <section
      id="tools"
      ref={sectionRef}
      className="py-24 md:py-36 px-6 bg-white dark:bg-[#121212] overflow-hidden"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <div
        className={`max-w-[1200px] mx-auto text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-4xl md:text-[56px] font-bold text-[#0D0D0D] dark:text-white mb-4">
          Integrate your favourite{" "}
          <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
            Tools
          </span>
        </h2>
        <p className="text-lg md:text-xl text-[#555] dark:text-[#C0C0C0] mb-16">
          Make the most of your favourite platforms and connect them intelligently.
        </p>

        {/* 🌌 Direct Orbit Display */}
        <div className="flex justify-center">
          <LogoOrbit
            centerLogo={quataxLogo}
            logos={features.map((f, i) => ({
              id: i,
              name: f.name,
              logo: f.logo,
              radius: 90 + Math.random() * 100,
              speed: 0.7 + Math.random() * 0.5,
            }))}
          />
        </div>
      </div>
    </section>
  );
}
