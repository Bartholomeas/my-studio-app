import { type BlocksContent } from "@strapi/blocks-react-renderer";

export interface PaginationMeta {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}

export interface PaginatedResponse<T> {
	data: T;
	meta: {
		pagination: PaginationMeta;
	};
}

export interface MetaTag {
	id: number;
	name: string;
	content: string;
}

export interface SEO {
	id: number;
	metaTitle: string;
	metaDescription: string;
	metaTag: MetaTag[];
}

export interface Media {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: unknown;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: unknown;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface RichTextBlock {
	__component: "shared.rich-text";
	id: number;
	body: BlocksContent;
}

// Union type for all possible block types
export type ContentBlock = RichTextBlock;

export enum Locale {
	PL = "pl-PL",
	EN = "en",
}
