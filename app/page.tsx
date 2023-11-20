import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="mb-10">
        <form className="flex space-x-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="start"
          >
            Start
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="start"
              type="text"
              placeholder="Start"
            />
          </label>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="end"
          >
            End
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="end"
              type="text"
              placeholder="End"
            />
          </label>
        </form>
      </div>
      <div></div>
    </main>
  );
}
