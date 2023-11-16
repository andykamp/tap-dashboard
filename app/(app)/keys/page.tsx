import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/empty-state";

export default async function Page(_props: { params: { tenantSlug: string } }) {
  return (
    <div className="">
        <PageHeader title="ApiKeys" actions={[
          <Button key="CreateKey">
            Create Key
          </Button>
        ]} />

        <EmptyState
          className="mt-8"
          title="Pretty empty around here"
          description="Let's create your first key."
        />
    </div>
  );
}
