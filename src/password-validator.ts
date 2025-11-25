export class PasswordValidator {
  static validatePassword(password: string) {
    if (password.length < 5 || password.length > 15) {
      return { valid: false, errors: ["InvalidLength"] };
    }

    return { valid: true, errors: [] };
  }
}
