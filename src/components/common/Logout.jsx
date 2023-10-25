import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/AuthenticationService";
import { useNavigate } from "react-router-dom";
const LogoutBtn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <button className="btn btn-lg btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
};
export default LogoutBtn;
