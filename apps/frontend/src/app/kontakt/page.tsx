import Link from "next/link";

import { routes } from "@/misc/routes";

const ContactPage = () => {
  return (
    <main className="h-screen bg-white flex items-center justify-center">
      <p>Xdd</p>
      <Link href={routes.home}>HOME</Link>
    </main>
  );
};

export default ContactPage;