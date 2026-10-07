/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // full static site generation; deployable to any static host (Vercel included)
  trailingSlash: true,
  images: { unoptimized: true } // required for static export
};

export default nextConfig;
