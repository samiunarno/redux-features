"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { addUser, deleteUser, selectUsers } from "@/redux/feature/tour/userSlice";
import { Trash2 } from "lucide-react";


export default function User() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(selectUsers);

  const [name, setName] = useState("");

  const handleAddUser = () => {
    if (name.trim() !== "") {
      dispatch(addUser({ name }));
      setName("");
    }
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  return (
    <section className="min-h-screen px-6 md:px-10 py-10 bg-white dark:bg-black">
      {/* Welcome Text */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          Welcome, New User
        </h1>
        <p className="text-lg text-gray-700 dark:text-white max-w-xl mx-auto">
          We're excited to have you onboard. Let us help you get started quickly
          and make the most out of your journey with us.
        </p>
      </div>

      {/* Add User */}
      <div className="flex justify-center gap-4 mb-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter user name"
          className="border px-4 py-2 rounded-md w-64 dark:bg-gray-900 dark:text-white"
        />
        <button
          onClick={handleAddUser}
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800"
        >
          Add User
        </button>
      </div>

      {/* User Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="p-6 bg-gray-100 dark:bg-gray-900 rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">ID: {user.id}</p>
            </div>
            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={22} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
