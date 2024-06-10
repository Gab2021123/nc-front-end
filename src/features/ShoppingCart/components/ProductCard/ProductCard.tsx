type ProductCardProps = {
  nombre: string;
  precio: number;
  cantidad: number;
};

const ProductCard: React.FC<ProductCardProps> = ({
  nombre,
  precio,
  cantidad,
}) => {
  return (
    <div className="product-card">
      <h2>Nombre: {nombre}</h2>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: ${precio.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
