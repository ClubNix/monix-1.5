import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hook";
import { globalHistorySelector } from "../Model/AdminSlice";
import HistoryTab from "./HistoryTab";

const AdminWelcome = () => {
  const history = useAppSelector(globalHistorySelector);
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        marginTop: "20px",
        height: "80vh",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3">Gestion Administrative</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            marginTop: "20px",
            height: "100%",
          }}
        >
          <Button
            variant="contained"
            sx={{ margin: "10px", height: "75px" }}
            onClick={() => navigate("/admin/membres")}
          >
            Membres
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "10px", height: "75px" }}
            onClick={() => navigate("/admin/products")}
          >
            Produits
          </Button>
          <Button variant="contained" sx={{ margin: "10px", height: "75px" }}>
            Modifier mot de passe
          </Button>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h3">Historique de l'activité</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: 1,
            marginTop: "20px",
            height: "100%",
          }}
        >
          <HistoryTab history={history} />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminWelcome;
