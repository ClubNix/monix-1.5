import { Box } from "@mui/system";
import MemberCard from "../Components/MemberCard";
import MembersTable from "../Components/MemberTable";
import { useAppSelector } from "../hook";
import { membersSelector, selectedMember } from "../Model/MembersSlice";

const AdminMembersPage = () => {
  const members = useAppSelector(membersSelector);
  const member = useAppSelector(selectedMember);
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
      <MembersTable members={members} editmode />
      <MemberCard member={member} editmode />
    </Box>
  );
};

export default AdminMembersPage;
