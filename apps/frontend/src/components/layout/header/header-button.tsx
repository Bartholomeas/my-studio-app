import { motion } from "framer-motion";

import { Button } from "@/components/common/ui/button";
import { cn } from "@/lib/utils";

const beforeClasses =
	'before:absolute before:left-1/2 before:-translate-x-1/2 before:block before:h-[2px] before:w-2/5 before:bg-black before:transition-all before:duration-300 before:content-[""] before:rounded-full before:z-[150]';

const afterClasses =
	'after:absolute after:left-1/2 after:-translate-x-1/2 after:block after:h-[2px] after:w-2/5 after:bg-black after:transition-all after:duration-300 after:content-[""] after:rounded-full after:z-[150]';

type HeaderButtonProps = {
	isActive: boolean;
	toggleMenu: () => void;
};

export const HeaderButton = ({ isActive = false, toggleMenu }: HeaderButtonProps) => {
	return (
		<Button
			onClick={toggleMenu}
			variant={"ghost"}
			className={"z-[51] size-10 rounded-full bg-primary p-0"}
			aria-label={isActive ? "Close menu" : "Open menu"}
			aria-expanded={isActive}
			aria-controls={"navigation-menu"}
		>
			<motion.div
				className={"flex size-full cursor-pointer items-center justify-center"}
				whileTap={{ scale: 0.9 }}
				role={"presentation"}
			>
				<span
					className={cn(
						"relative h-full w-full before:top-[calc(50%-3px)] after:top-[calc(50%+3px)]",
						beforeClasses,
						afterClasses,
						{ "before:top-1/2 before:rotate-45 after:top-1/2 after:-rotate-45": isActive },
					)}
					aria-hidden={"true"}
				></span>
			</motion.div>
		</Button>
	);
};
