import { useEffect, useRef, useState } from "react";

/**
 * Accepts targetDate as: ISO string, number (ms), or Date object.
 * Returns { diff, days, hours, mins, isPast, invalid }
 */
function getTimeParts(targetDate) {
  const t =
    targetDate instanceof Date ? targetDate : new Date(targetDate);
  const targetMs = t.getTime();
  if (isNaN(targetMs)) {
    return { diff: 0, days: 0, hours: 0, mins: 0, isPast: true, invalid: true };
  }

  const nowMs = Date.now();
  const diff = Math.max(0, targetMs - nowMs);

  const MS_PER_MIN = 1000 * 60;
  const MS_PER_HOUR = MS_PER_MIN * 60;
  const MS_PER_DAY = MS_PER_HOUR * 24;

  const days = Math.floor(diff / MS_PER_DAY);
  const hours = Math.floor((diff % MS_PER_DAY) / MS_PER_HOUR);
  const mins = Math.floor((diff % MS_PER_HOUR) / MS_PER_MIN);

  return { diff, days, hours, mins, isPast: diff === 0, invalid: false };
}

export function useCountdown(targetDate) {
  const [timeParts, setTimeParts] = useState(() => getTimeParts(targetDate));
  const intervalRef = useRef(null);

  useEffect(() => {
    // immediate update (in case targetDate changed)
    setTimeParts(getTimeParts(targetDate));

    // update every second to keep minutes accurate in real time
    intervalRef.current = setInterval(() => {
      setTimeParts(getTimeParts(targetDate));
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [targetDate]);

  return timeParts;
}
