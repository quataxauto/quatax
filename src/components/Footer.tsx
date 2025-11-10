import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "../logos/logo.png"; // import the file

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceLinks = [
    { name: "Business Process Automation", href: "#services" },
    { name: "AI Chatbots", href: "#services" },
    { name: "Workflow Optimization", href: "#services" },
    { name: "Data Analysis", href: "#services" },
    { name: "Custom AI Solutions", href: "#services" },
  ];

  const industryLinks = [
    { name: "Healthcare", href: "#industries" },
    { name: "Finance", href: "#industries" },
    { name: "Retail", href: "#industries" },
    { name: "Manufacturing", href: "#industries" },
    { name: "Education", href: "#industries" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <footer
        className="bg-[#0D0D0D] dark:bg-[#000000] text-white py-16 px-6"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center p-2 shadow-lg overflow-hidden">
                <img 
                  src={logo} 
                  alt="QuataX Logo" 
                  className="w-full h-full object-contain"
                />
              </div>

                <span className="text-white font-bold text-2xl">QuataX</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                Transforming businesses through intelligent AI automation. We
                help companies of all sizes turn complex workflows into
                efficient, automated systems.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#6366F1]" />
                  <span className="text-gray-300 text-sm">quatax.auto@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#6366F1]" />
                  <span className="text-gray-300 text-sm">+201097897729</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-[#6366F1]" />
                  <span className="text-gray-300 text-sm">Alexandria, Egypt</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Navigation</h4>
              <nav className="space-y-3">
                {navigationLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="cursor-pointer block text-gray-300 hover:text-white transition-colors duration-150 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] rounded-sm px-1 py-1"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
              <nav className="space-y-3">
                {serviceLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="cursor-pointer block text-gray-300 hover:text-white transition-colors duration-150 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] rounded-sm px-1 py-1"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Industries & Social */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Industries</h4>
              <nav className="space-y-3 mb-6">
                {industryLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="cursor-pointer block text-gray-300 hover:text-white transition-colors duration-150 text-sm focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] rounded-sm px-1 py-1"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>

              {/* Social Links */}
              <div>
                <h5 className="text-white font-semibold text-sm mb-4">Follow Us</h5>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="cursor-pointer w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#6366F1] flex items-center justify-center transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0D0D0D]"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={18} className="text-white" />
                  </a>
                  <a
                    href="#"
                    className="cursor-pointer w-10 h-10 rounded-lg bg-gray-800 hover:bg-[#6366F1] flex items-center justify-center transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0D0D0D]"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section - Copyright and Legal */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                © 2025 QuataX. All Rights Reserved.
              </div>

              {/* Legal Links */}
              <div className="flex items-center space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] rounded-sm px-2 py-1"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] rounded-sm px-2 py-1"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 focus:ring-offset-[#0D0D0D] rounded-sm px-2 py-1"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
