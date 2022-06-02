import { Box } from "@mui/system";
import MembersTable from "../Components/MemberTable";
import { generateFakeMembers } from "../utils";

const MembersPage = () => (
    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", marginTop: "20px"}}>
        <MembersTable members={generateFakeMembers(100)} />
    </Box>
)

export default MembersPage;