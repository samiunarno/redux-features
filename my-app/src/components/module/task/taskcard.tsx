// components/module/task/taskcard.tsx

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Pencil, Eye } from "lucide-react";
import { cn } from "@/lib/utils";


interface TaskCardProps {
  task: {
    id: string;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: string;
  };
}


export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="flex justify-between items-center flex-grow border p-4 rounded-md">
      <div>
        <div className="flex items-center gap-2">
          <div className= {cn("size-3 rounded-full",{
            "bg-green-500": task.priority === "Low",
            "bg-yellow-500": task.priority=== "Medium",
            "bg-blue-500" : task.priority === "High"
          })}>

          </div>
          
          
          
          <h1 className="text-base font-semibold">{task.title}</h1>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
        <p className="text-xs text-gray-400 mt-1">Due: {task.dueDate}</p>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-transparent hover:text-blue-500 cursor-pointer">
          <Pencil size={18} />
        </Button>

        <Button variant="ghost" size="icon" className="text-yellow-500 hover:bg-transparent hover:text-yellow-500 cursor-pointer">
          <Eye size={18} />
        </Button>

        <Button variant="ghost" size="icon" className="text-red-500 hover:bg-transparent hover:text-red-500 cursor-pointer">
          <Trash2 size={18} />
        </Button>

        <Checkbox className="cursor-pointer"  />
      </div>
    </div>
  );
}
