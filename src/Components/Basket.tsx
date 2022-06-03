import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Input,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hook";
import {
  basketSelector,
  closeBasket,
  isBasketOpenedSelector,
  membersSelector,
} from "../Model/MembersSlice";
import { productsSelector } from "../Model/ProductSlice";
import NixModal from "./NixModal";

const Basket = () => {
  const opened = useSelector(isBasketOpenedSelector);
  const membres = useSelector(membersSelector);
  const produits = useSelector(productsSelector);
  const basket = useSelector(basketSelector);
  const dispatch = useAppDispatch();
  return (
    <NixModal
      open={opened}
      onClose={() => dispatch(closeBasket())}
      size={{ height: "70vh", width: "60vw" }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            height: "20%",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Autocomplete
            sx={{
              width: "200px",
            }}
            placeholder="Membre"
            onChange={(evt, value) => console.log(value)}
            options={membres.map((membre) => ({
              label: membre.pseudo,
              membreId: membre.id,
            }))}
            renderInput={(params) => <TextField {...params} label="Membre" />}
          />
          <Box>
            <Input
              type="password"
              sx={{ marginRight: "5px" }}
              placeholder="Code"
            />
            <Button>Validate</Button>
          </Box>
        </Box>
        <Box>
          <TableContainer sx={{ height: "20vh" }}>
            <Table stickyHeader aria-label="Member table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell align="center" colSpan={5}>Panier</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {basket.map(({product, amount}) => (
                  <TableRow key={`row-member-${product.id}`}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price} MC</TableCell>
                    <TableCell>{product.stock} MC</TableCell>
                    <TableCell>
                      <Input type="number" value={amount} placeholder="Quantité" />
                    </TableCell>
                    <TableCell>
                      <Button>Ajouter au panier</Button>
                    </TableCell>
                  </TableRow>
                ))}
                {basket.length === 0 && <p>Le panier est vide !</p>}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <hr style={{ borderTop: "2px solid black", borderRadius: "2px" }} />
        <Box>
          <TableContainer sx={{ height: "25vh" }}>
            <Table stickyHeader aria-label="Member table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "black" }}>
                  <TableCell>Nom</TableCell>
                  <TableCell>Prix (Crédits)</TableCell>
                  <TableCell>Stock</TableCell>
                  <TableCell>Quantité à ajouter</TableCell>
                  <TableCell>Ajouter</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {produits.map((product) => (
                  <TableRow key={`row-member-${product.id}`}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price} MC</TableCell>
                    <TableCell>{product.stock} MC</TableCell>
                    <TableCell>
                      <Input type="number" placeholder="Quantité" />
                    </TableCell>
                    <TableCell>
                      <Button>Ajouter au panier</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </NixModal>
  );
};

export default Basket;