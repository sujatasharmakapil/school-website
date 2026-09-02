/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Vercel deployment
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
