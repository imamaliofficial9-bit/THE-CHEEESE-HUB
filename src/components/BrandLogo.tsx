interface BrandLogoProps {
  size?: 'sm' | 'md';
  onClick?: () => void;
}

export function BrandLogo({ size = 'md', onClick }: BrandLogoProps) {
  const iconSize = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';
  const textSize = size === 'sm' ? 'text-lg' : 'text-xl';

  return (
    <a
      href="#home"
      onClick={onClick}
      className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC400] rounded-md"
      aria-label="The Cheese Hub Home"
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSize} shrink-0 transition-transform duration-200 group-hover:scale-105`}
        aria-hidden="true"
      >
        <rect width="40" height="40" rx="8" fill="#181818" stroke="#FFC400" strokeWidth="1.5" />
        {/* Top Sesame Bun Crown */}
        <path
          d="M9 17.5C9 12.25 13.92 8.5 20 8.5C26.08 8.5 31 12.25 31 17.5H9Z"
          fill="#FFB800"
        />
        {/* Sesame Seeds */}
        <circle cx="15.5" cy="13" r="0.9" fill="#080808" />
        <circle cx="20" cy="11.5" r="0.9" fill="#080808" />
        <circle cx="24.5" cy="13.2" r="0.9" fill="#080808" />
        {/* Melted Cheddar Drip Layer */}
        <path
          d="M7.5 19.5H32.5L30 23.5L26.5 21L23 25.5L19.5 21.2L15.5 24.5L12 21L9.5 23L7.5 19.5Z"
          fill="#FFC400"
        />
        {/* Seared Patty */}
        <rect x="9.5" y="25.5" width="21" height="3.2" rx="1.6" fill="#E88A26" />
        {/* Bottom Toasted Bun */}
        <path
          d="M10 30H30C30 31.65 28.65 33 27 33H13C11.35 33 10 31.65 10 30Z"
          fill="#FFB800"
        />
      </svg>
      <span className={`font-display ${textSize} font-bold tracking-wider text-white uppercase leading-none`}>
        THE <span className="text-[#FFC400]">CHEESE</span> HUB
      </span>
    </a>
  );
}
