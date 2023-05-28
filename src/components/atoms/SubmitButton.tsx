type SubmitButtonProps = {
  name: string;
  color?: string;
  handleClick?: () => void;
};

export default function SubmitButton({ name, color, handleClick }: SubmitButtonProps) {
  let buttonColor: string;

  if (color) {
    buttonColor = color;
  } else {
    buttonColor = "red"
  }

  return (
    <button
      className={`flex h-[3.125rem] w-[14.375rem] items-center justify-center rounded-[50px] bg-brand-${buttonColor} text-brand-white`}
      onClick={handleClick}
    >
      <p>{name}</p>
    </button>
  );
}
