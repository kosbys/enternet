type InputProps = {
  type: string;
  name: string;
  label: string;
  placeholder: string;
  ref: React.Ref<HTMLInputElement>;
};

export default function Input({
  type,
  name,
  label,
  placeholder,
  ref,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full p-1 rounded-xl outline-gray-300 outline-1"
        ref={ref}
      />
    </div>
  );
}
