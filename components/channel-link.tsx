"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { FrameIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";

type Props = {
  href: string;
  channelName: string | null;
};

export const ChannelLink: React.FC<Props> = ({ href, channelName }) => {
  const isActive = channelName === useSelectedLayoutSegments().at(1);
  return (
    <Link href={href}>
      <Button
        variant={isActive ? "secondary" : "ghost"}
        size="sm"
        className="justify-start w-full font-normal"
      >
        <FrameIcon className="w-4 h-4 mr-2" />
        {channelName}
      </Button>
    </Link>
  );
};
