import { DefaultPage } from "./analytics";

export default async function Page(props: {
  params: { channelName: string };
}) {
  const params = props 

  const channel = {
    id: "1",
    name: "Test Channel",
  }

  return <DefaultPage channel={{ id: channel.id, name: channel.name }} />;
}
