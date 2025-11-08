export default function HeroManifesto({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <div
      className={`${isMobile ? 'text-center' : ''} ${isMobile ? 'absolute bottom-32 left-0 right-0 px-6' : 'absolute bottom-24 left-0 right-0 px-8 lg:px-12'}`}
      style={{ fontFamily: 'var(--font-tiempos-text)' }}
    >
      <p 
        className={`text-2xl md:text-3xl lg:text-4xl font-normal tracking-tight ${isMobile ? 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]' : 'text-foreground'}`}
        style={{ fontFamily: 'var(--font-tiempos-text)' }}
      >
        Find Your Signal.
      </p>
    </div>
  );
}



