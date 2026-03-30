export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-6"
      style={{ backgroundColor: "var(--secondary)" }}
    >
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        style={{ color: "var(--text-main)" }}
      >
        Contact Us
      </h2>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
        
        {/* Left Side - Company Info + Map */}
        <div>
          <h3
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--text-main)" }}
          >
            Company Details
          </h3>

          <div
            className="space-y-2 text-base md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            <p>📍 Nerul, Navi Mumbai, Maharashtra</p>
            <p>📧 info@kuleyaroceanic.com</p>
            <p>📞 +91 XXXXXXXXXX</p>
          </div>

          {/* Google Map */}
          <div className="mt-6 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Nerul Navi Mumbai Location"
              src="https://www.google.com/maps?q=Nerul,Navi%20Mumbai&output=embed"
              className="w-full h-[250px] md:h-[300px]"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          className="p-6 md:p-8 rounded-2xl shadow-lg space-y-4"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none"
            style={{ borderColor: "var(--border)" }}
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none"
            style={{ borderColor: "var(--border)" }}
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full border p-3 rounded-lg focus:outline-none"
            style={{ borderColor: "var(--border)" }}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg focus:outline-none"
            style={{ borderColor: "var(--border)" }}
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold transition"
            style={{
              backgroundColor: "var(--button)",
              color: "white",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}