import { VercelLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const SidebarHeader: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 sm:px-8 py-6 text-2xl font-semibold tracking-tight duration-200 stroke-zinc-800 dark:text-zinc-200 dark:stroke-zinc-500 dark:hover:stroke-white hover:stroke-zinc-700 hover:text-zinc-700 dark:hover:text-white"
    >
      <VercelLogoIcon className="w-8 h-8 duration-200 " />
      Highstorm
    </Link>
  );
};
