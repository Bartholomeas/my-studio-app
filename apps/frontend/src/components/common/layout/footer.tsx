
import Image from "next/image";
import Link from "next/link";

import { Text } from "../text";
import { Title } from "../title";

export const Footer = () => {
  return (
    <footer
      className={"relative h-[600px]"}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className={"relative bottom-0 top-[-100vh] h-[calc(100vh+600px)] w-full bg-primary"}>
        <div className={"container sticky top-[calc(100vh-600px)] flex h-[600px] flex-col justify-end pb-4"}>
          <div className={"flex flex-wrap gap-8 pt-8"}>
            <div className={"flex flex-col gap-4"}>
              <Image src={"/logo.png"} alt={"Nic Nudnego Studio Logo"} width={150} height={50} />
              <Text>Creative solutions for your digital needs</Text>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Title>Quick Links</Title>
              <Link href={"/about"}><Text>About Us</Text></Link>
              <Link href={"/services"}><Text>Services</Text></Link>
              <Link href={"/portfolio"}><Text>Portfolio</Text></Link>
              <Link href={"/contact"}><Text>Contact</Text></Link>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Title>Legal</Title>
              <Link href={"/privacy-policy"}><Text>Privacy Policy</Text></Link>
              <Link href={"/terms-of-service"}><Text>Terms of Service</Text></Link>
              <Link href={"/cookie-policy"}><Text>Cookie Policy</Text></Link>
            </div>
            <div className={"flex flex-col gap-2"}>
              <Title>Connect</Title>
              <Link href={"https://facebook.com/nicnudnegostudio"}><Text>Facebook</Text></Link>
              <Link href={"https://instagram.com/nicnudnegostudio"}><Text>Instagram</Text></Link>
              <Link href={"https://linkedin.com/company/nicnudnegostudio"}><Text>LinkedIn</Text></Link>
              <Link href={"https://twitter.com/nicnudnegostudio"}><Text>Twitter</Text></Link>
            </div>
          </div>
          <div className={"border-t border-black pt-4"}>
            <Text>&copy; {new Date().getFullYear()} Nic Nudnego Studio. All rights reserved.</Text>
          </div>
        </div>
      </div>
    </footer>
  );
};
