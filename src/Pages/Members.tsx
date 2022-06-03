import { Box } from "@mui/system";
import Basket from "../Components/Basket";
import MemberCard from "../Components/MemberCard";
import MembersTable from "../Components/MemberTable";
import { useAppSelector } from "../hook";
import { membersSelector } from "../Model/MembersSlice";

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
      <MemberCard />
      <Basket />
    </Box>
  );
};

export default MembersPage;
