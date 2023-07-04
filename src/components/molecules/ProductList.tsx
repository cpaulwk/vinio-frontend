import { useBreakpoint } from "@/utils/useBreakpoint";

interface Product {
  product_id: number;
  product: string;
  parent_id: number;
}

type ProductListProps = {
  product: Product;
  toggleResult: Record<string, boolean>;
  handleButtonClick: (productId: number) => void;
  renderProduct: (product: Product) => JSX.Element;
  children: Product[];
  numberOfResults: number;
};

export default function ProductList({
  product,
  toggleResult,
  children,
  handleButtonClick,
  renderProduct,
  numberOfResults,
}: ProductListProps) {
  const isBelowXsBreakpoint = useBreakpoint("xs");

  // const categoryColors: Record<string, string> = {
  //   "delicate and nutty cheese": "#FAED70",
  //   "fresh and salted cheese": "#FFB977",
  //   "smelly cheese": "#A55B6E",
  //   "strong and firm cheese": "#F9B2B2",
  //   charcuterie: "#CBB5A2",
  //   fish: "#7D5642",
  //   mollusc: "#284B63",
  //   "red meat": "#AEB9E8",
  //   shellfish: "#B2E6D4",
  //   "white meat": "#7A9E7E",
  // };

  return (
    <div
      key={product.product_id}
      className={`${isBelowXsBreakpoint ? "hidden" : ""
        } flex min-w-[17rem] flex-col rounded lg:basis-1/${numberOfResults + 1
        } border text-brand-blue`}
    >
      <button
        id={product.product}
        onClick={() => handleButtonClick(product.product_id)}
        className="w-full bg-brand-blue text-brand-white text-l"
      >
        {product.product[0].toUpperCase() + product.product.slice(1)}
        <span className="ml-[0.75rem]">⌄</span>
      </button>
      {toggleResult[product.product_id] && (
        <div
          className={`flex w-full flex-col items-start px-[2rem]`}
        >
          {children.map((child) => renderProduct(child))}
        </div>
      )}
    </div>
  );
}
