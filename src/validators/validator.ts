import type { FormValues, FieldName } from '../interfaces/FormValues';
import textValidation from '../validators/textValidation';
import emailValidation from '../validators/emailValidation';

export function validateField(name: FieldName, value: FormValues[FieldName]) {
  switch (name) {
    case 'firstName':
      return textValidation(value as string, 'First name');
    case 'lastName':
      return textValidation(value as string, 'Last name');
    case 'email':
      return emailValidation(value as string, 'Email address');
    case 'photo':
      return value ? null : 'Photo is required';
    case 'date':
      return value ? null : 'Please pick a date.';
    case 'time':
      return value ? null : 'Please pick a time.';
    case 'age':
      return null;
    default:
      return null;
  }
}
