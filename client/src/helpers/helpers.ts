import type { UseFormGetValues } from "react-hook-form";

type ValidationRule = {
  check: (passwordToConfirm: string) => boolean;
  message: string;
};

type ValidationResult = string | true;

export const validatePassword = (
  passwordToValidate: string
): ValidationResult => {
  const validations: ValidationRule[] = [
    { check: (password) => !!password, message: "סיסמה חסרה" },
    {
      check: (password) => password.length >= 8,
      message: "סיסמה חייבת להיות בעלת 8 תווים לפחות",
    },
    {
      check: (password) => /[A-Z]/.test(password),
      message: "סיסמה חייבת להכיל אות גדולה באנגלית",
    },
    {
      check: (password) => /[a-z]/.test(password),
      message: "סיסמה חייבת להכיל אות קטנה באנגלית",
    },
    {
      check: (password) => /[0-9]/.test(password),
      message: "סיסמה חייבת להכיל מספר",
    },
  ];

  const failed = validations.find((rule) => !rule.check(passwordToValidate));

  return failed ? failed.message : true;
};

export const confirmPasswordsMatch = (
  getValues: UseFormGetValues<any>
): ((passwordToConfirm: string) => ValidationResult) => {
  return (passwordToConfirm: string) => {
    return (
      passwordToConfirm === getValues("password") || "סיסמאות חייבות להיות זהות"
    );
  };
};
