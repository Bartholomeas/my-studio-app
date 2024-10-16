import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { Card, CardContent } from "@/components/common/ui/card";

interface BentoDefaultItemProps {
  title: string;
  text: string;
}
export const BentoDefaultItem = ({ title, text }: BentoDefaultItemProps) => {
  return <div className={"col-span-2 md:col-span-1"}>
    <Card variant={'darkGradient'} padding={'lg'}>
      <CardContent className={"p-0"}>
        <Title color={'white'} type={'h3'} className={"mb-2 text-2xl"}>{title}</Title>
        <Text color={'background'} className={"mb-8"}>
          {text}
        </Text>
      </CardContent>
    </Card>
  </div>;
};
