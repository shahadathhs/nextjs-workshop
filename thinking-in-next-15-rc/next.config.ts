import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	experimental: {
		ppr: true,
		dynamicIO: true,
	},
	images: {
		remotePatterns: [
			{
				hostname: 'fastly.picsum.photos',
				protocol: 'https',
				port: '',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
