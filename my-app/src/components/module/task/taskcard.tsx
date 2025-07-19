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

  return (
    <div className="border px-5 py-4 rounded-md shadow-sm bg-white dark:bg-gray-800">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2">
          <div
            className={cn("size-3 rounded-full", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          /> 
          <h1 className="text-lg font-semibold dark:text-white break-all">
            {task.title  || "Not Defined"}
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <Checkbox
            checked={task.isCompleted}
            onCheckedChange={(checked) => {
              console.log("ID is:", task.id, checked ? "Selected" : "Deselected");
              dispatch(toggleCompleteState(task.id));
            }}
            className="size-5 border border-gray-400 rounded-sm cursor-pointer flex items-center justify-center data-[state=checked]:bg-blue-600"
          >
            {task.isCompleted && <CheckIcon className="w-3 h-3 text-white" />}
          </Checkbox>

          <Button 
            onClick = {() => dispatch(deleteTask(task.id))}
            variant = "link"
            className = "p-0 text-red-500 cursor-pointer"
            >

            <Trash2 className="w-4 h-4 cursor-pointer" />
          </Button>
        </div>
      </div>

      {/* Task Details */}
      <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
        <p><span className="font-medium">ID:</span> {task.id}</p>
        <p><span className="font-medium">Description:</span> {task.description}</p>
        <p><span className="font-medium">Due Date:</span> {task.dueDate}</p>
        <p><span className="font-medium">Priority:</span> {task.priority}</p>
        <p><span className="font-medium">Completed:</span> {task.isCompleted ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
