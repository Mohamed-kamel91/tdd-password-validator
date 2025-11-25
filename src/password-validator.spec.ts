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

  it.todo(
    "returns 'MissingUppercase' error for passwords like 'khalil' that doesn't contain uppcase"
  );

  it.todo(
    "returns 'MissingDigit' error for passwords like 'maxwell1_c' that does not contain a digit"
  );
});
