import { Paper } from "@mui/material";
import { Product } from "../../Model/types";
import "./ProductCard.css";

export type ProductProps = {
  product: Product;
};

/** Composant pour une carte de produits */
const ProductCard = ({ product }: ProductProps) => {
  return (
    <Paper className="product-card">
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
