// src/components/module/task/TaskCard.tsx
interface TaskCardProps {
  task: {
    id: string;
    bookName: string;
    writer: string;
    publicationDate?: string;
    description: string;
    priority: "Low" | "Medium" | "High";
  };
}

export default function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="border rounded-md p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold">{task.bookName}</h2>
      <p className="text-xs text-gray-600">ID : {task.id}</p>

      <p className="text-sm text-gray-600">Writer: {task.writer}</p>
      {task.publicationDate && (
        <p className="text-sm text-gray-500">
          Published on: {new Date(task.publicationDate).toDateString()}
        </p>
      )}
      <p className="mt-2">{task.description}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
          task.priority === "High"
            ? "bg-red-100 text-red-800"
            : task.priority === "Medium"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-green-100 text-green-800"
        }`}
      >
        {task.priority} Priority
      </span>
    </div>
  );
}
