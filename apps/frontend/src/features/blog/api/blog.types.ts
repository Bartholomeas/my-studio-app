import { type ContentBlock, type Media, type SEO } from "@/features/common/types/strapi.types";

export interface BlogPostCategory {
	id: number;
	documentId: string;
	name: string;
	slug: string;
	description: string | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface BlogPostAuthor {
	id: number;
	documentId: string;
	name: string;
	email: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	role?: string;
	avatar?: Media;
}

export interface BlogPost {
	id: number;
	documentId: string;
	title: string;
	description: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string;
	seo: SEO;
	cover: Media;
	blocks?: ContentBlock[];
	author: BlogPostAuthor;
	categories: BlogPostCategory[];
}
