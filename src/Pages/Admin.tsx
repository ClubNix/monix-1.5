import { useSelector } from "react-redux";
import AdminLogin from "../Components/AdminLogin";
import { tokenSelector } from "../Model/AdminSlice";

const Admin = () => {
  const token = useSelector(tokenSelector);

  return <>{token === "" ? <AdminLogin /> : <div>Connected</div>}</>;
};

export default Admin;
