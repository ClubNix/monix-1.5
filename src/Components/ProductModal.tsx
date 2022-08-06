import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  productsSelector,
  setProducts,
  setSelectedProduct,
} from "../Model/ProductSlice";
import { Product } from "../Model/types";
import NixModal from "./NixModal";

export type ProductModalProps = {
  product?: Product;
  callback?: (modifiedProduct: Product) => void;
};

/** Composant pour l'edition d'un produit */
const ProductModal = ({ product, callback }: ProductModalProps) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(productsSelector);
  const [modifiedProduct, setModifiedProduct] = useState(product);

  useEffect(() => {
    setModifiedProduct(product);
  }, [product]);

  return (
    <NixModal
      open={product !== undefined}
      onClose={() => {
        dispatch(setSelectedProduct(undefined));
        if (callback && modifiedProduct) callback(modifiedProduct);
      }}
    >
      <Button
        sx={{ position: "absolute", right: "20px" }}
        color="error"
        variant="contained"
        onClick={() => {
          //TODO: Gestion de la suppression du produit
          //On supprime du store redux
          const index = products.findIndex(
            (mmb) => mmb.id === modifiedProduct?.id
          );
          const newProducts = [...products];
          newProducts.splice(index, 1);
          dispatch(setProducts(newProducts));

          dispatch(setSelectedProduct(undefined));
        }}
      >
        Supprimer le produit
      </Button>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <img
          src={product?.image}
          style={{ width: "50%", margin: "10px" }}
          alt={`Produit '${product?.name}'`}
        />
        <Box
          sx={{
            margin: "10px",
            padding: "10px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            value={modifiedProduct?.name}
            variant="standard"
            margin="normal"
            inputProps={{
              style: { textAlign: "center", fontWeight: "bold" },
            }}
            onChange={(evt) =>
              setModifiedProduct({
                ...modifiedProduct,
                name: evt.currentTarget.value,
              } as Product)
            }
          />
          <br />
          <TextField
            value={modifiedProduct?.stock}
            type="number"
            margin="normal"
            variant="standard"
            inputProps={{
              style: { textAlign: "center" },
            }}
            onChange={(evt) => {
              console.log("Update value", evt.currentTarget.value);
              setModifiedProduct({
                ...modifiedProduct,
                stock: parseInt(evt.currentTarget.value),
              } as Product);
            }}
          />
          <br />
          <TextField
            value={modifiedProduct?.price}
            type="number"
            margin="normal"
            variant="standard"
            inputProps={{
              style: { textAlign: "center" },
            }}
            onChange={(evt) =>
              setModifiedProduct({
                ...modifiedProduct,
                price: parseFloat(evt.currentTarget.value),
              } as Product)
            }
          />
        </Box>
      </Box>
    </NixModal>
  );
};

export default ProductModal;
