export default function HeroGraphic() {
  return (
    <svg
      viewBox="0 0 480 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      role="img"
      aria-label="Abstract diagram of connected agent nodes running on Pine Labs rails"
    >
      <line x1="40" y1="300" x2="440" y2="300" stroke="#2e5c48" strokeWidth="2" />
      <line x1="40" y1="300" x2="40" y2="60" stroke="#2e5c48" strokeWidth="2" strokeDasharray="2 6" />

      <path d="M40 260 L160 190 L260 220 L360 110 L440 140" stroke="#20d39c" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M40 300 L150 300 L150 260" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity="0.55" />
      <path d="M260 300 L260 220" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity="0.55" />
      <path d="M360 300 L360 110" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeOpacity="0.55" />

      <circle cx="40" cy="260" r="9" fill="#00190f" stroke="#20d39c" strokeWidth="2.5" />
      <circle cx="160" cy="190" r="7" fill="#00190f" stroke="#20d39c" strokeWidth="2.5" />
      <circle cx="260" cy="220" r="11" fill="#20d39c" />
      <circle cx="360" cy="110" r="9" fill="#00190f" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="440" cy="140" r="7" fill="#00190f" stroke="#20d39c" strokeWidth="2.5" />

      <circle cx="150" cy="300" r="4" fill="#ffffff" />
      <circle cx="260" cy="300" r="4" fill="#ffffff" />
      <circle cx="360" cy="300" r="4" fill="#ffffff" />
      <circle cx="40" cy="300" r="4" fill="#2e5c48" />
      <circle cx="440" cy="300" r="4" fill="#2e5c48" />

      <rect x="228" y="196" width="64" height="48" rx="8" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.6" strokeDasharray="3 4" />
    </svg>
  );
}
