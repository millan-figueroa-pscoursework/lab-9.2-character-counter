import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  // destructure prop
  const { characterCount, wordCount, readingTime } = stats;

  return (
    <div className="w-full py-30 bg-gray-800 rounded-xl p-6 border border-gray-400">
      <div className="flex justify-around text-center">
        <div>
          <p className="text-xl text-gray-400">Characters</p>
          <p className="text-3xl font-semibold text-orange-500">
            {characterCount}
          </p>
        </div>

        <div>
          <p className="text-xl text-gray-400">Words</p>
          <p className="text-3xl font-semibold text-orange-500">{wordCount}</p>
          <p className="text-xs text-gray-300">Min: 25 | Max: 100</p>
        </div>
      </div>

      {showReadingTime && (
        <div className="mt-4 text-center">
          <p className="text-xl text-gray-400">Reading Time</p>
          <p className="text-3xl font-semibold text-orange-500">
            {readingTime.toFixed(2)} min
          </p>
        </div>
      )}
    </div>
  );
}
