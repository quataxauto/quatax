"use client"; // Required for client-side hooks like useState, useEffect, useRef

// pages/contact.jsx
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MessageCircle, Send, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
// import { useForm, ValidationError } from '@formspree/react'; // ❌ Removed: Formspree logic is redundant with emailjs

export default function Contact() { // Renamed from Contact to Contact for convention
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const sectionRef = useRef(null);
  const form = useRef(); // Reference for the form element, needed by emailjs

  // Animate when visible using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // ✅ Handle input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle form submit using emailjs
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null); // Clear previous status

    try {
      if (!form.current) throw new Error("Form reference is missing.");

      await emailjs.sendForm(
        "service_uiphqmn", // Replace with your Service ID
        "template_aw5d2jp", // Replace with your Template ID
        form.current,
        "0cq12MmBvtJkvA_4b" // Replace with your Public Key
      );

      setSubmitStatus("success");
      // Reset form data state
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        message: "",
      });
      // form.current.reset(); // Optional: reset the DOM form
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      // Optionally show a more detailed error to the user
      // alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ❌ Removed redundant Formspree success state check as we are using emailjs
  // if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-32 px-6 bg-white dark:bg-[#121212]"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-20">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-[56px] leading-tight md:leading-[1.1] text-[#0D0D0D] dark:text-white mb-6 font-bold">
              Let&apos;s Build Your{" "}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent">
                Automated Future
              </span>
            </h2>
            <p className="text-lg md:text-xl text-[#555] dark:text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed">
              Ready to automate your business? Contact QuataX today for a free consultation and
              discover how AI can transform your operations.
            </p>
          </div>
        </div>

        {/* Form and Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-[#FAFBFC] dark:bg-[#1A1A1A] p-8 rounded-3xl border border-[#E0E0E0] dark:border-[#404040] shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#0D0D0D] dark:text-white mb-2">
                  Get Started Today
                </h3>
                <p className="text-[#666] dark:text-[#B0B0B0]">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              {/* Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-300 font-medium">
                    Thank you! We&apos;ll be in touch soon.
                  </span>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-3">
                  <AlertCircle size={20} className="text-red-600 dark:text-red-400" />
                  <span className="text-red-800 dark:text-red-300 font-medium">
                    Something went wrong. Please try again.
                  </span>
                </div>
              )}

              {/* The form */}
              {/* Note: Input names must match your EmailJS template variables */}
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                {[
                  { label: "Full Name *", name: "fullName", type: "text" },
                  { label: "Company Name *", name: "companyName", type: "text" },
                  { label: "Email Address *", name: "email", type: "email" },
                  { label: "Phone Number", name: "phone", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <label 
                      htmlFor={field.name} // Added htmlFor for accessibility
                      className="block text-sm font-semibold text-[#0D0D0D] dark:text-white mb-2"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name} // Added id to link with label
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      required={field.name !== "phone"}
                      className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] dark:border-[#404040] bg-white dark:bg-[#262626] text-[#0D0D0D] dark:text-white focus:ring-2 focus:ring-[#6366F1] transition-all duration-150"
                    />
                  </div>
                ))}

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="message" // Added htmlFor for accessibility
                    className="block text-sm font-semibold text-[#0D0D0D] dark:text-white mb-2"
                  >
                    Message / Describe Your Needs *
                  </label>
                  <textarea
                    id="message" // Added id to link with label
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-[#E0E0E0] dark:border-[#404040] bg-white dark:bg-[#262626] text-[#0D0D0D] dark:text-white focus:ring-2 focus:ring-[#6366F1] transition-all duration-150 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full px-8 py-4 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:from-[#5856EB] hover:to-[#7C3AED] disabled:from-[#9CA3AF] disabled:to-[#9CA3AF] text-white font-semibold text-lg transition-all duration-150 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column (Contact Info) */}
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0D0D0D] dark:text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-lg text-[#666] dark:text-[#B0B0B0]">
                  Have questions? We&apos;re here to help. Reach out through any of these channels.
                </p>
              </div>

              {[ // contact info
                { icon: Mail, title: "Email Us", info: "quatax.auto@gmail.com" },
                { icon: Phone, title: "Call Us", info: "+201097897729" },
                { icon: MessageCircle, title: "Live Chat", info: "Available 24/7" },
              ].map(({ icon: Icon, title, info }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8FAFC] dark:bg-[#1A1A1A] border border-[#E0E0E0] dark:border-[#404040]"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-[#0D0D0D] dark:text-white mb-1">
                      {title}
                    </h4>
                    <p className="text-[#6366F1] dark:text-[#8B5CF6] font-medium">{info}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}