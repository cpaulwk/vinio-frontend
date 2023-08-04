import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Product {
  product_id: number;
  product: string;
  parent_id: number;
}

type ProductListProps = {
  key: number;
  product: Product;
  toggleResult: Record<string, boolean>;
  handleButtonClick: (productId: number) => void;
  renderProduct: (product: Product) => JSX.Element;
  children: Product[];
  numberOfResults: number;
};

export default function ProductList({
  key,
  product,
  toggleResult,
  children,
  handleButtonClick,
  renderProduct,
  numberOfResults,
}: ProductListProps) {
  const formatProductTitle = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div
      key={key}
      className={`flex min-w-[17rem] flex-col rounded max-xs:hidden lg:basis-1/${numberOfResults + 1
        } border text-brand-blue`}
    >
      <button
        id={product.product}
        onClick={() => handleButtonClick(product.product_id)}
        className="w-full flex items-center justify-center bg-brand-blue text-l text-brand-white"
      >
        {formatProductTitle(product.product)}
        <FontAwesomeIcon
          className="ml-1 h-[15px]"
          icon={toggleResult[product.product_id] ? faChevronUp : faChevronDown}
          style={{ color: "#f8fdfd" }}
        />
      </button>
      {toggleResult[product.product_id] && (
        <div className={`flex w-full flex-col items-start px-[2rem]`}>
          {children.map((child) => renderProduct(child))}
        </div>
      )}
    </div>
  );
}
