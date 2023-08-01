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
  const formatProductTitle = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div
      key={product.product_id}
      className={`flex min-w-[17rem] flex-col rounded max-xs:hidden lg:basis-1/${numberOfResults + 1
        } border text-brand-blue`}
    >
      <button
        id={product.product}
        onClick={() => handleButtonClick(product.product_id)}
        className="w-full bg-brand-blue text-l text-brand-white"
      >
        {formatProductTitle(product.product)}
        <span className="ml-[0.75rem]">⌄</span>
      </button>
      {toggleResult[product.product_id] && (
        <div className={`flex w-full flex-col items-start px-[2rem]`}>
          {children.map((child) => renderProduct(child))}
        </div>
      )}
    </div>
  );
}
