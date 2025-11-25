export class PasswordValidator {
  static validatePassword(password: string) {
    return { valid: false, errors: ["InvalidLength"] };
  }
}
