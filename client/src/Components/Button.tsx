type ButtonProps = {
  text: string;
  disabled: boolean;
};

export default function Button({ text, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className="cursor-pointer border rounded-xl bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"
    >
      {text}
    </button>
  );
}
