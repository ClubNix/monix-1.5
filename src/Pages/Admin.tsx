import { useSelector } from "react-redux";
import AdminLogin from "../Components/AdminLogin";
import AdminWelcome from "../Components/AdminWelcome";
import { tokenSelector } from "../Model/AdminSlice";

/** Page d'accueil de l'admin Panel, si l'auteur est authentifié, on affiche la page de "welcome", sinon, on donne de quoi s'authentifier  */
const Admin = () => {
  const token = useSelector(tokenSelector);

  return <>{token === "" ? <AdminLogin /> : <AdminWelcome />}</>;
};

export default Admin;
