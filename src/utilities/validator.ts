export type FieldName = 'firstName' | 'lastName' | 'email';

export const isEmpty = (v: string) => !v.trim();

export const isEmail = (v: string) =>
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(v);

export function validateField(name: FieldName, value: string): string {
  if (name === 'email') {
    if (isEmpty(value)) return 'Email is required.';
    if (!isEmail(value)) return 'Please enter a valid email address.';
    return '';
  }

  if (isEmpty(value)) return 'This field is required.';
  if (value.length < 2) return 'Must be at least 2 characters.';
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿĄąĆćĘęŁłŃńÓóŚśŹźŻż-]+$/.test(value))
    return 'Only letters are allowed.';
  return '';
}
