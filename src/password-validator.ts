export class PasswordValidator {
  static validatePassword(password: string) {
    if (password.length < 5 || password.length > 15) {
      return { valid: false, errors: ["InvalidLength"] };
    }

    if (!/[A-Z]/.test(password)) {
      return { valid: false, errors: ["MissingUppercase"] };
    }

    return { valid: true, errors: [] };
  }
}
