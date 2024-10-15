import { Text } from "@/components/common/text";
import { Button } from "@/components/common/ui/button";
import { Card } from "@/components/common/ui/card";

export const BentoLongItem = () => {
  return <div className={"col-span-2 h-full sm:h-[220px]"}>
    <Card variant={'dark'}>
      <Text color={'background'} className={"mb-8"}>
        These cards are a great place to give a high level break down of what
        your website is about. Try to talk about benefits instead of features.
      </Text>
      <Button>Baton</Button>
    </Card>
  </div>;
};