type SubmitButtonProps = {
  name: string;
  color?: string;
  handleClick?: () => void;
};

export default function SubmitButton({
  name,
  color = "red",
  handleClick,
}: SubmitButtonProps) {

  return (
    <button
      className={`flex h-[3.125rem] w-[14.375rem] items-center justify-center rounded-[50px] max-xs:hidden bg-brand-${color} text-brand-white`}
      onClick={handleClick}
    >
      <p>{name}</p>
    </button>
  );
}
