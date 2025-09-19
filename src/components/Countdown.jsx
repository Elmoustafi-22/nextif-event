import React from "react";
import { useCountdown } from "../hooks/useCountdown";

/**
 * Props:
 * - targetDate: Date | string | number (required)
 * - onEndText: what to show when the event started (default "Event started")
 * - className: optional wrapper class
 */
export default function Countdown({
  targetDate,
  onEndText = "Event started",
  className = "",
}) {
  const { diff, days, hours, mins, isPast, invalid } = useCountdown(targetDate);

  if (invalid) {
    return (
      <div className={`text-sm text-red-500 ${className}`}>Invalid date</div>
    );
  }

  if (isPast && diff === 0) {
    return (
      <div
        className={`inline-flex items-center gap-2 ${className}`}
        aria-live="polite"
      >
        <span className="font-semibold">{onEndText}</span>
      </div>
    );
  }

  // Format: days:HH:MM — hours & mins padded to 2 digits
  const hoursPadded = String(hours).padStart(2, "0");
  const minsPadded = String(mins).padStart(2, "0");
  const output = `${days}:${hoursPadded}:${minsPadded}`;

  return (
    <div
      className={`inline-flex items-baseline text-5xl md:text-8xl lg:text-9xl font-heading space-x-2 ${className}`}
      role="status"
      aria-live="polite"
      title={`Countdown — ${days} days, ${hours} hours, ${mins} minutes`}
    >
      <p className="font-semibold flex flex-col items-center gap-2">
        <span>{days}</span>
        <span className="text-base md:text-lg lg:text-xl font-medium">
          days
        </span>
      </p>
      <span className="font-medium">:</span>
      <p className="font-semibold flex flex-col items-center gap-2">
        <span>{hoursPadded}</span>
        <span className="text-base md:text-lg lg:text-xl font-medium">
          hours
        </span>
      </p>
      <span className="font-medium">:</span>
      <p className="font-semibold flex flex-col items-center gap-2">
        <span>{minsPadded}</span>
        <span className="text-base md:text-lg lg:text-xl  font-medium">
          mins
        </span>
      </p>
    </div>
  );
}
