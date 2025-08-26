import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Cloudflare Pages
  output: 'export',

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Configure trailing slash behavior
  trailingSlash: true,

  // Disable server-side features for static export
  experimental: {
    // Ensure compatibility with static export
  },
};

export default nextConfig;
