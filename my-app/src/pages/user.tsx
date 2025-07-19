import { AddUserModal } from "@/components/module/task/AddTaskModale";
import UserCard from "@/components/module/user/userCard";

export default function User() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Welcome Section */}
      <section className="min-h-[500px] flex items-center justify-start px-6 md:px-10 overflow-hidden">
        <div className="text-center max-w-2xl ml-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Welcome, New User
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-white text-justify max-w-md">
            We're excited to have you onboard. Let us help you get started quickly
            and make the most out of your journey with us.
          </p>
        </div>
      </section>

      {/* User Management Section */}
      <div className="max-w-md mx-auto mt-10 px-4 pb-16">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">User Management</h2>
        <AddUserModal />
        <UserCard />
      </div>
    </div>
  );
}
