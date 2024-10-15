
import { WindowMockup } from "@/components/common/special/window-mockup";
import { Text } from "@/components/common/text";
import { Title } from "@/components/common/title";
import { Card, CardContent } from "@/components/common/ui/card";

export const BentoHighItem = () => {
  return <div className={"col-span-1 h-full min-h-[600px] lg:col-span-4"}>
    <Card variant={'dark'}>
      <CardContent>
        <Title color={'white'} type={'h3'} className={"mb-2 text-2xl"}>Show your product</Title>
        <Text color={'background'} className={"mb-8"}>
          These cards are a great place to give a high level break down of what
          your website is about. Try to talk about benefits instead of features.
        </Text>
        <WindowMockup />
      </CardContent>
    </Card>
  </div>;
};
