import { Avatar, Button, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../hook";
import { selectedMember, setSelectedMembers } from "../Model/MembersSlice";
import NixModal from "./NixModal";

const MemberCard = () => {
  const member = useSelector(selectedMember);
  const dispatch = useAppDispatch();
  return (
    <NixModal
      open={member !== undefined}
      onClose={() => dispatch(setSelectedMembers(undefined))}
    >
      <Box sx={{ width: "50%" }}>
        <Typography>Historique des Transactions</Typography>
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
          {member?.history.map((history) => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                border: "2px solid black",
                p: "3px",
                margin: "2px",
              }}
            >
              <span>{history.date.toLocaleDateString()}</span>
              <span>
                {history.amount > 0 ? "+" : ""}
                {history.amount}
              </span>
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar src={member?.avatar} sx={{ width: 96, height: 96 }} />
          <Typography variant="h3">{member?.pseudo}</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/** TODO: Faire en sorte que ce bordel sert à quelque chose */}
          <Typography>Vérification par code</Typography>
          <Switch defaultChecked />
        </Box>
        <Button variant="contained">Code</Button>
      </Box>
    </NixModal>
  );
};

export default MemberCard;
