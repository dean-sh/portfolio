/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/projects/portfolio-pricing',
        destination: '/work/portfolio-pricing',
        permanent: true,
      },
      {
        source: '/projects/exempt-supply-matching',
        destination: '/work/exempt-supply-matching',
        permanent: true,
      },
      {
        source: '/projects/forecasting-models',
        destination: '/work/forecasting-models',
        permanent: true,
      },
      {
        source: '/projects/mlops-foundation',
        destination: '/work/mlops-foundation',
        permanent: true,
      },
      {
        source: '/projects/robot-failure',
        destination: '/work/robot-failure',
        permanent: true,
      },
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
