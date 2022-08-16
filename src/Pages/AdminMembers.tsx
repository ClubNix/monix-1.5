import MemberCard from "../Components/MemberCard";
import MembersTable from "../Components/MemberTable";
import { useAppDispatch, useAppSelector } from "../hook";
import {
  membersSelector,
  selectedMember,
  setMembers,
} from "../Model/MembersSlice";

/** Page de gestion administrative des membres */
const AdminMembersPage = () => {
  const dispatch = useAppDispatch();
  const members = useAppSelector(membersSelector);
  const member = useAppSelector(selectedMember);
  return (
    <div className="row-container centered-items" style={{ marginTop: "20px" }}>
      {/* Tableau des membres */}
      <MembersTable members={members} editmode />
      {/* Si un membre est selectionné, il est affiché via ce composant (modal) */}
      <MemberCard
        member={member}
        editmode
        callback={(modfiedMember) => {
          //TODO: Modification niveau backend
          if (modfiedMember.id !== undefined) {
            //Modification dans le store
            const index = members.findIndex(
              (mmb) => mmb.id === modfiedMember?.id
            );
            const newMembers = [...members];
            newMembers[index] = modfiedMember;
            dispatch(setMembers(newMembers));
          } else {
            //On ajoute le nouveau produit
            const newMembers = [...members, modfiedMember];
            dispatch(setMembers(newMembers));
          }
        }}
      />
    </div>
  );
};

export default AdminMembersPage;
