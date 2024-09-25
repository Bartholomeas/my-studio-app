import withPlaiceholder from "@plaiceholder/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ hostname: "i.pinimg.com" }],
	},
};

export default withPlaiceholder(nextConfig);
