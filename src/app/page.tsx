import Image from "next/image";
import { Task } from "./_components/task";
import { api } from "~/trpc/server";

enum Status {
  DONE = "Done",
  IN_PROGRESS = "In progress",
  NOT_STARTED = "Not started",
}

enum Priority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

interface Tasks {
  task_id: number;
  taskname: string;
  status: string;
  priority: string;
  summary: string;
}

export default async function Home() {

  const fetchedTasks = await api.tasks.getTasks();
  return (
    <main className="flex min-h-screen flex-col bg-stone-900 px-24 pt-24 text-white text-opacity-75">
      <div className="flex flex-row items-start">
        <Image
          src="/assets/check-list.svg"
          width={32}
          height={32}
          alt="Check Icon"
        />
        <h1 className="pl-3 text-3xl font-extrabold">Tasks</h1>
      </div>
      <div className="relative flex flex-row items-center py-2">
        <hr className="absolute bottom-0 w-full"></hr>
      </div>
      <div className="flex flex-row items-center py-6">
        <div className="flex flex-row pr-4">
          <Image
            src="/assets/check.svg"
            width={16}
            height={16}
            alt="Check Icon"
          />
          <select className="border-none bg-transparent outline-none">
            <option value="">All</option>
            <option value="not-started">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        <div className="flex flex-row">
          <Image src="/assets/sort.svg" width={8} height={13} alt="Sort Icon" />
          <select className="border-none bg-transparent outline-none">
            <option value="">Priority</option>
            <option value="not-started">Low</option>
            <option value="in-progress">Medium</option>
            <option value="done">High</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <div className="w-full border-b border-stone-500">Task name</div>
        <div className="flex w-full border-b border-stone-500">
          <Image
            src="/assets/check.svg"
            width={16}
            height={16}
            alt="Check Icon"
          />
          <span className="pl-2">Status</span>
        </div>
        <div className="flex w-full border-b border-stone-500">
          <Image
            src="/assets/sort.svg"
            width={13}
            height={13}
            alt="Sort Icon"
          />
          <span className="pl-2">Priority</span>
        </div>
        <div className="flex w-full border-b border-stone-500">
          <Image
            src="/assets/summary.svg"
            width={13}
            height={13}
            alt="Summary Icon"
          />
          <div className="pl-2">Summary</div>
        </div>
        {fetchedTasks.map((task) => (
          <Task
            taskname={task.taskName}
            status={task.status}
            priority={task.priority}
            summary={task.summary}
            key={task.taskId}
          />
        ))}
      </div>
      <div className="flex cursor-pointer flex-row items-center border-b border-stone-500 py-2">
        <Image src="/assets/plus.svg" width={13} height={13} alt="Sort Icon" />
        <span className="pl-2 text-stone-500">New</span>
      </div>
    </main>
  );
}

/*
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

      {task.map((task: Tasks) => (
        <Task 
          taskname={task.taskname}
          status={task.status}
          priority={task.priority}
          summary={task.summary}
          key={task.task_id}
        />
      ))}
*/

/*
      <div className="flex flex-row items-start">
        <Image src={CheckIcon} width={32} height={32} alt="Check Icon" />
        <h1 className="pl-3 text-3xl font-extrabold">Tasks</h1>
      </div>
<div className="container flex flex-col items-center justify-center gap-12 px-24 pt-24 "></div>
*/

/*
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-[hsl(280,100%,70%)]">T3</span> App
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">First Steps →</h3>
            <div className="text-lg">
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className="text-2xl font-bold">Documentation →</h3>
            <div className="text-lg">
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-2xl text-white">
            {hello ? hello.greeting : "Loading tRPC query..."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-center text-2xl text-white">
              {session && <span>Logged in as {session.user?.name}</span>}
            </p>
            <Link
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
              className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20"
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </div>
        </div>

        <CrudShowcase />
      </div>
    </main>

    async function CrudShowcase() {
  const session = await getServerAuthSession();
  if (!session?.user) return null;

  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}

function useClient() {
  throw new Error("Function not implemented.");
}
*/
