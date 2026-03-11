import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center pitch-grid">
      <div className="text-center">
        <div className="font-display font-bold text-8xl md:text-9xl text-gradient-green opacity-30 mb-4">
          404
        </div>
        <div className="label-tag mb-4 flex justify-center items-center gap-3">
          <span className="w-6 h-px bg-accent-green" />
          Page Not Found
          <span className="w-6 h-px bg-accent-green" />
        </div>
        <p className="text-text-secondary text-sm mb-8 max-w-xs mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
