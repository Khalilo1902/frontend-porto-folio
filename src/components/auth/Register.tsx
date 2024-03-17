import Lottie from "lottie-react";
import animationData from "../../assets/animation3.json";
import * as Yup from "yup"
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../feature/store.ts";
import {authApiRegister} from "../../feature/slice/authSlice.ts";
import { NotificationService } from "../../services/notificationService.tsx";

interface IRegisterProps {
    showRegister: boolean,
    setShowRegister: React.Dispatch<React.SetStateAction<boolean>>;

}

const Register = ({showRegister, setShowRegister}: IRegisterProps) => {
    const dispatch = useDispatch<AppDispatch>()

    const formSchema = Yup.object({
        firstName: Yup.string().required().matches(/^[A-Za-z]+$/, "Only alphabets are allowed in first name"),
        lastName: Yup.string().required().matches(/^[A-Za-z]+$/, "Only alphabets are allowed in first name"),
        email: Yup.string().required("Email address is required").email("email is not valid"),
        password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
        confirmPassword: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    })

    const formik = useFormik({
        initialValues:{
            firstName:"",
            lastName:"",
            email:"",
            password:"",
            confirmPassword:"",
        },
        onSubmit:async (values)=>{
           try{
            const response = await dispatch(authApiRegister(values)).unwrap()
            NotificationService.success((await response).payload)
            setShowRegister(false)
           }catch(error:any){
            return NotificationService.error(error.message)
           }
        },
        validationSchema: formSchema,
    })

    return (

        <div className="flex items-center justify-center overflow-hidden w-8/12 bg-white rounded-xl mx-auto shadow-lg">
            <div className="hidden lg:flex w-1/2 bg-[url('/Register-Background.png')]">
                <div className=" flex items-center justify-center px-2 flex-col">
                    <h1 className="text-white font-lovers text-7xl">Welcom to the site</h1>
                    <p className="text-white mt-5 font-lovers text-4xl"> "Mit nur einem Klick können Sie Teil
                        unserer
                        wachsenden Community werden!"</p>
                    <p>
                        <Lottie animationData={animationData}/>

                    </p>
                </div>
            </div>
            <div className="  w-full lg:w-1/2 py-16 px-12">
                <h2 className="text-3xl mb-4">Register</h2>
                <p>Create your account. It's free and only take a few second</p>
                <form className="mt-5"
                onSubmit={formik.handleSubmit}
                >
                    <div className="grid grid-cols-2 gap-5 w-full">
                        <input className="border border-gray-400 py-1 px-2 rounded-lg" type="text"
                               placeholder="firstName"
                               name="firstName"
                               value={formik.values.firstName}
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}

                        />
                        <input className="border border-gray-400 py-1 px-2 rounded-lg" type="text"
                               placeholder="lastName"
                               name="lastName"
                               value={formik.values.lastName}
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}

                        />
                    </div>
                    <div className="mt-5">
                        <input className="border border-gray-400 py-1 px-2 w-full rounded-lg" type="text"
                               placeholder="E-mail"
                               name="email"
                               value={formik.values.email}
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}

                        />
                    </div>
                    <div className="mt-5">
                        <input className="border border-gray-400 py-1 px-2 w-full rounded-lg" type="text"
                               placeholder="enter your password"
                               name="password"
                               value={formik.values.password}
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}

                        />
                    </div>
                    <div className="mt-5">
                        <input className="border border-gray-400 py-1 px-2 w-full rounded-lg" type="text"
                               placeholder="confirm your password"
                               name="confirmPassword"
                               value={formik.values.confirmPassword}
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}

                        />
                    </div>

                    <div className="mt-5">
                        <input className="border border-gray-400 rounded-lg" type="checkbox"/>
                        <span> I accept the <a href="#"
                                               className="text-purple-500 font-semibold">Terms of use</a> & <a
                            href="#" className="text-purple-500 font-semibold">privacy policy</a></span>
                    </div>
                    <div className="mt-5">
                        <button
                        type="submit"
                            className="w-full bg-purple-500 rounded-lg hover:bg-purple-400 hover:text-white-medium py-3 text-white text-center">Register
                            Now
                        </button>
                    </div>
                </form>
                <div className="mt-5">
                    <div className="border-b border-b-amber-500 text-center">
                        <span className="bg-white text-2xl font-bold font-ojuju px-3">Or</span>
                    </div>
                </div>
                <div className="mt-5">
                    <p>You have an account : <a className="text-purple-600 underline cursor-pointer"
                                                onClick={() => setShowRegister(!showRegister)}>Sign In</a></p>
                </div>
            </div>
        </div>

    );
};

export default Register;
