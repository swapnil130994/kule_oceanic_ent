import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

function ContactItem({ Icon, title, children }) {
  return (
    <div className="flex items-start gap-5">
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
        style={{
          backgroundColor: "var(--icon-bg)",
          border: "1px solid var(--icon-border)",
        }}
      >
        <Icon
          size={26}
          style={{ color: "var(--icon-color)" }}
        />
      </div>

      <div>
        <h3
          className="text-2xl font-bold mb-2"
          style={{ color: "var(--primary)" }}
        >
          {title}
        </h3>

        <div
          className="text-lg leading-8"
          style={{ color: "var(--text-muted)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setResponseMsg("");

    try {
      const response = await fetch("/backend/api/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const text = await response.text();

      console.log("RAW API RESPONSE:", text);

      const result = JSON.parse(text);

      if (result.success) {
        setIsSuccess(true);
        setResponseMsg(result.message);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setIsSuccess(false);
        setResponseMsg(result.message);
      }
    } catch (error) {
      console.error("FULL ERROR:", error);
      setResponseMsg("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

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
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side */}
        <div className="space-y-10">
          <ContactItem Icon={MapPin} title="Location:">
            <>
              Flat 202, Bld No 21, NRI Complex Ph 1,
              <br />
              Darave, Nerul, Navi Mumbai, Maharashtra
            </>
          </ContactItem>

          <ContactItem Icon={Mail} title="Email:">
            operations@kuleyaroceanic.com
          </ContactItem>

          <ContactItem Icon={Phone} title="Call:">
            +91 9769958350
          </ContactItem>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 md:p-8 rounded-2xl shadow-lg space-y-4"
          style={{ backgroundColor: "var(--card-bg)" }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border p-3 rounded-lg focus:outline-none"
            style={{ borderColor: "var(--border)" }}
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border p-3 rounded-lg focus:outline-none"
            style={{ borderColor: "var(--border)" }}
            required
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border p-3 rounded-lg focus:outline-none"
            style={{ borderColor: "var(--border)" }}
            required
          />

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full border p-3 rounded-lg focus:outline-none"
            style={{ borderColor: "var(--border)" }}
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg font-semibold transition hover:opacity-90 disabled:opacity-70"
            style={{
              backgroundColor: "var(--button)",
              color: "white",
            }}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {responseMsg && (
            <p
              className="text-center font-medium mt-2"
              style={{
                color: isSuccess
                  ? "var(--primary)"
                  : "red",
              }}
            >
              {responseMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}