import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import type { FormField, FormProps } from "../types";
import { joiResolver } from "@hookform/resolvers/joi";

export default function Form<T extends FieldValues>(props: FormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<T>({ resolver: joiResolver(props.schema) });

  // do auth stuff
  const onFormSubmit: SubmitHandler<T> = (data) => {
    console.log(data);
  };

  const InputField = ({ field }: { field: FormField }) => {
    const fieldProps = {
      id: field.name,
      ...register(field.name as any),
      type: field.type,
      "aria-invalid": !!errors[field.name],
      className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500",
    };

    return <input {...fieldProps} />;
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className={props.className}>
      {props.fields.map((field) => {
        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="block mb-1 font-medium">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <InputField field={field} />
            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-500">
                {errors[field.name]?.message as string}
              </p>
            )}
          </div>
        );
      })}
      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer border rounded-xl bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"
      >
        {isSubmitting ? props.loadingText : props.submitText}
      </button>
      ;
    </form>
  );
}
