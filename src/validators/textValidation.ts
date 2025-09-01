export default function textValidation(value: string, fieldName: string) {
  if (!value.trim()) {
    return `${fieldName} is required`;
  }
  if (value.length < 2) {
    return `${fieldName} must be least 2 characters long`;
  }
  if (value.length > 50) {
    return `${fieldName} must be at most 50 characters long.`;
  }
  if (!/^[A-Za-zĄĆĘŁŃÓŚŹŻąćęłńóśźż]+$/.test(value)) {
    return `${fieldName} must contain only letters (A–Z, a–z, ą–ż, Ą–Ż).`;
  }
  return null;
}
