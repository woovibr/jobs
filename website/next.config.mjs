/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/jobs",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
