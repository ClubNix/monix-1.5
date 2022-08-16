import { Box } from "@mui/material";
import { HistoryEntry } from "../../Model/types";
import "./Historytab.css";

export type HistoryTabProps = {
  history: HistoryEntry[];
};

/** Composant pour afficher l'historique d'un utilisateur */
const HistoryTab = ({ history }: HistoryTabProps) => (
  <div className="column-container history-container">
    {history.map((hist) => (
      <div
        className="row-container space-between-items history-line"
        key={hist.id}
      >
        <span>{new Date(hist.date).toLocaleDateString()}</span>
        <span>
          {hist.amount > 0 ? "+" : ""}
          {hist.amount}
        </span>
      </div>
    ))}
  </div>
);

export default HistoryTab;
