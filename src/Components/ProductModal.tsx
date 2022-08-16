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
import NixModal from "./NixModal/NixModal";

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
      <div className="row-container space-evenly-items centered-items">
        <img
          src={product?.image}
          style={{ width: "75%", margin: "10px" }}
          alt={`Produit '${product?.name}'`}
        />
        <div className="column-container centered-items">
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
        </div>
      </div>
    </NixModal>
  );
};

export default ProductModal;
