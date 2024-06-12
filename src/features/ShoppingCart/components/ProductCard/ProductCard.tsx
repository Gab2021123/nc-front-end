import ImageComponents from "../../../Main/components/Images/ImageComponent";

type ProductCardProps = {
  nombre: string;
  precio: number;
  cantidad: number;
  imagen: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  nombre,
  precio,
  cantidad,
  imagen,
}) => {
  console.log(imagen);

  return (
    <div className="flex flex-col gap-y-[2.5rem] justify-center items-center">
      {/* <img className="w-10px h-full object-cover" src={`${imagen}`} alt="" /> */}
      <ImageComponents
        label={nombre}
        source={imagen}
        title=""
        to={""}
        contrast={0}
        saturate={0}
      />
      {/* <h2 className="text-lg font-bold text-gray-700">Nombre: {nombre}</h2> */}
      <div className="flex justify-between items-center w-1/2">
        <span className="text-[20px] text-center font-bold text-blue-600">
          {cantidad}{" "}
        </span>
        <span className="text-md text-gray-600">
          Precio: <span className="text-green-500">${precio.toFixed(2)}</span>
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
