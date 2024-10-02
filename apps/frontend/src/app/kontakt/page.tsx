import Link from "next/link";

import { APP_ROUTES } from "@/misc/routes";

const ContactPage = () => {
  return (
    <main className={"flex h-screen items-center justify-center bg-white"}>
      <p>Xdd</p>
      <Link href={APP_ROUTES.home.href}>{APP_ROUTES.home.label}</Link>
    </main>
  );
};

export default ContactPage;
