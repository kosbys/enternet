import bcrypt from "bcryptjs";

export default function encryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}

export default function comparePasswords(password, hashedPassword) {
  return bcrypt.compare(password, hashedPassword);
}