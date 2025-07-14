import TaskCard from "@/components/module/task/taskcard";

import { useAppSelector } from "@/redux/hook";

export default function Tour() {
  const tasks = useAppSelector((state) => state.todo.tasks);

  console.log(tasks);
  return (
    <div className="mx-auto max-w-7xl px-5 mt-20">
      <div>
        <h1>Tasks</h1>

      </div>
      <div className="space-y-5 mt-5">
        <TaskCard />
        <TaskCard />
        <TaskCard />

      </div>
      
     
    </div>
    
    
    


  );
}
