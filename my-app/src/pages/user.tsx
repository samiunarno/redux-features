export default function User() {
  return (
    <section className="min-h-[500px] min-w-0.5 flex items-center justify-start bg-white dark:bg-black px-6 md:px-10 overflow-hidden">
      <div className="text-center max-w-2xl ml-45">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Welcome, New User
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-white text-justify max-w-md">
          We're excited to have you onboard. Let us help you get started quickly
          and make the most out of your journey with us.
        </p>
      </div>
    </section>
  );
}
