import { useCallback, useMemo, useState } from 'react';
import type { FormValues, FieldName } from '../interfaces/FormValues';
import { FormContext } from './FormContext';
import { validateField } from '../validators/validator';

type FormErrors = Partial<Record<FieldName, string>>;
type FormFocus = Partial<Record<FieldName, boolean>>;

const DEFAULT_VALUES: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  age: 8,
  photo: null,
  date: null,
  time: null,
};

const REQUIRED_FIELDS = [
  'firstName',
  'lastName',
  'email',
  'photo',
  'date',
  'time',
] as const;
type RequiredFieldName = (typeof REQUIRED_FIELDS)[number];

export interface FormContextType {
  values: FormValues;
  errors: FormErrors;
  focus: FormFocus;

  setField: <K extends FieldName>(name: K, value: FormValues[K]) => void;
  setFocused: (name: FieldName, isFocused: boolean) => void;

  validateField: (name: FieldName) => boolean;
  validateAll: () => boolean;
  reset: () => void;

  isComplete: boolean;
  canSubmit: boolean;
}

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [values, setValues] = useState<FormValues>(DEFAULT_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [focus, setFocus] = useState<FormFocus>({});

  const setField = useCallback(
    <K extends FieldName>(name: K, value: FormValues[K]) => {
      setValues((prev) => ({ ...prev, [name]: value }));
      const message = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: message || undefined }));
    },
    []
  );

  const setFocused = useCallback(
    (name: FieldName, isFocused: boolean) => {
      setFocus((prev) => ({ ...prev, [name]: isFocused }));
      if (!isFocused) {
        const message = validateField(name, values[name]);
        setErrors((prev) => ({ ...prev, [name]: message || undefined }));
      }
    },
    [values]
  );

  const validateOne = useCallback(
    (name: FieldName) => {
      const message = validateField(name, values[name]);
      setErrors((prev) => ({ ...prev, [name]: message || undefined }));
      return !message;
    },
    [values]
  );

  const validateAll = useCallback(() => {
    const next: FormErrors = {};
    (REQUIRED_FIELDS as readonly RequiredFieldName[]).forEach((n) => {
      const message = validateField(n, values[n]);
      if (message) next[n] = message;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [values]);

  const isComplete = useMemo(
    () =>
      (REQUIRED_FIELDS as readonly RequiredFieldName[]).every((n) => {
        const v = values[n];
        return typeof v === 'string' ? v.trim().length > 0 : v != null;
      }),
    [values]
  );

  const canSubmit = useMemo(
    () => isComplete && Object.values(errors).every((e) => !e),
    [isComplete, errors]
  );

  const reset = useCallback(() => {
    setValues(DEFAULT_VALUES);
    setErrors({});
    setFocus({});
  }, []);

  return (
    <FormContext.Provider
      value={{
        values,
        errors,
        focus,
        setField,
        setFocused,
        validateField: validateOne,
        validateAll,
        reset,
        isComplete,
        canSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
