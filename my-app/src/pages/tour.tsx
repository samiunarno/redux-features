// pages/tour.tsx
import TaskCard from "@/components/module/task/taskcard";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { selectTasks, updateFilters } from "@/redux/feature/tour/tourslice";
import { AddTaskModal } from "@/components/module/task/AddTaskModale";
import { Trash2 } from "lucide-react";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { Tabs,  TabsList } from "@/components/ui/tabs";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks);
  const dispatch = useAppDispatch();

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1>Tasks</h1>

        <Tabs
  defaultValue="all"
  onValueChange={(value) =>
    dispatch(updateFilters(value as "low" | "medium" | "high" | "all"))
  }
>
  <TabsList className="flex justify-center space-x-6 w-full max-w-md mx-auto border-b border-gray-300 dark:border-gray-700">
    <TabsTrigger
      value="all"
      className="
        px-6 py-2 rounded-t-md text-sm font-semibold
        text-gray-900 dark:text-gray-100
        data-[state=active]:bg-gray-900 data-[state=active]:text-gray-100
        data-[state=active]:shadow-md
        transition-colors duration-200
      "
    >
      All
    </TabsTrigger>

    <TabsTrigger
      value="high"
      className="
        px-6 py-2 rounded-t-md text-sm font-semibold
        text-gray-900 dark:text-gray-100
        data-[state=active]:bg-gray-900 data-[state=active]:text-gray-100
        data-[state=active]:shadow-md
        transition-colors duration-200
      "
    >
      High
    </TabsTrigger>

    <TabsTrigger
      value="medium"
      className="
        px-6 py-2 rounded-t-md text-sm font-semibold
        text-gray-900 dark:text-gray-100
        data-[state=active]:bg-gray-900 data-[state=active]:text-gray-100
        data-[state=active]:shadow-md
        transition-colors duration-200
      "
    >
      Medium
    </TabsTrigger>

    <TabsTrigger
      value="low"
      className="
        px-6 py-2 rounded-t-md text-sm font-semibold
        text-gray-900 dark:text-gray-100
        data-[state=active]:bg-gray-900 data-[state=active]:text-gray-100
        data-[state=active]:shadow-md
        transition-colors duration-200
      "
    >
      Low
    </TabsTrigger>
  </TabsList>
</Tabs>

        <AddTaskModal />

        <Trash2 className="cursor-pointer" />
      </div>

      <div className="space-y-5 mt-5">
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskCard key={task.id} task={task} />)
        ) : (
          <p>No tasks found</p>
        )}
      </div>
    </div>
  );
}
