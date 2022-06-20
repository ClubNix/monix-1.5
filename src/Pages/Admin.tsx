import { useSelector } from "react-redux";
import AdminLogin from "../Components/AdminLogin";
import AdminWelcome from "../Components/AdminWelcome";
import { tokenSelector } from "../Model/AdminSlice";

const Admin = () => {
  const token = useSelector(tokenSelector);

  return <>{token === "" ? <AdminLogin /> : <AdminWelcome />}</>;
};

export default Admin;
