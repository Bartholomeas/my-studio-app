import qs from "qs";

import { handleAsync } from "@/lib/handle-async.util";

import { Locale, type PaginatedResponse } from "@/features/common/types/strapi.types";
import { BLOG_POSTS_API_URL } from "@/misc/constants";

import { type BlogPost } from "../blog.types";

export type BlogPostsResponse = PaginatedResponse<BlogPost[]>;
export interface GetBlogPostsParams {
	locale?: Locale;
}
export const getBlogPosts = async (
	params: GetBlogPostsParams = {
		locale: Locale.PL,
	},
) => {
	return handleAsync<BlogPostsResponse>(async () => {
		const query = qs.stringify({
			populate: {
				cover: true,
				author: true,
				categories: true,
			},
			locale: params.locale,
		});

		const res = await fetch(`${BLOG_POSTS_API_URL}?${query}`, {
			next: {
				revalidate: 60 * 60,
			},
		});
		if (!res.ok) {
			throw new Error(`Failed to fetch blog posts. Status: ${res.status}`);
		}

		return res.json() as Promise<BlogPostsResponse>;
	});
};
