"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, },
  { month: "February", desktop: 305, },
  { month: "March", desktop: 237,  },
  { month: "April", desktop: 73, },
  { month: "May", desktop: 209,  },
  { month: "June", desktop: 214,  },
  { month: "Jule", desktop: 314, },
  { month: "Aug", desktop: 104, },
  { month: "Sep", desktop: 34, },
  { month: "Oct", desktop: 201,},
  { month: "Nob", desktop: 304,  },
  { month: "Dec", desktop: 104, },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#75fd71",
  },
}

export function Chart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData} barCategoryGap={5}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)} 
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={10}
          tickFormatter={(value) => `${value}`} // Customize tick format
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar
          dataKey="desktop"
          fill={chartConfig.desktop.color}
          radius={4}
        />
      </BarChart>
    </ChartContainer>
  )
}

