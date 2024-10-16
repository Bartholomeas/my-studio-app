import { AwardIcon, HammerIcon, SettingsIcon, TargetIcon, UserIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Text } from "../text";
import { Skeleton } from "../ui/skeleton";

export const WindowMockup = () => (
  <div className={"absolute -bottom-4 left-6 h-[340px] w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/50 sm:h-[370px]"}>
    <MockupTopBar />
    <div className={"flex size-full"}>
      <MockupSideBar />
      <MockupMain />
    </div>
  </div>
);

const MockupSideBar = async () => {
  const t = await getTranslations('common.windowMockup');

  return <div className={"h-full w-32 border-r border-zinc-700 bg-zinc-900 p-2"} >
    <div className={"mb-4 flex items-center justify-between "}>
      <AwardIcon size={16} className={"text-primary"} />
    </div>
    <div className={"space-y-2"}>
      <div className={"flex items-center gap-1 rounded bg-zinc-700 px-1 py-0.5 text-xs text-zinc-200"}>
        <UserIcon size={16} />
        <Text
          color={'white'}
          size={"xxxs"}
          className={"truncate"}>{t('sidebar.users')}</Text>
      </div>
      <div className={"flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600"}>
        <TargetIcon size={16} />
        <Text
          color={'light'}
          size={"xxxs"}
          className={"truncate"}
        >{t('sidebar.goals')}</Text>
      </div>
      <div className={"flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600"}>
        <HammerIcon size={16} />
        <Text
          color={'light'}
          size={"xxxs"}
          className={"truncate"}
        >{t('sidebar.tools')}</Text>
      </div>
      <div className={"flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600"}>
        <SettingsIcon size={16} />
        <Text
          color={'light'}
          size={"xxxs"}
          className={"truncate"}
        >{t('sidebar.settings')}</Text>
      </div>
    </div>
  </div>;
};

const MockupTopBar = () => (
  <div className={"flex gap-1 border-b border-zinc-700 bg-zinc-950 p-2"}>
    <div className={"size-2 rounded-full bg-red-600"}></div>
    <div className={"size-2 rounded-full bg-yellow-600"}></div>
    <div className={"size-2 rounded-full bg-green-600"}></div>
  </div>
);

const MockupMain = async () => {
  const t = await getTranslations('common.windowMockup');

  return (
    <div className={"relative w-full"}>
      <div className={"relative z-0 w-full p-4"}>
        <div className={"w-full border-b border-zinc-700 pb-2 text-xs font-semibold uppercase text-zinc-500"}>
          <span>{t('content.title')}</span>
        </div>

        <div className={"flex size-full flex-col gap-4 py-2"}>
          {new Array(8).fill(null).map((_, index) => (
            <div key={`skeletonUserMockup-${index}`} className={"flex items-center gap-2"}>
              <Skeleton className={"size-4 rounded-full bg-foreground-muted"} />
              <Skeleton className={`h-4 rounded-full bg-foreground-muted ${index % 4 === 0 ? "w-32" :
                index % 4 === 1 ? "w-36" :
                  index % 4 === 2 ? "w-40" :
                    "w-44"
                }`} />
            </div>
          ))}
        </div>
      </div>
      <div className={"absolute inset-x-0 bottom-0 top-1/4 z-10 bg-gradient-to-b from-zinc-950/0 via-zinc-950/90 to-zinc-950"} />
    </div>
  );
};
