export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 drop-shadow-sm">
        Udyam Registration
      </h1>
      <a href="/step1">
        <button className="px-8 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105">
          Start Registration
        </button>
      </a>
    </div>
  );
}
