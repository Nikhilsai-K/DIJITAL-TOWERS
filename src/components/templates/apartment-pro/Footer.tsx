'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-dark/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main Content */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <span className="text-base sm:text-lg tracking-[0.2em] sm:tracking-[0.3em] font-light text-dark">
                THE PARK HOUSE
              </span>
              <span className="block text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] text-secondary mt-1">
                HIGASHI-GINZA
              </span>
            </Link>
            <p className="text-dark/40 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm">
              三菱地所レジデンスが贈る、銀座エリアの高級レジデンス。
              上質な暮らしをお届けします。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-dark text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">
              Property
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { href: '/about', label: 'About' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/location', label: 'Access' },
                { href: '/reviews', label: 'Reviews' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark/50 text-xs sm:text-sm hover:text-secondary active:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6">
              Contact
            </h4>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-dark/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Phone</p>
                <a href="tel:050-5527-2652" className="text-secondary text-xs sm:text-sm">
                  050-5527-2652
                </a>
              </div>
              <div>
                <p className="text-dark/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Hours</p>
                <p className="text-dark/60 text-xs sm:text-sm">10:00 - 20:00</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-dark/40 text-[10px] sm:text-xs uppercase tracking-wider mb-1">Address</p>
                <p className="text-dark/60 text-xs sm:text-sm leading-relaxed">
                  東京都中央区新富2丁目7番7号
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-dark/5 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          <p className="text-dark/30 text-[10px] sm:text-xs tracking-wider">
            &copy; {currentYear} The Park House Higashi-Ginza
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-dark/30 text-[10px] sm:text-xs uppercase tracking-wider hover:text-secondary active:text-secondary transition-colors flex items-center gap-2"
          >
            Back to Top
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
