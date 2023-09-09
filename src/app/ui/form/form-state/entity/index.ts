import type { IFormStateManager, IFormStateError } from "../interfaces"

class FormStateManager<TFields extends Record<string, any>> implements IFormStateManager<TFields> {
    private _values: Partial<TFields>

    private _errors: Partial<Record<keyof TFields, IFormStateError>>

    constructor(defaultValues: Partial<TFields> = {}) {
        this._values = defaultValues
        this._errors = {}
    }

    public getValue(key: keyof TFields): any {
        return this._values[key]
    }

    public getValues(): TFields {
        return this._values as TFields
    }

    public setValue(key: keyof TFields, value: any): void {
        this._values[key] = value
    }

    public clearErrors(): void {
        this._errors = {}
    }

    public setError(key: keyof TFields, value: string): void {
        this._errors[key] = { message: value }
    }

    public hasError(key: keyof TFields): boolean {
        return !!this._errors[key]
    }

    public getError(key: keyof TFields): IFormStateError | undefined {
        return this._errors[key]
    }

    public getErrors(): Partial<Record<keyof TFields, IFormStateError>> {
        return this._errors
    }
}

export { FormStateManager }