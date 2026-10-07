const REDIRECTS = {
  '/projects/portfolio-pricing': '/work/portfolio-pricing',
  '/projects/exempt-supply-matching': '/work/exempt-supply-matching',
  '/projects/forecasting-models': '/work/forecasting-models',
  '/projects/mlops-foundation': '/work/mlops-foundation',
  '/projects/robot-failure': '/work/robot-failure',
  '/projects/renewcast-solar-forecasting': '/work/physics-first-solar',
  '/projects/wind-forecasting': '/work/forecasting-models',
  '/projects/mlops-tools': '/work/mlops-foundation',
  '/projects/ev-simulator': 'https://github.com/dean-sh/ev-sim',
  '/projects/equity-copilot': '/',
  '/projects/fruit-waste': '/',
  '/projects/streamlit-guide': '/',
};

const SECURITY_HEADERS = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 31,
  },
  async headers() {
    return [{ source: '/:path*', headers: SECURITY_HEADERS }];
  },
  async redirects() {
    return Object.entries(REDIRECTS).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

module.exports = nextConfig;
