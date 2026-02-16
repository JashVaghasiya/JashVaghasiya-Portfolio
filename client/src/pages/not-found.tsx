import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-data-dark-950">
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">404</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">Page not found.</p>
        <Link href="/">
          <button className="text-sm font-medium text-white dark:text-data-dark-950 bg-pipeline-cyan hover:bg-pipeline-cyan/90 px-6 py-3 rounded-lg transition-colors duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
