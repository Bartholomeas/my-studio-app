type TranslationKeys = typeof import("./../../messages/pl.json");
export type AppLinkRoutes = keyof TranslationKeys["nav"];

type AppRoutes<T extends string = AppLinkRoutes> = Record<
	T,
	{
		label: AppLinkRoutes;
		href: string;
	}
>;

// Labels are keys of the translation file
export const APP_ROUTES: AppRoutes = {
	home: {
		label: "home",
		href: "/",
	},
	contact: {
		label: "contact",
		href: "/kontakt",
	},
	blog: {
		label: "blog",
		href: "/blog",
	},
} as const;

export const SOCIALS_LINKS = {
	facebook: {
		label: "Facebook",
		href: "",
	},
	instagram: {
		label: "Instagram",
		href: "",
	},
	linkedin: {
		label: "Linkedin",
		href: "",
	},
} as const;
