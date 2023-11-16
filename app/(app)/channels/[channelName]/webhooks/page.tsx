import { EmptyState } from "@/components/empty-state";
import { Header } from "../header";
import { Button } from "@/components/ui/button";

export default async function Page(props: { params: { tenantSlug: string; channelName: string } }) {
  const { channelName } = props.params;

  return (
    <div>
      <Header
        channel={{ name: channelName }}
        actions={[
          <Button key="CreateWebhook">
            Create webook
          </Button>
        ]}
      />
      <EmptyState
        title="No webhooks found"
        description="Create your first webhook by clicking the menu button above"
      />
    </div>
  );
}
