"use client"
import { Card } from "@/components/ui/card";
const StatCard = ({ 
  title, 
  value, 
  icon: Icon, 
  subtitle 
}) => {
  return (
    <Card className="p-4 flex justify-between items-center">
      <div className="w-full">
        <div className="flex justify-between">
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
        {Icon && (
        <div className="text-muted-foreground">
          <Icon className="w-5 h-5" />
        </div>
      )}
      </div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      
    </Card>
  );
};

export default StatCard;
