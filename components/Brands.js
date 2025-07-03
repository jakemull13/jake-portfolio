// components/Brands.js
const brands = [
  { name: "L’Oréal",      logo: "/logos/loreal.svg" },
  { name: "MLB",          logo: "/logos/mlb.svg" },
  { name: "Pfizer",       logo: "/logos/pfizer.svg" },
  { name: "US Air Force", logo: "/logos/usaf.svg" },
  { name: "NASCAR",       logo: "/logos/nascar.svg" },
  { name: "GrowthLoop",   logo: "/logos/growthloop.svg" }, // Or use text fallback if needed
];

export default function Brands() {
  return (
    <section className="bg-white shadow-lg rounded-xl p-8 mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Brands I’ve Worked With</h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {brands.map((brand) => (
          <div key={brand.name} className="flex flex-col items-center w-28">
            {brand.logo ? (
              <img src={brand.logo} alt={brand.name} className="h-12 object-contain mb-2" />
            ) : (
              <span className="text-lg font-semibold">{brand.name}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
