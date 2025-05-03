import { getTranslations } from "next-intl/server";

import { DrawingPath } from "@/features/common/components/animations/drawing-path";
import { BarChartMock } from "@/features/common/components/bar-chart-mock";

import { BentoDefaultItem } from "./bento-default-item";
import { BentoHighItem } from "./bento-high-item";
import { BentoLongItem } from "./bento-long-item";

export const BentoGrid = async () => {
  const t = await getTranslations("/.aboutSection");

  return (
    <div className={"grid min-h-[50vh] grid-cols-1 gap-4 lg:grid-cols-12"}>
      <BentoHighItem title={t("cards.title1")} text={t("cards.text1")} />
      <div className={"col-span-1 grid grid-cols-2 gap-4 lg:col-span-8 lg:grid-cols-2"}>
        <BentoDefaultItem
          title={t("cards.title2")}
          text={t("cards.text2")}
          addiitonalContent={<DrawingPath />}
        />
        <BentoDefaultItem
          title={t("cards.title3")}
          text={t("cards.text3")}
          transition={{
            delay: 0.1,
          }}
          addiitonalContent={<BarChartMock />}
        />

        <BentoLongItem title={t("cards.title4")} text={t("cards.text4")} />
      </div>
    </div>
  );
};
