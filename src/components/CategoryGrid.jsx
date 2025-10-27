import React from 'react';
import { ArrowRight, Diamond, Shirt, Sparkles, Home } from 'lucide-react';

const categories = [
  {
    title: 'Jewelry Prompts',
    url: '/category/jewelry-prompts',
    description: 'Necklace, Earrings, Rings, Bridal',
    icon: Diamond,
    color: 'from-pink-100 to-rose-200',
  },
  {
    title: 'Fashion Prompts',
    url: '/category/fashion-prompts',
    description: "Women’s Wear, Men’s Wear, Streetwear",
    icon: Shirt,
    color: 'from-emerald-100 to-teal-200',
  },
  {
    title: 'Beauty Prompts',
    url: '/category/beauty-prompts',
    description: 'Makeup, Hair, Nail Art',
    icon: Sparkles,
    color: 'from-violet-100 to-indigo-200',
  },
  {
    title: 'Home & Decor',
    url: '/category/home-decor-prompts',
    description: 'Interior, Furniture, Lighting',
    icon: Home,
    color: 'from-amber-100 to-orange-200',
  },
];

const CategoryCard = ({ item }) => {
  const Icon = item.icon;
  return (
    <a
      href={item.url}
      className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition hover:shadow-lg"
    >
      <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${item.color} opacity-40`}></div>
      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-xl bg-black/5 p-3 text-black/80">
          <Icon size={22} />
        </div>
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="mt-1 text-sm text-black/60">{item.description}</p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-black/70">
          Explore
          <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
};

const CategoryGrid = () => {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">Top Categories</h2>
          <p className="mt-1 text-sm text-black/60">
            Explore expertly crafted prompts for photoshoots and creative direction.
          </p>
        </div>
        <a
          href="/categories"
          className="hidden items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black/70 hover:bg-black/5 md:inline-flex"
        >
          Browse All
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <CategoryCard key={c.title} item={c} />
        ))}
      </div>

      <div className="mt-6 md:hidden">
        <a
          href="/categories"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black/70 hover:bg-black/5"
        >
          Browse All
          <ArrowRight size={14} />
        </a>
      </div>
    </section>
  );
};

export default CategoryGrid;
