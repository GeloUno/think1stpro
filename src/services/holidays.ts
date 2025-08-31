import { holidaysApi } from '../api/clientHoliday';

export type ApiNinjasHoliday = {
  country: string;
  iso: string;
  year: number;
  date: string;
  day: string;
  name: string;
  type: string;
};

export type DayType = 'WORKDAY' | 'NATIONAL_HOLIDAY' | 'OBSERVANCE';
export type DayInfo = { type: DayType; name?: string };

export async function fetchHolidays() {
  const { data } = await holidaysApi.get<ApiNinjasHoliday[]>('/holidays');
  return data;
}

export function toISODateLocal(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function mapHolidaysToDayInfo(entries: ApiNinjasHoliday[]) {
  const dateToInfo = new Map<string, DayInfo>();
  for (const holiday of entries) {
    const { date, name, type } = holiday;
    if (type === 'NATIONAL_HOLIDAY') {
      dateToInfo.set(date, { type: 'NATIONAL_HOLIDAY', name });
    } else if (type === 'OBSERVANCE') {
      dateToInfo.set(date, { type: 'OBSERVANCE', name });
    }
  }
  return dateToInfo;
}
