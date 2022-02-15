import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'

export class MinLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minLength: number) {}

  validate (input: string): Error {
    return input[this.field]?.length < this.minLength ? new InvalidFieldError() : null
  }
}
