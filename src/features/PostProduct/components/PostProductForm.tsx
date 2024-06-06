import { useState } from "react";

const PostProductForm = () => {
  const [product, setProduct] = useState();

  return (
    <div>
      <form action="">
        <div>
          <input type="text" placeholder="Nombre del producto" />
        </div>
        <div>
          <input type="text" placeholder="Precio" />
        </div>
        <div>
          <select name="" id="">
            <option value="" disabled selected hidden>
              Publicar
            </option>
            <option value="">si</option>
            <option value="">no</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default PostProductForm;
