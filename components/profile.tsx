"use client";

import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,

} from "@/components/ui/dropdown-menu";
import { VercelLogoIcon, CaretSortIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ThemeToggleDropdown } from "@/components/theme-toggle-dropdown";

import { Loading } from "@/components/loading";


// mock functions and data

const signOut = async () => {
  console.log('signOut',);
}

const user = {
  profileImageUrl: "https://github.com/shadcn.png",
  username: "peterp",
}

const currentOrg = {
  id: "1",
  name: "Personal",
  slug: "personal",
}

type Props = {};

export const Profile: React.FC<Props> = (): JSX.Element => {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  return (
    <DropdownMenu>
      {loading ? (
        <Loading />
      ) : (
        <DropdownMenuTrigger className="flex items-center justify-between w-full px-2 py-1 rounded gap-4 hover:bg-zinc-100 dark:hover:bg-zinc-700">
          <div className="flex items-center justify-start w-full gap-4 ">
            <Avatar>
              {user?.profileImageUrl ? (
                <AvatarImage src={user.profileImageUrl} alt={user.username ?? "Profile picture"} />
              ) : null}
              <div className="flex items-center justify-center w-8 h-8 overflow-hidden border rounded-md bg-zinc-100 border-zinc-500 text-zinc-700">
                {(currentOrg?.slug ?? user?.username ?? "").slice(0, 2).toUpperCase() ?? "P"}
              </div>
            </Avatar>
            <span>{currentOrg?.name ?? "Personal"}</span>
          </div>
          {/* <PlanBadge plan={currentTeam?.plan ?? "DISABLED"} /> */}
          <CaretSortIcon className="w-4 h-4" />
        </DropdownMenuTrigger>
      )}
      <DropdownMenuContent className="w-full lg:w-56" align="end" forceMount>
        <DropdownMenuGroup>
          <Link href="/onboarding">
            <DropdownMenuItem>
              <VercelLogoIcon className="w-4 h-4 mr-2" />
              <span>Onboarding</span>
            </DropdownMenuItem>
          </Link>
          <Link href="/docs" target="_blank">
            <DropdownMenuItem>
              <VercelLogoIcon className="w-4 h-4 mr-2" />
              <span>Docs</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <ThemeToggleDropdown />

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <button
              onClick={async () => {
                await signOut();
                router.refresh();
              }}
              className="w-full"
            >
              <VercelLogoIcon className="w-4 h-4 mr-2" />
              <span>Sign out</span>
            </button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
