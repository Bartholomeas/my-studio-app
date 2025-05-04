import qs from "qs";

import { handleAsync } from "@/lib/handle-async.util";

import { Locale } from "@/features/common/types/strapi.types";
import { BLOG_POSTS_API_URL } from "@/misc/constants";

import { type BlogPost } from "../blog.types";

export type BlogPostResponse = { data: BlogPost };

export interface GetBlogPostParams {
	slug: string;
	locale?: Locale;
}
export const getBlogPost = async (params: GetBlogPostParams) => {
	return handleAsync<BlogPostResponse>(async () => {
		const query = qs.stringify({
			populate: {
				cover: true,
				author: true,
				categories: true,
				seo: true,
				blocks: true,
			},
			locale: params?.locale ?? Locale.PL,
		});

		const res = await fetch(`${BLOG_POSTS_API_URL}/${params.slug}?${query}`, {
			next: {
				revalidate: 60 * 60,
			},
		});
		if (!res.ok) {
			throw new Error(`Failed to fetch blog posts. Status: ${res.status}`);
		}

		return res.json() as Promise<BlogPostResponse>;
	});
};
