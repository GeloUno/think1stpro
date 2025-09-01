import { useMutation } from '@tanstack/react-query';
import { submitApplication } from '../services/application';
import type { FormValues } from '../interfaces/FormValues';

function valuesToFormData(values: FormValues) {
  const fd = new FormData();
  fd.append('firstName', values.firstName);
  fd.append('lastName', values.lastName);
  fd.append('email', values.email);
  fd.append('age', String(values.age ?? ''));
  if (values.date) fd.append('date', values.date.toISOString().split('T')[0]);
  if (values.time) fd.append('time', values.time);
  if (values.photo) fd.append('photo', values.photo, values.photo.name);
  return fd;
}

export function useSubmitApplication() {
  return useMutation({
    mutationFn: async (values: FormValues) => {
      const formData = valuesToFormData(values);
      return submitApplication(formData);
    },
  });
}
