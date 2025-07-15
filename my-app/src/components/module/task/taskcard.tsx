import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Trash2, Pencil, Eye } from "lucide-react";

export default function TaskCard() {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex items-center gap-4">
        
        <Checkbox />

        
        <div className="flex justify-between items-center flex-grow">
          <div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-green-500" />
              <h1 className="text-base font-semibold">Task Title</h1>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Task Description</p>
          </div>
          <div className="flex gap-2 items-center">
            <Button variant="ghost" size="icon" className="text-blue-500">
              <Eye size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-yellow-500">
              <Pencil size={18} />
            </Button>
            <Button variant="ghost" size="icon" className="text-red-500">
              <Trash2 size={18} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
