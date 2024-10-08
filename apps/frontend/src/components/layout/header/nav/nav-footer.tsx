import { useMemo } from "react";

import { textVariants } from "@/components/common/text";
import { SOCIALS_LINKS } from "@/misc/routes";

export const NavFooter = () => {
	const socials = useMemo(() => Object.values(SOCIALS_LINKS), []);

	return (
		<div className={"flex w-full items-center gap-8"}>
			{socials.map(({ href, label }) => (
				<NavFooterLink key={`navFooterSocialLink-${href}-${label}`} href={href} label={label} />
			))}
		</div>
	);
};

type NavFooterLinkProps = {
	href: string;
	label: string;
};
const NavFooterLink = ({ href, label }: NavFooterLinkProps) => (
	<a
		className={textVariants({ color: "background" })}
		href={href}
		target={"_blank"}
		rel={"noopener noreferrer"}
	>
		{label}
	</a>
);
