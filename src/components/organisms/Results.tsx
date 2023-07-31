import ProductList from "@/components/molecules/ProductList";
import { useMemo, useState } from "react";

interface Product {
  product_id: number;
  product: string;
  parent_id: number;
}

interface OtherSuggestions {
  grape_variety: string;
}

type ResultsProps = {
  results?: Product[] | null | string;
  otherSuggestions?: OtherSuggestions[] | null;
  isSuggesting?: boolean;
  isLoading?: boolean;
};

export default function Results({
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
    const renderProduct = useMemo(
      () => (product: Product) => {
        const children = results.filter(
          (obj) => obj.parent_id === product.product_id
        );

        if (children.length === 0) {
          return (
            <p key={product.product_id}>
              {product.product[0].toUpperCase() + product.product.slice(1)}
            </p>
          );
        }

        const handleButtonClick = (productId: number) => {
          setToggleResult((prevState) => ({
            ...prevState,
            [productId]: !prevState[productId],
          }));
        };

        const numberOfResults = results.filter(
          (obj) => obj.parent_id < 3
        ).length;

        return (
          <ProductList
            key={product.product_id}
            product={product}
            toggleResult={toggleResult}
            children={children}
            handleButtonClick={handleButtonClick}
            renderProduct={renderProduct}
            numberOfResults={numberOfResults}
          />
        );
      },
      [results]
    );

    resultMessage = results
      .filter((obj) => obj.parent_id < 3)
      .map((obj) => renderProduct(obj));
  }

  const otherSuggestionsMessage = otherSuggestions
    ?.map((obj) => obj.grape_variety)
    .join(", ");

  return (
    <section className="flex w-full flex-1 flex-col gap-y-[1rem]">
      <div className="h-min-[2.75rem] flex flex-col items-center justify-center rounded border-brand-blue bg-white text-brand-white">
        <p
          className={`w-full bg-brand-blue px-[1.5rem] py-[0.75rem] text-center text-brand-white max-xs:hidden sm:rounded-t`}
        >
          {isSuggesting
            ? "Some good pairings with this type of wine:"
            : "Pairing result:"}
        </p>
        <div
          className={`flex w-full grow flex-wrap justify-center gap-[1rem] border-y px-[1.5rem] py-[0.75rem] text-l text-brand-blue max-xs:hidden sm:rounded-b sm:border`}
        >
          {resultMessage}
        </div>
      </div>
      {isSuggesting && otherSuggestions && otherSuggestions.length > 0 && (
        <p
          className={`w-full border-y bg-white px-[1.5rem] py-[0.75rem] text-center text-brand-blue max-xs:hidden sm:rounded sm:border`}
        >
          You can also try similar grape varieties:{" "}
          <span>{otherSuggestionsMessage}</span>...
        </p>
      )}
    </section>
  );
}
