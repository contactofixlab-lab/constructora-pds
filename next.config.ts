import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbo: process.env.NODE_ENV === 'development' ? {
    resolveAlias: {
      underscore: 'lodash'
    }
  } : undefined
};

export default nextConfig;
