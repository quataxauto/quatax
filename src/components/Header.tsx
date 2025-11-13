import { useState } from "react";
import { Menu, X } from "lucide-react";
// Removed unused 'logo' import

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  interface MenuItem {
    name: string;
    href: string;
  }

  const menuItems: MenuItem[] = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Tools", href: "#tools" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Main Header: Opaque background for web/desktop view */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#1E1E1E] h-16 md:h-16 px-6 border-b border-[#E0E0E0]/50 dark:border-[#404040]/50"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full">

          <div className="flex items-center space-x-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] font-semibold text-xl">
              QuataX
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="cursor-pointer text-[#121212] dark:text-white opacity-90 hover:opacity-100 hover:text-[#6366F1] dark:hover:text-[#8B5CF6] transition-colors duration-150 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 rounded-lg px-3 py-2"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => scrollToSection("#contact")}
              className="cursor-pointer px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5856EB] hover:to-[#7C3AED] text-white font-semibold text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 shadow-lg"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button (Shows 'Menu' icon, opens menu) */}
          {!isMobileMenuOpen && (
            <button
              className="md:hidden p-2 text-[#121212] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          )}
        </div>

        {/* Mobile Menu Panel: Transitioning, Solid White BG */}
        <div
          className={`
            md:hidden 
            fixed inset-0 
            z-40 
            bg-white dark:bg-white
            flex flex-col 
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Mobile Header INSIDE the sliding panel */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-[#E0E0E0] dark:border-[#404040]">
            
            {/* UPDATED: Removed Logo container and its background */}
            <div className="flex items-center space-x-3">
              <span className="text-[#121212] dark:text-[#121212] font-semibold text-xl">
                QuataX
              </span>
            </div>
            
            {/* Close Button (Shows 'X' icon, closes menu) */}
            <button
              className="p-2 text-[#121212] dark:text-[#121212] focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close mobile menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center w-full py-3 text-[#121212] dark:text-[#121212] opacity-90 hover:opacity-100 hover:text-[#6366F1] dark:hover:text-[#8B5CF6] transition-colors duration-150 font-medium text-base border-b border-[#E0E0E0] dark:border-[#404040] last:border-b-0"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Mobile Action Button */}
          <div className="px-6 py-6 border-t border-[#E0E0E0] dark:border-[#404040]">
            <button
              onClick={() => scrollToSection("#contact")}
              className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5856EB] hover:to-[#7C3AED] text-white font-semibold text-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#6366F1] focus:ring-offset-2 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>
    </>
  );
}