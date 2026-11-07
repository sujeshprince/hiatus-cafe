import path from "node:path";
import { fileURLToPath } from "node:url";
import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBasePath = process.env.GITHUB_PAGES_BASE_PATH ?? "/hiatus-cafe";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const sharedConfig: NextConfig = {
  poweredByHeader: false,
  turbopack: {
    root: projectRoot,
  },
};

const nextConfig: NextConfig = isGitHubPages
  ? {
      ...sharedConfig,
      output: "export",
      basePath: pagesBasePath,
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {
      ...sharedConfig,
      async headers() {
        return [
          {
            source: "/:path*",
            headers: securityHeaders,
          },
        ];
      },
      images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920, 2400],
      },
    };

export default nextConfig;
