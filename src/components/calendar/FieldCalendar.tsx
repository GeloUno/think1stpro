import { ArrowLeftIcon } from '../../icons/ArrowLeftIcon';
import { ArrowRightIcon } from '../../icons/ArrowRightIcon';
import { monthMatrix, sameDay } from '../../utilities/calendar';
import type { DayInfo } from '../../utilities/calendar-holidays';

type HeaderProps = { anchor: Date; onPrev: () => void; onNext: () => void };
function Header({ anchor, onPrev, onNext }: HeaderProps) {
  const label = anchor.toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="flex items-center justify-between px-2 py-0.5">
      <button
        type="button"
        onClick={onPrev}
        className="h-7 w-7 grid place-items-center rounded-md
             text-arrow-text active:text-primary
             focus:outline-none"
        aria-label="Previous month"
      >
        <ArrowRightIcon />
      </button>
      <div className="text-sm font-semibold capitalize text-primary-text">
        {label}
      </div>
      <button
        type="button"
        onClick={onNext}
        className="h-7 w-7 grid place-items-center rounded-md
             text-arrow-text active:text-primary
             focus:outline-none"
        aria-label="Next month"
      >
        <ArrowLeftIcon />
      </button>
    </div>
  );
}

function Week() {
  const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  return (
    <div className="grid grid-cols-7 gap-1 px-3 pb-1 text-[10px] text-primary-text">
      {days.map((d) => (
        <div key={d} className="h-6 grid place-items-center">
          {d}
        </div>
      ))}
    </div>
  );
}

type DayProps = {
  date: Date | null;
  isCurrentMonth: boolean;
  isSelected: boolean;
  onSelect: (date: Date) => void;
  getDayInfo?: (date: Date) => DayInfo | undefined;
};

function Day({
  date,
  isCurrentMonth,
  isSelected,
  onSelect,
  getDayInfo,
}: DayProps) {
  if (!date) return <div className="h-8" />;

  const dayInfo = getDayInfo?.(date);
  const isSunday = date.getDay() === 0;
  const isNationalHoliday = dayInfo?.type === 'NATIONAL_HOLIDAY';
  const isDisabled = isSunday || isNationalHoliday;

  const base =
    'h-6 w-6 grid place-items-center rounded-full text-[10px] select-none';
  const dayButtonClassName = isSelected
    ? 'bg-primary text-white'
    : isDisabled
    ? 'text-secondary-text/60 cursor-not-allowed'
    : isCurrentMonth
    ? 'text-primary-text hover:bg-secondary'
    : 'text-secondary-text';

  return (
    <button
      type="button"
      disabled={isDisabled}
      aria-disabled={isDisabled}
      onClick={() => onSelect(date)}
      className={`${base} ${dayButtonClassName}`}
      title={dayInfo?.name}
    >
      {date.getDate()}
    </button>
  );
}

export type FieldCalendarProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  anchor: Date;
  onAnchorChange: (date: Date) => void;
  getDayInfo?: (date: Date) => DayInfo | undefined;
  className?: string;
};

export default function FieldCalendar({
  value,
  onChange,
  anchor,
  onAnchorChange,
  getDayInfo,
  className = '',
}: FieldCalendarProps) {
  const rows = monthMatrix(anchor);
  const goPrev = () =>
    onAnchorChange(new Date(anchor.getFullYear(), anchor.getMonth() - 1, 1));
  const goNext = () =>
    onAnchorChange(new Date(anchor.getFullYear(), anchor.getMonth() + 1, 1));

  return (
    <div
      className={`rounded-xl border border-accent bg-white shadow-sm overflow-hidden ${className}`}
    >
      <Header anchor={anchor} onPrev={goPrev} onNext={goNext} />
      <Week />
      <div className="grid grid-cols-7 gap-1 px-3 pb-3">
        {rows.flat().map((cellDate, i) => (
          <Day
            key={i}
            date={cellDate}
            isCurrentMonth={
              !!cellDate && cellDate.getMonth() === anchor.getMonth()
            }
            isSelected={sameDay(cellDate, value)}
            onSelect={onChange}
            getDayInfo={getDayInfo}
          />
        ))}
      </div>
    </div>
  );
}
