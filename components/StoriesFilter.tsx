'use client';

export type StoryFilter = 'all' | 'origin' | 'roaster' | 'brew';

interface StoriesFilterProps {
  activeFilter: StoryFilter;
  onFilterChange: (filter: StoryFilter) => void;
}

export default function StoriesFilter({
  activeFilter,
  onFilterChange,
}: StoriesFilterProps) {
  const filters: { value: StoryFilter; label: string }[] = [
    { value: 'all', label: 'All Stories' },
    { value: 'origin', label: 'Origin' },
    { value: 'roaster', label: 'Roaster Spotlight' },
    { value: 'brew', label: 'Brew Guides' },
  ];

  return (
    <section className="py-8 md:py-12 px-6 md:px-8 xl:px-12 bg-primary-background">
      <div className="max-w-7xl mx-auto">
        <nav className="hidden md:flex items-center justify-center gap-6 md:gap-8 xl:gap-12">
          {filters.map((filter, index) => (
            <div key={filter.value} className="flex items-center">
              <button
                onClick={() => onFilterChange(filter.value)}
                className={`relative text-sm md:text-base font-sans transition-opacity duration-300 ${
                  activeFilter === filter.value
                    ? 'font-medium opacity-100'
                    : 'font-normal opacity-60 hover:opacity-80'
                }`}
              >
                {filter.label}
                {activeFilter === filter.value && (
                  <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary-accent" />
                )}
              </button>
              {index < filters.length - 1 && (
                <span className="mx-4 md:mx-6 text-foreground/20">|</span>
              )}
            </div>
          ))}
        </nav>

        <nav className="md:hidden overflow-x-auto -mx-6 px-6 pb-2 scrollbar-hide">
          <div className="flex items-center gap-6 min-w-max">
            {filters.map((filter, index) => (
              <div key={filter.value} className="flex items-center">
                <button
                  onClick={() => onFilterChange(filter.value)}
                  className={`relative text-sm font-sans whitespace-nowrap transition-opacity duration-300 ${
                    activeFilter === filter.value
                      ? 'font-medium opacity-100'
                      : 'font-normal opacity-60'
                  }`}
                >
                  {filter.label}
                  {activeFilter === filter.value && (
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary-accent" />
                  )}
                </button>
                {index < filters.length - 1 && (
                  <span className="mx-4 text-foreground/20">|</span>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </section>
  );
}

