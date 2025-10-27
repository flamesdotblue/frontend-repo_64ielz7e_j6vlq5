import React from 'react';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import FeaturedPrompts from './components/FeaturedPrompts';
import SiteFooter from './components/SiteFooter';

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(100%_100%_at_50%_0%,#f8fafc_0%,#ffffff_60%)] text-black">
      <HeroSection />
      <CategoryGrid />
      <FeaturedPrompts />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-r from-black/5 to-transparent p-8">
          <h2 className="text-xl font-semibold">Why PromptVerse?</h2>
          <p className="mt-2 max-w-3xl text-sm text-black/70">
            Built for brand builders and content creators. Every prompt is crafted with SEO keywords, visual direction, and use-case notes so you can produce consistent, on-brand results.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-black/5 px-3 py-1">SEO-ready</span>
            <span className="rounded-full bg-black/5 px-3 py-1">Photoshoot-focused</span>
            <span className="rounded-full bg-black/5 px-3 py-1">Curated Collections</span>
            <span className="rounded-full bg-black/5 px-3 py-1">Copy & Use</span>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default App;
