import { cn } from "@/lib/utils";
import { Navbar } from "./navbar";

type Props = {
  channel: {
    name: string;
  };
  stats?: {
    label: string;
    value: string;
    unit?: string;
  }[];

  actions?: React.ReactNode[];
};

export const Header: React.FC<Props> = ({ channel, stats, actions }) => {
  return (
    <header className="h-32">
      {/* Secondary navigation */}

      <Navbar channelName={channel.name} />

      {/* Heading */}
      <div className="flex flex-row items-center justify-between h-16 px-4 py-4 border-y gap-x-8 gap-y-4 sm:px-6 lg:px-8">
        <div>
          <div className="flex items-center gap-x-3 ">
            {/* <div className="flex-none p-1 text-green-400 rounded-full bg-green-400/10">
                <div className="w-2 h-2 rounded-full bg-current" />
              </div> */}
            <h1 className="flex text-base gap-x-2 leading-7">
              {/* {user.orgSlug} */}
              <span className="font-semibold">{channel.name}</span>
              {/* {channel.name.split(".").map((part, i) => (
                <>
                  {i !== 0 ? <span className="text-zinc-600">/</span> : null}
                  <span className="font-semibold text-white">{part}</span>
                </>
              ))} */}
            </h1>
          </div>
          {/* <p className="mt-2 text-xs leading-6 text-zinc-400">{channel.description}</p> */}
        </div>
        <div className="flex items-center gap-2 lg:gap-4">{actions}</div>
      </div>
      {stats ? (
        <div
          className={cn(
            "grid grid-cols-1  sm:grid-cols-2  border-b h-32",
            {
              "lg:grid-cols-2": stats.length === 2,
              "lg:grid-cols-3": stats.length === 3,
              "lg:grid-cols-4": stats.length >= 4,
            },
          )}
        >
          {stats.map((stat, statIdx) => (
            <div
              key={stat.label}
              className={cn(
                statIdx % 2 === 1 ? "sm:border-l" : statIdx === 2 ? "lg:border-l" : "",
                "border-t py-6 px-4 sm:px-6 lg:px-8",
              )}
            >
              <p className="text-sm font-medium leading-6">{stat.label}</p>
              <p className="flex items-baseline mt-2 gap-x-2">
                <span className="text-4xl font-semibold tracking-tight">
                  {stat.value}
                </span>
                {stat.unit ? <span className="text-sm">{stat.unit}</span> : null}
              </p>
            </div>
          ))}
        </div>
      ) : null}
    </header>
  );
};
