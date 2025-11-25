import { PasswordValidator } from "./password-validator";

describe("Password validator", () => {
  it("returns 'InvalidLength' error for passwords like 'jaE8' that are less than 5 characters", () => {
    const result = PasswordValidator.validatePassword("jaE8");

    expect(result.valid).toBe(false);
    expect(result.errors).toHaveLength(1);
    expect(result.errors).toContain("InvalidLength");
  });

  it("returns 'InvalidLength' error for passwords like 'thePhysical1234567' that are more than 15 characters", () => {
    const result = PasswordValidator.validatePassword("thePhysical1234567");

    expect(result.valid).toBe(false);
    expect(result.errors).toHaveLength(1);
    expect(result.errors).toContain("InvalidLength");
  });

  it("returns 'MissingUppercase' error for passwords like 'maxwell1_c' that doesn't contain uppcase", () => {
    const result = PasswordValidator.validatePassword("maxwell1_c");

    expect(result.valid).toBe(false);
    expect(result.errors).toHaveLength(1);
    expect(result.errors).toContain("MissingUppercase");
  });

  it("returns 'MissingDigit' error for passwords like 'Khalil' that does not contain a digit", () => {
    const result = PasswordValidator.validatePassword("Khalil");

    expect(result.valid).toBe(false);
    expect(result.errors).toHaveLength(1);
    expect(result.errors).toContain("MissingDigit");
  });

  it("returns correct errors for passwords like 'khalil' that does not contain uppercase and digit", () => {
    const result = PasswordValidator.validatePassword("khalil");

    expect(result.valid).toBe(false);
    expect(result.errors).toHaveLength(2);
    expect(result.errors).toContain("MissingUppercase");
    expect(result.errors).toContain("MissingDigit");
  });
});
