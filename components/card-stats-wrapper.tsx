import { getFormStats } from "@/actions/form";
import { LucideView } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface StatsCardsProps {
  data?: Awaited<ReturnType<typeof getFormStats>>;
  loading: boolean;
}

interface StatsCardProps {
  title: string;
  icon: React.ReactNode;
  helperText: string;
  value: string;
  loading: boolean;
  className?: string;
}

async function CardStatsWrapper() {
  const data = await getFormStats();
  return <StatsCards data={data} loading={false} />;
}

function StatsCards(props: StatsCardsProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total Visits"
        icon={<LucideView className="text-blue-600" />}
        helperText="All time form visits"
        value={data?.visits?.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
    </div>
  );
}

function StatsCard({
  title,
  icon,
  helperText,
  value,
  loading,
  className,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && <Skeleton>0</Skeleton>}
        </div>
      </CardContent>
    </Card>
  );
}

export default CardStatsWrapper;
