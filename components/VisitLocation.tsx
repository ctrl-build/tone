'use client';

export default function VisitLocation() {
  const address = 'Casa Albă, Strada Mihai Viteazul 10, Craiova, România';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  const mapsAppUrl = `https://maps.apple.com/?q=${encodeURIComponent(address)}`;

  return (
    <section className="py-12 md:py-16 xl:py-20 bg-primary-background">
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:grid md:grid-cols-2 gap-0">
          <div className="w-full h-[500px] md:h-[600px] xl:h-[700px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.1234567890!2d23.7978!3d44.3196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDE5JzEwLjUiTiAyM8KwNDcnNTIuMSJF!5e0!3m2!1sen!2sro!4v1234567890123!5m2!1sen!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center px-8 md:px-12 xl:px-16 bg-primary-background">
            <h2
              className="text-3xl md:text-4xl xl:text-5xl font-medium mb-6 md:mb-8 tracking-tight"
              style={{ fontFamily: 'var(--font-gt-america-extended)' }}
            >
              Find Us
            </h2>
            
            <p
              className="text-lg md:text-xl text-foreground/80 mb-6 md:mb-8"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {address}
            </p>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-accent hover:opacity-80 transition-opacity duration-200 mb-6 md:mb-8"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <span className="text-base md:text-lg font-medium">Open in Maps</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <p
              className="text-sm text-foreground/60"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Parking available nearby. Accessible via public transit.
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <div className="px-6 py-8 bg-primary-background">
            <h2
              className="text-3xl font-medium mb-6 tracking-tight"
              style={{ fontFamily: 'var(--font-gt-america-extended)' }}
            >
              Find Us
            </h2>
            
            <p
              className="text-lg text-foreground/80 mb-6"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              {address}
            </p>

            <a
              href={mapsAppUrl}
              className="inline-flex items-center text-primary-accent hover:opacity-80 transition-opacity duration-200 mb-6"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              <span className="text-lg font-medium">Open in Maps</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <p
              className="text-sm text-foreground/60"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Parking available nearby. Accessible via public transit.
            </p>
          </div>

          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2857.5!2d23.7978!3d44.3196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752d7b8c8d8d8d9%3A0x8d8d8d8d8d8d8d8d!2sStrada%20Mihai%20Viteazul%2010%2C%20Craiova%2C%20Romania!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Tone Coffee Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

