"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Users, ShoppingBag, Activity } from "lucide-react";
import { DatePickerWithRange } from "@/components/datepicker";
import StatCard from "./statecard";
import { Chart } from "./chart";
import { DashBoardTabs } from "./dashboardtabs";


const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      icon: DollarSign,
      subtitle: "+20.1% from last month",
    },
    {
      title: "Subscriptions",
      value: "+2,350",
      icon: Users,
      subtitle: "+180.1% from last month",
    },
    {
      title: "Sales",
      value: "+12,234",
      icon: ShoppingBag,
      subtitle: "+19% from last month",
    },
    {
      title: "Active Now",
      value: "+573",
      icon: Activity,
      subtitle: "+201 since last hour",
    },
  ];
 

  return (
    <div className="p-6">
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex gap-2">
          <DatePickerWithRange />
          <Button>Download</Button>
        </div>
      </div>
      <div className="mb-4">
        <DashBoardTabs />
      </div>
      <div className="mb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            subtitle={stat.subtitle}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="col-span-1 sm:col-span-2 lg:col-span-2 p-4">
          <h2 className="font-bold mb-4">Overview</h2>
          <Chart/>
        </Card>
        <Card className="p-4">
          <h2 className="font-bold">Recent Sales</h2>
          <p className="m-0 font-thin text-sm">You made 265 sales this month</p>
          <div>
            {/* show table here  */}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
