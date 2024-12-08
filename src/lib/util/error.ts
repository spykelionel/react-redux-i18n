/**
 * A custom error type for handling type assertion failures.
 *
 * @extends {Error}
 */
export class TypeAssertionError extends Error {
  /**
   * Creates a new TypeAssertionError.
   *
   * @param {string} message - The error message describing the type assertion failure.
   */
  constructor(message: string) {
    super(message);
    this.name = "TypeAssertionError";
  }

  /**
   * Generates an error message for a type assertion failure.
   *
   * @private
   * @param {unknown} value - The value that caused the type assertion failure.
   * @param {string} expectedType - A string describing the expected type.
   * @returns {string} A formatted error message.
   */
  private static createMessage(value: unknown, expectedType: string): string {
    return `Expected type '${expectedType}', but received '${typeof value}'`;
  }

  /**
   * Checks whether a given error is an instance of TypeAssertionError.
   *
   * @param {unknown} error - The error to check.
   * @returns {boolean} True if the error is an instance of TypeAssertionError, otherwise false.
   */
  static isInstance(error: unknown): error is TypeAssertionError {
    return error instanceof TypeAssertionError;
  }

  /**
   * Creates a TypeAssertionError for a given value and expected type.
   *
   * @param {unknown} value - The value that caused the type assertion failure.
   * @param {string} expectedType - A string describing the expected type.
   * @returns {TypeAssertionError} A new TypeAssertionError instance.
   */
  static from(value: unknown, expectedType: string): TypeAssertionError {
    return new TypeAssertionError(this.createMessage(value, expectedType));
  }

  /**
   * Creates a TypeAssertionError specifically for objects, while reusing the general from() method.
   *
   * @param {object} obj - The object that caused the type assertion failure.
   * @param {string} expectedType - A string describing the expected type.
   * @returns {TypeAssertionError} A new TypeAssertionError instance for objects.
   */
  static fromObject(obj: object, expectedType: string): TypeAssertionError {
    return this.from(obj, expectedType);
  }
}
