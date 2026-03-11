import Link from 'next/link'

const links = [
  { href: '/analysis', label: 'Analysis' },
  { href: '/players', label: 'Players' },
  { href: '/methodology', label: 'Methodology' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-pitch-border bg-pitch-dark">
      <div className="container-px max-w-screen-xl mx-auto py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 border border-accent-green rounded-sm rotate-45" />
                <div className="absolute inset-1.5 bg-accent-green rounded-sm rotate-45" />
              </div>
              <div>
                <div className="font-display font-bold text-base leading-none tracking-wider text-text-primary">
                  VISION X
                </div>
                <div className="font-mono text-[9px] tracking-[0.3em] text-text-muted uppercase">
                  Analysis
                </div>
              </div>
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Independent football scouting and video analysis. Identifying patterns, profiling players, and decoding the game.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="label-tag mb-4">Navigation</div>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent-green text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="label-tag mb-4">Get in Touch</div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Clubs, coaches and scouts interested in analysis or player profiling are welcome to reach out.
            </p>
            <Link href="/contact" className="btn-outline text-xs py-2 px-4">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-pitch-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
            © {new Date().getFullYear()} Vision X Analysis. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse-slow" />
            <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase">
              Independent — Objective — Analytical
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
