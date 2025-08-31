export const firstDayOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth(), 1);

export const lastDayOfMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0);

export const leadingOffsetMon = (date: Date) =>
  (firstDayOfMonth(date).getDay() + 6) % 7; // 0..6

export function monthMatrix(anchor: Date) {
  const daysInMonth = lastDayOfMonth(anchor).getDate();
  const lead = leadingOffsetMon(anchor);
  const cells: (Date | null)[] = [];

  for (let i = 0; i < lead; i++) cells.push(null);

  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(anchor.getFullYear(), anchor.getMonth(), day));
  }

  while (cells.length % 7 !== 0) cells.push(null);

  const rows: (Date | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) rows.push(cells.slice(i, i + 7));
  return rows;
}

export function sameDay(a: Date | null, b: Date | null) {
  return (
    !!a &&
    !!b &&
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}
