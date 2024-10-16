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
      variant={'dark'}
      padding={'lg'}
      className={"relative rounded-br-[100px] bg-primary  lg:rounded-br-full"}
    >
      <CardContent className={"flex flex-col gap-2 p-0 pr-8"}>
        <Title
          type={'h3'}
          className={"text-2xl"}>
          {title}
        </Title>
        <Text size={'lg'}>
          {text}
        </Text>
        <Button>Skontaktuj się z nami</Button>
      </CardContent>
    </Card>
  </div>;
};