import { BentoDefaultItem } from "./bento-default-item";
import { BentoHighItem } from "./bento-high-item";
import { BentoLongItem } from "./bento-long-item";

export const BentoGrid = () => {
  return (
    <div className={"grid min-h-[50vh] grid-cols-1 gap-0 lg:grid-cols-12"}>
      <BentoHighItem />
      <div className={"col-span-1 grid grid-cols-2 lg:col-span-8 lg:grid-cols-2"}>
        <BentoDefaultItem />
        <BentoDefaultItem />
        <BentoLongItem />
      </div>
    </div>
  );
};


