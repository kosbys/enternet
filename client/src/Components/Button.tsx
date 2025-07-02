type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return (
    <button className="btn border rounded-lg bg-blue-500 mt-4 p-2 text-white">
      {text}
    </button>
  );
}
