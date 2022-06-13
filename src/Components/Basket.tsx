import {
  Autocomplete,
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
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hook";
import {
  basketSelector,
  closeBasket,
  isBasketOpenedSelector,
  membersSelector,
  modifyBasket,
} from "../Model/MembersSlice";
import { productsSelector } from "../Model/ProductSlice";
import { BasketEntry, Product } from "../Model/types";
import NixModal from "./NixModal";

const Basket = () => {
  const opened = useSelector(isBasketOpenedSelector);
  const membres = useSelector(membersSelector);
  const produits = useSelector(productsSelector);
  const basket = useSelector(basketSelector);
  const dispatch = useAppDispatch();

  const [tmpAmount, setTmpAmount] = useState<BasketEntry[]>([]);

  useEffect(() => {
    //seulement au mount du composant
    const newTmpAmounts: BasketEntry[] = []
    for(const product of produits) {
      newTmpAmounts.push({product, amount: 1})
    }
    setTmpAmount(newTmpAmounts);
  }, [produits])
  

  const addToBasket = (product: Product) => {
    const index = basket.findIndex((val) => val.product.id === product.id);
    let amount = getTmpAmountForProduct(product);
    let newBasket = [...basket];

    //TODO: Mettre en place des messages d'erreurs (Feedback utilisateur)
    if (amount === 0 || amount > product.stock) return;

    //Si l'objet est déjà dans le basket, on met juste à jour son amount
    if (index !== -1){
      const { amount: oldAmount } = newBasket[index]

      //TODO: Mettre en place des messages d'erreurs (Feedback utilisateur)
      if(amount + oldAmount > product.stock) return;
      newBasket[index] = { ...newBasket[index], amount: oldAmount + amount };
    } 
    else newBasket.push({ product, amount });
    dispatch(modifyBasket(newBasket));
  };

  const removeFromBasket = (product: Product) => {
    let newBasket = [...basket];
    const index = newBasket.findIndex((val) => val.product.id === product.id);
    console.log(newBasket)
    delete newBasket[index];
    console.log(newBasket)

    dispatch(modifyBasket(newBasket));
  };

  const updateBasketAmount = (product: Product, amount: number) => {
    const index = basket.findIndex((val) => val.product.id === product.id);
    let newBasket = [...basket]


    if(amount > product.stock) return;
    const newbasketEntry: BasketEntry = {...tmpAmount[index], amount}
    newBasket[index] = newbasketEntry;

    dispatch(modifyBasket(newBasket))
  };

  const setTmpAmountForProduct = (product: Product, amount: number) => {
    const index = tmpAmount.findIndex((val) => val.product.id === product.id);
    let newAmounts = [...tmpAmount]

    //Si on a pas d'amount déjà set, on l'ajoute pour le produit
    if (index === -1) newAmounts.push({ product: product, amount: amount });
    else {
      const newbasketEntry: BasketEntry = {...tmpAmount[index], amount}
      newAmounts[index] = newbasketEntry;
    } 
    setTmpAmount(newAmounts);
  };

  const getTmpAmountForProduct = (product: Product) => {
    const index = tmpAmount.findIndex((val) => val.product.id === product.id);

    //Si on ne trouve pas l'objet, c'est que la quantité est toujours à 1
    if (index === -1) return 0;
    return tmpAmount[index].amount;
  };

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
                  <TableCell align="center" colSpan={5}>
                    Panier
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {basket.map(({ product, amount }) => (
                  <TableRow key={`row-member-${product.id}`}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.price * amount} MC</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        value={amount}
                        inputProps={{min: 1}}
                        placeholder="Quantité"
                        onChange={(evt) =>
                          updateBasketAmount(
                            product,
                            Number(evt.currentTarget.value)
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => removeFromBasket(product)}>Retirer du panier</Button>
                    </TableCell>
                  </TableRow>
                ))}
                {basket.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={5} align="center">
                      <strong>Le panier est vide !</strong>
                    </TableCell>
                  </TableRow>
                )}
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
                    <TableCell>{product.stock}</TableCell>
                    <TableCell>
                      <Input
                        type="number"
                        placeholder="Quantité"
                        value={getTmpAmountForProduct(product)}
                        onChange={(evt) =>
                          setTmpAmountForProduct(
                            product,
                            Number(evt.currentTarget.value)
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button onClick={() => addToBasket(product)}>
                        Ajouter au panier
                      </Button>
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
