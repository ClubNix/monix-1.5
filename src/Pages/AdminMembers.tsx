import { Box } from "@mui/system";
import MemberCard from "../Components/MemberCard";
import MembersTable from "../Components/MemberTable";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  membersSelector,
  selectedMember,
  setMembers,
} from "../Model/MembersSlice";

const AdminMembersPage = () => {
  const dispatch = useAppDispatch();
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
      <MemberCard
        member={member}
        editmode
        callback={(modfiedMember) => {
          //TODO: Modification niveau backend
          //Modification dans le store
          const index = members.findIndex(
            (mmb) => mmb.id === modfiedMember?.id
          );
          const newMembers = [...members];
          newMembers[index] = modfiedMember;
          dispatch(setMembers(newMembers));
        }}
      />
    </Box>
  );
};

export default AdminMembersPage;
