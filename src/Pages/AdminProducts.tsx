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

const AdminProductPage = () => {
  const dispatch = useAppDispatch();
  const [productFilter, setProductFilter] = useState("");
  const products = useAppSelector(productsSelector);
  const selectedProduct = useAppSelector(selectedProductSelector);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
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
            placeholder="Membre"
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

          <Button variant="contained" sx={{ height: "100%" }}>
            Ajouter un membre
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
                  <TableCell>Modifier le membre</TableCell>
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
      <ProductModal
        product={selectedProduct}
        callback={(modfiedProduct) => {
          //TODO: Modification niveau backend
          //Modification dans le store
          const index = products.findIndex(
            (prd) => prd.id === modfiedProduct?.id
          );
          const newMembers = [...products];
          newMembers[index] = modfiedProduct;
          dispatch(setProducts(newMembers));
        }}
      />
    </Box>
  );
};

export default AdminProductPage;
