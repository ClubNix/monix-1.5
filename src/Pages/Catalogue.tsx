import { TextField, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { generateFakeProducts } from "../utils";
import SearchIcon from "@mui/icons-material/Search";

const CataloguePage = () => {
  const [productFilter, setProductFilter] = useState("");
  const products = generateFakeProducts(10);
  return (
    <>
      <Box sx={{marginLeft:"3vw", marginTop:"10px"}}>
        <TextField
          placeholder="Nom Produit"
          value={productFilter}
          onChange={(evt) => setProductFilter(evt.currentTarget.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly",
          width: "100%",
          marginTop: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard product={product} key={`product-${product.id}`} />
        ))}
      </Box>
    </>
  );
};

export default CataloguePage;