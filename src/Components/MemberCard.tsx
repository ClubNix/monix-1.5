import { Avatar, Button, Input, Switch, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  membersSelector,
  setMembers,
  setSelectedMembers,
} from "../Model/MembersSlice";
import { Member } from "../Model/types";
import HistoryTab from "./HistoryTab";
import NixModal from "./NixModal";

export type MemberCardProps = {
  member?: Member;
  editmode?: boolean;
  callback?: (modifiedmember: Member) => void;
};

/** Composant pour afficher les informations d'un membre */
const MemberCard = ({ member, editmode, callback }: MemberCardProps) => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(membersSelector);
  const [modifiedMember, setModifiedMember] = useState(member);

  useEffect(() => {
    setModifiedMember(member);
  }, [member]);

  return (
    <NixModal
      open={member !== undefined}
      onClose={() => {
        dispatch(setSelectedMembers(undefined));
        if (callback && modifiedMember) callback(modifiedMember);
      }}
    >
      {editmode && (
        <Button
          sx={{ position: "absolute", right: "20px" }}
          color="error"
          variant="contained"
          onClick={() => {
            //TODO: Gestion de la suppression du membre
            //On supprime du store redux
            const index = members.findIndex(
              (mmb) => mmb.id === modifiedMember?.id
            );
            const newMembers = [...members];
            newMembers.splice(index, 1);
            dispatch(setMembers(newMembers));

            dispatch(setSelectedMembers(undefined));
          }}
        >
          Supprimer le membre
        </Button>
      )}
      <Box sx={{ width: "50%" }}>
        <Typography>Historique des Transactions</Typography>
        <HistoryTab history={member?.history || []} />
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: editmode ? "row" : "column",
          justifyContent: editmode ? "center" : "space-between",
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
          {/** TODO: Faire la gestion d'image en mode edit */}
          <Avatar src={member?.avatar} sx={{ width: 96, height: 96 }} />
          {editmode ? (
            <Input
              value={modifiedMember?.pseudo}
              inputProps={{
                style: { textAlign: "center", fontWeight: "bold" },
              }}
              onChange={(evt) =>
                setModifiedMember({
                  ...modifiedMember,
                  pseudo: evt.currentTarget.value,
                } as Member)
              }
            />
          ) : (
            <Typography variant="h3">{member?.pseudo}</Typography>
          )}
        </Box>

        {!editmode && (
          <>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/** TODO: Faire en sorte que ce bordel sert à quelque chose */}
              <Typography>Vérification par code</Typography>
              <Switch defaultChecked />
            </Box>
            <Button variant="contained">Code</Button>
          </>
        )}
      </Box>
    </NixModal>
  );
};

export default MemberCard;
