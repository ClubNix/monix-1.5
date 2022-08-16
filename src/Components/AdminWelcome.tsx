import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hook";
import { globalHistorySelector } from "../Model/AdminSlice";
import HistoryTab from "./HistoryTab/HistoryTab";

/** Composant pour l'affichage de la page d'accueil */
const AdminWelcome = () => {
  const history = useAppSelector(globalHistorySelector);
  const navigate = useNavigate();
  return (
    <div className="row-container" style={{ height: "80vh" }}>
      <div style={{ flexGrow: 1 }}>
        <h3>Gestion Administrative</h3>
        <div className="column-container space-evenly-items">
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
        </div>
      </div>
      <div style={{ flexGrow: 1 }}>
        <h3>Historique de l&apos;activité</h3>
        <div className="column-container">
          <HistoryTab history={history} />
        </div>
      </div>
    </div>
  );
};

export default AdminWelcome;
