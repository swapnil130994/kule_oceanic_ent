export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div
        className="w-full"
        style={{ backgroundColor: "var(--overlay)" }}
      >
        <div
          className="max-w-7xl mx-auto px-6 py-24 text-center md:text-left"
          style={{ color: "var(--text-light)" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to KULEYAR OCEANIC
          </h1>

          <p className="text-lg md:text-2xl mb-6 leading-8">
            Trusted Maritime Solutions for Vessel Sale,
            Purchase, Charter and Ownership Services.
          </p>

          <p className="max-w-3xl text-base md:text-lg leading-8">
            We provide professional marine business
            solutions with transparency and reliability.
          </p>

          <button
            className="mt-8 px-8 py-3 rounded-xl font-semibold transition"
            style={{
              backgroundColor: "var(--button)",
              color: "white",
            }}
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
}