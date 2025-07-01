type ButtonProps = {
  text: string;
};

export default function Button({ text }: ButtonProps) {
  return <button className="btn btn-neutral mt-4">{text}</button>;
}
