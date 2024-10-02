import React from "react";

import Image, { type ImageProps } from "next/image";

import { getPlaiceholder } from "plaiceholder";

type DynamicBlurImageProps = Omit<ImageProps, "src" | "placeholder" | "blurDataUrl"> & {
	url: string;
};

export const DynamicBlurImage = async ({
	url,
	alt,
	sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw",
	...props
}: DynamicBlurImageProps) => {
	const base64 = await getPlaceholderForUrl(url);

	return (
		<Image src={url} placeholder={"blur"} blurDataURL={base64} alt={alt} sizes={sizes} {...props} />
	);
};

const getPlaceholderForUrl = async (url: string): Promise<string> => {
	try {
		const res = await fetch(url);
		if (!res.ok) throw new Error("Failed to fetch image");

		const buffer = Buffer.from(await res.arrayBuffer());

		const { base64 } = await getPlaiceholder(buffer, {
			size: 10,
		});

		return base64;
	} catch (err) {
		// const res = await fetch(url);
		// const buffer = Buffer.from(await res.arrayBuffer());
		// return buffer.toString('base64');
		return "";
	}
};
