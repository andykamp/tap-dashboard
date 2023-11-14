"use client";


import { EmptyState } from "@/components/empty-state";
import {
  DropdownMenu,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuShortcut,

} from "@/components/ui/dropdown-menu";
import { Header } from "./header";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, TrashIcon } from "@radix-ui/react-icons";

type Props = {
  channel: { id: string; name: string; description?: string };
};

export const DefaultPage: React.FC<Props> = ({ channel }) => {
  return (
    <div>
      <Header
        channel={{ name: channel.name }}
        actions={[
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                <HamburgerMenuIcon className="w-5 h-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel>Channel Settings</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <Button size="sm" variant="ghost" className="w-full flex-row justify-start">
                  <TrashIcon className="w-4 h-4 mr-2" />
                  <span>Delete</span>
                </Button>
              </DropdownMenuGroup>
              <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        ]}
      />

      <EmptyState
        title="Nothing happened yet"
        description="Send an event to this channel and then come back."
      />
    </div>
  );
};
