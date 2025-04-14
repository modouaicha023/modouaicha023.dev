import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    turbo: {},
    mdxRs: true,
  },
};

const withMDX = createMDX({
  // Note: For Turbopack compatibility, options need to be kept simple
  extension: /\.mdx?$/,
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
