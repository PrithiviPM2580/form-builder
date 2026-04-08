import { getFormStats } from "@/actions/form";
import {
  ClipboardListIcon,
  LucideView,
  MousePointerClickIcon,
  TrendingUpDownIcon,
} from "lucide-react";
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

export async function CardStatsWrapper() {
  const data = await getFormStats();
  return <StatsCards data={data} loading={false} />;
}

export function StatsCards(props: StatsCardsProps) {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
      <StatsCard
        title="Total Visits"
        icon={<LucideView className="text-blue-600" />}
        helperText="All time form visits"
        value={data?.visits?.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-blue-600"
      />
      <StatsCard
        title="Total Submissions"
        icon={<ClipboardListIcon className="text-yellow-600" />}
        helperText="Visits that result in  form submission"
        value={data?.submissions?.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-yellow-600"
      />
      <StatsCard
        title="Submission Rate"
        icon={<MousePointerClickIcon className="text-green-600" />}
        helperText="Percentage of visits that result in form submission"
        value={data?.submissionRate?.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-green-600"
      />
      <StatsCard
        title="Bounce Rate"
        icon={<TrendingUpDownIcon className="text-red-600" />}
        helperText="Visits that leaves without interacting"
        value={data?.bounceRate?.toLocaleString() || ""}
        loading={loading}
        className="shadow-md shadow-red-600"
      />
    </div>
  );
}

export function StatsCard({
  title,
  icon,
  helperText,
  value,
  loading,
  className,
}: StatsCardProps) {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {loading && (
            <Skeleton>
              <span className="opacity-0">0</span>
            </Skeleton>
          )}
          {!loading && value}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helperText}</p>
      </CardContent>
    </Card>
  );
}

export default CardStatsWrapper;
