type ErrorMessageProps = {
  errorMessage?: string | null;
};

export default function ErrorMessage({ errorMessage }: ErrorMessageProps) {
  const defaultErrorMessage = "Sorry we could not find what you were looking for";

  const message = errorMessage || defaultErrorMessage;

  return (
    <section className="h-min-[2.75rem] flex w-full flex-1 flex-col items-center justify-center rounded border-brand-blue bg-brand-red px-[1.5rem] py-[0.75rem] text-brand-white">
      <p className="h-[1.6875rem]">{message}</p>
    </section>
  );
}
