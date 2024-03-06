import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../feature/store";
import { authApiLogout } from "../../feature/slice/authSlice";
import { NotificationService } from "../../services/notificationService";
import { BsFillMoonStarsFill } from "react-icons/bs";

interface INavProps {
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  darkMode: boolean;
}

const Nav = ({ darkMode, setDarkMode }: INavProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await dispatch(authApiLogout());
      console.log(response);
      NotificationService.success(response.payload.message);
      localStorage.clear();
      /*       Cookies.remove("access_token")
       */ navigate("/");
    } catch (error: any) {
      NotificationService.error(error.message);
    }
  };

  return (
    <div className="py-10 mb-12 flex justify-between dark:text-white">
      <h1 className={`${darkMode ? 'font-burtons text-xl' : 'font-burtons text-gray-300 text-xl'}`}>developedbyed</h1>
      <ul className="flex items-center">
        <li >
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className={`${darkMode ? 'cursor-pointer text-2xl': 'cursor-pointer text-2xl text-white'}`}
          />
        </li>
        <li>
          <NavLink
            to={"#"}
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
          >
            Resume
          </NavLink>
        </li>
        <li className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
          <button  onClick={logout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
