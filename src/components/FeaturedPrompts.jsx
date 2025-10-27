import React from 'react';
import { ArrowRight, Image as ImageIcon, Flame, Search } from 'lucide-react';

const sections = [
  {
    id: 'trending',
    title: 'Trending Prompts',
    description: 'What creators are loving this week',
    items: [
      {
        title: 'Luxury Bridal Necklace – Studio Catalog Look',
        url: '/prompt/luxury-bridal-necklace-ai-photo',
        tags: ['Luxury', 'Jewelry', 'Bridal'],
      },
      {
        title: 'Streetwear Editorial – Neon City Night',
        url: '/prompt/streetwear-editorial-neon',
        tags: ['Fashion', 'Editorial', 'Urban'],
      },
      {
        title: 'Minimal Skincare Flatlay – Soft Morning Light',
        url: '/prompt/minimal-skincare-flatlay',
        tags: ['Beauty', 'Product', 'Minimal'],
      },
    ],
    icon: Flame,
  },
  {
    id: 'collections',
    title: 'New Collections',
    description: 'Curated moodboards and themes',
    items: [
      {
        title: 'Summer Style Prompts',
        url: '/collection/summer-style-prompts',
        tags: ['Seasonal', 'Fashion'],
      },
      {
        title: 'Bridal Season',
        url: '/collection/bridal-season',
        tags: ['Bridal', 'Jewelry'],
      },
      {
        title: 'Minimal Aesthetic',
        url: '/collection/minimal-aesthetic',
        tags: ['Minimal', 'Branding'],
      },
    ],
    icon: ImageIcon,
  },
  {
    id: 'popular',
    title: 'Popular Searches',
    description: 'Quick links to top intent pages',
    items: [
      { title: 'AI jewelry prompt ideas', url: '/category/jewelry-prompts', tags: ['SEO'] },
      { title: 'Fashion photography prompt guide', url: '/category/fashion-prompts', tags: ['SEO'] },
      { title: 'Product prompts for e-commerce', url: '/category/product-prompts', tags: ['SEO'] },
    ],
    icon: Search,
  },
];

const Chip = ({ children }) => (
  <span className="mr-1 inline-flex items-center rounded-full bg-black/5 px-2.5 py-1 text-xs text-black/70">
    {children}
  </span>
);

const Card = ({ item }) => (
  <a
    href={item.url}
    className="group block rounded-xl border border-black/5 bg-white p-5 shadow-sm transition hover:shadow-md"
  >
    <h4 className="text-sm font-semibold group-hover:underline">{item.title}</h4>
    <div className="mt-2">
      {item.tags?.map((t) => (
        <Chip key={t}>{t}</Chip>
      ))}
    </div>
    <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-black/60">
      View details <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
    </div>
  </a>
);

const FeaturedPrompts = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {sections.map((sec) => (
          <div key={sec.id} id={sec.id}>
            <div className="mb-4 flex items-center gap-2">
              <sec.icon size={18} className="text-black/70" />
              <h3 className="text-lg font-semibold">{sec.title}</h3>
            </div>
            <p className="mb-4 text-sm text-black/60">{sec.description}</p>
            <div className="space-y-3">
              {sec.items.map((item) => (
                <Card key={item.title} item={item} />
              ))}
            </div>
            <div className="mt-4">
              <a
                href={`/${sec.id}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-black/70 hover:underline"
              >
                See more <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPrompts;
