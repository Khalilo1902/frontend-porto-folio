import {useState} from "react";
import Register from "../components/auth/Register.tsx";
import Login from "../components/auth/Login.tsx";

const AuthPage = () => {
    const [showRegister, setShowRegister] = useState(true);

    return (
        <div className="min-h-screen py-40 bg-gradient-to-r from-purple-400 to-pink-600">
            <div className=" container ">
                {showRegister ? <Register showRegister={showRegister} setShowRegister={setShowRegister}/> :
                    <Login showRegister={showRegister} setShowRegister={setShowRegister}/>}

            </div>
        </div>
    );
};

export default AuthPage;
