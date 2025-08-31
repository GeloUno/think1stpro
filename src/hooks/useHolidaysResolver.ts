import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import {
  fetchHolidays,
  mapHolidaysToDayInfo,
  toISODateLocal,
} from '../services/holidays';
import type { DayInfo } from '../services/holidays';

export function useHolidaysResolver() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['holidays', 'PL'],
    queryFn: () => fetchHolidays(),
    staleTime: 10 * 60 * 1000,
  });

  const resolver = useMemo(() => {
    const dateToInfo = mapHolidaysToDayInfo(data ?? []);
    return (date: Date): DayInfo | undefined =>
      dateToInfo.get(toISODateLocal(date));
  }, [data]);

  return { resolver, isLoading, isError };
}
