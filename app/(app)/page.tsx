import { cn } from "@/lib/utils";

export default async function Page(_props: {
  params: { tenantSlug: string };
}) {

  const tenant = {
    slug: "Test Tenant",
    plan: "FREE"
  }

  const stats: {
    label: string;
    value: string;
  }[] = [
      {
        label: "Total Channels",
        value: "0"
      },
      {
        label: "Total Events (7 days)",
        value: "0"
      },
      {
        label: "Total Events (7 days)",
        value: "0"
      },
      {
        label: "Total Events (7 days)",
        value: "0"
      },
    ];

  return (
    <main>
      <div className="relative overflow-hidden">
        <div>

          <section className="flex items-start justify-between h-16 border-b gap-x-8 gap-y-4 px-4 sm:px-6 py-4 lg:px-8">
            <div>
              <div className="flex items-center gap-x-3 ">
                <h1 className="flex text-base gap-x-2 leading-7">
                  <span className="font-semibold">
                    {tenant.slug ?? "Personal Account"}
                  </span>
                </h1>
              </div>
            </div>
            <div className="px-2 py-1 text-xs font-medium rounded-full bg-rose-400/10 text-rose-400 ring-1 ring-inset ring-rose-400/30">
              {tenant.plan}
            </div>
          </section>

          <section
            className={cn(
              "grid grid-cols-2 bg-zinc-700/10 border-b",
              {
                "lg:grid-cols-2": stats.length === 2,
                "lg:grid-cols-3": stats.length === 3,
                "lg:grid-cols-4": stats.length >= 4,
              },
            )}
          >
            {stats.map((stat, statIdx) => (
              <div
                key={stat.label}
                className={cn(
                  statIdx % 2 === 1 ? "border-l" : statIdx === 2 ? "lg:border-l" : "",
                  "flex items-baseline flex-wrap justify-between gap-y-2 gap-x-4 border-t px-4 sm:px-6 xl:px-8 py-10 lg:border-t-0 ",
                )}
              >
                <dt className="text-sm font-medium leading-6 ">{stat.label}</dt>
                <dd className="flex-none w-full text-3xl font-medium tracking-tight leading-10">
                  {stat.value}
                </dd>
              </div>
            ))}
          </section>

        </div>
      </div>

      <div className="py-16 space-y-16 xl:space-y-20">
        <div>
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="max-w-2xl mx-auto text-base font-semibold leading-6 lg:mx-0 lg:max-w-none">
              Recent events
            </h2>
          </div>
          <div className="mt-6 overflow-x-hidden overflow-y-scroll border-t">
            <div className="mx-auto max-w-7xl ">
              <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
                <table className="w-full text-left ">
                  <thead className="sr-only">
                    <tr>
                      <th>Event</th>
                      <th className="hidden sm:table-cell">Content</th>
                      <th>More details</th>
                    </tr>
                  </thead>
                  <tbody>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
