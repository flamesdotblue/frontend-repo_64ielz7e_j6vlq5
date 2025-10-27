import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-28 text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
          <Sparkles size={16} className="text-yellow-300" />
          Fresh AI photoshoot ideas daily
        </span>
        <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">
          AI Prompt Inspiration for
          <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-pink-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent"> Fashion, Jewelry & Lifestyle Creators</span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base text-white/80 md:text-lg">
          Discover curated prompts for product shoots, campaigns, and brand storytelling. Ready-to-use, SEO-friendly, and designed for visual impact.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#categories"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Explore Prompts
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#trending"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur transition hover:border-white/50 hover:text-white"
          >
            Get Inspired
          </a>
        </div>
      </div>

      {/* soft gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
    </section>
  );
};

export default HeroSection;
