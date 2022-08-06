import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  InputAdornment,
  Box,
  Avatar,
  TextField,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Member } from "../Model/types";
import { useState } from "react";
import { useAppDispatch } from "../hook";
import { openBasket, setSelectedMembers } from "../Model/MembersSlice";
import { createEmptyMember } from "../utils";

export type MembersTableProps = { members: Member[]; editmode?: boolean };

/** Composant pour afficher la table des membres */
const MembersTable = ({ members, editmode }: MembersTableProps) => {
  const [memberFilter, setMemberFilter] = useState("");
  const dispatch = useAppDispatch();
  return (
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
          value={memberFilter}
          onChange={(evt) => setMemberFilter(evt.currentTarget.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {editmode && (
          <Button
            variant="contained"
            sx={{ height: "100%" }}
            onClick={() => dispatch(setSelectedMembers(createEmptyMember()))}
          >
            Ajouter un membre
          </Button>
        )}
      </Box>

      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "60vh" }}>
          <Table stickyHeader aria-label="Member table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "black" }}>
                <TableCell></TableCell>
                <TableCell>Pseudo</TableCell>
                <TableCell>Crédits</TableCell>
                {!editmode && (
                  <>
                    <TableCell>Dépot / Achat</TableCell>
                    <TableCell>Profil</TableCell>
                  </>
                )}
                {editmode && <TableCell>Modifier le membre</TableCell>}
              </TableRow>
            </TableHead>
            <TableBody>
              {members
                .filter((member) => member.pseudo.includes(memberFilter))
                .map((member) => (
                  <TableRow key={`row-member-${member.id}`}>
                    <TableCell>
                      <Avatar src={member.avatar} />
                    </TableCell>
                    <TableCell>{member.pseudo}</TableCell>
                    <TableCell>
                      <>{member.balance} MC</>
                    </TableCell>
                    {!editmode && (
                      <>
                        <TableCell>
                          <Button onClick={() => dispatch(openBasket())}>
                            Buy
                          </Button>
                        </TableCell>

                        <TableCell>
                          <Button
                            onClick={() => dispatch(setSelectedMembers(member))}
                          >
                            Voir les détails
                          </Button>
                        </TableCell>
                      </>
                    )}
                    {editmode && (
                      <TableCell>
                        <Button
                          onClick={() => dispatch(setSelectedMembers(member))}
                          color="warning"
                        >
                          Modifier
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default MembersTable;
