import { type ComponentProps } from "react";

import { type StaticImageData } from "next/image";

export interface TeamMember {
	name: string;
	role: string;
	description: string;
	image: string | StaticImageData;
	linkedin?: string;
	email?: string;
}

export interface TeamMemberPlaceholder {
	backgroundColor: ComponentProps<"div">["className"];
}
