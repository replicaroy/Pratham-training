import { categories } from "./config";

function CategoriesSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories && categories.map(({ title, description }, i) => (
        <div key={i} className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      ))}
    </section>
  );
}
export default CategoriesSection    