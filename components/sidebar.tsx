import { VercelLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChannelLink } from "@/components/channel-link";
import { Profile } from "@/components/profile";
import Link from "next/link";
type Props = {
  channels: {
    name: string;
  }[];
};

export const Sidebar: React.FC<Props> = ({ channels }) => {
  return (
    <aside className="relative hidden min-h-screen pb-12 border-r lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <Link
        href="/"
        className="flex items-center gap-2 px-8 py-6 text-2xl font-semibold tracking-tight duration-200 stroke-zinc-800 dark:text-zinc-200 dark:stroke-zinc-500 dark:hover:stroke-white hover:stroke-zinc-700 hover:text-zinc-700 dark:hover:text-white"
      >
        <VercelLogoIcon className="w-8 h-8 duration-200 " />
        Highstorm
      </Link>
      <div className="space-y-4">
        <div className="px-6 py-2">
          <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">{/* Events */}</h2>
          <div className="space-y-1">
            <Link href="/">
              <Button variant="ghost" size="sm" className="justify-start w-full">
                <VercelLogoIcon className="w-4 h-4 mr-2" />
                Overview
              </Button>
            </Link>
            <Link href="/keys">
              <Button variant="ghost" size="sm" className="justify-start w-full">
                <VercelLogoIcon className="w-4 h-4 mr-2" />
                API Keys
              </Button>
            </Link>
            <Link href="/channels">
              <Button variant="ghost" size="sm" className="justify-start w-full">
                <VercelLogoIcon className="w-4 h-4 mr-2" />
                Channels
              </Button>
            </Link>
            <Button variant="ghost" disabled size="sm" className="justify-start w-full">
              <VercelLogoIcon className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="ghost" disabled size="sm" className="justify-start w-full">
              <VercelLogoIcon className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-8 text-lg font-semibold tracking-tight">Channels</h2>
          <ScrollArea className="h-[230px] px-4">
            <div className="p-2 space-y-1">
              {channels
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((channel) => (
                  <ChannelLink
                    key={channel.name}
                    href={`/channels/${channel.name}`}
                    channelName={channel.name}
                  />
                ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      <div className="absolute inset-x-0 mx-6 bottom-8">
        <Profile />
      </div>
    </aside>
  );
};
