type SubmitButtonProps = {
  name: string;
  color?: string;
  handleClick?: () => void;
};

const DEFAULT_BUTTON_COLOR = "red";

export default function SubmitButton({
  name,
  color = DEFAULT_BUTTON_COLOR,
  handleClick,
}: SubmitButtonProps) {
  const buttonColorClass = `bg-brand-${color}`;

  return (
    <button
      className={`flex h-[3.125rem] w-[14.375rem] items-center justify-center rounded-[50px] max-xs:hidden bg-brand-${buttonColorClass} text-brand-white`}
      onClick={handleClick}
    >
      <p>{name}</p>
    </button>
  );
}
