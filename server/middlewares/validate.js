import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().alphanum().min(3).max(255),
  email: Joi.string().email(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,100}$")),
});

const registerSchema = schema.fork(["name", "email", "password"], (field) =>
  field.required()
);

const loginSchema = schema
  .fork(["password"], (field) => field.required())
  .or("name", "email");

export const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;

  registerSchema
    .validateAsync({ name, email, password })
    .then(() => next())
    .catch((err) => {
      res.status(400).json({ error: err.details[0].message });
    });
};

export const validateLogin = (req, res, next) => {
  const { name, email, password } = req.body;

  loginSchema
    .validateAsync({ name, email, password })
    .then(() => next())
    .catch((err) => {
      res.status(400).json({ error: err.details[0].message });
    });
};
