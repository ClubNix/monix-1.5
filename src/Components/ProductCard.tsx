import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Product } from "../Model/types";

export type ProductProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductProps) => {
  return (
    <Paper sx={{display: "flex", width: "30vw", margin:"10px"}}>
       <img src={product.image} style={{width: "50%", margin: "10px"}} alt={`Produit '${product.name}'`} />
      <Box sx={{margin: "10px"}}>
        <h2>{product.name}</h2>
        <p><b>Stock:</b> {product.stock}</p>
        <p><b>Prix:</b> {product.price}</p>
      </Box>
    </Paper>
  );
};

export default ProductCard;
