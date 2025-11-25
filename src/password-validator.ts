type PasswordValidationError =
  | "InvalidLength"
  | "MissingUppercase"
  | "MissingDigit";

type PasswordValidationResult = {
  valid: boolean;
  errors: PasswordValidationError[];
};

const isLengthBetween = (min: number, max: number, text: string) => {
  return text.length >= min && text.length <= max;
};

const hasUppercase = (password: string) => {
  const uppercaseRegex = /[A-Z]/;
  return uppercaseRegex.test(password);
};

const hasDigit = (password: string) => {
  const digitRegex = /\d/;
  return digitRegex.test(password);
};

export class PasswordValidator {
  static validatePassword(password: string): PasswordValidationResult {
    const errors: PasswordValidationResult["errors"] = [];

    if (!isLengthBetween(5, 15, password)) {
      errors.push("InvalidLength");
    }

    if (!hasUppercase(password)) {
      errors.push("MissingUppercase");
    }

    if (!hasDigit(password)) {
      errors.push("MissingDigit");
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}
