<div class="w-6 h-6 rounded-full">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" />
      </linearGradient>
      <filter id="glow" height="130%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
        <feOffset dx="0" dy="0" result="offsetBlur" />
        <feFlood flood-color="#FFD700" flood-opacity="0.5" />
        <feComposite in2="offsetBlur" operator="in" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="url(#gold-gradient)"
      filter="url(#glow)"
    />
    <text
      x="12"
      y="16"
      fill="#FFFFFF"
      font-size="10"
      font-family="Arial"
      font-weight="bold"
      text-anchor="middle">F</text
    >
  </svg>
</div>
