import bcrypt from "bcryptjs";

export const encryptPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

export const comparePasswords = (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
