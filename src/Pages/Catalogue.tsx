import { TextField, InputAdornment } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import SearchIcon from "@mui/icons-material/Search";
import { productsSelector } from "../Model/ProductSlice";
import { useAppSelector } from "../hook";

/** Page afin d'afficher les différents produits ainsi que leur informations */
const CataloguePage = () => {
  const [productFilter, setProductFilter] = useState("");
  const products = useAppSelector(productsSelector);
  return (
    <>
      <div style={{ marginLeft: "3vw", marginTop: "10px" }}>
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
      </div>
      <div
        className="row-container space-evenly-items"
        style={{ flexWrap: "wrap", marginTop: "20px" }}
      >
        {products
          .filter((product) => product.name.includes(productFilter))
          .map((product) => (
            <ProductCard product={product} key={`product-${product.id}`} />
          ))}
      </div>
    </>
  );
};

export default CataloguePage;
