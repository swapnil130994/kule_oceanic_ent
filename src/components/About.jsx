export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6"
      style={{ backgroundColor: "var(--secondary)" }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className="text-4xl font-bold mb-6"
            style={{ color: "var(--text-main)" }}
          >
            About Us
          </h2>

          <p
            className="text-lg leading-8"
            style={{ color: "var(--text-muted)" }}
          >
            KULEYAR OCEANIC ENTERPRISES PVT LTD is a
            trusted maritime company providing professional services.
          </p>

          <p
            className="mt-4 text-lg leading-8"
            style={{ color: "var(--text-muted)" }}
          >
            Our mission is to deliver customer-focused marine solutions.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738"
          className="rounded-2xl shadow-lg"
          alt="ship"
        />
      </div>
    </section>
  );
}