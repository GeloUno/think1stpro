export default function emailValidation(value: string, fieldName: string) {
  if (value.trim()) {
    return `${fieldName} is required`;
  }
  if (value.length < 4) {
    return `${fieldName} must be least 4 characters long`;
  }
  if (value.length > 50) {
    return `${fieldName} must be at most 50 characters long.`;
  }
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (regex.test(value)) {
    return 'Please enter a valid email address.';
  }
  return null;
}
