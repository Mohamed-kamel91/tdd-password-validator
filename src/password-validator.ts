type PasswordValidationError =
  | "InvalidLength"
  | "MissingUppercase"
  | "MissingDigit";

type PasswordValidationResult = {
  valid: boolean;
  errors: PasswordValidationError[];
};

export class PasswordValidator {
  static validatePassword(password: string) {
    const result: PasswordValidationResult = {
      valid: true,
      errors: [],
    };

    if (!this.isValidLength(password)) {
      result.errors.push("InvalidLength");
    }

    if (!this.containsUppercase(password)) {
      result.errors.push("MissingUppercase");
    }

    if (!this.containsDigit(password)) {
      result.errors.push("MissingDigit");
    }

    if (this.hasErrors(result.errors)) {
      result.valid = false;
    }

    return result;
  }

  private static isValidLength(password: string) {
    return password.length >= 5 && password.length <= 15;
  }

  private static hasErrors(errors: PasswordValidationResult["errors"]) {
    return errors.length > 0;
  }

  private static containsUppercase(password: string) {
    const uppercaseRegex = /[A-Z]/;
    return uppercaseRegex.test(password);
  }

  private static containsDigit(password: string) {
    const digitRegex = /\d/;
    return digitRegex.test(password);
  }
}
