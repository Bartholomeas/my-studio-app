import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { Button } from "@/components/common/ui/button";
import { Card, CardContent } from "@/components/common/ui/card";

interface BentoLongItemProps {
  title: string;
  text: string;
}

export const BentoLongItem = ({ title, text }: BentoLongItemProps) => {
  return <div className={"col-span-2 h-full"}>
    <Card
      variant={'darkGradient'}
      padding={'lg'}>
      <CardContent className={"p-0"}>
        <Title
          type={'h3'}
          color={'white'}
          className={"mb-2 text-2xl"}>
          {title}
        </Title>
        <Text color={'background'}>
          {text}
        </Text>
        <Button>Skontaktuj się z nami</Button>
      </CardContent>
    </Card>
  </div>;
};