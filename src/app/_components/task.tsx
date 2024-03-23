import Image from "next/image";

export const Task = () => {
  return (
    <div className="grid grid-cols-4">
      <div className="w-full border-b border-stone-500">Task name</div>
      <div className="flex w-full border-b border-stone-500">
        <Image src="/assets/check.svg" width={16} height={16} alt="Check Icon" />
        <span className="pl-2">Status</span>
      </div>
      <div className="flex w-full border-b border-stone-500">
        <Image src="/assets/sort.svg" width={13} height={13} alt="Sort Icon" />
        <span className="pl-2">Priority</span>
      </div>
      <div className="flex w-full border-b border-stone-500">
        <Image src="/assets/summary.svg" width={13} height={13} alt="Summary Icon" />
        <div className="pl-2">Summary</div>
      </div>
      <div className="border-b border-r border-stone-500 px-8 py-1.5">
        Comprar comprar
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <div className="flex max-h-6 flex-row items-center rounded-l-full rounded-r-full bg-green-700 px-4">
          <div className="mr-3 h-2 w-2 rounded-full bg-green-600"></div>
          <span>Done</span>
        </div>
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <div className="flex max-h-6 flex-row items-center rounded bg-green-700 px-4">
          <span>Low</span>
        </div>
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <span>
          Escape from Tarkov is a multiplayer tactical first-person shooter
          video game in development by Battlestate Games for Microsoft Windows.
          The game is set in the fictional Norvinsk region in northwestern
          Russia, where a war is taking place between two private military
          companies.
        </span>
      </div>
    </div>
  );
};

/*
        <Image src={CheckIcon} width={16} height={16} alt="Check Icon" />
        <Image src={SortIcon} width={13} height={13} alt="Sort Icon" />
        <Image src={SummaryIcon} width={13} height={13} alt="Summary Icon" />
*/
