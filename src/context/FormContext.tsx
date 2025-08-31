import { createContext } from 'react';
import type { FormContextType } from './FormFormProvider';

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);
