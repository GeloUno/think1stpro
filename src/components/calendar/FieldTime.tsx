export type FieldTimeProps = {
  times?: string[];
  value?: string | null;
  onChange?: (t: string) => void;
  hidden?: boolean;
  className?: string;
};

const defaultTimes = ['12:00', '14:00', '16:30', '18:30', '20:00'];

export default function FieldTime({
  times = defaultTimes,
  value = null,
  onChange,
  hidden = false,
  className = '',
}: FieldTimeProps) {
  if (hidden) return null;

  return (
    <div className={`flex flex-col gap-0 ${className}`}>
      <div className="text-xs text-primary-text mb-1">Time</div>
      <div className="flex flex-col gap-2">
        {times.map((t) => {
          const selected = value === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => onChange?.(t)}
              className={[
                'h-9 w-full rounded-md border bg-white px-3 text-sm text-left text-primary-text transition',
                selected
                  ? 'border-primary border-2'
                  : 'border-accent hover:border-primary',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30',
              ].join(' ')}
            >
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
