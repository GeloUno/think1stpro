import { createContext } from 'react';
import type { FormContextType } from './FormProvider';

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
