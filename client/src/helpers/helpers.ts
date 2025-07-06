type ValidationRule = {
  check: (value: string) => boolean;
  message: string;
};

type ValidationResult = string | true;

export const validatePassword = (
  passwordToValidate: string
): ValidationResult => {
  const validations: ValidationRule[] = [
    { check: (password) => !!password, message: "Password is required" },
    {
      check: (password) => password.length >= 8,
      message: "Password must be at least 8 characters",
    },
    {
      check: (password) => /[A-Z]/.test(password),
      message: "Must contain an uppercase letter",
    },
    {
      check: (password) => /[a-z]/.test(password),
      message: "Must contain a lowercase letter",
    },
    {
      check: (password) => /[0-9]/.test(password),
      message: "Must contain a number",
    },
  ];

  const failed = validations.find((rule) => !rule.check(passwordToValidate));

  return failed ? failed.message : true;
};
