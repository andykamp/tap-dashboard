// import { SidebarHeader } from "@/components/sidebar-header";
// import { SidebarContent } from "@/components/sidebar-content";
import { HamburgerMenuIcon, HomeIcon, PersonIcon, ReaderIcon, ShuffleIcon } from "@radix-ui/react-icons";
import { Profile } from "@/components/profile";
import Link from "next/link";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTrigger,
// } from "@/components/ui/sheet"

type Props = {
  channels: {
    name: string;
  }[];
};

// with sheet
// export const SidebarMobile: React.FC<Props> = ({ channels }) => {
//   return (
//     <header className="flex flex-row lg:hidden justify-between items-center p-4">

//       <Sheet>
//         <SheetTrigger>
//           <HamburgerMenuIcon />
//         </SheetTrigger>
//         <SheetContent side="left">
//           <SheetHeader className="text-left">
//             <SidebarHeader />
//           </SheetHeader>
//           <SidebarContent channels={channels} />
//         </SheetContent>
//       </Sheet>
//       <div className="w-44">
//         <Profile />
//       </div>
//     </header>
//   );
// };

// at bottom
export const SidebarMobile: React.FC<Props> = ({ channels }) => {
  return (
    <header className="fixed bottom-0 left-0 right-0 flex lg:hidden flex-row justify-between items-center p-4 border-t h-20">
      <Link href="/">
        <HomeIcon />
      </Link>
      <Link href="/keys">
        <ReaderIcon />
      </Link>
      <Link href="/channels">
        <ShuffleIcon />
      </Link>
      <Profile />
    </header>
  );
};
