import { Avatar, Button, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useAppDispatch } from "../hook";
import { setSelectedMembers } from "../Model/MembersSlice";
import { Member } from "../Model/types";
import HistoryTab from "./HistoryTab";
import NixModal from "./NixModal";

export type MemberCardProps = {
  member?: Member;
  editmode?: boolean;
};

const MemberCard = ({ member, editmode }: MemberCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <NixModal
      open={member !== undefined}
      onClose={() => dispatch(setSelectedMembers(undefined))}
    >
      <Box sx={{ width: "50%" }}>
        <Typography>Historique des Transactions</Typography>
        <HistoryTab history={member?.history || []} />
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
