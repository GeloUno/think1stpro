export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  photo: File | null;
  date: Date | null;
  time: string | null;
};

export type FieldName = keyof FormValues;
