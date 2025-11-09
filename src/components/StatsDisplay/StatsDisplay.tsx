import type { StatsDisplayProps } from "../../types";

export default function StatsDisplay({
  stats,
  showReadingTime = true,
  minWords,
  maxWords,
}: StatsDisplayProps) {
  // destructure prop
  const { characterCount, wordCount, readingTime } = stats;

  // progress bar logic
  let progress = 0;
  if (maxWords !== undefined && maxWords > 0) {
    progress = Math.min((wordCount / maxWords) * 100, 100);
  }

  let progressColor = "bg-blue-500";
  if (minWords !== undefined && wordCount < minWords) {
    progressColor = "bg-red-400";
  } else if (maxWords !== undefined && wordCount > maxWords) {
    progressColor = "bg-red-400";
  } else if (
    minWords !== undefined &&
    maxWords !== undefined &&
    wordCount >= minWords &&
    wordCount <= maxWords
  ) {
    progressColor = "bg-green-500";
  }

  return (
    <div className="w-full py-25 px-20 bg-gray-800 rounded-xl p-6 border border-gray-400">
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

      {/* Progress bar for word goal */}
      {maxWords !== undefined && (
        <div className="mt-4">
          <div className="flex justify-between text-xs mb-1 text-gray-400">
            <span>{wordCount} words</span>
            <span>{maxWords} max</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full ${progressColor} transition-all`}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
