import Link from "next/link";

import { routes } from "@/misc/routes";

const ContactPage = () => {
  return (
    <main className={"flex h-screen items-center justify-center bg-white"}>
      <p>Xdd</p>
      <Link href={routes.home.url}>{routes.home.label}</Link>
    </main>
  );
};

export default ContactPage;
