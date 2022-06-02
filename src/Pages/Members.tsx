import { Box } from "@mui/system";
import MembersTable from "../Components/MemberTable";
import { useAppSelector } from "../hook";
import { membersSelector } from "../Model/MembersSlice";
import { generateFakeMembers } from "../utils";

const MembersPage = () => {
  const members = useAppSelector(membersSelector);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <MembersTable members={members} />
    </Box>
  );
};

export default MembersPage;
