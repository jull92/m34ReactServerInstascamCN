import { Link } from "react-router-dom";
import '../../App.css'
// import{logOut} from "../../utils/index";

export const Navbar = ({ setUser }) => {
  const logOut = () => {
    setUser();
    localStorage.removeItem("myToken");
  };

  return (
    <>
      <Link to="/login">Go back to login</Link>
      <Link to="/settings">Settings</Link>
      <button onClick={logOut}>LogOut</button>
    </>
  );
};