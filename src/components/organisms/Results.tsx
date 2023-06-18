import { useState } from "react";

interface Product {
  product_id: number;
  product: string;
  parent_id: number;
}

interface OtherSuggestions {
  grape_variety: string;
}

type ResultsProps = {
  results: Product[] | null | string;
  otherSuggestions: OtherSuggestions[] | null;
  isSuggesting: boolean;
};

export default function Results_WIP({
  results,
  otherSuggestions,
  isSuggesting,
}: ResultsProps) {
  const [toggleResult, setToggleResult] = useState<Record<string, boolean>>({});

  if (!results) {
    return null;
  }

  let resultMessage;
  if (typeof results === "string") {
    resultMessage = results;
  } else if (Array.isArray(results)) {
    const renderProduct = (product: Product) => {
      const children = results.filter(
        (obj) => obj.parent_id === product.product_id
      );

      if (children.length === 0) {
        return <p key={product.product_id}>{product.product}</p>;
      }

      const handleButtonClick = () => {
        setToggleResult((prevState) => ({
          ...prevState,
          [product.product_id]: !prevState[product.product_id],
        }));
      };

      return (
        <div key={product.product_id} className="basis-1/7">
          <button
            id={product.product}
            onClick={handleButtonClick}
            className="h-[1.6875rem] text-l"
          >
            {product.product}
            <span className="ml-[0.75rem]">⌄</span>
          </button>
          {toggleResult[product.product_id] && (
            <div className="">
              {children.map((child) => renderProduct(child))}
            </div>
          )}
        </div>
      );
    };

    resultMessage = results
      .filter((obj) => obj.parent_id < 3)
      .map((obj) => renderProduct(obj));
  }

  const otherSuggestionsMessage = otherSuggestions
    ?.map((obj) => obj.grape_variety)
    .join(", ");

  return (
    <section className="h-min-[2.75rem] flex w-full flex-1 flex-col items-center justify-center rounded border-brand-blue bg-brand-blue  text-brand-white">
      <p className="w-full border-b border-brand-white px-[1.5rem] py-[0.75rem] text-center">
        Here is the result:
      </p>
      <div className="text-l flex grow flex-wrap gap-[2rem] px-[1.5rem] py-[0.75rem]">
        {resultMessage}
      </div>
      {isSuggesting && (
        <p className="w-full border-b border-brand-white px-[1.5rem] py-[0.75rem] text-center">
          You can also try similar grape varieties:{" "}
          <span>{otherSuggestionsMessage}</span>...
        </p>
      )}
    </section>
  );
}