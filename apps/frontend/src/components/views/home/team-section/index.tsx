import Image from "next/image";

import { CtaCircle } from "@/components/common/special/cta-circle";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";

import MePicture from './../../../../../public/team/me.jpg';

export const TeamSection = () => {
  return (
    <section className={"relative min-h-screen bg-background-light py-24"}>
      <div className={"container flex flex-col gap-2"}>

        <div className={"flex flex-col"}>
          <Title
            type={'h2'}
            weight={'bold'}>To nasza załoga</Title>
          <Text
            size={'sm'}
            color={'primary'}
            weight={'semibold'}
          >To znaczy narazie tylko ja XD</Text>
        </div>
        <Image
          src={MePicture}
          loading={"lazy"}
          placeholder={"blur"}
          alt={"Me"}
          height={200}
          width={200}
        />
        <CtaCircle />
      </div>
    </section>);
};
