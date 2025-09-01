import { postApplication } from '../api/postApplication';

export async function submitApplication(formData: FormData) {
  const { data } = await postApplication.post('/submit', formData);
  return data;
}
