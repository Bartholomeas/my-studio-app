import { type ReactNode } from "react";

import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { Card, CardContent } from "@/components/common/ui/card";

interface BentoDefaultItemProps {
  title: string;
  text: string;
  addiitonalContent?: ReactNode;
}
export const BentoDefaultItem = ({ title, text, addiitonalContent }: BentoDefaultItemProps) => {
  return <div className={"col-span-2 md:col-span-1"}>
    <Card variant={'darkGradient'} padding={'lg'}>
      <CardContent className={"flex h-full flex-col gap-2 p-0"}>
        <Title color={'white'} type={'h3'} className={"mb-2 text-2xl"}>{title}</Title>
        <Text color={'background'} className={"mb-8"}>
          {text}
        </Text>
        {addiitonalContent}
      </CardContent>
    </Card>
  </div>;
};
