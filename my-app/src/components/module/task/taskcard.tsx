"use client";

import { Button } from "@/components/ui/button";
import type { ITour } from "@/interface.types";
import { cn } from "@/lib/utils";
import { deleteTask, toggleCompleteState } from "@/redux/feature/tour/tourslice";
import { useAppDispatch } from "@/redux/hook";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Trash2, CheckIcon } from "lucide-react";

interface Iprops {
  task: ITour;
}

export default function TaskCard({ task }: Iprops) {
  const dispatch = useAppDispatch();

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200";
      case "Low":
        return "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200";
      default:
        return "";
    }
  };

  return (
    <div className="relative w-full max-w-[250px] h-[250px] rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 shadow-sm flex flex-col justify-between">
      {/* Top: Title & Controls */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-2">
          <div
            className={cn("h-2.5 w-2.5 rounded-full", {
              "bg-red-500": task.priority === "Low",
              "bg-yellow-400": task.priority === "Medium",
              "bg-green-500": task.priority === "High",
            })}
          />
          <h2
            className={cn("text-sm font-semibold text-gray-900 dark:text-gray-100", {
              "line-through text-gray-400 dark:text-gray-500": task.isCompleted,
            })}
          >
            {task.title.length > 20 ? task.title.slice(0, 20) + "..." : task.title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={task.isCompleted}
            onCheckedChange={() => dispatch(toggleCompleteState(task.id))}
            className="size-4 border border-gray-400 dark:border-gray-600 rounded-sm cursor-pointer flex items-center justify-center data-[state=checked]:bg-blue-600 data-[state=checked]:dark:bg-blue-500"
          >
            {task.isCompleted && <CheckIcon className="w-2.5 h-2.5 text-white" />}
          </Checkbox>
          <Button
            onClick={() => dispatch(deleteTask(task.id))}
            variant="ghost"
            className="p-0 text-red-500 dark:text-red-400"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Middle: Description */}
      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
        {task.description}
      </p>

      {/* Bottom: Info */}
      <div className="mt-2 text-xs space-y-1 text-gray-700 dark:text-gray-300">
        <p>
          <span className="font-medium">Due:</span> {task.dueDate}
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium">Priority:</span>
          <span
            className={cn("px-2 py-0.5 rounded-full text-[10px] font-semibold", getPriorityBadge(task.priority))}
          >
            {task.priority}
          </span>
        </p>
        <p>
          <span className="font-medium">Status:</span>{" "}
          {task.isCompleted ? "Completed" : "Pending"}
        </p>
      </div>

      {/* Bottom Status Strip */}
      <div
        className={cn(
          "absolute bottom-0 left-0 w-full h-1 rounded-b-xl",
          task.isCompleted ? "bg-green-500" : "bg-gray-400"
        )}
      />
    </div>
  );
}
