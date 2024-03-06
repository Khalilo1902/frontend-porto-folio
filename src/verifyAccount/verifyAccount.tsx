import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../feature/store";
import { authApiVerification } from "../feature/slice/authSlice";
import { useParams } from "react-router-dom";
import { NotificationService } from "../services/notificationService";

const VerifyAccount = () => {
    const [message, setMessage] = useState("");
    const dispatch = useDispatch<AppDispatch>();
    const { token } = useParams();

    useEffect(() => {
        const verifyToken = async () => {
            try {
                const response = await dispatch(authApiVerification(token!)).unwrap();
                setMessage(response.message)
                console.log("khalil",response.message)
                NotificationService.success(response.message);


            } catch (error:any) {
                NotificationService.error(error.message)            }
        };

        verifyToken();
    }, [dispatch, token]);
console.log("token",token)
console.log("message",message)
    return (
        <div>
            {
                message ? (
                    <div className="w-full md:w-2/3 h-32 bg-green-500 flex justify-center items-center font-FONT_VIGA font-bold text-3xl rounded-lg">
          {message}
        </div>
                ) : (
                    <div className="h-screen">NotFound</div>
                )
            }
        </div>
    );
};

export default VerifyAccount;
