/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/projects/renewcast-solar-forecasting',
        destination: '/work/physics-first-solar',
        permanent: false,
      },
      {
        source: '/work/statistical-promotion',
        destination: '/work/physics-first-solar',
        permanent: false,
      },
      {
        source: '/work/provider-backpressure',
        destination: '/work/judge-gated-generation',
        permanent: false,
      },
      {
        source: '/work/agent-economics',
        destination: '/work/bounded-autonomy',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
