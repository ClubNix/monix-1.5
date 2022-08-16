import { Box } from "@mui/system";
import Basket from "../Components/Basket";
import MemberCard from "../Components/MemberCard";
import MembersTable from "../Components/MemberTable";
import { useAppSelector } from "../hook";
import { membersSelector, selectedMember } from "../Model/MembersSlice";

/** Page afin d'afficher les différents membres ainsi que leur informations, on y gère également le panier du membre */
const MembersPage = () => {
  const members = useAppSelector(membersSelector);
  const member = useAppSelector(selectedMember);
  return (
    <div className="row-container centered-items" style={{ marginTop: "20px" }}>
      <MembersTable members={members} />
      <MemberCard member={member} />
      <Basket />
    </div>
  );
};

export default MembersPage;
