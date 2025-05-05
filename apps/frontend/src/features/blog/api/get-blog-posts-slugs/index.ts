import qs from "qs";

import { handleAsync } from "@/lib/handle-async.util";

import { Locale } from "@/features/common/types/strapi.types";
import { BLOG_POSTS_API_URL } from "@/misc/constants";

export type BlogPostSlugsResponse = {
	data: {
		id: number;
		documentId: string;
		slug: string;
	}[];
};

export interface GetBlogPostsSlugsParams {
	locale?: Locale;
}
export const getBlogPostsSlugs = async (params: GetBlogPostsSlugsParams) => {
	return handleAsync<BlogPostSlugsResponse>(async () => {
		const query = qs.stringify({
			fields: ["id", "documentId", "slug"],
			locale: params?.locale ?? Locale.PL,
		});

		const res = await fetch(`${BLOG_POSTS_API_URL}?${query}`, {
			next: {
				revalidate: 60 * 60 * 24,
			},
		});
		if (!res.ok) {
			throw new Error(`Failed to fetch blog posts. Status: ${res.status}`);
		}

		return res.json() as Promise<BlogPostSlugsResponse>;
	});
};
