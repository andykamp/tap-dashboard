import { Sidebar } from "@/components/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function Layout({ children }: LayoutProps) {

  const channels = [
    { name: "channel1" },
    { name: "channel2" },
    { name: "channel3" },
  ]

  return (
    <div>
      <Sidebar channels={channels.map((c) => ({ name: c.name }))} />

      <div className=" lg:pl-72">{children}</div>
    </div>
  );
}

