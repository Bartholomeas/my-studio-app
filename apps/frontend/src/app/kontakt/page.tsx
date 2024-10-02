import Link from "next/link";

import { routes } from "@/misc/routes";

const ContactPage = () => {
	return (
		<main className={"flex h-screen items-center justify-center bg-white"}>
			<p>Xdd</p>
			<Link href={routes.home}>HOME</Link>
		</main>
	);
};

export default ContactPage;
