type InputProps = {
  type: string;
  placeholder: string;
  error?: string;
  ref: React.Ref<HTMLInputElement>;
};

export default function Input({ type, placeholder, error, ref }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-1 rounded-lg border"
      ref={ref}
    />
  );
}
