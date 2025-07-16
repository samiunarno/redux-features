// pages/tour.tsx (or wherever Tasks component lives)
import TaskCard from "@/components/module/task/taskcard";
import { useAppSelector } from "@/redux/hook";
import { selectTasks } from "@/redux/feature/tour/tourslice";
import { AddTaskModal } from "@/components/module/task/AddTaskModale";

export default function Tasks() {
  const tasks = useAppSelector(selectTasks); // now using correct selector

  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">Tasks</h1>

        <AddTaskModal/>
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
