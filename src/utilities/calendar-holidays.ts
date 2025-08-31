export type DayType = 'WORKDAY' | 'NATIONAL_HOLIDAY' | 'OBSERVANCE';
export type DayInfo = { type: DayType; name?: string };

export const toISODate = (date: Date) => date.toISOString().slice(0, 10);

export function makeDayInfoResolver(map: Record<string, DayInfo>) {
  return (date: Date): DayInfo | undefined => map[toISODate(date)];
}
