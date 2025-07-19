import { Button } from "@/components/ui/button";
import type { ITour } from "@/interface.types";
import { cn } from "@/lib/utils";
import { toggleCompleteState } from "@/redux/feature/tour/tourslice";
import { useAppDispatch } from "@/redux/hook";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Trash2 } from "lucide-react";
import { CheckIcon } from "lucide-react";

interface Iprops {
  task: ITour;
}

export default function TaskCard({ task }: Iprops) {
  const dispatch = useAppDispatch();

  return (
    <div className="border px-5 py-4 rounded-md shadow-sm bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start mb-2">
        <div className="flex items-center gap-2">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          />
          <h1 className={cn("text-lg font-semibold", task.isCompleted ? "line-through text-gray-400" : "dark:text-white")}>
            {task.title}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Checkbox
            checked={task.isCompleted}
            onCheckedChange={() => dispatch(toggleCompleteState(task.id))}
            className="size-5 border border-gray-400 rounded-sm cursor-pointer flex items-center justify-center data-[state=checked]:bg-blue-600"
          >
            {task.isCompleted && <CheckIcon className="w-3 h-3 text-white" />}
          </Checkbox>

          <Button variant="link" className="p-0 text-red-500">
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
      <p className={cn("text-sm", task.isCompleted ? "text-gray-400 line-through" : "text-gray-600 dark:text-gray-300")}>
        {task.description}
      </p>
    </div>
  );
}
