type ButtonProps = {
  text: string;
  disabled?: boolean;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button
      type="submit"
      className="cursor-pointer border rounded-xl bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white"
    >
      {text}
    </button>
  );
}
