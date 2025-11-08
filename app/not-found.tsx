import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header isHomepage={false} />
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-medium mb-6 tracking-tight" style={{ fontFamily: 'var(--font-gt-america-extended)' }}>
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4 tracking-tight" style={{ fontFamily: 'var(--font-gt-america-extended)' }}>
            Page Not Found
          </h2>
          <p className="text-foreground/70 mb-8 text-lg" style={{ fontFamily: 'var(--font-inter)' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <nav className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-6 py-3 border-2 border-[#242424] bg-transparent hover:bg-[#242424] hover:text-[#F9F8F7] transition-all duration-300 text-sm tracking-[0.08em] uppercase font-sans"
            >
              Return Home
            </Link>
            <Link
              href="/stories"
              className="px-6 py-3 border-2 border-[#242424] bg-transparent hover:bg-[#242424] hover:text-[#F9F8F7] transition-all duration-300 text-sm tracking-[0.08em] uppercase font-sans"
            >
              Browse Stories
            </Link>
            <Link
              href="/visit"
              className="px-6 py-3 border-2 border-[#242424] bg-transparent hover:bg-[#242424] hover:text-[#F9F8F7] transition-all duration-300 text-sm tracking-[0.08em] uppercase font-sans"
            >
              Visit Us
            </Link>
          </nav>
        </div>
      </main>
      <Footer />
    </>
  );
}

