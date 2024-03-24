interface Props {
  taskname: string;
  status: string;
  priority: string;
  summary: string | null;
}

export const Task: React.FC<Props> = (props) => {
  return (
    <>
      <div className="border-b border-r border-stone-500 px-8 py-1.5">
        {props.taskname}
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <span>{props.status}</span>
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <span>{props.priority}</span>
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <span>{props.summary}</span>
      </div>
    </>
  );
};

/*
    <>
      <div className="border-b border-r border-stone-500 px-8 py-1.5">
        {props.taskname}
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <div className="flex max-h-6 flex-row items-center rounded-l-full rounded-r-full bg-green-700 px-4">
          <div className="mr-3 h-2 w-2 rounded-full bg-green-600"></div>
          <span>{props.status}</span>
        </div>
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <div className="flex max-h-6 flex-row items-center rounded bg-green-700 px-4">
          <span>{props.priority}</span>
        </div>
      </div>
      <div className="flex flex-row border-b border-r border-stone-500 px-8 py-1.5">
        <span>{props.summary}</span>
      </div>
    </>
*/
