import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  const { characterCount, wordCount, readingTime } = stats;

  return (
    <div className="w-full bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-around text-center">
        <div>
          <p className="text-sm text-gray-500">Characters</p>
          <p className="text-2xl font-semibold">{characterCount}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Words</p>
          <p className="text-2xl font-semibold">{wordCount}</p>
          <p className="text-xs text-gray-400">Min: 25 | Max: 100</p>
        </div>
      </div>

      {showReadingTime && (
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Reading Time</p>
          <p className="text-xl font-semibold">{readingTime.toFixed(2)} min</p>
        </div>
      )}
    </div>
  );
}
