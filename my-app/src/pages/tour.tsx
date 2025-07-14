import { useAppSelector } from "@/redux/hook";

export default function Tour() {
  const tasks = useAppSelector((state) => state.todo.tasks);

  console.log(tasks);
  return (
    <>
      {/* Welcome Section */}
      <section className="min-h-[500px] flex items-center justify-start bg-white dark:bg-black px-6 md:px-10 overflow-hidden">
        <div className="text-center max-w-2xl ml-45">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Welcome to Your Tour
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-white text-justify max-w-md">
            Discover the essential features step-by-step and unlock the full
            potential of your experience. Let us guide you through the journey
            with ease and confidence.
          </p>
        </div>
      </section>

      {/* Task Section */}
      <section className="my-12 px-4 md:px-56 min-h-[100px] justify-start ">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 justify-center">
          Your Tasks
        </h2>

        {/* Task Cards as Box */}
        <div className="flex flex-col gap-6">
          {[1, 2, 3, 4].map((_, index) => (
            <div
              key={index}
              className="max-wbg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Top: Task Info */}
              <div className="flex items-center gap-4 mb-8">
                {/* Custom Checkbox */}
                <label className="inline-flex items-center cursor-pointer select-none">
                  <input type="checkbox" className="peer sr-only" />
                  <span className="w-6 h-6 flex justify-center items-center border-2 border-gray-400 rounded-lg
                                   peer-checked:border-green-500 peer-checked:bg-green-500 transition-colors duration-300
                                   relative">
                    <svg
                      className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-300"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                </label>
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Task View
                </h3>
              </div>

              {/* Bottom: Action Buttons */}
              <div className="flex justify-end gap-4 mt-2">
                <button className="px-4 py-1 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition">
                  Edit
                </button>
                <button className="px-4 py-1 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
