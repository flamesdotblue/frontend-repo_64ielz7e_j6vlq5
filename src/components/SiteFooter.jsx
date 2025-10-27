import React from 'react';
import { Twitter, Github, Mail } from 'lucide-react';

const SiteFooter = () => {
  return (
    <footer className="border-t border-black/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">PromptVerse</p>
          <p className="mt-1 text-xs text-black/60">
            Curated AI prompts for photoshoots, branding, and product storytelling.
          </p>
          <div className="mt-3 flex flex-wrap gap-4 text-xs text-black/60">
            <a href="/about" className="hover:text-black">About</a>
            <a href="/contact" className="hover:text-black">Contact</a>
            <a href="/blog" className="hover:text-black">Blog</a>
            <a href="/privacy-policy" className="hover:text-black">Privacy</a>
            <a href="/terms" className="hover:text-black">Terms</a>
            <a href="/disclaimer" className="hover:text-black">Disclaimer</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="mailto:hello@promptverse.ai" aria-label="Email" className="rounded-full p-2 hover:bg-black/5">
            <Mail size={18} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="rounded-full p-2 hover:bg-black/5">
            <Twitter size={18} />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full p-2 hover:bg-black/5">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
