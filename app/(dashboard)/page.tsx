import CardStatsWrapper, { StatsCards } from "@/components/card-stats-wrapper";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="container pt-4 px-4 mx-auto">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
    </div>
  );
}
