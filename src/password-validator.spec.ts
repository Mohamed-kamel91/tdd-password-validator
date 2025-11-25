import { PasswordValidator } from "./password-validator";

describe("Password validator", () => {
  it("returns success result for valid password: maxWell1_c", () => {
    const result = PasswordValidator.validatePassword("maxWell1_c");

    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  describe("Password is between 5 and 15 characters", () => {
    it.each(["jaE8", "thePhysical1234567"])(
      "returns 'InvalidLength' error for password: %s",
      (password) => {
        const result = PasswordValidator.validatePassword(password);

        expect(result.isValid).toBe(false);
        expect(result.errors).toHaveLength(1);
        expect(result.errors).toContain("InvalidLength");
      }
    );
  });

  describe("Password contains at least an uppercase letter", () => {
    it.each(["maxwell1_c", "thephysical1"])(
      "returns 'MissingUppercase' error for password: %s",
      (password) => {
        const result = PasswordValidator.validatePassword(password);

        expect(result.isValid).toBe(false);
        expect(result.errors).toHaveLength(1);
        expect(result.errors).toContain("MissingUppercase");
      }
    );
  });

  describe("Password contains at least one digit", () => {
    it.each(["maxWell_", "thePhysical"])(
      "returns 'MissingDigit' error for password: %s",
      (password) => {
        const result = PasswordValidator.validatePassword(password);

        expect(result.isValid).toBe(false);
        expect(result.errors).toHaveLength(1);
        expect(result.errors).toContain("MissingDigit");
      }
    );
  });

  describe("Multiple password validation errors", () => {
    it.each([
      ["khalil", false, ["MissingUppercase", "MissingDigit"]],
      ["kha7", false, ["InvalidLength", "MissingUppercase"]],
      ["Kha", false, ["InvalidLength", "MissingDigit"]],
      [
        "mylengthypassword",
        false,
        ["InvalidLength", "MissingUppercase", "MissingDigit"],
      ],
    ])(
      "returns correct errors for password: %s",
      (password, isValid, errors) => {
        const result = PasswordValidator.validatePassword(password);

        expect(result.isValid).toBe(isValid);
        expect(result.errors).toHaveLength(errors.length);
        expect(result.errors).toEqual(expect.arrayContaining(errors));
      }
    );
  });
});
