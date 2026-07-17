import React, { useState, useEffect } from "react";
import { Send, Mail, CheckCircle, XCircle, Loader } from "lucide-react";
import { siteData } from "../../data/siteData";

const Contect = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, error: null, success: null });

  const [lightOn] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const API_URL = "http://localhost:5000/api/contact"; // Your backend API endpoint

  // Mouse Follow Glow
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!lightOn) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setPosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [lightOn]);

  useEffect(() => {
    if (lightOn) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPosition({ x: 75, y: 40 });
    }
  }, [lightOn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, error: "Please fill out all fields.", success: null });
      return;
    }

    setStatus({ loading: true, error: null, success: null });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Something went wrong.");
      }

      setStatus({ loading: false, success: result.message, error: null });
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (err) {
      setStatus({ loading: false, error: err.message, success: null });
    }
  };

  const closePopup = () => setStatus({ loading: false, error: null, success: null });

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden py-20"
    >

      {/* Base Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-950 to-blue-950" />

      {/* Dotted Grid */}
      <div
        className="absolute inset-0 z-0
        bg-[radial-gradient(circle,rgba(96,165,250,0.25)_1.2px,transparent_1.2px)]
        bg-size-[32px_32px]"
      />

      {/* Mouse Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle at ${position.x}% ${position.y}%,
            rgba(59,130,246,0.07),
            transparent 55%
          )`,
        }}
      />

      <div className="relative z-10 w-full max-w-xl px-6">

        {/* MAIN CARD */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">

          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {siteData.contact.heading}
            </h2>
            <p className="text-gray-400 text-sm">
              {siteData.contact.subText}
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder={siteData.contact.placeholders.name}
              className="w-full bg-transparent border-b border-slate-700 px-2 py-3 text-white 
              focus:outline-none focus:border-blue-500 transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={siteData.contact.placeholders.email}
              className="w-full bg-transparent border-b border-slate-700 px-2 py-3 text-white 
              focus:outline-none focus:border-blue-500 transition"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="3"
              placeholder={siteData.contact.placeholders.message}
              className="w-full bg-transparent border-b border-slate-700 px-2 py-3 text-white 
              focus:outline-none focus:border-blue-500 transition resize-none"
            />

            <button 
              type="submit"
              disabled={status.loading}
              className="w-full mt-4 bg-linear-to-r from-blue-600 to-cyan-500 
              hover:opacity-90 text-white font-semibold py-3 rounded-full 
              transition flex items-center justify-center gap-2 shadow-lg
              disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.loading ? (
                <>
                  <Loader size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  {siteData.contact.buttonText} <Send size={16} />
                </>
              )}
            </button>

          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-gray-400 text-xs flex items-center justify-center gap-2">
            <Mail size={14} />
            {siteData.personal.email}
          </div>

        </div>
      </div>

      {/* Status Popup */}
      {(status.success || status.error) && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50" onClick={closePopup}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-slate-900 border ${
              status.success ? "border-green-500/40" : "border-red-500/40"
            } w-[90%] max-w-sm p-8 rounded-2xl text-center shadow-2xl`}
          >
            <div className={`mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center ${
                status.success ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"
            }`}>
              {status.success ? <CheckCircle size={32} /> : <XCircle size={32} />}
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              {status.success ? "Message Sent!" : "An Error Occurred"}
            </h3>

            <p className="text-gray-400 mb-6">
              {status.success || status.error}
            </p>

            <button onClick={closePopup} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contect;