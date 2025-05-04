import withPlaiceholder from "@plaiceholder/next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "i.pinimg.com" },
			{
				hostname: "localhost",
			},
		],
	},
};

export default withNextIntl(withPlaiceholder(nextConfig));
