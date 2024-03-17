import Lottie from "lottie-react";
import animationData2 from "../../assets/Animation2.json";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaLock } from "react-icons/fa6";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../feature/store.ts";
import { authApiLogin, setUserInfo } from "../../feature/slice/authSlice.ts";
import { json, useNavigate } from "react-router-dom";
import { NotificationService } from "../../services/notificationService.tsx";


interface ILoginProps {
  showRegister: boolean;
  setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login = ({ showRegister, setShowRegister }: ILoginProps) => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const formSchema = Yup.object({
    email: Yup.string()
      .required("Email address is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
       
      try {
       
        const response = await dispatch(authApiLogin(values)).unwrap();
      
        dispatch(setUserInfo(response.userInfo))
         localStorage.setItem("userInfo",JSON.stringify(response.userInfo))
        NotificationService.success(response.message);

       
        navigate("/home");
      } catch (error: any) {
        return NotificationService.error(error.message);
      }
    },
    validationSchema: formSchema,
  });
  return (
    <div className="flex overflow-hidden lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg">
      <div className="hidden lg:flex w-1/2 bg-[url('/Register-Background.png')]">
        <div className=" flex items-center justify-center px-2 flex-col">
          <h1 className="text-white font-lovers text-7xl">
            Welcom to the site
          </h1>
          <p className="text-white mt-5 font-lovers text-4xl">
            {" "}
            "Mit nur einem Klick können Sie Teil unserer wachsenden Community
            werden!"
          </p>
          <p className="bg-transparent rounded-lg w-full">
            <Lottie animationData={animationData2} />
          </p>
        </div>
      </div>

      <div className=" w-full lg:w-1/2 py-16 px-12 bg-gradient-to-r from-blue-400 to-red-200 ">
        <h1 className="text-5xl font-bold text-white">Login</h1>
        <form
          className="space-y-6 text-white mt-5"
          onSubmit={formik.handleSubmit}
        >
          <div className="relative">
            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-900">
              <HiOutlineMailOpen />
            </div>
            <input
              className="w-full bg-white-light py-2 px-12 rounded-lg focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              type="email"
              placeholder="Write your email "
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="relative">
            <div className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-900">
              <FaLock />
            </div>
            <input
              className="w-full bg-white-light py-2 px-12 rounded-lg focus:bg-black focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"
              type="password"
              placeholder="Write your password "
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <button
            type="submit"
            className="w-1/2 bg-purple-500  font-bold rounded-lg hover:bg-purple-400 hover:text-white-medium py-3"
          >
            Sign In
          </button>
        </form>
        <div className="mt-5">
          <p className="text-white">
            You don't have an account :{" "}
            <a
              className="text-purple-600 underline cursor-pointer"
              onClick={() => setShowRegister(!showRegister)}
            >
              Register
            </a>
          </p>
          <p className="text-white mt-5">
            Reset password{" "}
            <a className="text-purple-600 underline" href="#">
              Reset
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
