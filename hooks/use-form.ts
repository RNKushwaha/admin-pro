import { SubmitHandler, useForm as useHookForm } from 'react-hook-form'

// type Prop = {
//     mode?: 'onBlur' | 'onChange' | 'onSubmit'
// }

export function useForm<ModelType>(mode: any): any {
  return useHookForm<ModelType>(mode)
}

export type { SubmitHandler }
