import ProductFindComponent from "../components/ProductFindComponent";

type ProductFindProps = {
  value: string;
};
const ProductFind: React.FC<ProductFindProps> = ({ value }) => {
  return (
    <div className="w-full h-full z-11 bg-[#64c8aa66] bg-opacity-75">
      <ProductFindComponent value={value}></ProductFindComponent>
    </div>
  );
};

export default ProductFind;
