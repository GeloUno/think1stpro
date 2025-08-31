import { useMemo, useState } from 'react';
import FieldCalendar from './calendar/FieldCalendar';
import FieldTime from './calendar/FieldTime';
import InfoCircleIcon from '../icons/InfoCircleIcon';
import { useHolidaysResolver } from '../hooks/useHolidaysResolver';
import type { DayInfo } from '../utilities/calendar-holidays';

export type FieldCalendarTimeProps = {
  defaultDate?: Date | null;
  defaultTime?: string | null;
  times?: string[];
  onChange?: (payload: { date: Date | null; time: string | null }) => void;
  getDayInfo?: (date: Date) => DayInfo | undefined;
  className?: string;
};

export default function FieldCalendarTime({
  defaultDate = null,
  defaultTime = null,
  times,
  onChange,
  getDayInfo,
  className = '',
}: FieldCalendarTimeProps) {
  const [date, setDate] = useState<Date | null>(defaultDate);
  const [time, setTime] = useState<string | null>(defaultTime);
  const [anchor, setAnchor] = useState<Date>(defaultDate ?? new Date());

  const { resolver } = useHolidaysResolver();

  const resolveDayInfo = useMemo(
    () => getDayInfo ?? resolver,
    [getDayInfo, resolver]
  );

  const selectedInfo = useMemo(
    () => (date ? resolveDayInfo?.(date) : undefined),
    [date, resolveDayInfo]
  );

  const handleDate = (nextDate: Date) => {
    setDate(nextDate);
    setAnchor(new Date(nextDate.getFullYear(), nextDate.getMonth(), 1));
    setTime(null);
    onChange?.({ date: nextDate, time: null });
  };

  const handleTime = (nextTime: string) => {
    setTime(nextTime);
    onChange?.({ date, time: nextTime });
  };

  const hideTimes = !date || selectedInfo?.type === 'NATIONAL_HOLIDAY';

  return (
    <div
      className={`flex items-start justify-between gap-0 w-full ${className}`}
    >
      <div className="w-[240px]">
        <div className="text-xs text-primary-text mb-1">Date</div>
        <FieldCalendar
          value={date}
          onChange={handleDate}
          anchor={anchor}
          onAnchorChange={setAnchor}
          getDayInfo={resolveDayInfo}
        />

        <div className="mt-2 h-6">
          {selectedInfo?.type === 'OBSERVANCE' && (
            <div
              className="flex h-full items-center gap-2"
              role="status"
              aria-live="polite"
            >
              <InfoCircleIcon
                className="h-4 w-4 text-accent"
                title={undefined}
              />
              <span className="text-sm text-primary-text truncate">
                {selectedInfo.name
                  ? `It is ${selectedInfo.name}.`
                  : 'It is an observance day.'}
              </span>
            </div>
          )}
        </div>
      </div>

      <FieldTime
        times={times}
        value={time ?? undefined}
        onChange={handleTime}
        hidden={hideTimes}
        className="ml-auto w-[60px] basis-[60px] shrink-0 grow-0"
      />
    </div>
  );
}
