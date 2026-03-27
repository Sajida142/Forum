import Header from "../components/Header";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          About CONNECT
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 mb-14">
          A modern, interactive discussion platform built using React.
        </p>

        {/* CARDS SECTION */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
          shadow-md rounded-2xl p-8 text-left 
          transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] 
          hover:shadow-blue-500/30 cursor-pointer">

            <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125">
              💬
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 
            transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Thread Discussions
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Users can create and explore discussion threads on various topics.
              Each thread encourages meaningful conversations.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
          shadow-md rounded-2xl p-8 text-left 
          transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] 
          hover:shadow-blue-500/30 cursor-pointer">

            <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125">
              👍
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 
            transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Interactive Features
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Like posts, reply to comments, and engage with other users in a
              dynamic and responsive environment.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
          shadow-md rounded-2xl p-8 text-left 
          transition-all duration-300 
          hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] 
          hover:shadow-blue-500/30 cursor-pointer">

            <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-125">
              🔐
            </div>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 
            transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              Secure Access
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              Authentication system with login, signup, and guest access.
              Protected routes ensure secure thread creation.
            </p>
          </div>

        </div>

        {/* TECH STACK */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Tech Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-6">

            {["React", "React Router", "Context API", "Tailwind CSS"].map(
              (tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 rounded-full bg-blue-100 dark:bg-blue-900 
                  text-blue-700 dark:text-blue-300 font-medium shadow-sm
                  transition-all duration-300 
                  hover:scale-110 hover:bg-blue-200 dark:hover:bg-blue-800 
                  hover:shadow-lg hover:shadow-blue-500/40 cursor-pointer"
                >
                  {tech}
                </span>
              )
            )}

          </div>
        </div>

        {/* USER EXPERIENCE SECTION */}
<div className="mt-24">
  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
    User Experience
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* FAST NAVIGATION */}
    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
    shadow-md rounded-2xl p-6 text-left 
    transition-all duration-300 
    hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-blue-500/30 cursor-pointer">

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 
      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
        ⚡ Seamless Navigation
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Built as a Single Page Application (SPA), CONNECT allows instant
        navigation between pages without reloads, ensuring a smooth and
        uninterrupted browsing experience.
      </p>
    </div>

    {/* REAL-TIME FEEL */}
    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
    shadow-md rounded-2xl p-6 text-left 
    transition-all duration-300 
    hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-blue-500/30 cursor-pointer">

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 
      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
        💬 Interactive Experience
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Users can instantly like posts, reply to comments, and create threads,
        giving a real-time feel without page refresh.
      </p>
    </div>

    {/* PERFORMANCE */}
    <div className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
    shadow-md rounded-2xl p-6 text-left 
    transition-all duration-300 
    hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.03] 
    hover:shadow-blue-500/30 cursor-pointer">

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 
      group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
        🚀 Optimized Performance
      </h3>

      <p className="text-gray-600 dark:text-gray-300 text-sm">
        Efficient state management and lazy loading ensure fast performance,
        even with dynamic content like infinite scrolling posts.
      </p>
    </div>

  </div>
</div>

      </div>
    </div>
  );
}

export default AboutPage;