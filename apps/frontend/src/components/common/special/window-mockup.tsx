import { AwardIcon } from "lucide-react";

export const WindowMockup = () => (
  <div className={"absolute -bottom-4 left-6 h-[340px] w-full overflow-hidden rounded-xl border border-zinc-700 bg-zinc-950/50 sm:h-[370px]"}>
    <MockupTopBar />
    <div className={"flex size-full"}>
      <MockupSideBar />
      <MockupMain />
    </div>
  </div>
);

const MockupSideBar = () => (
  <div className={"h-full w-24 border-r border-zinc-700 bg-zinc-900 p-2"}>
    <div className={"mb-4 flex items-center justify-between "}>
      <AwardIcon size={16} />
      <AwardIcon size={16} className={"text-blue-500"} />
    </div>
    <div className={"space-y-2"}>
      <div className={"flex items-center gap-1 rounded bg-zinc-700 px-1 py-0.5 text-xs text-zinc-200"}>
        <AwardIcon size={16} />
        Users
      </div>
      <div className={"flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600"}>
        <AwardIcon size={16} />
        Campaigns
      </div>
      <div className={"flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600"}>
        <AwardIcon size={16} />
        Goals
      </div>
      <div className={"flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600"}>
        <AwardIcon size={16} />
        Tools
      </div>
      <div className={"flex items-center gap-1 rounded px-1 py-0.5 text-xs text-zinc-600"}>
        <AwardIcon size={16} />
        Settings
      </div>
    </div>
  </div>
);

const MockupTopBar = () => (
  <div className={"flex gap-1 border-b border-zinc-700 bg-zinc-950 p-2"}>
    <div className={"size-2 rounded-full bg-red-600"}></div>
    <div className={"size-2 rounded-full bg-yellow-600"}></div>
    <div className={"size-2 rounded-full bg-green-600"}></div>
  </div>
);

const MockupMain = () => {
  return (
    <div className={"relative w-full"}>
      <div className={"relative z-0 w-full p-4"}>
        <div className={"w-full border-b border-zinc-700 pb-2 text-xs font-semibold uppercase text-zinc-500"}>
          <span>User</span>
        </div>

        Some things
      </div>
      <div className={"absolute inset-x-0 bottom-0 top-1/4 z-10 bg-gradient-to-b from-zinc-950/0 via-zinc-950/90 to-zinc-950"} />
    </div>
  );
};
