// src/components/module/user/UserCard.tsx
import { Trash2 } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { deleteUser, selectUsers } from "@/redux/feature/tour/userSlice";

export default function UserCard() {
  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  return (
    <div className="grid gap-3 mt-6">
      {users.map((user) => (
        <div key={user.id} className="p-4 flex justify-between items-center border rounded shadow-sm">
          <span className="font-medium">{user.name}</span>
          <Trash2
            className="w-4 h-4 text-red-500 cursor-pointer"
            onClick={() => dispatch(deleteUser(user.id))}
          />
        </div>
      ))}
    </div>
  );
}
