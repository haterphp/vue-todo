interface IFormStateManager<TFields extends Record<string, any>> {
    getValue(key: keyof TFields): any
    getValues(): TFields
    setValue(key: keyof TFields, value: any): void
}

interface IFormStateError {
    message: string
}

export type { IFormStateManager, IFormStateError }