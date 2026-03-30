export default function Services() {
  const services = [
    {
      title: "Vessel Sale",
      desc: "Complete vessel selling support.",
    },
    {
      title: "Vessel Purchase",
      desc: "Best market deals and advisory.",
    },
    {
      title: "Vessel Charter",
      desc: "Short and long-term charter services.",
    },
    {
      title: "Vessel Owning",
      desc: "Ownership and asset management.",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6"
      style={{ backgroundColor: "white" }}
    >
      <h2
        className="text-4xl font-bold text-center mb-12"
        style={{ color: "var(--text-main)" }}
      >
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg"
            style={{ backgroundColor: "var(--card-bg)" }}
          >
            <h3 className="text-xl font-semibold mb-4">
              {service.title}
            </h3>
            <p style={{ color: "var(--text-muted)" }}>
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}