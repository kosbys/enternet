import bcrypt from "bcryptjs";

export default function encryptPassword(password) {
  return bcrypt.hashSync(password, 10);
}
