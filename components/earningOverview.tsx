"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
  { month: "July", desktop: 300 },
  { month: "August", desktop: 250 },
  { month: "September", desktop: 400 },
  { month: "October", desktop: 300 },
  { month: "November", desktop: 350 },
  { month: "December", desktop: 400 }
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-6)",
  },
} satisfies ChartConfig;

export function EarningOverview() {
  return (
    <Card className="shadow-none border-none">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription className="text-[#aaa7b6]">
          Monthly Earning
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={8}
              activeBar={{ fill: "#5932EA", cursor: "pointer" }} // Tailwind purple-500 HEX
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
