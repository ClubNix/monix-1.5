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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Member } from "../Model/types";
import { useState } from "react";

export type MembersTableProps = { members: Member[] };

const MembersTable = ({ members }: MembersTableProps) => {
  const [memberFilter, setMemberFilter] = useState("");
  return (
    <Box sx={{ width: "80%" }}>
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
      <Paper sx={{ overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: "60vh" }}>
          <Table stickyHeader aria-label="Member table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "black" }}>
                <TableCell></TableCell>
                <TableCell>Pseudo</TableCell>
                <TableCell>Crédits</TableCell>
                <TableCell>Dépot / Achat</TableCell>
                <TableCell>Profil</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members
                .filter((member) => member.pseudo.includes(memberFilter))
                .map(({ id, avatar, pseudo, balance }) => (
                  <TableRow key={`row-member-${id}`}>
                    <TableCell>
                      <Avatar src={avatar} />
                    </TableCell>
                    <TableCell>{pseudo}</TableCell>
                    <TableCell>
                      <>{balance} MC</>
                    </TableCell>
                    <TableCell>TODO</TableCell>
                    <TableCell>TODO</TableCell>
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
