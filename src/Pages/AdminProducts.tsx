import {
  Button,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch, useAppSelector } from "../hook";

import {
  productsSelector,
  selectedProduct as selectedProductSelector,
  setProducts,
  setSelectedProduct,
} from "../Model/ProductSlice";
import ProductModal from "../Components/ProductModal";
import { createEmptyProduct } from "../utils";

/** Page de gestion administrative des produits */
const AdminProductPage = () => {
  const dispatch = useAppDispatch();
  const [productFilter, setProductFilter] = useState("");
  const products = useAppSelector(productsSelector);
  const selectedProduct = useAppSelector(selectedProductSelector);
  return (
    <div className="row-container centered-items" style={{ marginTop: "20px" }}>
      {/* Liste des produits */}
      <Box sx={{ width: "80%" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextField
            sx={{ marginBottom: "20px" }}
            placeholder="Produit"
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

          <Button
            variant="contained"
            sx={{ height: "100%" }}
            onClick={() => dispatch(setSelectedProduct(createEmptyProduct()))}
          >
            Ajouter un produit
          </Button>
        </Box>

        <Paper sx={{ overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: "60vh" }}>
            <Table stickyHeader aria-label="Member table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell>Nom</TableCell>
                  <TableCell>Prix</TableCell>
                  <TableCell>Stocks</TableCell>
                  <TableCell>Modifier le produit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products
                  .filter((product) => product.name.includes(productFilter))
                  .map((product) => (
                    <TableRow key={`row-product-${product.id}`}>
                      <TableCell>{product.name}</TableCell>
                      <TableCell>
                        <>{product.price} MC</>
                      </TableCell>
                      <TableCell>{product.stock}</TableCell>

                      <TableCell>
                        <Button
                          onClick={() => dispatch(setSelectedProduct(product))}
                          color="warning"
                        >
                          Modifier
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
      {/* Si un produit est selectionné, on l'affiche via le productModal */}
      <ProductModal
        product={selectedProduct}
        callback={(modfiedProduct) => {
          //TODO: Modification niveau backend
          if (modfiedProduct.id !== undefined) {
            //Modification dans le store
            const index = products.findIndex(
              (prd) => prd.id === modfiedProduct?.id
            );
            const newProducts = [...products];
            newProducts[index] = modfiedProduct;
            dispatch(setProducts(newProducts));
          } else {
            //On ajoute le nouveau produit
            const newProducts = [...products, modfiedProduct];
            dispatch(setProducts(newProducts));
          }
        }}
      />
    </div>
  );
};

export default AdminProductPage;
