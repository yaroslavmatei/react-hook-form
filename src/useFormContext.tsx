import * as React from 'react';
import { DataType } from './types';
import { FormContextValues, FormProps } from './contextTypes';

const FormGlobalContext = React.createContext<FormContextValues<
  DataType
> | null>(null);

export function useFormContext<T extends DataType>(): FormContextValues<T> {
  // @ts-ignore
  return React.useContext(FormGlobalContext);
}

export function FormContext<T extends DataType>(props: FormProps<T>) {
  const { children, ...rest } = props;
  return (
    <FormGlobalContext.Provider value={rest as FormContextValues}>
      {children}
    </FormGlobalContext.Provider>
  );
}
