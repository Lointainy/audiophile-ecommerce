export interface formValues {
  [index: string]: string
}

export type fieldsType = {
  id: number
  title: string
  class: string
  inputs: inputType[]
}

export type optionType = inputType[]

export type inputType = {
  id: number
  name: string
  type: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  pattern?: string
  label: string
  value?: string
}
