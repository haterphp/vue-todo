interface IFormStateManager<TFields extends Record<string, any>> {
    getValue(key: keyof TFields): any
    getValues(): TFields
    setValue(key: keyof TFields, value: any): void

    clearErrors(): void
    setError(key: keyof TFields, value: string): void
    hasError(key: keyof TFields): boolean
    getError(key: keyof TFields): IFormStateError | undefined
    getErrors(): Partial<Record<keyof TFields, IFormStateError>>
}

interface IFormStateError {
    message: string
}

export type { IFormStateManager, IFormStateError }