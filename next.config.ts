import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `/?for=build` stays the shareable URL; it serves the prerendered `/for/build`.
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "query", key: "for", value: "(?<audience>hire|build|follow)" }],
          destination: "/for/:audience",
        },
      ],
    };
  },
};

export default nextConfig;
