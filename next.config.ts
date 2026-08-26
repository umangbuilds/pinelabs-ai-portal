import type { NextConfig } from "next";

const repoName = "pinelabs-ai-portal";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: { unoptimized: true },
};

export default nextConfig;
