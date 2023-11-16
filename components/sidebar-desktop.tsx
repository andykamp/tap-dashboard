import { SidebarContent } from "@/components/sidebar-content";
import { SidebarHeader } from "@/components/sidebar-header";
type Props = {
  channels: {
    name: string;
  }[];
};

export const SidebarDesktop: React.FC<Props> = ({ channels }) => {
  return (
    <aside className="relative min-h-screen pb-12 border-r hidden sm:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <SidebarHeader />
      <SidebarContent channels={channels} />
    </aside>
  );
};
