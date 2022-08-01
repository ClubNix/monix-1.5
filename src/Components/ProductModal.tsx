import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import { setSelectedMembers } from "../Model/MembersSlice";
import {
  productsSelector,
  setProducts,
  setSelectedProduct,
} from "../Model/ProductSlice";
import { Product } from "../Model/types";
import NixModal from "./NixModal";

export type ProductModalProps = {
  product?: Product;
  callback?: (modifiedmember: Product) => void;
};

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
          //TODO: Gestion de la suppression du membre
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={product?.image}
          style={{ width: "50%", margin: "10px" }}
          alt={`Produit '${product?.name}'`}
        />
        <Box sx={{ margin: "10px" }}>
          <h2>{product?.name}</h2>
          <p>
            <b>Stock:</b> {product?.stock}
          </p>
          <p>
            <b>Prix:</b> {product?.price}
          </p>
        </Box>
      </Box>
    </NixModal>
  );
};

export default ProductModal;
