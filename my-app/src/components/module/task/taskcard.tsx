import { Eye, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

interface TaskCardProps {
  task: {
    id: string;
    bookName: string;
    writer: string;
    publicationDate?: string;
    description: string;
    priority: "Low" | "Medium" | "High";
  };
  onView?: (id: string) => void;
  onUpdate?: (id: string) => void;
  onDelete?: (id: string) => void;
  onCheck?: (id: string, checked: boolean) => void;
}

export default function TaskCard({ task, onView, onUpdate, onDelete, onCheck }: TaskCardProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsChecked(checked);
    onCheck?.(task.id, checked);
  };

  return (
    <div className="relative w-[350px] rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md p-4 flex flex-col gap-3 transition-colors">
      {/* Checkbox */}
      <div className="absolute top-3 right-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheck}
          className="cursor-pointer"
        />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h2 className="text-lg font-semibold truncate text-gray-800 dark:text-gray-100">{task.bookName}</h2>
        <p className="text-xs text-gray-500 dark:text-gray-400">ID: {task.id}</p>
        <p className="text-sm text-gray-700 dark:text-gray-300">Writer: {task.writer}</p>

        {task.publicationDate && (
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Published on: {new Date(task.publicationDate).toDateString()}
          </p>
        )}

        <p className="text-sm text-gray-700 dark:text-gray-300">{task.description}</p>

        <span
          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
            task.priority === "High"
              ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
              : "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
          }`}
        >
          {task.priority} Priority
        </span>
      </div>

      {/* Icon Actions */}
      <div className="flex justify-center items-center gap-6 pt-3 border-t mt-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
        <Eye
          className="w-5 h-5 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition"
          onClick={() => onView?.(task.id)}
        />
        <Pencil
          className="w-5 h-5 cursor-pointer hover:text-yellow-600 dark:hover:text-yellow-400 transition"
          onClick={() => onUpdate?.(task.id)}
        />
        <Trash2
          className="w-5 h-5 cursor-pointer hover:text-red-600 dark:hover:text-red-400 transition"
          onClick={() => onDelete?.(task.id)}
        />
      </div>
    </div>
  );
}
