import { Paper } from "@mui/material";
import { Product } from "../Model/types";

export type ProductProps = {
  product: Product;
};

/** Composant pour une carte de produits */
const ProductCard = ({ product }: ProductProps) => {
  return (
    <Paper sx={{ display: "flex", width: "30vw", margin: "10px" }}>
      <img
        src={product.image}
        style={{ width: "50%", margin: "10px" }}
        alt={`Produit '${product.name}'`}
      />
      <div style={{ margin: "10px" }}>
        <h2>{product.name}</h2>
        <p>
          <b>Stock:</b> {product.stock}
        </p>
        <p>
          <b>Prix:</b> {product.price}
        </p>
      </div>
    </Paper>
  );
};

export default ProductCard;
