import { Box } from "@mui/material";
import { HistoryEntry } from "../Model/types";

export type HistoryTabProps = {
  history: HistoryEntry[];
};

const HistoryTab = ({history} : HistoryTabProps) => (
  <Box
    sx={{
      border: "2px solid black",
      overflowY: "scroll",
      height: "90%",
      margin: "10px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    {history.map((hist) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          border: "2px solid black",
          p: "3px",
          margin: "2px",
        }}
        key={hist.id}
      >
        <span>{new Date(hist.date).toLocaleDateString()}</span>
        <span>
          {hist.amount > 0 ? "+" : ""}
          {hist.amount}
        </span>
      </Box>
    ))}
  </Box>
);

export default HistoryTab;
