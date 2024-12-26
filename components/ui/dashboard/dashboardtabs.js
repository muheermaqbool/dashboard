"use client";
import * as React from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../tabs";

const tabs = [
  { name: "Overview", href: "#" },
  { name: "Analytics", href: "#" },
  { name: "Reports", href: "#" },
  { name: "Notifications", href: "#" },
];

export function DashBoardTabs() {
  return (
    <Tabs defaultValue="Overview" className="w-full ">
      <TabsList className="inline-flex bg-gray-100 p-1 rounded-lg">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.name}
            value={tab.name}
            className="px-4 py-1 text-sm font-medium rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <Link href={tab.href}>{tab.name}</Link>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
